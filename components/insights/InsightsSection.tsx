const tabs = [
  "Signals",
  "Charts",
  "Valuation",
  "Sentiment",
  "Opportunities",
];

const integrations = ["API", "Dashboard", "Excel", "Mobile"];

const pipeline = [
  {
    title: "Market Data",
    status: "Complete",
    description: "Live price feeds, volume & order book",
    active: true,
  },
  {
    title: "AI Analysis",
    status: "Processing",
    description: "Live price feeds, volume & order book",
    active: true,
  },
  {
    title: "Trade Signals",
    status: "Waiting",
    description: "Generate buy/sell recommendations",
    active: false,
  },
];

export function InsightsSection() {
  return (
    <section
      data-px="insights"
      className="
        insights relative isolate
        min-h-[100svh] w-full overflow-hidden bg-white
        lg:h-[100svh]
        [font-family:Lato,Arial,sans-serif]
      "
    >
      {/*
        ============================================================
        BACKGROUND DESIGN FRAME
        ------------------------------------------------------------
        Reference: 1202 × 806
        Mode: COVER

        This fills the viewport without stretching the reference
        coordinate system independently on X/Y.
        ============================================================
      */}
      <div
        aria-hidden="true"
        data-px="insights.background"
        className="
          pointer-events-none absolute left-1/2 top-0 z-0
          aspect-[1202/806]
          w-[max(100vw,calc(100svh*1.4913151365))]
          -translate-x-1/2
          [container-type:inline-size]
          [--u:0.0831946755cqw]
        "
      >
        <div
          className="
            absolute inset-x-0 top-0
            h-[calc(var(--u)*330)]
            bg-[radial-gradient(ellipse_at_16%_0%,rgba(255,214,236,0.72)_0%,rgba(255,226,241,0.35)_32%,transparent_65%),radial-gradient(ellipse_at_88%_2%,rgba(214,233,255,0.78)_0%,rgba(232,242,255,0.42)_34%,transparent_67%)]
          "
        />
      </div>

      {/*
        ============================================================
        CONTENT DESIGN FRAME
        ------------------------------------------------------------
        Reference: 1202 × 806
        Mode: CONTAIN

        --u = one reference pixel.

        At 1202 × 806:
          1u = 1px

        On larger/smaller desktop screens every coordinate,
        dimension, spacing and font scales by exactly the same factor.
        ============================================================
      */}
      <div
        className="
          relative z-10 mx-auto w-full
          px-5 py-12
          sm:px-8
          lg:absolute
          lg:left-1/2 lg:top-1/2
          lg:aspect-[1202/806]
          lg:w-[min(100vw,calc(100svh*1.4913151365))]
          lg:-translate-x-1/2 lg:-translate-y-1/2
          lg:p-0
          lg:[container-type:inline-size]
          lg:[--u:0.0831946755cqw]
        "
      >
        {/* ====================================================== */}
        {/* HEADER                                                 */}
        {/* ====================================================== */}

        <div
          data-px="insights.header"
          className="
            mx-auto flex w-full max-w-[968px]
            flex-col items-center

            lg:absolute
            lg:left-[calc(var(--u)*117)]
            lg:top-0
            lg:block
            lg:h-[calc(var(--u)*257)]
            lg:w-[calc(var(--u)*968)]
            lg:max-w-none
          "
        >
          <h2
            data-px="insights.title"
            className="
              text-center text-[36px] font-black
              leading-[0.98] tracking-[-0.05em] text-black
              sm:text-[42px]

              lg:absolute
              lg:left-1/2
              lg:top-[calc(var(--u)*56)]
              lg:w-max
              lg:max-w-none
              lg:-translate-x-1/2
              lg:text-[calc(var(--u)*45)]
              lg:leading-[calc(var(--u)*50)]
              lg:tracking-[-0.05em]
            "
          >
            <span className="block whitespace-nowrap">
              24/7 AI-Driven Market
            </span>

            <span className="block whitespace-nowrap">
              Insights Team.
            </span>
          </h2>

          <p
            data-px="insights.subtitle"
            className="
              mt-6 text-center
              text-[12px] font-normal leading-[18px]
              text-[#696969]
              sm:text-[13px]

              lg:absolute
              lg:left-1/2
              lg:top-[calc(var(--u)*178)]
              lg:mt-0
              lg:w-max
              lg:-translate-x-1/2
              lg:text-[calc(var(--u)*13)]
              lg:leading-[calc(var(--u)*18)]
            "
          >
            Institutional agents analyzing stocks, crypto, forex, and ETFs for
            insights.
          </p>

          <nav
            data-px="insights.tabs"
            aria-label="Market insight categories"
            className="
              mt-8 flex max-w-full
              flex-wrap items-center justify-center gap-[2px]

              lg:absolute
              lg:left-1/2
              lg:top-[calc(var(--u)*228)]
              lg:mt-0
              lg:-translate-x-1/2
              lg:flex-nowrap
              lg:gap-[calc(var(--u)*2)]
            "
          >
            {tabs.map((tab, index) => (
              <button
                key={tab}
                data-px={`insights.tab.${index + 1}`}
                type="button"
                className={`
                  h-[27px]
                  rounded-[5px]
                  px-[12.5px]
                  text-[10px]
                  font-normal
                  leading-none

                  lg:h-[calc(var(--u)*29)]
                  lg:rounded-[calc(var(--u)*5)]
                  lg:px-[calc(var(--u)*12.5)]
                  lg:text-[calc(var(--u)*10)]

                  ${
                    index === 0
                      ? "bg-black text-white"
                      : "bg-[#f3f3f5] text-[#555]"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* ====================================================== */}
        {/* MAIN CONTENT                                           */}
        {/* ====================================================== */}

        <div
          data-px="insights.content"
          className="
            mx-auto mt-12 grid
            w-full max-w-[969px]
            grid-cols-1 gap-12

            lg:absolute
            lg:left-[calc(var(--u)*117)]
            lg:top-[calc(var(--u)*297)]
            lg:mt-0
            lg:h-[calc(var(--u)*460)]
            lg:w-[calc(var(--u)*969)]
            lg:max-w-none
            lg:grid-cols-[calc(var(--u)*350)_calc(var(--u)*475)]
            lg:justify-between
            lg:gap-0
          "
        >
          {/* ==================================================== */}
          {/* LEFT COPY                                            */}
          {/* ==================================================== */}

          <div
            data-px="insights.copy"
            className="
              flex flex-col

              lg:relative
              lg:h-[calc(var(--u)*460)]
              lg:w-[calc(var(--u)*350)]
              lg:block
            "
          >
            {/* Label */}
            <div
              data-px="insights.label"
              className="
                flex items-center gap-[8px]

                lg:absolute
                lg:left-0
                lg:top-[calc(var(--u)*53)]
                lg:gap-[calc(var(--u)*8)]
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
                  text-[12px] font-medium leading-none text-black

                  lg:text-[calc(var(--u)*12)]
                "
              >
                Signals
              </span>
            </div>

            {/* Feature title */}
            <h3
              data-px="insights.feature-title"
              className="
                mt-9 max-w-[330px]
                text-[27px] font-black
                leading-[30px]
                tracking-[-0.035em]
                text-black

                lg:absolute
                lg:left-[calc(var(--u)*3)]
                lg:top-[calc(var(--u)*102)]
                lg:mt-0
                lg:w-[calc(var(--u)*330)]
                lg:max-w-none
                lg:text-[calc(var(--u)*27)]
                lg:leading-[calc(var(--u)*30)]
              "
            >
              Real-Time Trade
              <br />
              Signals for Smarter
              <br />
              Investment Decisions.
            </h3>

            {/* Description */}
            <p
              data-px="insights.description"
              className="
                mt-5 max-w-[350px]
                text-[13px]
                font-normal
                leading-[21px]
                text-[#707070]

                lg:absolute
                lg:left-[calc(var(--u)*1)]
                lg:top-[calc(var(--u)*211)]
                lg:mt-0
                lg:w-[calc(var(--u)*350)]
                lg:max-w-none
                lg:text-[calc(var(--u)*13)]
                lg:leading-[calc(var(--u)*21)]
              "
            >
              Receive immediate buy/sell recommendations
              <br className="hidden lg:block" />
              powered by live market data and AI-driven algorithms.
            </p>

            {/* Execute */}
            <a
              data-px="insights.execute"
              href="#"
              className="
                mt-10 inline-flex w-fit items-center
                text-[12px] font-bold leading-none text-black

                lg:absolute
                lg:left-[calc(var(--u)*1)]
                lg:top-[calc(var(--u)*297)]
                lg:mt-0
                lg:text-[calc(var(--u)*12)]
              "
            >
              Execute

              <span
                aria-hidden="true"
                className="
                  ml-[4px]
                  text-[16px]
                  font-normal

                  lg:ml-[calc(var(--u)*4)]
                  lg:text-[calc(var(--u)*16)]
                "
              >
                →
              </span>
            </a>

            {/* Integrations */}
            <div
              data-px="insights.integrations"
              className="
                mt-12

                lg:absolute
                lg:left-[calc(var(--u)*1)]
                lg:top-[calc(var(--u)*365)]
                lg:mt-0
              "
            >
              <p
                className="
                  text-[12px]
                  leading-none
                  text-[#707070]

                  lg:text-[calc(var(--u)*12)]
                "
              >
                Integrations
              </p>

              <div
                className="
                  mt-[11px]
                  flex flex-wrap gap-[4px]

                  lg:mt-[calc(var(--u)*11)]
                  lg:flex-nowrap
                  lg:gap-[calc(var(--u)*4)]
                "
              >
                {integrations.map((item, index) => (
                  <span
                    key={item}
                    data-px={`insights.integration.${index + 1}`}
                    className="
                      inline-flex
                      h-[24px]
                      items-center
                      justify-center
                      rounded-[3px]
                      bg-[#f5f5f7]
                      px-[12px]
                      text-[10px]
                      font-medium
                      leading-none
                      text-black

                      lg:h-[calc(var(--u)*24)]
                      lg:rounded-[calc(var(--u)*3)]
                      lg:px-[calc(var(--u)*12)]
                      lg:text-[calc(var(--u)*10)]
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ==================================================== */}
          {/* RIGHT PROCESS PANEL                                  */}
          {/* ==================================================== */}

          <div
            data-px="insights.process"
            className="
              relative
              min-h-[460px]
              overflow-hidden
              rounded-[6px]
              bg-[#f4f4f6]

              lg:h-[calc(var(--u)*460)]
              lg:min-h-0
              lg:w-[calc(var(--u)*475)]
              lg:rounded-[calc(var(--u)*6)]
            "
          >
            <div
              data-px="insights.pipeline"
              className="
                relative
                mx-auto
                flex w-[242px]
                max-w-full
                flex-col gap-[12px]
                py-16

                lg:absolute
                lg:left-[calc(var(--u)*128)]
                lg:top-[calc(var(--u)*101)]
                lg:mx-0
                lg:w-[calc(var(--u)*242)]
                lg:max-w-none
                lg:gap-[calc(var(--u)*12)]
                lg:py-0
              "
            >
              {/* Timeline */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-[54px]
                  left-[-20px]
                  top-[11px]
                  w-px
                  bg-[#dedede]

                  lg:bottom-[calc(var(--u)*54)]
                  lg:left-[calc(var(--u)*-20)]
                  lg:top-[calc(var(--u)*11)]
                  lg:w-[calc(var(--u)*1)]
                "
              />

              {pipeline.map((item, index) => (
                <div
                  key={item.title}
                  data-px={`insights.pipeline.${index + 1}`}
                  className="relative"
                >
                  {index < pipeline.length - 1 ? (
                    <span
                      data-motion={`insights-rail-${index + 1}`}
                      aria-hidden="true"
                      className="
                        absolute left-[-20px] top-[17px] z-10
                        h-[calc(100%+12px)] w-px origin-top bg-black opacity-0

                        lg:left-[calc(var(--u)*-20)]
                        lg:top-[calc(var(--u)*17)]
                        lg:h-[calc(100%+var(--u)*12)]
                        lg:w-[calc(var(--u)*1)]
                      "
                    />
                  ) : null}

                  {/* Timeline node */}
                  <span
                    data-motion={`insights-node-${index + 1}`}
                    aria-hidden="true"
                    className={`
                      absolute z-20
                      left-[-23px]
                      top-[9px]
                      h-[8px]
                      w-[8px]
                      rounded-full

                      lg:left-[calc(var(--u)*-23)]
                      lg:top-[calc(var(--u)*9)]
                      lg:h-[calc(var(--u)*8)]
                      lg:w-[calc(var(--u)*8)]

                      ${
                        item.active
                          ? "bg-black"
                          : "border border-[#dedede] bg-[#e8e8e8]"
                      }
                    `}
                  />

                  {/* Card */}
                  <div
                    data-px={`insights.pipeline.${index + 1}.card`}
                    className={`
                      rounded-[5px]
                      bg-white
                      px-[16px]
                      py-[17px]

                      lg:rounded-[calc(var(--u)*5)]
                      lg:px-[calc(var(--u)*16)]
                      lg:py-[calc(var(--u)*17)]

                      ${
                        index === 2
                          ? "ml-[11px] bg-white/80 lg:ml-[calc(var(--u)*11)]"
                          : ""
                      }
                    `}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h4
                        data-px={`insights.pipeline.${index + 1}.title`}
                        className="
                          whitespace-nowrap
                          text-[13px]
                          font-bold
                          leading-none
                          text-black

                          lg:text-[calc(var(--u)*13)]
                        "
                      >
                        {item.title}
                      </h4>

                      <span
                        data-px={`insights.pipeline.${index + 1}.status`}
                        className="
                          shrink-0
                          rounded-full
                          bg-[#f7f7f7]
                          px-[8px]
                          py-[4px]
                          text-[9px]
                          font-medium
                          leading-none
                          text-black

                          lg:rounded-[calc(var(--u)*999)]
                          lg:px-[calc(var(--u)*8)]
                          lg:py-[calc(var(--u)*4)]
                          lg:text-[calc(var(--u)*9)]
                        "
                      >
                        {item.status}
                      </span>
                    </div>

                    <p
                      data-px={`insights.pipeline.${index + 1}.description`}
                      className="
                        mt-[13px]
                        whitespace-nowrap
                        text-[11px]
                        font-normal
                        leading-none
                        text-[#808080]

                        lg:mt-[calc(var(--u)*13)]
                        lg:text-[calc(var(--u)*11)]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* right decorative mark */}
            <div
              aria-hidden="true"
              className="
                absolute
                bottom-[67px]
                right-[89px]
                hidden
                h-[68px]
                w-px
                bg-[#ebebeb]

                lg:block
                lg:bottom-[calc(var(--u)*67)]
                lg:right-[calc(var(--u)*89)]
                lg:h-[calc(var(--u)*68)]
                lg:w-[calc(var(--u)*1)]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
