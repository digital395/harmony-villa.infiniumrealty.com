"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import EnquiryForm from "@/components/enquiry";

export default function CTA() {
  return (
    <section className="w-full overflow-hidden bg-[#e5e5e5]" id="contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="
          mx-auto
          flex
          w-full
          flex-col
          gap-5
          px-5
          py-8
          sm:px-8
          sm:py-10
          lg:flex-row
          lg:gap-7
          lg:px-10
          lg:py-12
          xl:px-18
          xl:gap-8
        "
      >

        {/* =========================================================
            ENQUIRY CONTENT
        ========================================================== */}

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: -35,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="
            flex
            w-full
            flex-col
            rounded-3xl
            border
            border-black/6
            bg-white
            px-6
            py-7
            shadow-[0_8px_35px_rgba(0,0,0,0.06)]
            sm:px-8
            sm:py-9
            lg:w-[57%]
            lg:px-10
            lg:py-10
            xl:px-12
            xl:py-11
          "
        >
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 15,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.55,
                },
              },
            }}
            className="w-fit"
          >
            <p
              className="
                m-0
                text-[13px]
                font-bold
                leading-3.75
                tracking-[0.04em]
                text-[#333333]
                lg:text-[16px]
              "
            >
              Find the home that fits your rhythm
            </p>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-2
                h-px
                max-w-61.25
                bg-[#666666]
              "
            />
          </motion.div>

          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                y: 15,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.55,
                  delay: 0.1,
                },
              },
            }}
            className="
              m-0
              mt-3
              max-w-150
              text-[15px]
              font-normal
              leading-6.25
              text-[#333333]
              sm:text-[16px]
              sm:leading-6.75
              lg:mt-4
              lg:text-[17px]
              lg:leading-7.25
              xl:text-[18px]
              xl:leading-7.5
            "
          >
            Tell us what you are looking for. Our team will share the right
            prices, floor plans and a site visit slot.
          </motion.p>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.65,
                  delay: 0.18,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className="
              mt-6
              flex-1
              lg:mt-7
              xl:mt-8
            "
          >
            <EnquiryForm
              title="CTA"
              download={false}
            />
          </motion.div>
        </motion.div>

        {/* =========================================================
            IMAGE
        ========================================================== */}

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: 35,
              scale: 0.97,
            },
            visible: {
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="
            group
            relative
            min-h-82.5
            w-full
            overflow-hidden
            rounded-[20px]
            bg-[#d4d4d4]
            shadow-[0_8px_35px_rgba(0,0,0,0.08)]
            sm:min-h-105
            lg:min-h-full
            lg:w-[43%]
            lg:shrink-0
          "
        >
          <Image
            src="/images/cta.webp"
            alt="Harmony villa"
            fill
            priority
            sizes="
              (max-width: 639px) 100vw,
              (max-width: 1400px) 100vw,
              43vw
            "
            className="
              object-cover
              object-center
              transition-transform
              duration-1000
              ease-out
              group-hover:scale-[1.035]
            "
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.35,
            }}
            className="
              pointer-events-none
              absolute
              inset-0
              bg-linear-to-t
              from-black/15
              via-black/2
              to-transparent
            "
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
