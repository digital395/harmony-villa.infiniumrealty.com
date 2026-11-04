"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 20000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#e5e5e5]
        px-5
        py-10
        sm:px-8
        md:px-12
        pt-30
      "
    >
      {/* Background glow */}
      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-105
          w-105
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#333333]/8
          blur-[120px]
        "
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Top-right glow */}
      <motion.div
        className="
          pointer-events-none
          absolute
          -right-20
          top-10
          h-70
          w-70
          rounded-full
          bg-[#666666]/10
          blur-[100px]
        "
        animate={{
          y: [0, 30, 0],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom-left glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-20
          h-80
          w-[320px]
          rounded-full
          bg-[#333333]/8
          blur-[100px]
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.94,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          w-full
          max-w-140
        "
      >
        {/* Outer border glow */}
        <div
          className="
            absolute
            -inset-px
            rounded-[30px]
            bg-linear-to-br
            from-[#333333]/35
            via-[#999999]/25
            to-[#333333]/20
            opacity-70
            blur-[1px]
          "
        />

        {/* Main card */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-[#333333]/12
            bg-white
            px-7
            py-10
            text-center
            shadow-[0_25px_80px_rgba(0,0,0,0.12)]
            sm:px-10
            sm:py-12
            md:px-14
            md:py-14
          "
        >
          {/* Top accent */}
          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: 90,
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
            className="
              absolute
              left-1/2
              top-0
              h-0.75
              -translate-x-1/2
              rounded-b-full
              bg-linear-to-r
              from-[#333333]
              via-[#666666]
              to-[#333333]
              shadow-[0_0_18px_rgba(0,0,0,0.18)]
            "
          />

          {/* Card decorative glow */}
          <div
            className="
              absolute
              -right-16
              -top-16
              h-40
              w-40
              rounded-full
              bg-[#333333]/6
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-20
              -left-16
              h-40
              w-40
              rounded-full
              bg-[#666666]/8
              blur-3xl
            "
          />

          {/* Logo */}
          <motion.div
            initial={{
              opacity: 0,
              y: -25,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              y: [0, -6, 0, 5, 0],
              scale: 1,
            }}
            transition={{
              opacity: {
                delay: 0.15,
                duration: 0.5,
              },
              scale: {
                delay: 0.15,
                duration: 0.6,
                type: "spring",
                stiffness: 160,
                damping: 14,
              },
              y: {
                delay: 0.8,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
              relative
              mb-7
              flex
              justify-center
            "
          >
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.08, 0.18, 0.08],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-1/2
                top-1/2
                h-24
                w-44
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#333333]/8
                blur-2xl
              "
            />

            <Image
              src="/images/logo.png"
              alt="Infinium Harmony"
              width={190}
              height={80}
              priority
              className="
                relative
                h-auto
                w-41.25
                object-contain
                drop-shadow-[0_8px_18px_rgba(0,0,0,0.12)]
                sm:w-46.25
              "
            />
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="
              relative
              mb-2
              font-sans
              text-[10px]
              font-bold
              tracking-[0.14em]
              text-[#555555]
              uppercase
            "
          >
            Your enquiry has been received
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.55,
              duration: 0.6,
            }}
            className="
              relative
              mb-4
              font-sans
              text-[40px]
              font-bold
              tracking-tight
              text-[#333333]
              sm:text-[48px]
            "
          >
            Thank You!
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: 70,
              opacity: 1,
            }}
            transition={{
              delay: 0.75,
              duration: 0.5,
            }}
            className="
              mx-auto
              mb-7
              h-0.5
              rounded-full
              bg-linear-to-r
              from-[#333333]
              via-[#666666]
              to-[#333333]
              shadow-[0_0_10px_rgba(0,0,0,0.16)]
            "
          />

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.85,
              duration: 0.6,
            }}
            className="
              relative
              mx-auto
              max-w-110
              font-sans
              text-sm
              leading-7
              text-[#555555]
              sm:text-base
              sm:leading-8
            "
          >
            Thank you for your interest in{" "}
            <span className="font-semibold text-[#333333]">
              Infinium Harmony
            </span>
            . Our team will get in touch with you shortly to help you explore
            your new home and take the next step toward a harmonious way of
            living.
          </motion.p>

          {/* Back to Home */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.05,
              duration: 0.6,
            }}
            className="mt-9"
          >
            <Link
              href="/"
              className="
                group
                inline-flex
                items-center
                justify-center
                rounded-[7px]
                border
                border-[#333333]
                bg-[#333333]
                px-8
                py-3.5
                font-sans
                text-[11px]
                font-semibold
                tracking-wide
                text-white
                uppercase
                shadow-[0_8px_25px_rgba(0,0,0,0.18)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#222222]
                hover:shadow-[0_12px_35px_rgba(0,0,0,0.24)]
              "
            >
              Back to Home
            </Link>
          </motion.div>

          {/* Redirect message */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.3,
              duration: 0.5,
            }}
            className="
              mt-7
              font-sans
              text-[10px]
              tracking-[0.12em]
              text-[#888888]
              uppercase
            "
          >
            You will be redirected to the home page shortly
          </motion.div>

          {/* Bottom accent */}
          <div
            className="
              absolute
              bottom-0
              left-1/2
              h-0.5
              w-32
              -translate-x-1/2
              rounded-t-full
              bg-linear-to-r
              from-transparent
              via-[#333333]/60
              to-transparent
            "
          />
        </div>
      </motion.div>
    </main>
  );
}
