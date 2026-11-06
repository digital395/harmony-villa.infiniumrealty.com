"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const easeOut = [0.16, 1, 0.3, 1] as const;

const columnVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay,
      ease: easeOut,
    },
  }),
};

const logoVariants = {
  hidden: {
    opacity: 0,
    y: 15,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.15,
      ease: easeOut,
    },
  },
};


export default function Footer() {
    const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="w-full bg-[#333333] text-white">
      <div className="mx-auto w-full max-w-375 px-6 py-10 sm:px-10 lg:px-8 lg:py-0">
        <div className="grid min-h-63.75 grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-x-20">
          <motion.div
            custom={0}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="flex flex-col items-center text-center lg:items-start lg:pl-10"
          >
            <div className="w-full max-w-82.5">
              <h3 className="text-[20px] font-bold leading-6.5">
                Project location
              </h3>

              <p className="mt-1.75 text-[15px] font-normal leading-6 text-white/85">
              Panchayat Annur, S.F. No: 5/1A1 & 6/3C, Taluk, Globus Garden, Kaikolapalayam, Vellanaipatti, Coimbatore, Tamil Nadu 641048
              
              </p>
            </div>

            <div className="mt-8.5 w-full max-w-82.5">
              <h3 className="text-[20px] font-bold leading-6.5">
                Head office
              </h3>

              <p className="mt-1.75 text-[15px] font-normal leading-6 text-white/85">
                No. 1733/1, 2nd Floor, Trichy Rd,
                <br />
                Olympus, Ramanathapuram, Coimbatore - 641 045
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={logoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="flex flex-col items-center justify-center"
          >
            <motion.div
              whileHover={{
                scale: 1.025,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.35,
                ease: easeOut,
              }}
            >
              <Link
                href="/"
                aria-label="Harmony Home"
                className="
                  relative
                  block
                  h-20
                  w-45
                  rounded-sm
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white/80
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#333333]
                "
              >
                <Image
                  src="/images/logo.png"
                  alt="Harmony"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
            </motion.div>

            {/* <motion.div
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
                amount: 0.25,
              }}
              transition={{
                duration: 0.65,
                delay: 0.3,
                ease: easeOut,
              }}
              className="mt-4.5 flex items-center gap-5"
            >
              <motion.a
                href="https://www.rera.tn.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Tamil Nadu RERA website"
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.25,
                  ease: easeOut,
                }}
                className="
                  flex
                  h-17.5
                  w-17.5
                  shrink-0
                  items-center
                  justify-center
                  rounded-[5px]
                  bg-white
                  p-1
                  shadow-[0_3px_10px_rgba(0,0,0,0.25)]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#333333]
                "
              >
                <Image
                  src="/images/rera-qr.png"
                  alt="RERA QR Code"
                  width={62}
                  height={62}
                  className="h-full w-full object-contain"
                />
              </motion.a>

              <div className="text-left">
                <p className="text-[13px] font-bold leading-5 text-white">
                  RERA No: TNRERA
                </p>

                <a
                  href="https://www.rera.tn.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-0.75
                    block
                    text-[12px]
                    font-normal
                    leading-4.5
                    text-white/80
                    transition-opacity
                    duration-300
                    hover:opacity-70
                    focus:outline-none
                    focus-visible:underline
                  "
                >
                  WWW.RERA.TN.GOV.IN
                </a>
              </div>
            </motion.div> */}
          </motion.div>

          <motion.div
            custom={0.12}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="flex flex-col items-center text-center lg:items-end lg:pr-10"
          >
            <div className="w-full max-w-77.5">
              <h3 className="text-[20px] font-bold leading-6.5">
                Phone and WhatsApp
              </h3>

              <div className="mt-1.75 flex flex-col text-[15px] leading-6">
                <motion.a
                  href="https://wa.me/919787010000"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    x: -3,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: easeOut,
                  }}
                  className="
                    text-white/90
                    transition-opacity
                    duration-300
                    hover:opacity-70
                    focus:outline-none
                    focus-visible:underline
                  "
                >
                  +91-97870-10000
                </motion.a>

                <a
                  href="tel:+914223524400"
                  className="
                    text-white/90
                    transition-opacity
                    duration-300
                    hover:opacity-70
                    focus:outline-none
                    focus-visible:underline
                  "
                >
                  0422-3524400
                </a>
              </div>
            </div>

            <div className="mt-8 w-full max-w-77.5">
              <h3 className="text-[20px] font-bold leading-6.5">Email</h3>

              <motion.a
                href="mailto:sales@infinumrealty.com"
                whileHover={{
                  x: -3,
                }}
                transition={{
                  duration: 0.25,
                  ease: easeOut,
                }}
                className="
                  mt-1.75
                  block
                  text-[14px]
                  leading-5.5
                  text-white/90
                  transition-opacity
                  duration-300
                  hover:opacity-70
                  focus:outline-none
                  focus-visible:underline
                "
              >
                sales@infinumrealty.com
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: easeOut,
        }}
        className="border-t border-white/10"
      >
        <div className="flex min-h-9.5 items-center justify-center px-4">
  <p className="text-center text-[12px] font-normal leading-4.25 text-white/75">
    Copyright {year ?? ""} - Design by{" "}
    <a
      href="https://blackcoffeebrands.co.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Black Coffee Brands
    </a>
  </p>
</div>
      </motion.div>
    </footer>
  );
}
