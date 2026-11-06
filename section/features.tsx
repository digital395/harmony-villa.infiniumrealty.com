"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Popup from "@/components/popup";
import { isLeadValid } from "@/utils/LeadVerification";

const features = [
  "Spacious 3 & 4 BHK villas designed with generous living spaces, from 2,420 sq.ft. onwards",
  "Ground + 1 floor villas with a private open terrace for relaxed outdoor living",
  "Dedicated Open Space 1,345.12 sq.m. OSR",
  "Premium vitrified flooring in living, dining, bedrooms and kitchen, with wood-finish tiles in the outdoor deck",
  "Open kitchen with provisions for hob, chimney, oven, refrigerator, mixer/grinder and dishwasher",
  "Premium bathroom fittings, digital main door lock, UPVC windows & French doors, solar water heater and power backup provision",
];

const easeInOut = [0.42, 0, 0.58, 1] as const;

export default function HarmonyVillaFeatures() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  const handleBrochureClick = () => {
    if (isLeadValid()) {
      // Lead is already verified within the last 24 hours.
      // Download brochure directly.
      window.open("/brochure/harmony-brochure.pdf", "_blank");
      return;
    }

    // Lead is not verified, so show the popup.
    setIsBrochureOpen(true);
  };

  return (
    <section className="w-full overflow-hidden bg-[#ffffff]">
      <div
        className="
          mx-auto
          flex
          w-full
          flex-col
               px-5
      py-8
      lg:px-12
      lg:py-10

          lg:flex-row
lg:items-stretch
          lg:gap-18
        "
      >
        {/* =========================================================
            LEFT CONTENT
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: easeInOut,
          }}
          className="
            flex
            w-full
            flex-col

            lg:w-[46%]
            lg:shrink-0
            lg:pt-1

            xl:w-[45%]
          "
        >
          {/* TITLE */}

<motion.div
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
    ease: easeInOut,
  }}
  className="
    flex
    w-full
    flex-col
    items-center
    text-center
  "
>
  <div
    className="
      inline-flex
      w-fit
      flex-col
      items-center
    "
  >
    <h2
      className="
        m-0
        w-fit
        text-[16px]
        font-bold
        leading-5.25
        text-[#333333]

        sm:text-[17px]
        sm:leading-5.5

        lg:text-[21px]
        lg:leading-6.75

        xl:text-[22px]
        xl:leading-7
      "
    >
      What you get in a Harmony villa
    </h2>

    <motion.div
      initial={{
        scaleX: 0,
      }}
      whileInView={{
        scaleX: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
        delay: 0.15,
        ease: easeInOut,
      }}
      className="
        mt-2
        h-px
        w-full
        origin-center
        bg-[#666666]
      "
    />
  </div>
</motion.div>

          {/* FEATURE LIST */}

<motion.ul
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: true,
    amount: 0.15,
  }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  }}
  className="
    m-0
    mt-2.5
    w-full
    list-none
    p-0

    lg:mt-5.5
  "
>
  {features.map((feature, index) => (
<motion.li
  key={feature}
  variants={{
    hidden: {
      opacity: 0,
      x: -18,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  }}
  transition={{
    duration: 0.55,
    ease: easeInOut,
  }}
  className={`
    relative
    pl-7
    text-[15px]
    font-medium
    leading-6.5
    text-[#222222]

    sm:text-[16px]
    sm:leading-6.75

    lg:pl-8
    lg:text-[17px]
    lg:leading-7

    xl:text-[18px]
    xl:leading-7.25

    ${index === 0 ? "mt-0" : "mt-5 sm:mt-5.5 lg:mt-5"}
  `}
>
  <motion.span
    aria-hidden="true"
    initial={{
      scale: 0,
      opacity: 0,
    }}
    whileInView={{
      scale: 1,
      opacity: 1,
    }}
    viewport={{
      once: true,
    }}
    transition={{
      duration: 0.35,
      delay: 0.2 + index * 0.12,
      ease: easeInOut,
    }}
    className="
      absolute
      left-1
      top-2
      h-2
      w-3.5
      -rotate-45
      border-b-2
      border-l-2
      border-[#555555]

      lg:left-1.5
      lg:top-2.25
      lg:h-2.25
      lg:w-3.75
    "
  />

  {feature}
</motion.li>
  ))}
</motion.ul>

          {/* DOWNLOAD BUTTON */}

          <motion.button
            type="button"
            onClick={handleBrochureClick}
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.45,
              ease: easeInOut,
            }}
            className="
              mt-7.75
              flex
              h-9.25
              w-fit
              items-center
              justify-center
              self-center
              rounded-[7px]
              bg-[#333333]
              px-3
              text-[10px]
              font-semibold
              leading-none
              text-white
              transition-colors
              duration-200
              hover:bg-[#1f1f1f]
              focus:outline-none
              focus:ring-2
              focus:ring-[#555555]
              focus:ring-offset-2
              focus:ring-offset-[#e5e5e5]

              lg:mt-9
              lg:h-10.5
              lg:px-4.5
              lg:text-[14px]
            "
          >
            DOWNLOAD BROCHURE
          </motion.button>
        </motion.div>

        {/* =========================================================
            RIGHT IMAGE
        ========================================================== */}

<motion.div
  initial={{
    opacity: 0,
    x: 35,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{
    once: true,
    amount: 0.2,
  }}
  transition={{
    duration: 0.85,
    delay: 0.15,
    ease: easeInOut,
  }}
  className="
    mt-10.5
    flex
    w-full
    flex-col
    justify-center

    lg:mt-0
    lg:w-[54%]
    lg:pt-0

    xl:w-[55%]
  "
>
  {/* IMAGE */}

<motion.div
  initial={{
    scale: 0.96,
  }}
  whileInView={{
    scale: 1,
  }}
  whileHover={{
    scale: 1.015,
  }}
  viewport={{
    once: true,
    amount: 0.2,
  }}
  transition={{
    duration: 0.9,
    ease: easeInOut,
  }}
  className="
    relative
    h-auto
    min-h-65
    w-full
    overflow-hidden
    rounded-2xl

    lg:h-full
    lg:min-h-0
  "
>
  <Image
    src="/images/feature.webp"
    alt="Harmony villa"
    fill
    sizes="
      (max-width: 639px) 100vw,
      (max-width: 1023px) 100vw,
      54vw
    "
    className="
      object-cover
      object-center
    "
  />
</motion.div>

  {/* DISCLAIMER */}

  <motion.p
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
      duration: 0.55,
      delay: 0.45,
      ease: easeInOut,
    }}
    className="
      m-0
      mt-4.5
      text-[9px]
      font-bold
      uppercase
      leading-3.25
      text-[#333333]

      sm:text-[10px]
      sm:leading-3.5

      lg:mt-5
      lg:text-[10px]
      lg:leading-3.75
    "
  >
    *STARTING PRICES AS ADVERTISED FOR 3 BHK HOMES. UNIT-WISE PRICING
    SHARED ON REQUEST. TERMS APPLY.
  </motion.p>
</motion.div>
      </div>

      {/* =========================================================
          BROCHURE POPUP
      ========================================================== */}

      <Popup
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        title="Download Brochure"
        download={true}
      />
    </section>
  );
}
