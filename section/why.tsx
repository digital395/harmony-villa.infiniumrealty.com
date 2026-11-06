"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Popup from "@/components/popup";
import {
  HiOutlineHomeModern,
  HiOutlineMapPin,
  HiOutlineBuildingOffice2,
  HiOutlineBuildingStorefront,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import { TbRulerMeasure } from "react-icons/tb";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: "A Choice of Homes",
    description:
      "3 & 4 BHK villas, thoughtfully planned for different lifestyle needs.",
    icon: <HiOutlineHomeModern />,
  },
  {
    title: "Well-Connected Location",
    description:
      "Off Avinashi Road, with convenient access to Coimbatore International Airport, Kalapatti IT corridor and key city destinations.",
    icon: <HiOutlineMapPin />,
  },
  {
    title: "A Thoughtfully Planned Community",
    description:
      "90 residences across 3.22 acres, bringing apartments and villas together in one integrated development.",
    icon: <HiOutlineBuildingOffice2 />,
  },
  {
    title: "Spacious Living",
    description: "Villa sizes from 2,420 sq.ft. onwards.",
    icon: <TbRulerMeasure />,
  },
  {
    title: "Everyday Convenience",
    description:
      "Close to reputed schools, colleges, multi-speciality hospitals and major IT destinations.",
    icon: <HiOutlineBuildingStorefront />,
  },
  {
    title: "Gated Community",
    description:
      "A secured residential environment with 24/7 CCTV surveillance and dedicated visitor parking.",
    icon: <HiOutlineShieldCheck />,
  },
];

const easeInOut = [0.42, 0, 0.58, 1] as const;

export default function WhyHarmony() {
  const [activeFeature, setActiveFeature] = useState(1);
  const [isVisitOpen, setIsVisitOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((current) => (current + 1) % features.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-[#e5e5e3]">
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
          lg:items-center

        "
      >
        {/* =========================================================
            FEATURE GRID
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
  order-2
  grid
  w-full
  md:w-[50%]
  grid-cols-2
  gap-4

            lg:mx-0
            lg:grid-cols-3
            lg:gap-5
          "
        >
          {features.map((feature, index) => {
            const isActive = activeFeature === index;

            return (
              <motion.button
                key={feature.title}
                type="button"
                onClick={() => setActiveFeature(index)}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: easeInOut,
                }}
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className={`
                  group
                  flex
                  h-36.75
                  w-full
                  flex-col
                  items-center
                  justify-center
                  rounded-sm
                  border
                  px-2.5
                  text-center
                  transition-all
                  duration-300

                  sm:h-37.5

                  lg:h-41.25

                  ${
                    isActive
                      ? "border-[#2f2f2f] bg-[#2f2f2f] text-white shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
                      : "border-[#cfcfcb] bg-transparent text-[#171717] hover:border-[#7a7a7a] hover:bg-[#f5f5f3]"
                  }
                `}
              >
                {/* ICON */}

             {/* ICON */}
<motion.div
  animate={{
    scale: isActive ? 1.08 : 1,
    y: isActive ? -2 : 0,
  }}
  transition={{
    duration: 0.4,
    ease: easeInOut,
  }}
  className={`
    flex
    h-16
    items-center
    justify-center
    [&>svg]:h-6
    [&>svg]:w-6
    lg:[&>svg]:h-8
    lg:[&>svg]:w-8

    ${isActive ? "text-white" : "text-[#3f3f3f]"}
  `}
>
  {feature.icon}
</motion.div>

{/* LABEL */}
<motion.span
  animate={{
    y: isActive ? 1 : 0,
  }}
  transition={{
    duration: 0.35,
    ease: easeInOut,
  }}
  className="
    mt-3
    max-w-30
    text-[14px]
    font-normal
    leading-5

    sm:text-[15px]
    sm:leading-5.5

    lg:max-w-35
    lg:text-[16px]
    lg:leading-6
  "
>
  {feature.title}
</motion.span>

                {/* LABEL */}

             
              </motion.button>
            );
          })}
        </motion.div>

        {/* =========================================================
            RIGHT CONTENT
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
    duration: 0.8,
    delay: 0.15,
    ease: easeInOut,
  }}
  className="
    order-1
    mx-auto
    flex
    w-full
    max-w-150
    flex-col
    items-center
    justify-center
    px-5
    pt-0
    text-center

    sm:px-6

    lg:order-2
    lg:mx-0
    lg:max-w-none
    lg:w-[calc(100%-540px)]
    lg:px-13.75
    lg:pt-0
  "
>
          {/* =======================================================
              WHY HARMONY
          ======================================================== */}

          <motion.div
            animate={{
              opacity: [0.65, 1, 0.65],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: easeInOut,
            }}
            className="w-fit"
          >
            <p
              className="
                m-0
                text-[15px]
                font-bold
                leading-5
                text-[#2f2f2f]

                sm:text-[16px]
                sm:leading-5.25

                lg:text-[18px]
                lg:leading-5.75
              "
            >
              WHY HARMONY
            </p>

            <motion.div
              animate={{
                width: ["120px", "187px", "120px"],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: easeInOut,
              }}
              className="
                mx-auto
                mt-2.25
                h-px
                bg-[#2f2f2f]
              "
            />
          </motion.div>

          {/* =======================================================
              HEADING
          ======================================================== */}

          <motion.h2
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
  }}
  transition={{
    duration: 0.75,
    delay: 0.3,
    ease: easeInOut,
  }}
  className="
    mx-auto
    m-0
    mt-3
    w-full
    max-w-82.5
    text-[21px]
    font-bold
    leading-7.25
    tracking-[-0.4px]
    text-[#171717]

    sm:max-w-137.5
    sm:text-[23px]
    sm:leading-7.75

    lg:max-w-147.5
    lg:text-[28px]
    lg:leading-9.5
  "
>
  A symphony of space, comfort and community
</motion.h2>

          {/* =======================================================
              ACTIVE FEATURE DESCRIPTION
          ======================================================== */}
<motion.div
  key={activeFeature}
  initial={{
    opacity: 0,
    y: 12,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.45,
    ease: easeInOut,
  }}
  className="
    mx-auto
    mt-5
    min-h-12
    w-full
    text-center
    text-[14px]
    font-normal
    leading-5
    text-[#5f5f5f]
    lg:mt-5.5
    lg:max-w-137.5
    lg:text-[15px]
    lg:leading-6
  "
>
  {features[activeFeature].description}
</motion.div>

          {/* =======================================================
              CTA
          ======================================================== */}

      <motion.button
  type="button"
  onClick={() => setIsVisitOpen(true)}
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
    mx-auto
    mt-5.5
    flex
    h-12.25
    mb-10
    md:mb-0
    items-center
    justify-center
    rounded-[7px]
    bg-[#2f2f2f]
    px-3
    text-[14px]
    font-semibold
    leading-none
    text-white
    transition-colors
    duration-200
    hover:bg-[#171717]
    lg:mt-9.5
    lg:h-10.75
    lg:px-5
    lg:text-[14px]
  "
>
  BOOK A SITE VISIT
</motion.button>
        </motion.div>
      </div>

      {/* =========================================================
          VISIT POPUP
      ========================================================== */}

      <Popup
        isOpen={isVisitOpen}
        onClose={() => setIsVisitOpen(false)}
        title="Schedule a Visit"
        download={false}
      />
    </section>
  );
}