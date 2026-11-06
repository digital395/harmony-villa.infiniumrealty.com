"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const easeInOut = [0.42, 0, 0.58, 1] as const;

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const numericValue = parseFloat(value);
  const suffix = value.replace(/[0-9.]/g, "");

  const count = useMotionValue(0);

  const displayValue = useTransform(count, (latest) => {
    if (value.includes(".")) {
      return `${latest.toFixed(2)}${suffix}`;
    }

    return `${Math.round(latest)}${suffix}`;
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, numericValue, {
      duration: 1.8,
      ease: easeInOut,
    });

    return controls.stop;
  }, [isInView, numericValue, count]);

  return (
    <motion.div
      ref={ref}
      className="
        text-[29px]
        font-bold
        leading-8
        tracking-[-0.5px]
        text-[#333333]
        sm:text-[40px]
        sm:leading-8.25
      "
      whileHover={{ scale: 1.05 }}
      transition={{
        duration: 0.3,
        ease: easeInOut,
      }}
    >
      {displayValue}
    </motion.div>
  );
}

const stats = [
  {
    value: "30+",
    label: "Lifestyle amenities",
  },
  {
    value: "90",
    label: "Exclusive residences",
  },
  {
    value: "3.22",
    label: "Acres of community",
  },
  {
    value: "35",
    label: "Villas",
  },
];

export default function AboutHarmony() {

  return (
    <>
          <section
        id="stats"
        className="w-full bg-[#e5e5e5]"
      >
        <div
          className="
            mx-auto
            w-full
            max-w-full
            px-6
            py-7.75
            sm:px-10
            sm:py-10

          "
        >
          <motion.div
            className="
              mx-auto
              grid
              w-full
              grid-cols-2
              gap-y-6
              sm:grid-cols-4
              sm:gap-x-10
              sm:gap-y-0
              lg:gap-x-16
              xl:gap-x-20
            "
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                "
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 25,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: easeInOut,
                    },
                  },
                }}
                whileHover={{
                  y: -4,
                }}
              >
                <CountUp value={stat.value} />

                <div
                  className="
                    mt-1
                    whitespace-nowrap
                    text-[14px]
                    font-normal
                    leading-4.5
                    text-[#333333]
                    sm:text-[20px]
                    sm:leading-5
                  "
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </>
  );
}