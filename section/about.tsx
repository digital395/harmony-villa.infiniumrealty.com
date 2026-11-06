"use client";

import Popup from "@/components/popup";
import { isLeadValid } from "@/utils/LeadVerification";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const easeInOut = [0.42, 0, 0.58, 1] as const;

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const numericValue = parseFloat(value);
  const suffix = value.replace(/[0-9.]/g, "");

  const count = useMotionValue(0);

  const displayValue = useTransform(count, (latest) => {
    if (value.includes(".")) {
      return `${latest.toFixed(2)}${suffix}`;
    }

    return `${Math.round(latest)}${suffix}`;
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, numericValue, {
      duration: 1.8,
      ease: easeInOut,
    });

    return controls.stop;
  }, [isInView, numericValue, count]);

  return (
    <motion.div
      ref={ref}
      className="
        text-[29px]
        font-bold
        leading-8
        tracking-[-0.5px]
        text-[#333333]
        sm:text-[40px]
        sm:leading-8.25
      "
      whileHover={{ scale: 1.05 }}
      transition={{
        duration: 0.3,
        ease: easeInOut,
      }}
    >
      {displayValue}
    </motion.div>
  );
}

const stats = [
  {
    value: "30+",
    label: "Lifestyle amenities",
  },
  {
    value: "90",
    label: "Exclusive residences",
  },
  {
    value: "3.22",
    label: "Acres of community",
  },
  {
    value: "35",
    label: "Villas",
  },
];

export default function AboutHarmony() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleBrochureClick = () => {
    if (isLeadValid()) {
      const link = document.createElement("a");

      link.href = "/brochure.pdf";
      link.download = "Harmony-Brochure.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      return;
    }

    setIsPopupOpen(true);
  };

  return (
    <>
<section id="about" className="w-full bg-white">
  <div
    className="
      mx-auto
      flex
      w-full
      justify-center
      px-5
      py-8
      lg:px-12
      lg:py-10
    "
  >
    <motion.div
      className="
        flex
        w-full
        max-w-5xl
        flex-col
        items-center
        text-center
      "
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
        ease: easeInOut,
      }}
    >
      {/* ================= TITLE ================= */}
      <motion.p
        className="
          m-0
          text-[13px]
          font-semibold
          uppercase
          leading-5
          tracking-[0.08em]
          text-[#333333]
          sm:text-[18px]
          sm:normal-case
          sm:tracking-[-0.01em]
        "
        initial={{
          opacity: 0,
          y: 10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
          ease: easeInOut,
        }}
      >
        About Infinium Harmony Coimbatore
      </motion.p>

      {/* ================= DIVIDER ================= */}
      <motion.div
        className="
          mt-3
          h-px
          bg-[#666666]
        "
        initial={{
          width: 0,
        }}
        whileInView={{
          width: 44,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: 0.15,
          ease: easeInOut,
        }}
      />

      {/* ================= DESCRIPTION ================= */}
<motion.div
  className="
    mx-auto
    mt-6
    w-full
    max-w-4xl
    px-1
    text-justify
    text-[14px]
    font-normal
    leading-[1.7]
    text-[#222222]
    sm:mt-7
    sm:px-0
    sm:text-center
    sm:text-[16px]
    sm:leading-[1.8]
    lg:text-[19px]
    lg:leading-[1.85]
  "
  initial={{
    opacity: 0,
    y: 20,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.3,
  }}
  transition={{
    duration: 0.7,
    delay: 0.2,
    ease: easeInOut,
  }}
>
  <p className="m-0">
    Discover an elevated lifestyle at Infinium Harmony, a thoughtfully
    planned residential villa development in Coimbatore. Designed for
    those who value privacy, comfort and independent living, the project
    offers beautifully planned villas that bring together spacious
    interiors, contemporary architecture and a peaceful residential
    environment.
  </p>
</motion.div>

      {/* ================= BOOKING MESSAGE ================= */}
      <motion.div
        className="
          mx-auto
          mt-8
          max-w-2xl
          sm:mt-10
        "
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          ease: easeInOut,
        }}
      >
        <p
          className="
            m-0
            text-center
            text-[14px]
            font-bold
            leading-[1.6]
            text-[#222222]
            sm:text-[19px]
            sm:leading-[1.65]
            lg:text-[20px]
          "
        >
          Bookings are now open! Explore a home where comfort,
          convenience and harmonious living come together.
        </p>
      </motion.div>

      {/* ================= CTA ================= */}
      {/* <motion.button
        type="button"
        onClick={handleBrochureClick}
        className="
          mt-7
          flex
          h-10
          items-center
          justify-center
          rounded-[5px]
          bg-[#333333]
          px-5
          text-[12px]
          font-semibold
          leading-none
          tracking-[0.08em]
          text-white
          shadow-[0_4px_14px_rgba(0,0,0,0.08)]
          transition-all
          duration-300
          focus:outline-none
          focus:ring-2
          focus:ring-[#666666]
          focus:ring-offset-2
          focus:ring-offset-white
          sm:mt-8
          sm:h-12
          sm:px-7
          sm:text-[14px]
          lg:h-13
        "
        initial={{
          opacity: 0,
          y: 15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: easeInOut,
        }}
        whileHover={{
          scale: 1.035,
          backgroundColor: "#222222",
          boxShadow: "0 8px 22px rgba(0,0,0,0.12)",
        }}
        whileTap={{
          scale: 0.97,
        }}
      >
        DOWNLOAD BROCHURE
      </motion.button> */}
    </motion.div>
  </div>
</section>

      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title="Download Brochure"
        download={true}
      />
    </>
  );
}