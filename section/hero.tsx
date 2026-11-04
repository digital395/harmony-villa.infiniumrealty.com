"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Popup from "@/components/popup";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const locationRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [showPopup, setShowPopup] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const imageWrap = imageWrapRef.current;
    const image = imageRef.current;

    const location = locationRef.current;
    const heading = headingRef.current;
    const description = descriptionRef.current;
    const price = priceRef.current;
    const cta = ctaRef.current;

    if (
      !section ||
      !imageWrap ||
      !image ||
      !location ||
      !heading ||
      !description ||
      !price ||
      !cta
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /*
       * =========================================================
       * MOBILE / TABLET
       * =========================================================
       */

      mm.add("(max-width: 1023px)", () => {
        const headingLines = heading.querySelectorAll("span");

        gsap.set(
          [
            location,
            description,
            price,
            cta,
          ],
          {
            opacity: 0,
            y: 25,
          }
        );

        gsap.set(headingLines, {
          opacity: 0,
          y: 40,
        });

        gsap.set(imageWrap, {
          opacity: 0,
          y: 30,
        });

        gsap.set(image, {
          scale: 1.1,
        });

        const tl = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        tl.to(location, {
          opacity: 1,
          y: 0,
          duration: 0.55,
        })

          .to(
            headingLines,
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.12,
              ease: "power3.out",
            },
            "-=0.25"
          )

          .to(
            description,
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
            },
            "-=0.35"
          )

          .to(
            price,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.65,
              ease: "back.out(1.4)",
            },
            "-=0.3"
          )

          .to(
            cta,
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
            },
            "-=0.3"
          )

          .to(
            imageWrap,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
            },
            "-=0.35"
          )

          .to(
            image,
            {
              scale: 1,
              duration: 1.4,
              ease: "power2.out",
            },
            "-=0.8"
          );

        return () => {
          tl.kill();
        };
      });

      /*
       * =========================================================
       * DESKTOP
       * =========================================================
       */

      mm.add("(min-width: 1024px)", () => {
        const headingLines = heading.querySelectorAll("span");

        /*
         * -------------------------------------------------------
         * INITIAL STATE
         * -------------------------------------------------------
         */

        gsap.set(location, {
          opacity: 0,
          y: 20,
        });

        gsap.set(headingLines, {
          opacity: 0,
          y: 55,
        });

        gsap.set(description, {
          opacity: 0,
          y: 25,
        });

        gsap.set(price, {
          opacity: 0,
          y: 25,
          scale: 0.96,
        });

        gsap.set(cta, {
          opacity: 0,
          y: 20,
        });

        gsap.set(imageWrap, {
          opacity: 0,
        });

        gsap.set(image, {
          scale: 1.08,
        });

        /*
         * -------------------------------------------------------
         * INTRO
         * -------------------------------------------------------
         */

        const introTl = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        introTl

          .to(location, {
            opacity: 1,
            y: 0,
            duration: 0.6,
          })

          .to(
            headingLines,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.14,
              ease: "power3.out",
            },
            "-=0.25"
          )

          .to(
            description,
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
            },
            "-=0.4"
          )

          .to(
            price,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              ease: "back.out(1.35)",
            },
            "-=0.35"
          )

          .to(
            cta,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
            },
            "-=0.35"
          )

          .to(
            imageWrap,
            {
              opacity: 1,
              duration: 1,
            },
            "-=0.55"
          )

          .to(
            image,
            {
              scale: 1,
              duration: 1.6,
              ease: "power2.out",
            },
            "-=0.8"
          );

        /*
         * -------------------------------------------------------
         * SCROLL TRANSITION
         * -------------------------------------------------------
         */

        const scrollTl = gsap.timeline({
          paused: true,
        });

        scrollTl

          .to(
            [location, headingLines, description, price, cta],
            {
              opacity: 0,
              y: -30,
              duration: 0.35,
              stagger: 0.02,
              ease: "power2.in",
            },
            0
          )

          .to(
            imageWrap,
            {
              right: 0,
              top: 0,
              width: "100vw",
              height: "100vh",
              duration: 0.9,
              ease: "power3.inOut",
            },
            0
          )

          .to(
            image,
            {
              scale: 1.08,
              duration: 0.9,
              ease: "power2.inOut",
            },
            0
          );

        /*
         * -------------------------------------------------------
         * SCROLLTRIGGER
         * -------------------------------------------------------
         */

        const st = ScrollTrigger.create({
          trigger: section,

          start: "top top",
          end: "+=1200",

          pin: true,
          scrub: 1,

          anticipatePin: 1,
          invalidateOnRefresh: true,

          onUpdate: (self) => {
            const progress = self.progress;

            scrollTl.progress(progress);

            /*
             * Return to exact original state
             */

            if (progress <= 0.001) {
              scrollTl.pause(0);

              gsap.set(
                [
                  location,
                  headingLines,
                  description,
                  price,
                  cta,
                ],
                {
                  opacity: 1,
                  y: 0,
                }
              );

              gsap.set(imageWrap, {
                opacity: 1,
                right: 0,
                top: 0,
                width: "50%",
                height: "100vh",
              });

              gsap.set(image, {
                scale: 1,
              });
            }

            /*
             * Exact fullscreen state
             */

            if (progress >= 0.999) {
              scrollTl.progress(1);

              gsap.set(
                [
                  location,
                  headingLines,
                  description,
                  price,
                  cta,
                ],
                {
                  opacity: 0,
                  y: -30,
                }
              );

              gsap.set(imageWrap, {
                right: 0,
                top: 0,
                width: "100vw",
                height: "100vh",
              });

              gsap.set(image, {
                scale: 1.08,
              });
            }
          },
        });

        return () => {
          st.kill();
          scrollTl.kill();
          introTl.kill();
        };
      });

      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="
          relative
          w-full
          overflow-hidden
          bg-[#e5e5e3]
        "
      >
        <div
          className="
            flex
            min-h-screen
            w-full
            flex-col

            lg:flex-row
          "
        >
          {/* LEFT CONTENT */}

          <div
            className="
              flex
              w-full
              flex-col
              justify-center
              bg-[#e5e5e3]
              px-6
              py-12

              sm:px-10
              sm:py-15

              md:px-13.75
              md:py-17.5

              lg:h-screen
              lg:w-[50%]
              lg:px-[7vw]
              lg:py-0
            "
          >
            <div className="w-full max-w-[620px]">

              {/* LOCATION */}

              <p
                ref={locationRef}
                className="
                  mb-4
                  text-[10px]
                  font-medium
                  leading-3.5
                  tracking-[0.8px]
                  text-[#3f3f3f]

                  sm:text-[11px]

                  lg:mb-4.5
                  lg:text-[13px]
                  lg:leading-4.25
                "
              >
                OFF AVINASHI ROAD · COIMBATORE
              </p>

              {/* HEADING */}

              <h1
                ref={headingRef}
                className="m-0"
              >
                <span
                  className="
                    block
                    text-[30px]
                    font-bold
                    leading-8.5
                    tracking-[-1.2px]
                    text-[#171717]

                    sm:text-[38px]
                    sm:leading-10.5

                    md:text-[44px]
                    md:leading-12

                    lg:text-[54px]
                    lg:leading-14
                    lg:tracking-[-2px]

                    xl:text-[62px]
                    xl:leading-15.75
                  "
                >
                  WHERE LIFE FINDS
                </span>

                <span
                  className="
                    mt-2
                    block
                    text-[30px]
                    font-bold
                    leading-8.5
                    tracking-[-1.2px]
                    text-[#5f5f5f]

                    sm:text-[38px]
                    sm:leading-10.5

                    md:text-[44px]
                    md:leading-12

                    lg:text-[54px]
                    lg:leading-14
                    lg:tracking-[-2px]

                    xl:text-[62px]
                    xl:leading-15.75
                  "
                >
                  IT’S OWN RHYTHM
                </span>
              </h1>

              {/* DESCRIPTION */}

              <p
                ref={descriptionRef}
                className="
                  mx-auto
                  mt-5
                  max-w-[520px]
                  text-[12px]
                  font-normal
                  leading-4.5
                  text-[#4f4f4f]

                  sm:mt-5
                  sm:text-[14px]
                  sm:leading-5.25

                  lg:mx-0
                  lg:mt-5.5
                  lg:max-w-[590px]
                  lg:text-[15px]
                  lg:leading-5.75

                  xl:text-[16px]
                  xl:leading-6
                "
              >
                Villas in thoughtfully planned community.
                90 residences across 3.22 acres, minutes from the airport and
                the Kalapatti IT corridor.
              </p>

              {/* PRICE */}

              <div
                ref={priceRef}
                className="
                  mt-6
                  flex
                  w-full
                  justify-center

                  lg:mt-7
                  lg:justify-start
                "
              >
                <div
                  className="
                    flex
                    h-[82px]
                    w-[165px]
                    flex-col
                    justify-center
                    rounded-[9px]
                    border
                    border-[#bdbdb8]
                    bg-white
                    px-[12px]
                    text-left
                    shadow-[0_6px_20px_rgba(0,0,0,0.05)]

                    sm:h-[88px]
                    sm:w-[185px]
                    sm:px-[14px]

                    lg:h-[102px]
                    lg:w-[220px]
                    lg:rounded-[11px]
                    lg:px-[17px]

                    xl:h-[112px]
                    xl:w-[235px]
                  "
                >
                  <span
                    className="
                      text-[10px]
                      leading-[14px]
                      text-[#5f5f5f]

                      sm:text-[12px]
                      sm:leading-[16px]

                      lg:text-[13px]
                      lg:leading-[18px]

                      xl:text-[14px]
                    "
                  >
                    3 BHK Villas from
                  </span>

                  <span
                    className="
                      mt-[3px]
                      text-[22px]
                      font-bold
                      leading-[27px]
                      tracking-[-0.5px]
                      text-[#2f2f2f]

                      sm:text-[27px]
                      sm:leading-[31px]

                      lg:text-[32px]
                      lg:leading-[36px]

                      xl:text-[35px]
                    "
                  >
                    ₹3.2 Cr*
                  </span>
                </div>
              </div>

              {/* CTA */}

              <div
                ref={ctaRef}
                className="
                  mt-5
                  flex
                  justify-center

                  lg:mt-6
                  lg:justify-start
                "
              >
                <button
                  type="button"
                  onClick={() => setShowPopup(true)}
                  className="
                    h-[44px]
                    rounded-[7px]
                    bg-[#2f2f2f]
                    px-[20px]
                    text-[10px]
                    font-semibold
                    tracking-[0.5px]
                    text-white
                    transition-all
                    duration-300

                    hover:-translate-y-[2px]
                    hover:bg-[#171717]
                    hover:shadow-[0_8px_20px_rgba(0,0,0,0.16)]

                    sm:h-[46px]
                    sm:px-[23px]
                    sm:text-[11px]

                    lg:h-[50px]
                    lg:rounded-[8px]
                    lg:px-[27px]
                    lg:text-[12px]
                  "
                >
                  BOOK A SITE VISIT
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}

          <div
            ref={imageWrapRef}
            className="
              relative
              h-[50vh]
              min-h-[330px]
              w-full
              overflow-hidden

              sm:h-[56vh]
              sm:min-h-[400px]

              md:h-[60vh]

              lg:absolute
              lg:right-0
              lg:top-0
              lg:h-screen
              lg:w-[50%]
              lg:min-h-0
            "
          >
            <Image
              ref={imageRef}
              src="/images/hero.webp"
              alt="Harmony residential community"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="
                object-cover
                object-center
                will-change-transform
              "
            />
          </div>
        </div>
      </section>

      <Popup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        title="Download Brochure"
        download={true}
      />
    </>
  );
}