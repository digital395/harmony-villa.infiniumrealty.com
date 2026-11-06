"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { isLeadValid } from "@/utils/LeadVerification";
import Popup from "@/components/popup";

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const mediaVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.985,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function HarmonyFilmSection() {
  const [isLeadPopupOpen, setIsLeadPopupOpen] = useState(false);

  const brochureUrl = "/brochure.pdf";

  const downloadBrochure = () => {
    const link = document.createElement("a");

    link.href = brochureUrl;
    link.download = "my-project-brochure.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadBrochure = () => {
    if (isLeadValid()) {
      downloadBrochure();
      return;
    }

    setIsLeadPopupOpen(true);
  };

  return (
    <section className="w-full overflow-hidden bg-[#e5e5e3]">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
      >
        {/* =========================================================
            HEADER
        ========================================================== */}

        <motion.div
          variants={fadeUpVariants}
          className="
            flex
            w-full
            flex-col
            items-center
    px-5
      py-8
      lg:px-12
      lg:py-10
            text-center
          "
        >
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

                sm:text-[15px]
                sm:leading-3.75
              "
            >
              See Harmony before you visit
            </p>

            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              whileInView={{
                width: 205,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="
                mx-auto
                mt-1.75
                h-px
                bg-[#2f2f2f]
              "
            />
          </motion.div>

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

              lg:text-[17px]
            "
          >
            A short film of the community, the homes and the open spaces.
          </motion.h2>
        </motion.div>

        {/* =========================================================
            CENTERED YOUTUBE VIDEO
        ========================================================== */}

        <div className="w-full px-3 sm:px-4">
          <div className="mx-auto w-full max-w-350">
            <motion.div
              variants={mediaVariants}
              className="
                relative
                aspect-video
                w-full
                overflow-hidden
                rounded-xl
                bg-[#f3f3f1]
                shadow-[0_8px_30px_rgba(0,0,0,0.08)]

                sm:rounded-[18px]

                lg:aspect-16/6.5
                lg:rounded-[20px]
              "
            >
              <iframe
                src="https://www.youtube.com/embed/hOExZWGLkLU?autoplay=1&mute=1&rel=0&playsinline=1"
                title="Harmony Film"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  border-0
                "
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </div>
        </div>

        {/* =========================================================
            CTA
        ========================================================== */}

        <motion.div
          variants={buttonVariants}
          className="
            flex
            w-full
            items-center
            justify-center
            px-5
            py-5.25

            sm:py-6.25

            lg:py-5.25
          "
        >
          <motion.button
            type="button"
            onClick={handleDownloadBrochure}
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="
              flex
              h-9.25
              items-center
              justify-center
              rounded-[7px]
              bg-[#2f2f2f]
              px-3.25
              text-[13px]
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
            "
          >
            DOWNLOAD BROCHURE
          </motion.button>
        </motion.div>
      </motion.div>

      {/* =========================================================
          LEAD POPUP
      ========================================================== */}

      <Popup
        isOpen={isLeadPopupOpen}
        onClose={() => setIsLeadPopupOpen(false)}
        title="Download Brochure"
        download={true}
      />
    </section>
  );
}