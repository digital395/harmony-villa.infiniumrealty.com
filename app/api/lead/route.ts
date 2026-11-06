import { NextResponse } from "next/server";

async function parseResponse(response: Response, label: string) {
  const text = await response.text();

  console.log(`${label} status:`, response.status);
  console.log(`${label} content-type:`, response.headers.get("content-type"));
  console.log(`${label} response:`, text);

  if (!text) {
    return null;
  }

  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    try {
      return JSON.parse(text);
    } catch (error) {
      console.error(`${label} JSON parse failed:`, error);
      return text;
    }
  }

  return text;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
       purchaseTimeline,
  homePurpose,
        configuration,
      budget,
      name,
      phone,
      email,
      source,
    } = body;

    if (!name?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Name is required.",
        },
        { status: 400 }
      );
    }

    if (!phone?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone number is required.",
        },
        { status: 400 }
      );
    }

    if (!budget) {
      return NextResponse.json(
        {
          success: false,
          message: "Please select a budget.",
        },
        { status: 400 }
      );
    }

    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(phone.trim())) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid 10-digit phone number.",
        },
        { status: 400 }
      );
    }

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email?.trim() && !emailRegex.test(email.trim())) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    console.log("Incoming Lead:", {
      name,
      phone,
      email,
      budget,
      source,
    });

    const {
      SALESFORCE_TOKEN_URL,
      SALESFORCE_CLIENT_ID,
      SALESFORCE_CLIENT_SECRET,
      SALESFORCE_LEAD_URL,
      GOOGLE_SHEET_WEBHOOK,
    } = process.env;

    if (
      !SALESFORCE_TOKEN_URL ||
      !SALESFORCE_CLIENT_ID ||
      !SALESFORCE_CLIENT_SECRET ||
      !SALESFORCE_LEAD_URL ||
      !GOOGLE_SHEET_WEBHOOK
    ) {
      throw new Error("Missing required environment variables.");
    }

    // --------------------------------------------------
    // 1. SALESFORCE AUTH
    // --------------------------------------------------

    const tokenResponse = await fetch(SALESFORCE_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: SALESFORCE_CLIENT_ID,
        client_secret: SALESFORCE_CLIENT_SECRET,
      }),
    });

const tokenData = await parseResponse(
  tokenResponse,
  "Salesforce OAuth"
);
    if (!tokenResponse.ok) {
      console.error("Salesforce OAuth failed:", {
        status: tokenResponse.status,
        response: tokenData,
      });

      return NextResponse.json(
        {
          success: false,
          message: "Unable to authenticate with lead service.",
        },
        { status: 502 }
      );
    }

    if (
      !tokenData ||
      typeof tokenData !== "object" ||
      !("access_token" in tokenData)
    ) {
      console.error("Invalid Salesforce token response:", tokenData);

      return NextResponse.json(
        {
          success: false,
          message: "Invalid response from lead service.",
        },
        { status: 502 }
      );
    }

    const accessToken = tokenData.access_token;

    // --------------------------------------------------
    // 2. CREATE SALESFORCE LEAD
    // --------------------------------------------------

    const names = name.trim().split(/\s+/);

    const payload = {
      FirstName: names[0] || "Website",
      LastName: names.slice(1).join(" ") || "User",
      Phone: phone.trim(),
      Email: email?.trim() || undefined,
      Project__c: "Infinium Harmony Villa",
  Message: [
    `Configuration: ${configuration}`,
    `Budget: ${budget}`,
    `Planning to buy: ${purchaseTimeline}`,
    `Home is for: ${homePurpose}`,
  ].join("\n"),    
    LeadSource: "Google",
      Sub_Source__c: "Google Form",
    };

    console.log("Salesforce lead payload:", payload);

    const leadResponse = await fetch(SALESFORCE_LEAD_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

const leadData = await parseResponse(
  leadResponse,
  "Salesforce Lead"
);
    console.log("Salesforce status:", leadResponse.status);
    console.log("Salesforce response:", leadData);

    if (!leadResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to create lead in Salesforce.",
        },
        { status: 502 }
      );
    }

    // --------------------------------------------------
    // 3. GOOGLE SHEET
    // --------------------------------------------------

    const sheetResponse = await fetch(GOOGLE_SHEET_WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name.trim(),
        phone: phone.trim(),
        email: email?.trim() || "",
        budget,
        configuration,
         purchaseTimeline,
  homePurpose,
        formType: source || "Enquiry form",
        project_name: "Infinium Harmony Villa",
      }),
    });

const sheetData = await parseResponse(
  sheetResponse,
  "Google Sheet"
);
    console.log("Google Sheet status:", sheetResponse.status);
    console.log("Google Sheet response:", sheetData);

    if (!sheetResponse.ok) {
      console.error("Google Sheet webhook failed:", {
        status: sheetResponse.status,
        response: sheetData,
      });

      throw new Error("Google Sheet webhook returned an error.");
    }

    // If your webhook promises JSON, validate it.
    // If it sometimes returns plain text, this won't incorrectly
    // crash the entire enquiry.
    if (
      typeof sheetData === "object" &&
      sheetData !== null &&
      "success" in sheetData &&
      sheetData.success === false
    ) {
      throw new Error("Google Sheet rejected the lead.");
    }

    // --------------------------------------------------
    // 4. SUCCESS
    // --------------------------------------------------

    console.log("Lead processed successfully:", {
      name,
      phone,
      email,
      source,
      budget,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}