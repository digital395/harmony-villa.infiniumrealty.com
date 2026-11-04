"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Popup from "./popup";

const navItems = [
  { label: "About", id: "about" },
  { label: "Details", id: "details" },
  { label: "Amenities", id: "amenities" },
  { label: "Locations", id: "locations" },
  { label: "Contact", id: "contact" },
];

const easeOut = [0.16, 1, 0.3, 1] as const;
const easeSmooth = [0.22, 1, 0.36, 1] as const;

const menuContainer = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      opacity: {
        duration: 0.18,
        ease: easeOut,
      },
      height: {
        duration: 0.45,
        ease: easeSmooth,
      },
    },
  },

  open: {
    opacity: 1,
    height: "auto",
    transition: {
      height: {
        duration: 0.5,
        ease: easeSmooth,
      },
      opacity: {
        duration: 0.25,
        delay: 0.04,
        ease: easeOut,
      },
    },
  },
};

const menuContent = {
  closed: {
    y: -10,
    opacity: 0,
    scale: 0.985,
  },

  open: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.42,
      ease: easeOut,
    },
  },
};

const mobileItem = {
  closed: {
    y: 12,
    opacity: 0,
  },

  open: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.38,
      delay: 0.04 + index * 0.045,
      ease: easeOut,
    },
  }),
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [enquireOpen, setEnquireOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const handleEnquireOpen = () => {
    setMenuOpen(false);
    setEnquireOpen(true);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8 lg:pt-5">
        <motion.nav
          initial={false}
          animate={{
            backgroundColor: scrolled
              ? "rgba(255,255,255,0.78)"
              : "rgba(255,255,255,0)",
            borderColor: scrolled
              ? "rgba(80,80,80,0.14)"
              : "rgba(255,255,255,0)",
            boxShadow: scrolled
              ? "0 8px 30px rgba(0,0,0,0.08)"
              : "0 0 0 rgba(0,0,0,0)",
          }}
          transition={{
            duration: 0.65,
            ease: easeOut,
          }}
          className="
            relative mx-auto w-full
            rounded-2xl
            border
            backdrop-blur-xl
            lg:max-w-345
            lg:rounded-full
          "
        >
          <div
            className="
              flex h-15.5 w-full items-center justify-between
              px-4
              sm:h-16.5 sm:px-6
              lg:h-17 lg:px-7
              xl:px-9
            "
          >
            <Link
              href="/"
              aria-label="Harmony Home"
              onClick={handleNavClick}
              className="relative z-20 flex shrink-0 items-center"
            >
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{
                  duration: 0.35,
                  ease: easeOut,
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Harmony Home"
                  width={140}
                  height={40}
                  priority
                  className="
                    h-10 w-auto object-contain
                    lg:h-20
                  "
                />
              </motion.div>
            </Link>

            <div className="hidden items-center lg:flex">
              <div className="flex items-center gap-1 xl:gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={handleNavClick}
                    className={`
                      group relative
                      rounded-full
                      px-4 py-2.5
                      text-[16px]
                      font-normal
                      tracking-[0.01em]
                      transition-all duration-300
                      ${
                        scrolled
                          ? "text-[#333333]/90 hover:bg-black/5 hover:text-[#222222]"
                          : "text-white hover:text-white/70"
                      }
                    `}
                  >
                    <motion.span
                      whileHover={{ y: -1 }}
                      transition={{
                        duration: 0.25,
                        ease: easeOut,
                      }}
                      className="block"
                    >
                      {item.label}
                    </motion.span>

                    <span
                      className={`
                        absolute bottom-1.5 left-1/2
                        h-px w-0
                        -translate-x-1/2
                        transition-all duration-300
                        group-hover:w-[calc(100%-32px)]
                        ${scrolled ? "bg-[#333333]/50" : "bg-white/70"}
                      `}
                    />
                  </Link>
                ))}

                <motion.button
                  type="button"
                  onClick={handleEnquireOpen}
                  whileHover={{
                    scale: 1.035,
                  }}
                  whileTap={{
                    scale: 0.965,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: easeOut,
                  }}
                  className={`
                    ml-2
                    rounded-full
                    px-6 py-3
                    text-[14px]
                    font-medium
                    tracking-[0.02em]
                    transition-colors duration-300
                    ${
                      scrolled
                        ? "bg-[#333333] text-white hover:bg-[#222222]"
                        : "border border-white/70 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-[#333333]"
                    }
                  `}
                >
                  Enquire
                </motion.button>
              </div>
            </div>

            <motion.button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              whileTap={{ scale: 0.9 }}
              className={`
                relative z-30
                flex h-11 w-11
                items-center justify-center
                rounded-full
                transition-colors duration-300
                lg:hidden
                ${scrolled ? "bg-black/5" : "bg-white/8"}
              `}
            >
              <span className="relative flex h-4.5 w-5.5 flex-col justify-between">
                <motion.span
                  animate={
                    menuOpen
                      ? {
                          y: 8,
                          rotate: 45,
                        }
                      : {
                          y: 0,
                          rotate: 0,
                        }
                  }
                  transition={{
                    duration: 0.35,
                    ease: easeOut,
                  }}
                  className={`
                    block h-[1.5px] w-full origin-center
                    ${scrolled ? "bg-[#333333]" : "bg-white"}
                  `}
                />

                <motion.span
                  animate={{
                    opacity: menuOpen ? 0 : 1,
                    scaleX: menuOpen ? 0.4 : 1,
                  }}
                  transition={{
                    duration: 0.22,
                    ease: easeOut,
                  }}
                  className={`
                    block h-[1.5px] w-full
                    ${scrolled ? "bg-[#333333]" : "bg-white"}
                  `}
                />

                <motion.span
                  animate={
                    menuOpen
                      ? {
                          y: -8,
                          rotate: -45,
                        }
                      : {
                          y: 0,
                          rotate: 0,
                        }
                  }
                  transition={{
                    duration: 0.35,
                    ease: easeOut,
                  }}
                  className={`
                    block h-[1.5px] w-full origin-center
                    ${scrolled ? "bg-[#333333]" : "bg-white"}
                  `}
                />
              </span>
            </motion.button>
          </div>

          <AnimatePresence initial={false}>
            {menuOpen && (
              <motion.div
                variants={menuContainer}
                initial="closed"
                animate="open"
                exit="closed"
                className="overflow-hidden lg:hidden"
              >
                <motion.div
                  variants={menuContent}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className={`
                    mx-2 mb-2
                    overflow-hidden
                    rounded-[20px]
                    border
                    px-4 pb-4 pt-2
                    backdrop-blur-2xl
                    ${
                      scrolled
                        ? "border-black/10 bg-white/90"
                        : "border-white/15 bg-black/40"
                    }
                  `}
                >
                  <div>
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        custom={index}
                        variants={mobileItem}
                        initial="closed"
                        animate="open"
                        exit="closed"
                      >
                        <Link
                          href={`#${item.id}`}
                          onClick={handleNavClick}
                          className={`
                            flex
                            min-h-13.5
                            items-center
                            justify-between
                            border-b
                            text-[16px]
                            font-normal
                            tracking-[0.01em]
                            transition-all duration-200
                            ${
                              scrolled
                                ? "border-black/10 text-[#333333]"
                                : "border-white/12 text-white"
                            }
                          `}
                        >
                          <motion.span
                            whileHover={{ x: 3 }}
                            transition={{
                              duration: 0.2,
                              ease: easeOut,
                            }}
                          >
                            {item.label}
                          </motion.span>

                          <motion.span
                            whileHover={{
                              x: 5,
                              opacity: 0.7,
                            }}
                            transition={{
                              duration: 0.2,
                              ease: easeOut,
                            }}
                            className={`
                              text-[18px]
                              font-light
                              ${
                                scrolled
                                  ? "text-[#333333]/35"
                                  : "text-white/40"
                              }
                            `}
                          >
                            →
                          </motion.span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    type="button"
                    onClick={handleEnquireOpen}
                    initial={{
                      y: 12,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.04 + navItems.length * 0.045,
                      ease: easeOut,
                    }}
                    whileHover={{
                      scale: 1.015,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className={`
                      mt-4
                      flex min-h-13
                      w-full
                      items-center
                      justify-center
                      rounded-full
                      text-[15px]
                      font-medium
                      transition-colors duration-300
                      ${
                        scrolled
                          ? "bg-[#333333] text-white hover:bg-[#222222]"
                          : "bg-white text-[#333333] hover:bg-[#eeeeee]"
                      }
                    `}
                  >
                    Enquire
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </header>

      <Popup
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        title="Enquiry form"
        download={false}
      />
    </>
  );
}
