"use client";

import {
  motion,
  AnimatePresence,
  type Variants,
} from "framer-motion";
import { useState, type ReactNode } from "react";
import {
  FiPlus,
  FiX,
  FiMapPin,
  FiNavigation,
} from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";

type Advantage = {
  title: string;
  icon: ReactNode;
  details: string[];
};

const advantages: Advantage[] = [
  {
    title: "Connectivity",
    icon: <FiNavigation />,
    details: [
      "Kaikolapalayam, Vellanaipatti, Annur Taluk, Coimbatore – Off Avinashi Road",
      "Coimbatore International Airport – Approximately 9 km",
      "Avinashi Road (NH 544) via Neelambur – Approximately 5–6 km",
      "Kalapatti – Approximately 5 km",
      "Coimbatore Railway Junction – Approximately 18 km",
    ],
  },
  {
    title: "IT & Business Hubs",
    icon: <BsBuilding />,
    details: [
      "Kalapatti IT Corridor",
      "SVB Tech Park",
      "Bosch / Global Tech Park",
      "IT Hubs around Peelamedu and Vilankurichi",
    ],
  },
];

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const mapVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -24,
    scale: 0.985,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const panelVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 24,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      delay: 0.08,
    },
  },
};

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -12,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const detailVariants: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
    y: -8,
  },

  visible: {
    opacity: 1,
    height: "auto",
    y: 0,
    transition: {
      height: {
        duration: 0.38,
        ease: "easeInOut",
      },
      opacity: {
        duration: 0.3,
        delay: 0.05,
      },
      y: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  },

  exit: {
    opacity: 0,
    height: 0,
    y: -8,
    transition: {
      height: {
        duration: 0.3,
        ease: "easeInOut",
      },
      opacity: {
        duration: 0.18,
      },
      y: {
        duration: 0.2,
      },
    },
  },
};

const listItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -12,
  },

  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.38,
      ease: "easeOut",
      delay: index * 0.065,
    },
  }),
};

export default function Location() {
  const [open, setOpen] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setOpen((current) => (current === index ? null : index));
  };

  return (
    <section
      id="locations"
      className="
        w-full
        bg-[#ffffff]
           px-5
      py-8
      lg:px-12
      lg:py-10
      "
    >
      <motion.div
        className="mx-auto w-full max-w-350"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.12,
        }}
      >
        {/* =========================
            SECTION HEADING
        ========================== */}

        <motion.div
          variants={fadeUpVariants}
          className="flex flex-col items-center text-center"
        >
          {/* LABEL */}

          <motion.div
            variants={fadeUpVariants}
            className="w-fit"
          >
            <p
              className="
                m-0
                text-[14px]
                font-semibold
                leading-3.5
                text-[#2f2f2f]

                sm:text-[16px]
              "
            >
              LOCATION
            </p>

            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              whileInView={{
                width: 107,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.75,
                ease: "easeOut",
                delay: 0.3,
              }}
              className="
                mx-auto
                mt-1.75
                h-px
                bg-[#2f2f2f]
              "
            />
          </motion.div>

          {/* ADDRESS */}

          <motion.h2
            variants={fadeUpVariants}
            className="
              m-0
              mt-3
              max-w-225
              text-[16px]
              font-bold
              leading-5.75
              text-[#171717]

              sm:mt-3.5
              sm:text-[17px]
              sm:leading-6
            "
          >
            Off Avinashi Road, well connected Kaikolapalayam,
            Vellanaipatti, Annur Taluk, Coimbatore.
          </motion.h2>

          {/* SMALL GAP BEFORE CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="h-1 sm:h-2"
          />
        </motion.div>

        {/* =========================
            MAP + LOCATION PANEL
        ========================== */}

        <div
          className="
            mt-4
            flex
            w-full
            flex-col
            items-stretch
            gap-5

            md:mt-5
            md:flex-row
            md:gap-4

            lg:mt-6
            lg:gap-5

            xl:gap-6
          "
        >
          {/* =========================
              MAP - 70%
          ========================== */}

          <motion.div
            variants={mapVariants}
            className="
              w-full
              overflow-hidden
              rounded-lg
              border
              border-[#cfcfcb]
              bg-white

              md:w-[70%]
              md:rounded-lg

              lg:w-[69%]
            "
          >
            <iframe
              title="Infinium Harmony Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.8204562968735!2d77.0534824!3d11.071648800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f9c1b0dc8787%3A0xee465f0e785c86!2sInfinium%20Harmony!5e1!3m2!1sen!2sin!4v1793438234202!5m2!1sen!2sin"
              className="
                block
                h-65
                w-full
                border-0

                sm:h-82.5
                md:h-107.5
                lg:h-112.5
                xl:h-117.5
              "
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* =========================
              RIGHT PANEL - 30%
          ========================== */}

          <motion.div
            variants={panelVariants}
            className="
              w-full
              overflow-hidden
              rounded-lg
              border
              border-[#cfcfcb]
              bg-white

              md:w-[30%]
              lg:w-[31%]
            "
          >
            {/* =========================
                DARK HEADER
            ========================== */}

            <motion.div
              variants={headerVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                y: -1,
                backgroundColor: "#171717",
              }}
              className="
                relative
                flex
                h-11
                items-center
                justify-center
                gap-2
                overflow-hidden
                bg-[#2f2f2f]
                px-3
                text-[11px]
                font-semibold
                tracking-[0.2px]
                text-white
                uppercase
                shadow-sm

                sm:h-11.5

                lg:h-12
                lg:text-[13px]

                xl:h-12.5
                xl:text-[14px]
              "
            >
              {/* subtle animated shine */}

              <motion.span
                initial={{
                  x: "-120%",
                  opacity: 0,
                }}
                animate={{
                  x: "120%",
                  opacity: [0, 0.18, 0],
                }}
                transition={{
                  duration: 1.4,
                  delay: 0.65,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  w-20
                  -skew-x-12
                  bg-white
                "
              />

              <motion.span
                initial={{
                  scale: 0.7,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className="relative flex items-center justify-center"
              >
                <FiMapPin className="text-[16px] lg:text-[18px]" />
              </motion.span>

              <motion.span
                initial={{
                  opacity: 0,
                  x: 8,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.28,
                  ease: "easeOut",
                }}
                className="relative"
              >
                Nearby Locations
              </motion.span>
            </motion.div>

            {/* =========================
                ACCORDION LIST
            ========================== */}

            <div className="bg-white p-2.5 md:p-2.5 lg:p-3 xl:p-3.5">
              {advantages.map((item, index) => {
                const isOpen = open === index;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUpVariants}
                    className="mb-2.5 last:mb-0 lg:mb-3"
                  >
                    {/* CATEGORY HEADER */}

                    <motion.button
                      type="button"
                      onClick={() => handleOpen(index)}
                      aria-expanded={isOpen}
                      aria-controls={`location-details-${index}`}
                      whileHover={{
                        y: -1,
                      }}
                      whileTap={{
                        scale: 0.985,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                      className={`
                        flex
                        min-h-10
                        w-full
                        items-center
                        justify-between
                        gap-2
                        rounded-xs
                        px-3
                        py-2.5
                        transition-colors
                        duration-300
                        ${
                          isOpen
                            ? "bg-[#2f2f2f] text-white shadow-sm"
                            : "bg-[#f5f5f3] text-[#171717] hover:bg-[#dededb]"
                        }
                      `}
                    >
                      {/* Icon + title */}

                      <span
                        className="
                          flex
                          min-w-0
                          flex-1
                          items-center
                          justify-center
                          gap-2
                          text-center
                          text-[11px]
                          font-semibold
                          leading-tight
                          uppercase

                          sm:text-[12px]

                          lg:text-[12px]

                          xl:text-[13px]
                        "
                      >
                        <motion.span
                          animate={{
                            rotate: isOpen ? 360 : 0,
                            scale: isOpen ? 1.08 : 1,
                          }}
                          transition={{
                            duration: 0.45,
                            ease: "easeOut",
                          }}
                          className="shrink-0 text-[15px] lg:text-[17px]"
                        >
                          {item.icon}
                        </motion.span>

                        <span>{item.title}</span>
                      </span>

                      {/* Plus / X */}

                      <motion.span
                        animate={{
                          rotate: isOpen ? 90 : 0,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: "easeInOut",
                        }}
                        className="shrink-0"
                      >
                        {isOpen ? (
                          <FiX className="text-[16px] lg:text-[17px]" />
                        ) : (
                          <FiPlus className="text-[16px] lg:text-[17px]" />
                        )}
                      </motion.span>
                    </motion.button>

                    {/* DETAILS */}

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`location-details-${index}`}
                          key={`details-${index}`}
                          variants={detailVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="overflow-hidden"
                        >
                          <div
                            className="
                              border-x
                              border-b
                              border-[#cfcfcb]
                              bg-white
                              px-3
                              py-3

                              lg:px-4
                              lg:py-4
                            "
                          >
                            <ul className="space-y-2.5 lg:space-y-3">
                              {item.details.map(
                                (detail, detailIndex) => (
                                  <motion.li
                                    key={`${item.title}-${detailIndex}`}
                                    custom={detailIndex}
                                    variants={listItemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="
                                      flex
                                      items-start
                                      gap-2
                                      text-[10px]
                                      leading-normal
                                      text-[#5f5f5f]

                                      sm:text-[11px]

                                      lg:text-[11px]

                                      xl:text-[12px]
                                    "
                                  >
                                    {/* Grey bullet */}

                                    <motion.span
                                      initial={{
                                        scale: 0,
                                        opacity: 0,
                                      }}
                                      animate={{
                                        scale: 1,
                                        opacity: 1,
                                      }}
                                      transition={{
                                        duration: 0.3,
                                        delay:
                                          detailIndex * 0.065,
                                        ease: "easeOut",
                                      }}
                                      className="
                                        mt-1.5
                                        h-1.25
                                        w-1.25
                                        shrink-0
                                        rounded-full
                                        bg-[#2f2f2f]

                                        lg:h-1.5
                                        lg:w-1.5
                                      "
                                    />

                                    <span>{detail}</span>
                                  </motion.li>
                                )
                              )}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}