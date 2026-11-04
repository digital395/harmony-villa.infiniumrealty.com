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
          max-w-7xl
          flex-col
          px-4.25
          py-11.5

          sm:px-10
          sm:py-13.75

          lg:flex-row
          lg:items-center
          lg:px-7.5
          lg:py-21.25
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
            grid
            w-full
            grid-cols-2
            gap-4

            sm:mx-auto
            sm:max-w-125
            sm:gap-5

            lg:mx-0
            lg:w-135
            lg:max-w-none
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
                    h-10
                    items-center
                    justify-center

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
                    mt-2
                    max-w-26.25
                    text-[12px]
                    font-normal
                    leading-4.25

                    sm:text-[13px]
                    sm:leading-4.5

                    lg:max-w-32.5
                    lg:text-[14px]
                    lg:leading-4.75
                  "
                >
                  {feature.title}
                </motion.span>
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
            flex
            w-full
            flex-col
            items-center
            justify-center
            px-2.5
            pt-12.5
            text-center

            sm:pt-13.75

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
              m-0
              mt-3
              max-w-137.5
              text-[21px]
              font-bold
              leading-7.25
              tracking-[-0.4px]
              text-[#171717]

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
              mt-5
              min-h-12
              max-w-125
              text-[13px]
              font-normal
              leading-5
              text-[#5f5f5f]

              sm:text-[14px]
              sm:leading-5.5

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
              mt-10.5
              flex
              h-9.25
              items-center
              justify-center
              rounded-[7px]
              bg-[#2f2f2f]
              px-3
              text-[10px]
              font-semibold
              leading-none
              text-white
              transition-colors
              duration-200
              hover:bg-[#171717]
              focus:outline-none
              focus:ring-2
              focus:ring-[#2f2f2f]
              focus:ring-offset-2
              focus:ring-offset-[#e5e5e3]

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