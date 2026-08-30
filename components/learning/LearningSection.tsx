const learningCards = [
  {
    title: "Video Tutorials",
    description: (
      <>
        How-to videos on AI tools, features,
        <br />
        and smarter investing.
      </>
    ),
    cta: "Start Learning",
    variant: "video",
  },
  {
    title: "Academy",
    description: (
      <>
        Learning center with tutorials, glossary,
        <br />
        help docs, and expert tips.
      </>
    ),
    cta: "Start Learning",
    variant: "academy",
  },
  {
    title: "Market Lens",
    description: (
      <>
        Actionable ideas and insights across
        <br />
        stocks, ETFs, crypto, and forex.
      </>
    ),
    cta: "Start Learning",
    variant: "lens",
  },
  {
    title: "Smart Investing",
    description: (
      <>
        Explore AI-driven tools and insights for
        <br />
        more confident investing decisions.
      </>
    ),
    cta: "Start Learning",
    variant: "smart",
  },
];

export function LearningSection() {
  return (
    <section
      data-px="learning"
      className="
        learning
        relative isolate w-full overflow-hidden
        bg-[#fdfdfd]
        [font-family:Lato,Arial,sans-serif]

        min-h-screen

        lg:min-h-0
        lg:aspect-[1197/803]
      "
    >
      {/* ====================================================== */}
      {/* BACKGROUND                                             */}
      {/* ====================================================== */}

      <div
        data-px="learning.background"
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-0
          bg-[#fdfdfd]
        "
      />

      {/* ====================================================== */}
      {/* CANONICAL 1197px DESIGN FRAME                          */}
      {/* ====================================================== */}

      <div
        data-px="learning.stage"
        className="
          relative z-10 mx-auto w-full
          px-5 py-14
          sm:px-8

          lg:absolute lg:inset-0
          lg:p-0
          lg:[container-type:inline-size]
          lg:[--u:0.083542189cqw]
        "
      >
        {/* ==================================================== */}
        {/* EYEBROW                                              */}
        {/* ==================================================== */}

        <div
          data-px="learning.label"
          className="
            flex items-center gap-2

            lg:absolute
            lg:left-[calc(var(--u)*116)]
            lg:top-[calc(var(--u)*110)]
            lg:gap-[calc(var(--u)*7)]
          "
        >
          <span
            aria-hidden="true"
            className="
              h-[7px] w-[7px]
              shrink-0 rounded-full bg-black

              lg:h-[calc(var(--u)*7)]
              lg:w-[calc(var(--u)*7)]
            "
          />

          <span
            className="
              text-[13px] leading-none text-black

              lg:text-[calc(var(--u)*13)]
            "
          >
            Insights &amp; Learning
          </span>
        </div>

        {/* ==================================================== */}
        {/* INTRO                                                */}
        {/* ==================================================== */}

        <div
          data-px="learning.header"
          className="
            mt-14 grid grid-cols-1 gap-7

            lg:absolute
            lg:left-[calc(var(--u)*117)]
            lg:top-[calc(var(--u)*177)]
            lg:mt-0
            lg:w-[calc(var(--u)*966)]
            lg:grid-cols-[calc(var(--u)*500)_calc(var(--u)*402)]
            lg:justify-between
            lg:gap-0
          "
        >
          <h2
            data-px="learning.title"
            className="
              max-w-[550px]
              text-[40px] font-black
              leading-[1.04]
              tracking-[-0.045em]
              text-black

              sm:text-[48px]

              lg:w-[calc(var(--u)*500)]
              lg:max-w-none
              lg:text-[calc(var(--u)*46)]
              lg:leading-[calc(var(--u)*51)]
            "
          >
            Expert Insights, AI Tools,
            <br />
            Smarter Investing.
          </h2>

          <p
            data-px="learning.description"
            className="
              max-w-[430px]
              text-[13px]
              leading-[19px]
              text-[#646464]

              lg:mt-[calc(var(--u)*64)]
              lg:w-[calc(var(--u)*402)]
              lg:max-w-none
              lg:text-[calc(var(--u)*13)]
              lg:leading-[calc(var(--u)*19)]
            "
          >
            Discover expert analysis, AI-driven guidance, and practical resources
            <br className="hidden lg:block" />
            designed to help you invest smarter and grow confidently.
          </p>
        </div>

        {/* ==================================================== */}
        {/* CAROUSEL / CARD RAIL                                 */}
        {/* ==================================================== */}

        <div
          data-px="learning.carousel"
          className="
            mt-12 w-full overflow-x-auto
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden

            lg:absolute
            lg:left-[calc(var(--u)*116)]
            lg:top-[calc(var(--u)*315)]
            lg:mt-0
            lg:w-[calc(100%-var(--u)*116)]
            lg:overflow-hidden
          "
        >
          <div
            data-px="learning.track"
            className="
              flex w-max gap-2

              lg:gap-[calc(var(--u)*7)]
            "
          >
            {learningCards.map((card, index) => (
              <article
                key={card.title}
                data-px={`learning.card.${index + 1}`}
                className={`
                  relative
                  h-[396px] w-[318px]
                  shrink-0 overflow-hidden
                  rounded-[6px]

                  lg:h-[calc(var(--u)*396)]
                  lg:w-[calc(var(--u)*318)]
                  lg:rounded-[calc(var(--u)*6)]

                  ${
                    card.variant === "video"
                      ? "bg-[#faa6d9]"
                      : card.variant === "academy"
                        ? "bg-[#4d82f2]"
                        : card.variant === "lens"
                          ? "bg-[#31d0f6]"
                          : "bg-[#e5aa68]"
                  }
                `}
              >
                {/* ============================================== */}
                {/* CARD COPY                                      */}
                {/* ============================================== */}

                <div
                  data-px={`learning.card.${index + 1}.copy`}
                  className="
                    absolute left-[33px] top-[34px]
                    z-20

                    lg:left-[calc(var(--u)*33)]
                    lg:top-[calc(var(--u)*34)]
                  "
                >
                  <h3
                    data-px={`learning.card.${index + 1}.title`}
                    className="
                      whitespace-nowrap
                      text-[28px] font-black
                      leading-[32px]
                      tracking-[-0.035em]
                      text-black

                      lg:text-[calc(var(--u)*28)]
                      lg:leading-[calc(var(--u)*32)]
                    "
                  >
                    {card.title}
                  </h3>

                  <p
                    data-px={`learning.card.${index + 1}.description`}
                    className="
                      mt-[7px]
                      text-[13px]
                      leading-[20px]
                      text-black

                      lg:mt-[calc(var(--u)*7)]
                      lg:text-[calc(var(--u)*13)]
                      lg:leading-[calc(var(--u)*20)]
                    "
                  >
                    {card.description}
                  </p>
                </div>

                {/* ============================================== */}
                {/* GEOMETRIC FIGURE                               */}
                {/* ============================================== */}

                <div
                  data-px={`learning.card.${index + 1}.figure`}
                  aria-hidden="true"
                  className="absolute inset-0 z-10"
                >
                  <LearningFigure variant={card.variant} />
                </div>

                {/* ============================================== */}
                {/* CTA                                            */}
                {/* ============================================== */}

                <a
                  data-px={`learning.card.${index + 1}.cta`}
                  href="#"
                  className="
                    absolute bottom-[34px] left-[33px]
                    z-20
                    inline-flex items-center
                    text-[13px] font-bold
                    leading-none text-black

                    lg:bottom-[calc(var(--u)*34)]
                    lg:left-[calc(var(--u)*33)]
                    lg:text-[calc(var(--u)*13)]
                  "
                >
                  {card.cta}
                  <span
                    aria-hidden="true"
                    className="
                      ml-[5px]

                      lg:ml-[calc(var(--u)*5)]
                    "
                  >
                    →
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/* GEOMETRIC FIGURES                                            */
/* ============================================================ */

function LearningFigure({ variant }: { variant: string }) {
  if (variant === "video") {
    return (
      <svg
        viewBox="0 0 318 396"
        preserveAspectRatio="none"
        className="h-full w-full"
        fill="none"
      >
        {/*
          Reference geometry:
          vertical ≈ x181
          horizontal ≈ y222
          quarter curve from bottom-left toward top-right
        */}

        <path
          data-motion="video-axis"
          d="M181 396V222H318"
          stroke="black"
          strokeWidth="1.15"
          vectorEffect="non-scaling-stroke"
        />

        <path
          data-motion="video-curve"
          d="
            M181 396
            C181 300
             240 222
             318 222
          "
          stroke="black"
          strokeWidth="1.15"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }

  if (variant === "academy") {
    return (
      <svg
        viewBox="0 0 318 396"
        preserveAspectRatio="none"
        className="h-full w-full"
        fill="none"
      >
        {/*
          Large construction circle.
          Center intentionally below/right.
        */}

        <circle
          data-motion="academy-outer"
          cx="269"
          cy="331"
          r="105"
          stroke="black"
          strokeWidth="1.15"
          vectorEffect="non-scaling-stroke"
        />

        {/* vertical construction line */}

        <path
          data-motion="academy-spoke-y"
          d="M277 0V331"
          stroke="black"
          strokeWidth="1.15"
          vectorEffect="non-scaling-stroke"
        />

        {/* horizontal construction line */}

        <path
          data-motion="academy-spoke-x"
          d="M148 331H318"
          stroke="black"
          strokeWidth="1.15"
          vectorEffect="non-scaling-stroke"
        />

        {/* inner circle */}

        <circle
          data-motion="academy-inner"
          cx="269"
          cy="322"
          r="35"
          stroke="black"
          strokeWidth="1.15"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }

  if (variant === "lens") {
    return (
      <svg
        viewBox="0 0 318 396"
        preserveAspectRatio="none"
        className="h-full w-full"
        fill="none"
      >
        {/* ============================================ */}
        {/* SMALL CONCENTRIC / SPIRAL FIGURE             */}
        {/* ============================================ */}

        <circle
          data-motion="market-small-circle"
          cx="131"
          cy="239"
          r="56"
          stroke="black"
          strokeWidth="1.15"
          vectorEffect="non-scaling-stroke"
        />

        <path
          data-motion="market-spiral"
          d="
            M108 269
            C92 256
             91 229
             105 212
            C120 194
             149 193
             165 208
            C180 222
             182 247
             169 264
          "
          stroke="black"
          strokeWidth="1.15"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* horizontal axis */}

        <path
          data-motion="market-axis"
          d="M137 239H318"
          stroke="black"
          strokeWidth="1.15"
          vectorEffect="non-scaling-stroke"
        />

        {/* ============================================ */}
        {/* LARGE RIGHT CIRCLE                           */}
        {/* ============================================ */}

        <circle
          data-motion="market-large-circle"
          cx="320"
          cy="239"
          r="95"
          stroke="black"
          strokeWidth="1.15"
          vectorEffect="non-scaling-stroke"
        />

        {/* upper diagonal */}

        <path
          data-motion="market-diagonal-top"
          d="M247 159L318 230"
          stroke="black"
          strokeWidth="1.15"
          vectorEffect="non-scaling-stroke"
        />

        {/* lower diagonal */}

        <path
          data-motion="market-diagonal-bottom"
          d="M247 319L318 248"
          stroke="black"
          strokeWidth="1.15"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 318 396"
      preserveAspectRatio="none"
      className="h-full w-full"
      fill="none"
    >
      {/*
        Fourth card is mostly outside the canonical viewport.
        Keep its construction deliberately subtle for now.
      */}

      <circle
        data-motion="smart-circle"
        cx="258"
        cy="275"
        r="86"
        stroke="black"
        strokeWidth="1.15"
        vectorEffect="non-scaling-stroke"
      />

      <path
        data-motion="smart-axis"
        d="M172 275H318"
        stroke="black"
        strokeWidth="1.15"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
