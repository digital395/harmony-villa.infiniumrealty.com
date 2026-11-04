import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

 const {
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
          message: "Please accept the privacy policy.",
        },
        { status: 400 }
      );
    }

    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(phone)) {
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

    console.log("Incoming Lead:", body);

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

    const tokenResponse = await fetch(
      SALESFORCE_TOKEN_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: SALESFORCE_CLIENT_ID,
          client_secret: SALESFORCE_CLIENT_SECRET,
        }),
      }
    );

    const tokenData = await tokenResponse.json();

    console.log("TOKEN RESPONSE:", tokenData);

    if (!tokenResponse.ok) {
  const tokenError = await tokenResponse.json();

  console.error("OAuth token failed:", tokenError);

  return Response.json(
    {
      success: false,
      message: "Unable to authenticate with lead service",
    },
    { status: 502 }
  );
}

    const accessToken = tokenData.access_token;

    const names = name.trim().split(" ");

    const payload = {
      FirstName: names[0] || "Website",
      LastName: names.slice(1).join(" ") || "User",
      Phone: phone,
      Email: email,
      Project__c: "Infinium Harmony Villa",
      Message: "Harmony Villa Lead",
      LeadSource: "Google",
      Sub_Source__c: "Google Form",     
    };

    console.log("PAYLOAD:", payload);

    const leadResponse = await fetch(
      SALESFORCE_LEAD_URL,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const leadData = await leadResponse.json();

    console.log("SALESFORCE RESPONSE:", leadData);

    const sheetResponse = await fetch(process.env.GOOGLE_SHEET_WEBHOOK!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        budget,
        formType: source,
        project_name: "Infinium Harmony Villa",
      }),
    });

    const sheetData = await sheetResponse.json();

    console.log("Google Sheet Response:", sheetData);

    if (!sheetResponse.ok || !sheetData.success) {
      throw new Error("Failed to save lead to Google Sheet.");
    }

    console.log({
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