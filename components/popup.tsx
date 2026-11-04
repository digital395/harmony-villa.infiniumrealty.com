"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import EnquiryForm from "./enquiry";

type EnquiryPopupProps = {
  title: string;
  download: boolean;
  isOpen: boolean;
  onClose: () => void;
};

export default function EnquiryPopup({
  title,
  download,
  isOpen,
  onClose,
}: EnquiryPopupProps) {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="
        fixed
        inset-0
        z-9999
        flex
        items-center
        justify-center
        bg-black/55
        px-4
        py-5
        backdrop-blur-xs
        sm:px-6
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.45,
          ease: "easeInOut",
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-popup-title"
        className="
          relative
          flex
          max-h-[92vh]
          w-full
          max-w-145
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-[#d4d4d4]
          bg-white
          shadow-[0_25px_80px_rgba(0,0,0,0.22)]
        "
      >
        {/* Charcoal top accent */}
        <div className="h-1.25 w-full bg-linear-to-r from-[#222222] via-[#666666] to-[#222222]" />

        <div className="relative border-b border-[#e0e0e0] px-6 pb-6 pt-8 text-center sm:px-8 sm:pb-7 sm:pt-9">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close enquiry form"
            className="
              absolute
              right-5
              top-5
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-[#eeeeee]
              text-[22px]
              font-light
              leading-none
              text-[#333333]
              transition-all
              duration-200
              hover:bg-[#dcdcdc]
              hover:rotate-90
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#666666]
              focus-visible:ring-offset-2
              focus-visible:ring-offset-white
            "
          >
            <span className="-mt-0.5">×</span>
          </button>

          <div className="mx-auto max-w-122.5 px-4">
            <motion.h2
              id="enquiry-popup-title"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.2,
                ease: "easeInOut",
              }}
              className="
                text-[24px]
                font-semibold
                leading-[1.2]
                tracking-[-0.02em]
                text-[#333333]
                sm:text-[28px]
              "
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.3,
                ease: "easeInOut",
              }}
              className="
                mx-auto
                mt-3
                max-w-117.5
                text-[14px]
                leading-5.5
                text-[#666666]
                sm:text-[15px]
                sm:leading-5.75
              "
            >
              Share a few details with us and our team will get in touch with
              you shortly to help you with pricing, availability, and site
              visit details.
            </motion.p>
          </div>
        </div>

        <div className="min-h-0 overflow-y-auto px-6 py-6 sm:px-8 sm:py-7">
          <EnquiryForm
            title={title}
            download={download}
            onSuccess={onClose}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
