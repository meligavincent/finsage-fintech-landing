export function FinalCTA() {
  return (
    <section
      data-px="final-cta"
      className="
        final-cta
        relative isolate w-full overflow-hidden
        bg-white
        [font-family:Lato,Arial,sans-serif]

        min-h-[720px]

        lg:min-h-0
        lg:aspect-[1197/803]
      "
    >
      {/* ====================================================== */}
      {/* PAGE BACKGROUND                                        */}
      {/* ====================================================== */}

      <div
        data-px="final-cta.background"
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-white
        "
      />

      {/* ====================================================== */}
      {/* CANONICAL FRAME — 1197 × 803                           */}
      {/* ====================================================== */}

      <div
        data-px="final-cta.stage"
        className="
          relative z-10
          mx-auto flex min-h-[720px] w-full
          items-center justify-center
          px-5 py-16

          sm:px-8

          lg:absolute
          lg:inset-0
          lg:min-h-0
          lg:p-0

          lg:[container-type:inline-size]
          lg:[--u:0.083542189cqw]
        "
      >
        {/* ==================================================== */}
        {/* CTA PANEL                                            */}
        {/* ==================================================== */}

        <div
          data-px="final-cta.panel"
          className="
            relative
            flex w-full max-w-[970px]
            min-h-[417px]
            items-center justify-center
            overflow-hidden

            rounded-[7px]
            bg-[#010001]

            lg:absolute
            lg:left-[calc(var(--u)*116)]
            lg:top-[calc(var(--u)*193)]
            lg:h-[calc(var(--u)*417)]
            lg:w-[calc(var(--u)*970)]

            lg:max-w-none
            lg:min-h-0
            lg:rounded-[calc(var(--u)*7)]
          "
        >
          {/* ================================================== */}
          {/* PANEL BACKGROUND                                   */}
          {/* ================================================== */}

          <div
            data-px="final-cta.panel.background"
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-0
              bg-[#010001]
            "
          >
            {/* BLUE FIELD */}

            <div
              data-motion="final-cta-blue-field"
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 51.5% 144% at 5.9% -12%, " +
                  "rgb(69,146,241) 0%, " +
                  "rgb(66,141,234) 16%, " +
                  "rgb(60,127,209) 24%, " +
                  "rgb(47,95,161) 32%, " +
                  "rgb(33,60,108) 40%, " +
                  "rgb(23,37,68) 48%, " +
                  "rgb(14,21,40) 56%, " +
                  "rgb(8,11,21) 64%, " +
                  "rgb(4,4,10) 72%, " +
                  "rgba(2,1,3,0.82) 86%, " +
                  "rgba(1,0,1,0) 100%)",
              }}
            />

            {/* PURPLE FIELD */}

            <div
              data-motion="final-cta-purple-field"
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 31% 49% at 95% 109%, " +
                  "rgb(95,62,82) 0%, " +
                  "rgb(65,42,56) 30%, " +
                  "rgb(37,23,32) 40%, " +
                  "rgb(17,10,15) 50%, " +
                  "rgb(6,3,5) 60%, " +
                  "rgba(1,0,1,0) 72%)",
              }}
            />
          </div>

          {/* ================================================== */}
          {/* CONTENT                                            */}
          {/* ================================================== */}

          <div
            data-px="final-cta.content"
            className="
              relative z-10
              flex w-full flex-col
              items-center
              px-6 py-14
              text-center

              lg:absolute
              lg:left-[calc(var(--u)*484)]
              lg:top-[calc(var(--u)*65)]
              lg:w-[calc(var(--u)*620)]
              lg:-translate-x-1/2
              lg:p-0
            "
          >
            {/* ================================================= */}
            {/* TITLE                                             */}
            {/* ================================================= */}

            <h2
              data-px="final-cta.title"
              className="
                max-w-[650px]
                text-[42px]
                font-black
                leading-[0.99]
                tracking-[-0.045em]
                text-white

                sm:text-[52px]

                lg:relative
                lg:left-[calc(var(--u)*20)]
                lg:top-[calc(var(--u)*-1)]

                lg:w-[calc(var(--u)*600)]
                lg:max-w-none

                lg:text-[calc(var(--u)*58)]
                lg:leading-[calc(var(--u)*60)]
                lg:tracking-[-0.055em]
              "
            >
              Trade smarter, let
              <br />
              AI handle the market.
            </h2>

            {/* ================================================= */}
            {/* DESCRIPTION — ALREADY PASS                        */}
            {/* ================================================= */}

            <p
              data-px="final-cta.description"
              className="
                mt-7
                max-w-[540px]

                text-[13px]
                leading-[20px]
                text-white/95

                lg:mt-[calc(var(--u)*26)]
                lg:w-[calc(var(--u)*520)]
                lg:max-w-none

                lg:text-[calc(var(--u)*13)]
                lg:leading-[calc(var(--u)*20)]
                lg:tracking-[0.005em]
              "
            >
              As you navigate through overwhelming data and emotions, our AI
              agents provide in-depth
              <br className="hidden lg:block" />
              research across stocks, crypto, forex, and ETFs. They help you
              make confident, rational
              <br className="hidden lg:block" />
              trading and investment decisions.
            </p>

            {/* ================================================= */}
            {/* BUTTON — ALREADY PASS                             */}
            {/* ================================================= */}

            <a
              data-px="final-cta.button"
              href="#"
              className="
                mt-12
                inline-flex

                h-[38px]
                items-center justify-center

                rounded-[11px]
                bg-white
                px-6

                text-[13px]
                font-bold
                leading-none
                text-black

                transition-transform
                duration-200
                hover:scale-[1.03]

                lg:mt-[calc(var(--u)*46)]
                lg:h-[calc(var(--u)*35)]
                lg:w-[calc(var(--u)*110)]

                lg:rounded-[calc(var(--u)*11)]
                lg:px-0

                lg:text-[calc(var(--u)*13)]
              "
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
