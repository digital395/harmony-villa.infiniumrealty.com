"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Popup from "./popup";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "About", id: "about" },
  { label: "Details", id: "details" },
  { label: "Amenities", id: "amenities" },
  { label: "Locations", id: "locations" },
  { label: "Contact", id: "contact" },
];

const easeOut = [0.16, 1, 0.3, 1] as const;
// const easeSmooth = [0.22, 1, 0.36, 1] as const;

// const menuContainer = {
//   closed: {
//     opacity: 0,
//     height: 0,
//     transition: {
//       opacity: {
//         duration: 0.18,
//         ease: easeOut,
//       },
//       height: {
//         duration: 0.45,
//         ease: easeSmooth,
//       },
//     },
//   },

//   open: {
//     opacity: 1,
//     height: "auto",
//     transition: {
//       height: {
//         duration: 0.5,
//         ease: easeSmooth,
//       },
//       opacity: {
//         duration: 0.25,
//         delay: 0.04,
//         ease: easeOut,
//       },
//     },
//   },
// };

// const menuContent = {
//   closed: {
//     y: -10,
//     opacity: 0,
//     scale: 0.985,
//   },

//   open: {
//     y: 0,
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.42,
//       ease: easeOut,
//     },
//   },
// };

// const mobileItem = {
//   closed: {
//     y: 12,
//     opacity: 0,
//   },

//   open: (index: number) => ({
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.38,
//       delay: 0.04 + index * 0.045,
//       ease: easeOut,
//     },
//   }),
// };

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

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

const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string
) => {
  e.preventDefault();
  setMenuOpen(false);

  if (pathname === "/") {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    return;
  }

  router.push(`/#${id}`);
};

  const handleEnquireOpen = () => {
    setMenuOpen(false);
    setEnquireOpen(true);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-0 pt-0 sm:px-5 sm:pt-4 lg:px-8 lg:pt-5">
        <motion.nav
          initial={false}
          animate={{
            backgroundColor: scrolled
              ? "rgba(255,255,255,0.78)"
              : "rgba(255,255,255,255)",
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
  rounded-none
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
  onClick={() => setMenuOpen(false)}
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
                    h-15 w-auto object-contain
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
  href={`/#${item.id}`}
  onClick={(e) => handleNavClick(e, item.id)}
                    className={`
                      group relative
                      rounded-full
                      px-4 py-2.5
                      text-[16px]
                      font-normal
                      tracking-[0.01em]
                      transition-all duration-300
                           "text-[#333333]/90 hover:bg-black/5 hover:text-[#222222]"
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
  whileHover="hover"
  whileTap={{ scale: 0.97 }}
  initial="rest"
  animate="rest"
  className="
    group ml-2
    flex items-center gap-3
    rounded-full
    border border-[#333333]/50
    bg-transparent
    px-5 py-2.5
                      text-[16px]
    font-medium
    tracking-[0.03em]
    text-[#333333]
    shadow-[0_3px_14px_rgba(0,0,0,0.06)]
    transition-all duration-300
    hover:border-[#333333]
    hover:bg-[#333333]
    hover:text-white
    hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]
  "
>
  <span>Enquire Now</span>

<motion.span
  variants={{
    rest: {
      x: 0,
      y: 0,
    },
    hover: {
      x: 2,
      y: -2,
    },
  }}
  transition={{
    duration: 0.25,
    ease: easeOut,
  }}
  className="
    flex h-6 w-6
    items-center justify-center
    rounded-full
    border border-[#333333]/20
    group-hover:border-white/30
  "
>
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-3.5 w-3.5"
  >
    <path
      d="M3 13L13 3M5 3H13V11"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</motion.span>
</motion.button>
              </div>
            </div>
<motion.a
  href="tel:+919787000000"
  whileHover={{ scale: 1.035 }}
  whileTap={{ scale: 0.965 }}
  transition={{
    duration: 0.25,
    ease: easeOut,
  }}
  className="
    relative z-30
    flex items-center gap-2
    rounded-full
    border border-[#555555]
    bg-white
    px-4 py-2.5
    text-[13px]
    font-medium
    tracking-[0.02em]
    text-[#444444]
    shadow-[0_4px_14px_rgba(0,0,0,0.08)]
    transition-all duration-300
    hover:bg-[#444444]
    hover:text-white
    hover:shadow-[0_6px_18px_rgba(0,0,0,0.14)]
    lg:hidden
  "
  aria-label="Call now"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-4 w-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.18c.967 0 1.81.62 2.114 1.537l.72 2.16a2.25 2.25 0 01-.516 2.28l-1.42 1.42a16.5 16.5 0 005.774 5.774l1.42-1.42a2.25 2.25 0 012.28-.516l2.16.72A2.25 2.25 0 0120.25 18v2.18c0 1.243-1.007 2.25-2.25 2.25C9.99 22.43 1.57 14.01 1.57 4.75"
    />
  </svg>

  <span>Call Now</span>
</motion.a>
            {/* <motion.button
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
            </motion.button> */}
          </div>

          {/* <AnimatePresence initial={false}>
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
          </AnimatePresence> */}
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
