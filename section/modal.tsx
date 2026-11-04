import Image from "next/image";

export default function ModelVillaCTA() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================== */}
      <div className="absolute inset-0">
        <Image
          src="/images/model-villa.png"
          alt="Harmony model villa"
          fill
          priority={false}
          sizes="100vw"
          className="
            object-cover
            object-center
            sm:object-center
          "
        />
      </div>

      {/* =========================================================
          DARK OVERLAY
      ========================================================== */}
      <div
        className="
          absolute
          inset-0
          bg-black/50
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}
      <div
        className="
          relative
          z-10
          flex
          min-h-[430px]
          w-full
          flex-col
          items-center
          justify-center
          px-[24px]
          text-center
          sm:min-h-[470px]
          sm:px-[40px]
          lg:min-h-[500px]
          lg:px-[50px]
        "
      >
        {/* SMALL LABEL */}
        <div
          className="
            relative
            text-[10px]
            font-semibold
            leading-[14px]
            text-white
            sm:text-[11px]
          "
        >
          Walk through the model villa

          {/* Small underline */}
          <span
            className="
              absolute
              -bottom-[8px]
              left-1/2
              h-[1px]
              w-[42px]
              -translate-x-1/2
              bg-white/70
            "
          />
        </div>

        {/* MAIN HEADING */}
        <h2
          className="
            m-0
            mt-[19px]
            max-w-[750px]
            text-[16px]
            font-bold
            leading-[23px]
            text-white
            sm:text-[18px]
            sm:leading-[25px]
            lg:text-[17px]
            lg:leading-[24px]
          "
        >
          See the finish, the light and the layout in person. Pick a slot that
          suits you.
        </h2>

        {/* CTA */}
        <button
          type="button"
          className="
            mt-[25px]
            flex
            h-[37px]
            items-center
            justify-center
            rounded-[7px]
            bg-[#007c85]
            px-[13px]
            text-[10px]
            font-semibold
            leading-none
            text-white
            transition-colors
            duration-200
            hover:bg-[#006d74]
            focus:outline-none
            focus:ring-2
            focus:ring-[#007c85]
            focus:ring-offset-2
            focus:ring-offset-black
          "
        >
          BOOK A SITE VISIT
        </button>
      </div>
    </section>
  );
}