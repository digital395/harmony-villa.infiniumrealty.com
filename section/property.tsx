"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Popup from "@/components/popup";
import { isLeadValid } from "@/utils/LeadVerification";

type Property = {
  type: string;
  image: string;
  title: string;
  area: string;
};

const villaProperties: Property[] = [
  {
    type: "Row Villa",
    image: "/images/property/row-villa.webp",
    title: "3 BHK",
    area: "2,420 sq.ft.",
  },
  {
    type: "Individual Villa",
    image: "/images/property/individual-villa-3.webp",
    title: "3 BHK",
    area: "2,774 sq.ft.",
  },
  {
    type: "Individual Villa",
    image: "/images/property/individual-villa-4.webp",
    title: "4 BHK",
    area: "3,831 sq.ft.",
  },
];

const easeInOut = [0.42, 0, 0.58, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeInOut,
    },
  },
};

export default function ChooseYourHome() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePriceClick = () => {
    if (isLeadValid()) {
      window.open(
        "/brochure/harmony-price-floor-plan.pdf",
        "_blank"
      );
      return;
    }

    setIsPopupOpen(true);
  };

  return (
    <section
      className="w-full overflow-hidden bg-[#e5e5e3]"
      id="details"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-350
          px-6
          py-12

          sm:px-10
          sm:py-13.75

          lg:px-15.75
          lg:py-18

          xl:py-20.5
        "
      >
        {/* =========================================================
            HEADER
        ========================================================== */}

        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.75,
            ease: easeInOut,
          }}
          className="
            flex
            flex-col
            items-center
            gap-6
            text-center

            lg:flex-row
            lg:items-start
            lg:justify-between
            lg:text-left
          "
        >
          {/* LEFT */}

          <div
            className="
              flex
              w-full
              flex-col
              items-center

              lg:items-start
            "
          >
            {/* SECTION LABEL */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
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
                ease: easeInOut,
              }}
              className="
                flex
                flex-col
                items-center

                lg:items-start
              "
            >
              <p
                className="
                  m-0
                  text-[10px]
                  font-bold
                  leading-3.25
                  tracking-[0.1px]
                  text-[#2f2f2f]

                  sm:text-[11px]
                  sm:leading-3.5

                  lg:text-[16px]
                  lg:leading-4
                "
              >
                CHOOSE YOUR HOME
              </p>

              {/* Animated underline */}

              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: "163px",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: easeInOut,
                }}
                className="
                  mt-1.75
                  h-px
                  bg-[#2f2f2f]

                  lg:h-0.5
                  lg:w-47.5
                "
              />
            </motion.div>

            {/* HEADING */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 12,
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
                delay: 0.12,
                ease: easeInOut,
              }}
              className="
                m-0
                mt-2.25
                text-[18px]
                font-bold
                leading-6
                text-[#171717]

                sm:text-[20px]
                sm:leading-6.5

                lg:text-[27px]
                lg:leading-8.5

                xl:text-[30px]
                xl:leading-9.5
              "
            >
              Two ways to live in tune
            </motion.h2>

            {/* DESCRIPTION */}

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
                delay: 0.2,
                ease: easeInOut,
              }}
              className="
                m-0
                mt-1.75
                text-[15px]
                font-normal
                leading-5.25
                text-[#3f3f3f]

                sm:text-[16px]
                sm:leading-5.5

                lg:text-[18px]
                lg:leading-6.5

                xl:text-[19px]
                xl:leading-7
              "
            >
              Pick Row Villa or Individual Villa and see what is on offer.
            </motion.p>
          </div>

          {/* =======================================================
              VILLAS LABEL
          ======================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
              delay: 0.2,
              ease: easeInOut,
            }}
            className="
              flex
              w-fit
              shrink-0
              items-center
              justify-center
              rounded-[11px]
              bg-white
              p-1.25
              shadow-[0_2px_10px_rgba(0,0,0,0.04)]
            "
          >
            <div
              className="
                flex
                h-9.5
                items-center
                justify-center
                rounded-[7px]
                bg-[#2f2f2f]
                px-2.75
                text-[10px]
                font-bold
                leading-none
                text-white
                shadow-sm

                sm:h-10
                sm:px-3.5
                sm:text-[11px]

                lg:h-12
                lg:px-5
                lg:text-[13px]

                xl:h-12.5
                xl:px-5.75
                xl:text-[14px]
              "
            >
              VILLAS · 3 &amp; 4 BHK
            </div>
          </motion.div>
        </motion.div>

        {/* =========================================================
            VILLA CARDS
        ========================================================== */}

        <AnimatePresence mode="wait">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
            className="
              mt-11.25
              flex
              gap-7.5
              overflow-x-auto
              pb-2
              scrollbar-none

              sm:mt-12
              sm:gap-7.5

              lg:mt-13.75
              lg:grid
              lg:grid-cols-3
              lg:gap-9
              lg:overflow-visible
              lg:pb-0

              xl:gap-10.5
            "
          >
            {villaProperties.map((property) => (
              <motion.article
                key={property.area}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  y: {
                    duration: 0.35,
                    ease: easeInOut,
                  },
                }}
                className="
                  w-61.5
                  min-w-61.5
                  overflow-hidden
                  border
                  border-[#cfcfcb]
                  bg-white
                  shadow-[0_4px_15px_rgba(0,0,0,0.06)]

                  sm:w-67.5
                  sm:min-w-67.5

                  lg:w-full
                  lg:min-w-0
                "
              >
                {/* IMAGE */}

                <motion.div
                  className="
                    relative
                    h-41
                    w-full
                    overflow-hidden

                    sm:h-41.25

                    lg:h-57.5

                    xl:h-67.5
                  "
                >
                  <motion.div
                    className="absolute inset-0"
                    initial={{
                      scale: 1.08,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.9,
                      ease: easeInOut,
                    }}
                  >
                    <Image
                      src={property.image}
                      alt={property.type}
                      fill
                      sizes="
                        (max-width: 639px) 246px,
                        (max-width: 1023px) 270px,
                        33vw
                      "
                      className="object-cover object-center"
                    />
                  </motion.div>

                  {/* IMAGE LABEL */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.25,
                      ease: easeInOut,
                    }}
                    className="
                      absolute
                      left-2.5
                      top-2.75
                      bg-white
                      px-2.5
                      py-1.5
                      text-[10px]
                      font-normal
                      leading-3
                      text-[#171717]
                      shadow-[0_2px_8px_rgba(0,0,0,0.08)]

                      lg:left-4
                      lg:top-4
                      lg:px-3.25
                      lg:py-2
                      lg:text-[12px]
                      lg:leading-3.75
                    "
                  >
                    {property.type}
                  </motion.div>
                </motion.div>

                {/* CONTENT */}

                <div
                  className="
                    flex
                    h-17.5
                    flex-col
                    items-center
                    justify-center
                    bg-white

                    lg:h-26.25
                  "
                >
                  <h3
                    className="
                      m-0
                      text-[15px]
                      font-bold
                      leading-4.5
                      text-[#171717]

                      lg:text-[21px]
                      lg:leading-6.25

                      xl:text-[23px]
                      xl:leading-7
                    "
                  >
                    {property.title}
                  </h3>

                  <div
                    className="
                      mt-1.25
                      flex
                      items-center
                      gap-3.5
                      text-[9px]
                      font-normal
                      leading-3
                      text-[#6b6b6b]

                      lg:mt-2.25
                      lg:gap-4.5
                      lg:text-[12px]
                      lg:leading-4

                      xl:text-[16px]
                    "
                  >
                    <span>Super built-up area</span>
                    <span>{property.area}</span>
                  </div>
                </div>

                {/* CTA */}

                <motion.button
                  type="button"
                  onClick={handlePriceClick}
                  whileHover={{
                    backgroundColor: "#171717",
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    flex
                    h-6.25
                    w-full
                    items-center
                    justify-center
                    bg-[#2f2f2f]
                    text-[8px]
                    font-medium
                    tracking-[1px]
                    text-white
                    transition-colors
                    duration-200

                    hover:bg-[#171717]

                    lg:h-10
                    lg:text-[11px]
                    lg:tracking-[1.2px]

                    xl:h-11
                    xl:text-[12px]
                  "
                >
                  GET PRICE &amp; FLOOR PLAN
                </motion.button>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =========================================================
          POPUP
      ========================================================== */}

      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title="Get Price & Floor Plan"
        download={true}
      />
    </section>
  );
}