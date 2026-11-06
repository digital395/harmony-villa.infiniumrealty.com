"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
const allamenities = [
  // PROPOSED AMENITIES
  "Entry Feature Wall / Project Entry",
  "Entry Water Feature",
  "Tree / Palm Court Plaza",
  "Senior Citizen's Alcove",
  "Leisure Pathway",
  "Seating Alcove",
  "Multi-Play / Pickle Ball Court",
  "Multipurpose Court",
  "Outdoor Gym",
  "Aroma Garden",
  "Yoga Deck",
  "Meditation Garden",
  "Multipurpose / Party Lawn",
  "Stepped Seating",

  // OSR AMENITIES
  "Garden of Time / Seasonal Garden",
  "Kid's Play Area",
  "Adventure Park",
  "Tot-Lot Play Area",
  "Butterfly / Pollinator Garden",
  "OSR Entry Plaza",
  "Floor Play - Hopscotch",
  "Sensory Path / Reflexology Pathway",

  // TERRACE LEVEL / CLUBHOUSE AMENITIES
  "Social Plaza",
  "Fitness Zone",
  "Pet's Play Zone",
  "Viewing Deck",
  "BOQ Plaza",
  "Multipurpose Hall",
  "Yoga / Meditation Room",
  "Gym",
  "Steam & Sauna",
  "Meeting Room",
  "Indoor Games",
];
const easeInOut = [0.42, 0, 0.58, 1] as const;

export default function AmenitiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
const [isAmenitiesOpen, setIsAmenitiesOpen] = useState(false);
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
  id="amenities"
  className="w-full overflow-hidden bg-[#e5e5e5]"
>
  <div className="mx-auto w-full">

    {/* =========================================================
        MAIN SECTION
    ========================================================== */}

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
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
        min-h-215
        w-full
        overflow-hidden
        sm:min-h-205
        lg:min-h-200
      "
    >

      {/* =======================================================
          BACKGROUND IMAGE
      ======================================================== */}

      <Image
        src="/images/amenities.webp"
        alt="Harmony amenities"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* =======================================================
          GREY OVERLAY
      ======================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: easeInOut,
        }}
        className="
          absolute
          inset-0
          z-0
          bg-[#333333]/70
        "
      />

      {/* =======================================================
          BOTTOM GRADIENT
      ======================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: easeInOut,
        }}
        className="
          absolute
          inset-x-0
          bottom-0
          z-1
          h-[65%]
          bg-linear-to-t
          from-[#222222]/90
          via-[#222222]/35
          to-transparent
        "
      />

      {/* =======================================================
          CONTENT CONTAINER
      ======================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          px-5.5
          pt-12
          sm:px-5
          sm:pt-18.75
          lg:px-12
        "
      >

        {/* =====================================================
            HEADER
        ====================================================== */}

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
          className="max-w-175"
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
              max-w-170
              text-[31px]
              font-normal
              leading-[1.16]
              tracking-[-0.8px]
              text-white
              sm:mt-5.25
              sm:text-[42px]
              sm:leading-[1.2]
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
              mt-5
              flex
              h-9
              items-center
              justify-center
              rounded-[5px]
              bg-white
              px-4
              text-[10px]
              font-bold
              tracking-[1px]
              text-[#333333]
              shadow-sm
              transition
              duration-200
              hover:bg-[#eeeeee]
              active:scale-[0.97]

              sm:mt-5
              sm:h-10
              sm:px-4
              sm:text-[14px]
            "
          >
            SCHEDULE VISIT
          </motion.button>

        </motion.div>

        {/* =====================================================
            CAROUSEL SECTION
        ====================================================== */}

        <div
          className="
            relative
            mt-16
            w-full
            sm:mt-20
            lg:mt-24
          "
        >

          {/* ===================================================
              CARDS
          ==================================================== */}

{/* =====================================================
    CAROUSEL SECTION
====================================================== */}

<div
  className="
    relative
    mt-16
    w-[calc(100%+2.75rem)]
    -ml-5.5

    sm:mt-20
    sm:w-[calc(100%+2.5rem)]
    sm:-ml-5

    lg:mt-24
    lg:w-[calc(100%+6rem)]
    lg:-ml-12
  "
>

  {/* ===================================================
      CARDS — FULL SCREEN WIDTH
  ==================================================== */}

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
      flex
      w-full
      gap-3
      overflow-x-auto
      px-0
      pb-3
      scroll-smooth
      snap-x
      snap-mandatory
      scrollbar-none

      sm:gap-4
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
          w-[76vw]
          min-w-[76vw]
          snap-start
          overflow-hidden
          rounded-lg
          bg-white
          shadow-[0_8px_28px_rgba(0,0,0,0.14)]

          sm:w-66.75
          sm:min-w-66.75
          sm:rounded-md
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
              (max-width: 639px) 76vw,
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

  {/* ===================================================
      NAVIGATION
  ==================================================== */}



    {/* PREVIOUS */}

   
</div>

          {/* ===================================================
              NAVIGATION
          ==================================================== */}

          <div
            className="
              mt-5
              flex
              justify-end
              gap-2

              sm:mt-6
              sm:gap-3
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
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-[5px]
                bg-white
                text-[#333333]
                shadow-md
                transition
                hover:bg-[#eeeeee]

                sm:h-12
                sm:w-12
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
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-[5px]
                bg-[#333333]
                text-white
                shadow-md
                transition
                hover:bg-[#222222]

                sm:h-12
                sm:w-12
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

          </div>

        </div>

        {/* =====================================================
            AMENITY PILLS
        ====================================================== */}

        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
            ease: easeInOut,
          }}
          className="
            mt-8
            w-full
            max-w-250
            pb-12

            sm:mt-10
            sm:pb-16
          "
        >

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-2
              sm:gap-2.5
            "
          >

            {allamenities.slice(0, 10).map((amenity) => (
              <span
                key={amenity}
                className="
                  rounded-full
                  border
                  border-white/40
                  bg-[#333333]/90
                  px-3.5
                  py-2
                  text-[11px]
                  font-medium
                  leading-4
                  text-white
                  backdrop-blur-sm

                  sm:px-4
                  sm:py-2.5
                  sm:text-[13px]
                "
              >
                {amenity}
              </span>
            ))}

            {/* MANY MORE */}

            <button
              type="button"
              onClick={() => setIsAmenitiesOpen(true)}
              className="
                rounded-full
                border
                border-white/60
                bg-white
                px-4
                py-2
                text-[11px]
                font-semibold
                leading-4
                text-[#333333]
                shadow-md
                transition
                hover:bg-[#eeeeee]
                active:scale-95

                sm:px-5
                sm:py-2.5
                sm:text-[13px]
              "
            >
              Many More
            </button>

          </div>

        </motion.div>

      </div>

    </motion.div>

  </div>

  {/* =========================================================
      ALL AMENITIES MODAL
  ========================================================== */}

<AnimatePresence>
  {isAmenitiesOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
        fixed
        inset-0
        z-100
        flex
        items-center
        justify-center
        bg-[#333333]/80
        px-5
        backdrop-blur-sm
      "
      onClick={() => setIsAmenitiesOpen(false)}
    >

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 20,
          scale: 0.96,
        }}
        transition={{
          duration: 0.35,
          ease: easeInOut,
        }}
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          max-h-[80vh]
          w-full
          max-w-3xl
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-[0_20px_80px_rgba(0,0,0,0.35)]
        "
      >

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-[#333333]/10
            bg-white
            px-6
            py-5

            sm:px-8
            sm:py-6
          "
        >

          <div>

            <p
              className="
                m-0
                text-[11px]
                font-bold
                tracking-[1.5px]
                text-[#666666]
              "
            >
              HARMONY
            </p>

            <h3
              className="
                m-0
                mt-1.5
                text-[25px]
                font-normal
                tracking-[-0.5px]
                text-[#333333]

                sm:text-[30px]
              "
            >
              All Amenities
            </h3>

          </div>

          {/* CLOSE */}

          <button
            type="button"
            aria-label="Close amenities"
            onClick={() => setIsAmenitiesOpen(false)}
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#f2f2f2]
              text-[#333333]
              transition
              duration-200
              hover:bg-[#e5e5e5]
              active:scale-95
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
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </button>

        </div>

        {/* =====================================================
            AMENITIES
        ====================================================== */}

        <div
          className="
            max-h-[calc(80vh-105px)]
            overflow-y-auto
            bg-[#f7f7f7]
            px-6
            py-6

            sm:px-8
            sm:py-8
          "
        >

          <div
            className="
              flex
              flex-wrap
              gap-2.5

              sm:gap-3
            "
          >

            {allamenities.map((amenity, index) => (
              <motion.div
                key={amenity}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.025,
                }}
                className="
                  rounded-full
                  border
                  border-[#d4d4d4]
                  bg-white
                  px-4
                  py-2.5
                  text-[13px]
                  font-medium
                  leading-4
                  text-[#333333]
                  shadow-[0_1px_3px_rgba(0,0,0,0.04)]
                  transition
                  duration-200
                  hover:border-[#999999]
                  hover:bg-[#f2f2f2]

                  sm:text-[14px]
                "
              >
                {amenity}
              </motion.div>
            ))}

          </div>

        </div>

      </motion.div>

    </motion.div>
  )}
</AnimatePresence>

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
