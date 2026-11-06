"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { saveLeadVerification } from "@/utils/LeadVerification";

type Configuration =
  | "3 BHK Row Villa"
  | "3 BHK Individual Villa"
  | "4 BHK Individual Villa"
  | "";

type Budget =
  | "Up to ₹1.5 Cr"
  | "₹1.5 – 3 Cr"
  | "₹3 – 4.5 Cr"
  | "Above ₹4.5 Cr"
  | "";
type PurchaseTimeline =
  | "Within 1 month"
  | "1 – 3 months"
  | "3 – 6 months"
  | "Just exploring"
  | "";

type HomePurpose =
  | "Self-use"
  | "Investment"
  | "";
type EnquiryFormProps = {
  title: string;
  download: boolean;
  onSuccess?: () => void;
};

type FormData = {
  name: string;
  phone: string;
  email: string;
};

type Errors = {
  name: string;
  phone: string;
  email: string;
};

export default function EnquiryForm({
  title,
  download,
  onSuccess,
}: EnquiryFormProps) {
  const router = useRouter();

  const [step, setStep] = useState<1 | 2>(1);
const [configuration, setConfiguration] =
  useState<Configuration>("");

const [budget, setBudget] = useState<Budget>("");
const [purchaseTimeline, setPurchaseTimeline] =
  useState<PurchaseTimeline>("");

const [homePurpose, setHomePurpose] =
  useState<HomePurpose>("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState<Errors>({
    name: "",
    phone: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

const isNameValid =
  formData.name.trim().length >= 2 &&
  /^[A-Za-z\s.'-]+$/.test(formData.name.trim());

const isPhoneValid = /^\d{10}$/.test(formData.phone);

const isEmailValid =
  formData.email.trim() === "" ||
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());

const canSubmit =
  isNameValid &&
  isPhoneValid &&
  isEmailValid &&
  !!purchaseTimeline &&
  !!homePurpose &&
  !isSubmitting;

  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const cleanedValue = value.replace(/[^A-Za-z\s]/g, "");

    setFormData((previous) => ({
      ...previous,
      name: cleanedValue,
    }));

    setErrors((previous) => ({
      ...previous,
      name: "",
    }));
  };

  const handlePhoneChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const cleanedValue = value.replace(/\D/g, "").slice(0, 10);

    setFormData((previous) => ({
      ...previous,
      phone: cleanedValue,
    }));

    setErrors((previous) => ({
      ...previous,
      phone: "",
    }));
  };

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    setFormData((previous) => ({
      ...previous,
      email: value,
    }));

    setErrors((previous) => ({
      ...previous,
      email: "",
    }));
  };

 const handleContinue = () => {
  if (!configuration || !budget) return;
  setStep(2);
};

  const validateForm = () => {
    const newErrors: Errors = {
      name: "",
      phone: "",
      email: "",
    };

    let valid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
      valid = false;
    } else if (!isNameValid) {
      newErrors.name = "Please enter a valid name.";
      valid = false;
    }

    if (!formData.phone) {
      newErrors.phone = "Please enter your mobile number.";
      valid = false;
    } else if (!isPhoneValid) {
      newErrors.phone = "Enter a valid 10-digit mobile number.";
      valid = false;
    }

    if (
      formData.email.trim() &&
      !isEmailValid
    ) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const leadData = {
          configuration,
        budget,
        homePurpose,
        purchaseTimeline,
        name: formData.name.trim(),
        phone: formData.phone,
        email: formData.email.trim(),
        source: title,
      };

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit enquiry");
      }

      onSuccess?.();

      if (download) {
        const brochureUrl = "/brochure.pdf";

        const link = document.createElement("a");
        link.href = brochureUrl;
        link.download = "my-project-brochure.pdf";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      saveLeadVerification();
      router.push("/thank-you");
    } catch (error) {
      console.error("Lead submission failed:", error);

      setErrors((previous) => ({
        ...previous,
        email: "Something went wrong. Please try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-90">
        <div className="relative flex items-center justify-between">
          <div className="absolute left-7 right-7 top-4.25 h-0.75 rounded-full bg-[#d4d4d4]" />

          <motion.div
            className="absolute left-7 top-4.25 h-0.75 rounded-full bg-[#333333]"
            initial={false}
            animate={{
              width: step === 1 ? "0%" : "calc(100% - 56px)",
            }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <div
              className={`
                flex
                h-8.5
                w-8.5
                items-center
                justify-center
                rounded-full
                text-[12px]
                font-bold
                transition-all
                duration-300
                ${
                  step >= 1
                    ? "bg-[#333333] text-white shadow-[0_5px_15px_rgba(0,0,0,0.18)]"
                    : "border border-[#d4d4d4] bg-white text-[#333333]"
                }
              `}
            >
              1
            </div>

            <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#333333]">
              STEP
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div
              className={`
                flex
                h-8.5
                w-8.5
                items-center
                justify-center
                rounded-full
                text-[12px]
                font-bold
                transition-all
                duration-300
                ${
                  step >= 2
                    ? "bg-[#333333] text-white shadow-[0_5px_15px_rgba(0,0,0,0.18)]"
                    : "border border-[#d4d4d4] bg-white text-[#333333]"
                }
              `}
            >
              2
            </div>

            <span
              className={`
                mt-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.08em]
                ${
                  step >= 2
                    ? "text-[#333333]"
                    : "text-[#777777]"
                }
              `}
            >
              STEP
            </span>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
       {step === 1 && (
  <motion.div
    key="step-one"
    initial={{ opacity: 0, x: -18 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 18 }}
    transition={{
      duration: 0.35,
      ease: "easeInOut",
    }}
    className="mt-7"
  >
    {/* Villa Configuration */}
    <div>
      <h3 className="m-0 text-[18px] font-semibold text-[#333333]">
        Which villa configuration are you looking for?
      </h3>

      <div className="mt-4 flex flex-wrap gap-2.5">
        {(
          [
            "3 BHK Row Villa",
            "3 BHK Individual Villa",
            "4 BHK Individual Villa",
          ] as const
        ).map((item) => {
          const selected = configuration === item;

          return (
            <button
              key={item}
              type="button"
              onClick={() => setConfiguration(item)}
              className={`
                relative
                flex
                min-h-12
                items-center
                justify-center
                rounded-full
                border
                px-4
                text-[13px]
                font-medium
                transition-all
                duration-200
                ${
                  selected
                    ? "border-[#333333] bg-[#333333] text-white shadow-[0_5px_15px_rgba(0,0,0,0.14)]"
                    : "border-[#d4d4d4] bg-white text-[#333333] hover:border-[#666666] hover:bg-[#eeeeee]"
                }
              `}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>

    {/* Budget */}
    <div className="mt-6">
      <h3 className="m-0 text-[18px] font-semibold text-[#333333]">
        Your budget
      </h3>

      <div className="mt-4 flex flex-wrap gap-2.5">
        {(
          [
            "Up to ₹1.5 Cr",
            "₹1.5 – 3 Cr",
            "₹3 – 4.5 Cr",
            "Above ₹4.5 Cr",
          ] as const
        ).map((item) => {
          const selected = budget === item;

          return (
            <button
              key={item}
              type="button"
              onClick={() => setBudget(item)}
              className={`
                relative
                flex
                min-h-12
                items-center
                justify-center
                rounded-full
                border
                px-4
                text-[13px]
                font-medium
                transition-all
                duration-200
                ${
                  selected
                    ? "border-[#333333] bg-[#333333] text-white shadow-[0_5px_15px_rgba(0,0,0,0.14)]"
                    : "border-[#d4d4d4] bg-white text-[#333333] hover:border-[#666666] hover:bg-[#eeeeee]"
                }
              `}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>

    {/* Continue */}
    <div className="mt-6 flex justify-center">
      <motion.button
        type="button"
        disabled={!configuration || !budget}
        onClick={handleContinue}
        whileHover={
          configuration && budget ? { scale: 1.02 } : {}
        }
        whileTap={
          configuration && budget ? { scale: 0.98 } : {}
        }
        className="
          flex
          h-11.5
          w-full
          items-center
          justify-center
          rounded-[10px]
          bg-[#333333]
          px-7
          text-[11px]
          font-bold
          tracking-[0.08em]
          text-white
          shadow-[0_6px_18px_rgba(0,0,0,0.16)]
          transition-all
          duration-200
          hover:bg-[#222222]
          disabled:cursor-not-allowed
          disabled:bg-[#d4d4d4]
          disabled:text-[#777777]
          disabled:shadow-none
        "
      >
        CONTINUE
      </motion.button>
    </div>
  </motion.div>
)}

{step === 2 && (
  <motion.div
    key="step-two"
    initial={{ opacity: 0, x: 18 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -18 }}
    transition={{
      duration: 0.35,
      ease: "easeInOut",
    }}
    className="mt-8"
  >
    <div className="mx-auto w-full">
      <div className="text-center">
        <h3 className="m-0 text-[18px] font-semibold text-[#333333]">
          Tell us about yourself
        </h3>

        <p className="mt-2 text-[13px] leading-5 text-[#666666]">
          Enter your details and our team will get in touch with you.
        </p>
      </div>

      {/* Purchase Timeline */}
      <div className="mt-6">
        <h4 className="m-0 text-[18px] font-semibold text-[#333333]">
          When are you planning to buy?
        </h4>

        <div className="mt-3 flex flex-wrap gap-2.5">
          {(
            [
              "Within 1 month",
              "1 – 3 months",
              "3 – 6 months",
              "Just exploring",
            ] as const
          ).map((item) => {
            const selected = purchaseTimeline === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setPurchaseTimeline(item)}
                className={`
                  flex
                  min-h-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  px-5
                  text-[13px]
                  font-medium
                  transition-all
                  duration-200
                  ${
                    selected
                      ? "border-[#333333] bg-[#333333] text-white shadow-[0_5px_15px_rgba(0,0,0,0.14)]"
                      : "border-[#d4d4d4] bg-white text-[#333333] hover:border-[#666666] hover:bg-[#eeeeee]"
                  }
                `}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      {/* Home Purpose */}
      <div className="mt-6">
        <h4 className="m-0 text-[18px] font-semibold text-[#333333]">
          This home is for
        </h4>

        <div className="mt-3 flex flex-wrap gap-2.5">
          {(["Self-use", "Investment"] as const).map((item) => {
            const selected = homePurpose === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setHomePurpose(item)}
                className={`
                  flex
                  min-h-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  px-5
                  text-[13px]
                  font-medium
                  transition-all
                  duration-200
                  ${
                    selected
                      ? "border-[#333333] bg-[#333333] text-white shadow-[0_5px_15px_rgba(0,0,0,0.14)]"
                      : "border-[#d4d4d4] bg-white text-[#333333] hover:border-[#666666] hover:bg-[#eeeeee]"
                  }
                `}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      {/* Name / Phone / Email */}
      <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">

        {/* Full Name */}
        <div>
          <label
            htmlFor="enquiry-name"
            className="mb-1.5 block text-left text-[18px] font-semibold text-[#444444]"
          >
            Full Name
          </label>

          <input
            id="enquiry-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleNameChange}
            placeholder="Enter your full name"
            autoComplete="name"
            className={`
              h-12
              w-full
              rounded-[10px]
              border
              bg-[#fafafa]
              px-4
              text-[13px]
              text-[#333333]
              outline-none
              transition-all
              placeholder:text-[#999999]
              focus:bg-white
              focus:ring-2
              focus:ring-[#666666]/10
              ${
                errors.name
                  ? "border-red-400"
                  : "border-[#d4d4d4] focus:border-[#666666]"
              }
            `}
          />

          {errors.name && (
            <p className="mt-1 text-left text-[11px] text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label
            htmlFor="enquiry-phone"
            className="mb-1.5 block text-left text-[18px] font-semibold text-[#444444]"
          >
            Mobile Number
          </label>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[13px] font-medium text-[#666666]">
              +91
            </span>

            <input
              id="enquiry-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="10-digit mobile number"
              autoComplete="tel"
              inputMode="numeric"
              maxLength={10}
              className={`
                h-12
                w-full
                rounded-[10px]
                border
                bg-[#fafafa]
                pl-12.5
                pr-4
                text-[13px]
                text-[#333333]
                outline-none
                transition-all
                placeholder:text-[#999999]
                focus:bg-white
                focus:ring-2
                focus:ring-[#666666]/10
                ${
                  errors.phone
                    ? "border-red-400"
                    : "border-[#d4d4d4] focus:border-[#666666]"
                }
              `}
            />
          </div>

          {errors.phone && (
            <p className="mt-1 text-left text-[11px] text-red-500">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="sm:col-span-2">
          <label
            htmlFor="enquiry-email"
            className="mb-1.5 block text-left text-[18px] font-semibold text-[#444444]"
          >
            Email Address
            <span className="ml-1 font-normal text-[#999999]">
              (Optional)
            </span>
          </label>

          <input
            id="enquiry-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleEmailChange}
            placeholder="Enter your email address"
            autoComplete="email"
            className={`
              h-12
              w-full
              rounded-[10px]
              border
              bg-[#fafafa]
              px-4
              text-[13px]
              text-[#333333]
              outline-none
              transition-all
              placeholder:text-[#999999]
              focus:bg-white
              focus:ring-2
              focus:ring-[#666666]/10
              ${
                errors.email
                  ? "border-red-400"
                  : "border-[#d4d4d4] focus:border-[#666666]"
              }
            `}
          />

          {errors.email && (
            <p className="mt-1 text-left text-[11px] text-red-500">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-7 flex justify-center gap-3">
        <button
          type="button"
          disabled={isSubmitting}
          onClick={() => setStep(1)}
          className="
            flex
            h-11.5
            min-w-25
            items-center
            justify-center
            rounded-[10px]
            border
            border-[#333333]
            bg-white
            px-5
            text-[11px]
            font-bold
            tracking-[0.08em]
            text-[#333333]
            transition-all
            duration-200
            hover:bg-[#eeeeee]
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          BACK
        </button>

        <motion.button
          type="button"
          disabled={!canSubmit}
          onClick={handleSubmit}
          whileHover={canSubmit ? { scale: 1.02 } : {}}
          whileTap={canSubmit ? { scale: 0.98 } : {}}
          className="
            flex
            h-11.5
            min-w-37.5
            items-center
            justify-center
            rounded-[10px]
            bg-[#333333]
            px-6
            text-[11px]
            font-bold
            tracking-[0.08em]
            text-white
            shadow-[0_6px_18px_rgba(0,0,0,0.16)]
            transition-all
            duration-200
            hover:bg-[#222222]
            disabled:cursor-not-allowed
            disabled:bg-[#d4d4d4]
            disabled:text-[#777777]
            disabled:shadow-none
          "
        >
          {isSubmitting
            ? "SUBMITTING..."
            : download
              ? "SUBMIT & DOWNLOAD"
              : "SUBMIT"}
        </motion.button>
      </div>
    </div>
  </motion.div>
)}
      </AnimatePresence>
    </div>
  );
}
