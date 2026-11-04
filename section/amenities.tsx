"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Popup from "@/components/popup";

const amenities = [
  {
    title: "Entry Feature Wall / Project Entry",
    image: "/images/amenities/1.webp",
  },
  {
    title: "Entry Water Feature",
    image: "/images/amenities/2.webp",
  },
  {
    title: "Tree / Palm Court Plaza",
    image: "/images/amenities/3.webp",
  },
  {
    title: "Senior Citizen's Alcove",
    image: "/images/amenities/4.webp",
  },
  // {
  //   name: "Leisure Pathway",
  //   image: "/images/amenities/5.webp",
  // },
  {
    title: "Seating Alcove",
    image: "/images/amenities/6.webp",
  },
  {
    title: "Multi-Play / Pickle Ball Court",
    image: "/images/amenities/7.webp",
  },
  {
    title: "Multipurpose Court",
    image: "/images/amenities/8.webp",
  },
  {
    title: "Outdoor Gym",
    image: "/images/amenities/9.webp",
  },
  {
    title: "Aroma Garden",
    image: "/images/amenities/10.webp",
  },
  {
    title: "Yoga Deck",
    image: "/images/amenities/11.webp",
  },
  // {
  //   title: "Meditation Garden",
  //   image: "/images/projects/harmony/amenities/12.webp",
  // },
  // {
  //   title: "Multipurpose / Party Lawn",
  //   image: "/images/projects/harmony/amenities/13.webp",
  // },
  // {
  //   title: "Stepped Seating",
  //   image: "/images/projects/harmony/amenities/14.webp",
  // },
  // {
  //   title: "Garden of Time / Seasonal Garden",
  //   image: "/images/projects/harmony/amenities/15.webp",
  // },
  {
    title: "Kid's Play Area",
    image: "/images/amenities/16.webp",
  },
  // {
  //   title: "Adventure Park",
  //   image: "/images/projects/harmony/amenities/17.webp",
  // },
  // {
  //   title: "Tot-Lot Play Area",
  //   image: "/images/projects/harmony/amenities/18.webp",
  // },
  // {
  //   name: "Butterfly / Pollinator Garden",
  //   image: "/images/projects/harmony/amenities/19.webp",
  // },
  // {
  //   name: "OSR Entry Plaza",
  //   image: "/images/projects/harmony/amenities/20.webp",
  // },
  // {
  //   name: "Floor Play - Hopscotch",
  //   image: "/images/projects/harmony/amenities/21.webp",
  // },
  // {
  //   name: "Sensory Path / Reflexology Pathway",
  //   image: "/images/projects/harmony/amenities/22.webp",
  // },
  // {
  //   name: "Social Plaza",
  //   image: "/images/projects/harmony/amenities/23.webp",
  // },
  // {
  //   name: "Fitness Zone",
  //   image: "/images/projects/harmony/amenities/24.webp",
  // },
  // {
  //   name: "Pet's Play Zone",
  //   image: "/images/projects/harmony/amenities/25.webp",
  // },
  // {
  //   name: "Viewing Deck",
  //   image: "/images/projects/harmony/amenities/26.webp",
  // },
  // {
  //   name: "BOQ Plaza",
  //   image: "/images/projects/harmony/amenities/27.webp",
  // },
  // {
  //   name: "Multipurpose Hall",
  //   image: "/images/projects/harmony/amenities/28.webp",
  // },
  {
    title: "Yoga / Meditation Room",
    image: "/images/amenities/29.webp",
  },
  {
    title: "Gym",
    image: "/images/amenities/30.webp",
  },
  // {
  //   name: "Steam & Sauna",
  //   image: "/images/projects/harmony/amenities/31.webp",
  // },
  // {
  //   name: "Meeting Room",
  //   image: "/images/projects/harmony/amenities/32.webp",
  // },
  {
    title: "Indoor Games",
    image: "/images/amenities/33.webp",
  },
];

const easeInOut = [0.42, 0, 0.58, 1] as const;

export default function AmenitiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isInteracting, setIsInteracting] = useState(false);
  const [isVisitOpen, setIsVisitOpen] = useState(false);

  const getScrollAmount = () => {
    const container = scrollRef.current;

    if (!container) return 300;

    if (window.innerWidth < 640) {
      return container.clientWidth * 0.78;
    }

    if (window.innerWidth < 1024) {
      return 300;
    }

    return 300;
  };

  const pauseAutoScroll = () => {
    setIsInteracting(true);

    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current);
    }

    resumeTimer.current = setTimeout(() => {
      setIsInteracting(false);
    }, 3500);
  };

  const scrollCards = (direction: "left" | "right") => {
    const container = scrollRef.current;

    if (!container) return;

    pauseAutoScroll();

    const amount = getScrollAmount();

    const maxScroll =
      container.scrollWidth - container.clientWidth;

    const currentScroll = container.scrollLeft;

    if (direction === "right") {
      if (currentScroll >= maxScroll - 10) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: amount,
          behavior: "smooth",
        });
      }
    } else {
      if (currentScroll <= 10) {
        container.scrollTo({
          left: maxScroll,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: -amount,
          behavior: "smooth",
        });
      }
    }
  };

  /*
   * AUTO SCROLL
   */
  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;

      if (!container || isInteracting) return;

      const maxScroll =
        container.scrollWidth - container.clientWidth;

      const currentScroll = container.scrollLeft;

      if (currentScroll >= maxScroll - 10) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: getScrollAmount(),
          behavior: "smooth",
        });
      }
    }, 3500);

    return () => {
      clearInterval(interval);

      if (resumeTimer.current) {
        clearTimeout(resumeTimer.current);
      }
    };
  }, [isInteracting]);

  return (
    <section
      className="w-full bg-[#e5e5e5]"
      id="amenities"
    >
      <div className="mx-auto w-full px-0">

        {/* =========================================================
            MAIN SECTION
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: easeInOut,
          }}
          className="
            relative
            min-h-160
            w-full
            overflow-hidden
            rounded-none
            lg:min-h-160
          "
        >

          {/* =======================================================
              BACKGROUND IMAGE
          ======================================================== */}

          <Image
            src="/images/amenities.webp"
            alt="Harmony amenities"
            fill
            sizes="
              (max-width: 639px) 100vw,
              (max-width: 1152px) 100vw,
              1152px
            "
            className="object-cover object-center"
          />

          {/* =======================================================
              GREY OVERLAY
          ======================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              ease: easeInOut,
            }}
            className="
              absolute
              inset-0
              bg-[#333333]/70
            "
          />

          {/* =======================================================
              BOTTOM GRADIENT
          ======================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: easeInOut,
            }}
            className="
              absolute
              inset-x-0
              bottom-0
              h-[55%]
              bg-linear-to-t
              from-[#222222]/85
              via-transparent
              to-transparent
            "
          />

          {/* =======================================================
              CONTENT
          ======================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: easeInOut,
            }}
            className="
              relative
              z-10
              px-5.5
              pt-12

              sm:absolute
              sm:left-10.75
              sm:top-18.75
              sm:px-0
              sm:pt-0
            "
          >

            {/* LABEL */}

            <motion.p
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
                delay: 0.1,
                ease: easeInOut,
              }}
              className="
                m-0
                text-[12px]
                font-bold
                leading-4
                tracking-[0.2px]
                text-white
                sm:text-[15px]
                sm:leading-4.75
              "
            >
              30+ AMENITIES
            </motion.p>

            {/* HEADING */}

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
                delay: 0.2,
                ease: easeInOut,
              }}
              className="
                m-0
                mt-3.5
                max-w-85
                text-[31px]
                font-normal
                leading-[1.16]
                tracking-[-0.8px]
                text-white

                sm:mt-5.25
                sm:max-w-155
                sm:text-[42px]
                sm:leading-[1.3]
                sm:tracking-[-1.2px]
              "
            >
              Life outdoors, a few steps
              <br className="hidden sm:block" />
              from home
            </motion.h2>

            {/* CTA */}

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
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.35,
                ease: easeInOut,
              }}
              className="
                mt-4.5
                flex
                h-8.5
                items-center
                justify-center
                rounded-[5px]
                bg-white
                px-4
                text-[9px]
                font-bold
                tracking-[1px]
                text-[#333333]
                shadow-sm
                transition
                duration-200
                hover:bg-[#eeeeee]
                active:scale-[0.97]

                sm:mt-3.75
                sm:h-7
                sm:px-3.5
                sm:text-[8px]
              "
            >
              SCHEDULE VISIT
            </motion.button>
          </motion.div>

          {/* =======================================================
              CAROUSEL
          ======================================================== */}

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsInteracting(true)}
            onMouseLeave={() => {
              if (resumeTimer.current) {
                clearTimeout(resumeTimer.current);
              }

              resumeTimer.current = setTimeout(() => {
                setIsInteracting(false);
              }, 1500);
            }}
            onTouchStart={() => setIsInteracting(true)}
            onTouchEnd={() => {
              if (resumeTimer.current) {
                clearTimeout(resumeTimer.current);
              }

              resumeTimer.current = setTimeout(() => {
                setIsInteracting(false);
              }, 3000);
            }}
            className="
              absolute
              left-0
              right-0
              top-73.75
              z-20
              flex
              gap-3
              overflow-x-auto
              px-5.5
              pb-2
              scroll-smooth
              snap-x
              snap-mandatory
              scrollbar-none

              sm:top-81.25
              sm:gap-4
              sm:px-10.75

              lg:top-81.25
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {amenities.map((amenity, index) => (
              <motion.article
                key={amenity.title}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  duration: 0.7,
                  delay: 0.15 + index * 0.08,
                  ease: easeInOut,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  w-[74vw]
                  min-w-[74vw]
                  snap-start
                  overflow-hidden
                  rounded-lg
                  bg-white
                  shadow-[0_8px_28px_rgba(0,0,0,0.14)]

                  sm:w-66.75
                  sm:min-w-66.75
                  sm:rounded-md

                  lg:w-66.75
                  lg:min-w-66.75
                "
              >

                {/* IMAGE */}

                <div
                  className="
                    relative
                    h-47.5
                    w-full
                    sm:h-49.5
                  "
                >
                  <Image
                    src={amenity.image}
                    alt={amenity.title}
                    fill
                    sizes="
                      (max-width: 639px) 74vw,
                      267px
                    "
                    className="object-cover object-center"
                  />
                </div>

                {/* TITLE */}

                <div
                  className="
                    flex
                    min-h-14.5
                    items-center
                    justify-center
                    bg-white
                    px-3
                    py-2.5
                    text-center

                    sm:h-12.75
                    sm:min-h-0
                    sm:px-2
                    sm:py-0
                  "
                >
                  <p
                    className="
                      m-0
                      text-[14px]
                      font-normal
                      leading-4.5
                      text-[#333333]

                      sm:text-[15px]
                      sm:leading-4.75
                    "
                  >
                    {amenity.title}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* =======================================================
              MOBILE SWIPE HINT
          ======================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: easeInOut,
            }}
            className="
              absolute
              bottom-23
              left-5.5
              z-30
              flex
              items-center
              gap-1.75
              text-white/80
              sm:hidden
            "
          >
            <span
              className="
                text-[9px]
                font-medium
                tracking-[0.5px]
              "
            >
              SWIPE TO EXPLORE
            </span>

            <motion.svg
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              aria-hidden="true"
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: easeInOut,
              }}
            >
              <path
                d="M1 5H16M12 1L16 5L12 9"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>

          {/* =======================================================
              NAVIGATION
          ======================================================== */}

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
              delay: 0.45,
              ease: easeInOut,
            }}
            className="
              absolute
              bottom-6.25
              right-5.5
              z-30
              flex
              items-center
              gap-2

              sm:right-10.75
              sm:gap-3

              lg:gap-5.25
            "
          >

            {/* PREVIOUS */}

            <motion.button
              type="button"
              aria-label="Previous amenities"
              onClick={() => scrollCards("left")}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                duration: 0.2,
                ease: easeInOut,
              }}
              className="
                flex
                h-10.5
                w-10.5
                items-center
                justify-center
                rounded-[5px]
                bg-white
                text-[#333333]
                shadow-sm
                transition
                hover:bg-[#eeeeee]
                active:scale-95

                sm:h-12
                sm:w-12

                lg:h-13.25
                lg:w-13.25
              "
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>

            {/* NEXT */}

            <motion.button
              type="button"
              aria-label="Next amenities"
              onClick={() => scrollCards("right")}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                duration: 0.2,
                ease: easeInOut,
              }}
              className="
                flex
                h-10.5
                w-10.5
                items-center
                justify-center
                rounded-[5px]
                bg-[#333333]
                text-white
                shadow-sm
                transition
                hover:bg-[#222222]
                active:scale-95

                sm:h-12
                sm:w-12

                lg:h-13.25
                lg:w-13.25
              "
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </motion.div>
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
