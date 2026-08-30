const tabs = ["NVDA", "Stocks", "Opportunities", "Apple"];

export function ChallengesSection() {
  return (
    <section
      data-px="challenges"
      className="
        challenges relative isolate
        min-h-[100svh] w-full overflow-hidden bg-white
        lg:h-[100svh]
        [font-family:Lato,Arial,sans-serif]
      "
    >
      {/*
        ==========================================================
        RESPONSIVE BACKGROUND FRAME
        Reference: 1196 × 799
        Mode: COVER
        ==========================================================
      */}
      <div
        data-px="challenges.background"
        aria-hidden="true"
        className="
          pointer-events-none absolute left-1/2 top-0 z-0
          aspect-[1196/799]
          w-[max(100vw,calc(100svh*1.496871))]
          -translate-x-1/2
          [container-type:inline-size]
          [--u:0.08361204cqw]
        "
      >
        <div
          className="
            absolute inset-0
            bg-white
            bg-[radial-gradient(ellipse_42%_60%_at_100%_78%,rgba(255,206,239,0.58)_0%,rgba(255,221,242,0.26)_34%,transparent_68%),radial-gradient(ellipse_38%_46%_at_9%_100%,rgba(216,232,255,0.72)_0%,rgba(235,243,255,0.35)_34%,transparent_69%),radial-gradient(ellipse_36%_30%_at_85%_44%,rgba(239,235,255,0.32)_0%,transparent_72%)]
          "
        />
      </div>

      {/*
        ==========================================================
        RESPONSIVE DESIGN FRAME
        Reference: 1196 × 799

        --u = exactly one reference pixel at 1196×799.

        Desktop / XL:
        scale = min(viewportWidth / 1196, viewportHeight / 799)

        Mobile / tablet:
        normal document flow.
        ==========================================================
      */}
      <div
        data-px="challenges.stage"
        className="
          relative z-10
          mx-auto w-full
          px-5 py-12
          sm:px-8

          lg:absolute
          lg:left-1/2 lg:top-1/2
          lg:aspect-[1196/799]
          lg:w-[min(100vw,calc(100svh*1.496871))]
          lg:-translate-x-1/2 lg:-translate-y-1/2
          lg:p-0
          lg:[container-type:inline-size]
          lg:[--u:0.08361204cqw]
        "
      >
        {/* ==================================================== */}
        {/* EYEBROW                                              */}
        {/* ==================================================== */}

        <div
          data-px="challenges.label"
          className="
            flex items-center gap-2

            lg:absolute
            lg:left-[calc(var(--u)*114)]
            lg:top-[calc(var(--u)*36)]
            lg:gap-[calc(var(--u)*8)]
          "
        >
          <span
            aria-hidden="true"
            className="
              h-[7px] w-[7px] shrink-0 rounded-full bg-black

              lg:h-[calc(var(--u)*7)]
              lg:w-[calc(var(--u)*7)]
            "
          />

          <span
            className="
              text-[13px] font-medium leading-none text-black

              lg:text-[calc(var(--u)*13)]
            "
          >
            Challenges
          </span>
        </div>

        {/* ==================================================== */}
        {/* INTRO                                                */}
        {/* ==================================================== */}

        <div
          data-px="challenges.intro"
          className="
            mt-14 grid grid-cols-1 gap-7

            lg:absolute
            lg:left-[calc(var(--u)*115)]
            lg:top-[calc(var(--u)*104)]
            lg:mt-0
            lg:h-[calc(var(--u)*92)]
            lg:w-[calc(var(--u)*820)]
            lg:grid-cols-[calc(var(--u)*430)_calc(var(--u)*365)]
            lg:justify-between
            lg:gap-0
          "
        >
          <h2
            data-px="challenges.title"
            className="
              max-w-[500px]
              text-[42px] font-black
              leading-[0.98]
              tracking-[-0.045em]
              text-black

              sm:text-[48px]

              lg:w-[calc(var(--u)*430)]
              lg:max-w-none
              lg:text-[calc(var(--u)*45)]
              lg:leading-[calc(var(--u)*52)]
            "
          >
            Instant AI Insights
            <br />
            in Seconds.
          </h2>

          <p
            data-px="challenges.description"
            className="
              max-w-[420px]
              text-[14px] font-normal
              leading-[20px] text-black

              lg:pt-[calc(var(--u)*2)]
              lg:w-[calc(var(--u)*365)]
              lg:max-w-none
              lg:text-[calc(var(--u)*13)]
              lg:leading-[calc(var(--u)*20)]
            "
          >
            Institutional-grade AI agents analyze stocks, crypto, forex,
            <br className="hidden lg:block" />
            and ETFs in real time, providing actionable insights
            <br className="hidden lg:block" />
            for quick, informed decisions.
          </p>
        </div>

        {/* ==================================================== */}
        {/* FILTER TABS                                          */}
        {/* ==================================================== */}

        <nav
          data-px="challenges.tabs"
          aria-label="AI insight categories"
          className="
            mt-10 flex flex-wrap items-center gap-[2px]

            lg:absolute
            lg:left-[calc(var(--u)*115)]
            lg:top-[calc(var(--u)*246)]
            lg:mt-0
            lg:flex-nowrap
            lg:gap-[calc(var(--u)*2)]
          "
        >
          {tabs.map((tab, index) => (
            <button
              key={tab}
              data-px={`challenges.tab.${index + 1}`}
              type="button"
              className={`
                h-[27px]
                rounded-[5px]
                px-[14px]
                text-[10px]
                font-normal
                leading-none

                lg:h-[calc(var(--u)*27)]
                lg:rounded-[calc(var(--u)*5)]
                lg:px-[calc(var(--u)*14)]
                lg:text-[calc(var(--u)*10)]

                ${
                  index === 0
                    ? "bg-black text-white"
                    : "bg-[#f4f4f6] text-[#555]"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* ==================================================== */}
        {/* TERMINAL / ANALYSIS WINDOW                           */}
        {/* ==================================================== */}

        <div
          data-px="challenges.terminal"
          className="
            mt-7 overflow-hidden
            rounded-[7px] bg-black

            lg:absolute
            lg:left-[calc(var(--u)*115)]
            lg:top-[calc(var(--u)*302)]
            lg:mt-0
            lg:h-[calc(var(--u)*456)]
            lg:w-[calc(var(--u)*968)]
            lg:rounded-[calc(var(--u)*7)]
          "
        >
          {/* Terminal header */}
          <div
            data-px="challenges.terminal.header"
            className="
              flex h-[58px]
              items-center justify-between
              bg-[#2c2a2a]
              px-6

              lg:h-[calc(var(--u)*58)]
              lg:px-[calc(var(--u)*33)]
            "
          >
            <h3
              data-px="challenges.terminal.question"
              className="
                text-[16px] font-bold
                leading-none text-white

                lg:text-[calc(var(--u)*16)]
              "
            >
              Should I buy NVDA now?
            </h3>

            <div
              data-px="challenges.terminal.controls"
              className="
                flex items-center gap-[7px]

                lg:gap-[calc(var(--u)*7)]
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-[10px] w-[10px] rounded-full bg-[#ff6559]

                  lg:h-[calc(var(--u)*10)]
                  lg:w-[calc(var(--u)*10)]
                "
              />

              <span
                aria-hidden="true"
                className="
                  h-[10px] w-[10px] rounded-full bg-[#ffbd2e]

                  lg:h-[calc(var(--u)*10)]
                  lg:w-[calc(var(--u)*10)]
                "
              />

              <span
                aria-hidden="true"
                className="
                  h-[10px] w-[10px] rounded-full bg-[#27c840]

                  lg:h-[calc(var(--u)*10)]
                  lg:w-[calc(var(--u)*10)]
                "
              />
            </div>
          </div>

          {/* Terminal body */}
          <div
            data-px="challenges.terminal.body"
            className="
              relative h-[410px]
              overflow-hidden bg-black
              px-6 py-7

              lg:h-[calc(var(--u)*398)]
              lg:px-[calc(var(--u)*34)]
              lg:py-[calc(var(--u)*27)]
            "
          >
            <div
              data-px="challenges.code"
              className="
                font-mono
                text-[12px]
                leading-[24px]

                lg:text-[calc(var(--u)*12)]
                lg:leading-[calc(var(--u)*24)]
              "
            >
              <CodeLine>
                <span className="text-[#a6a6a6]">
                  def analyze_nvidia():
                </span>
              </CodeLine>

              <CodeLine indent={1}>
                <span className="text-[#ffbe00]">print</span>
                <span className="text-[#d0d0d0]">(</span>
                <span className="text-[#009e8e]">
                  &quot;[INFO] Starting AI analysis of NVIDIA...&quot;
                </span>
                <span className="text-[#d0d0d0]">)</span>
              </CodeLine>

              <CodeSpacer />

              <CodeLine indent={1}>
                <span className="text-[#9c9c9c]">
                  # Fundamental Agent Analysis
                </span>
              </CodeLine>

              <CodeLine indent={1}>
                <span className="text-[#ffbe00]">print</span>
                <span className="text-[#d0d0d0]">(</span>
                <span className="text-[#009e8e]">
                  &quot;[INFO] Analyzing fundamental data...&quot;
                </span>
                <span className="text-[#d0d0d0]">)</span>
              </CodeLine>

              <CodeLine indent={1}>
                <span className="text-[#d8d8d8]">
                  P_E_ratio = 65
                </span>
                <span className="text-[#8d8d8d]">
                  &nbsp;&nbsp;&nbsp;# P/E ratio for NVIDIA
                </span>
              </CodeLine>

              <CodeLine indent={1}>
                <span className="text-[#d8d8d8]">
                  sector_avg = 28
                </span>
                <span className="text-[#8d8d8d]">
                  &nbsp;&nbsp;&nbsp;# Sector average
                </span>
              </CodeLine>

              <CodeLine indent={1}>
                <span className="text-[#6ec5ff]">if</span>
                <span className="text-[#d8d8d8]">
                  {" "}
                  P_E_ratio &gt; sector_avg:
                </span>
              </CodeLine>

              <CodeLine indent={2}>
                <span className="text-[#a7a7a7]">print</span>
                <span className="text-[#757575]">(f</span>
                <span className="text-[#009e8e]">
                  &quot;[INFO] P/E ratio: {"{P_E_ratio}"}x, significantly above
                  sector average of {"{sector_avg}"}x. Justified by strong YoY
                  growth of 87%, reflecting a solid premium.&quot;
                </span>
                <span className="text-[#757575]">)</span>
              </CodeLine>

              <CodeLine indent={1}>
                <span className="text-[#999]">
                  # Technical Agent Analysis
                </span>
              </CodeLine>

              <div
                data-motion="challenge-code-muted"
                className="opacity-[0.16]"
              >
                <CodeLine indent={1}>
                  <span className="text-[#9c9c9c]">
                    print(&quot;[INFO] Analyzing technical data...&quot;)
                  </span>
                </CodeLine>

                <CodeLine indent={1}>
                  <span className="text-[#9c9c9c]">
                    RSI = 72&nbsp;&nbsp;&nbsp;# RSI value
                  </span>
                </CodeLine>

                <CodeLine indent={1}>
                  <span className="text-[#9c9c9c]">
                    resistance = 950&nbsp;&nbsp;&nbsp;# Resistance level
                  </span>
                </CodeLine>

                <CodeLine indent={1}>
                  <span className="text-[#9c9c9c]">
                    support = 890&nbsp;&nbsp;&nbsp;# Support level
                  </span>
                </CodeLine>

                <CodeLine indent={1}>
                  <span className="text-[#9c9c9c]">
                    if RSI &gt; 70:
                  </span>
                </CodeLine>
              </div>
            </div>

            {/* Lower fade */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                inset-x-0 bottom-0 h-[125px]
                bg-gradient-to-b
                from-transparent
                via-black/70
                to-black
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeLine({
  children,
  indent = 0,
}: {
  children: React.ReactNode;
  indent?: number;
}) {
  return (
    <div
      data-motion="challenge-code-line"
      className="whitespace-nowrap"
      style={{
        paddingLeft: `calc(var(--code-indent, 20px) * ${indent})`,
      }}
    >
      {children}
    </div>
  );
}

function CodeSpacer() {
  return <div className="h-[12px] lg:h-[calc(var(--u)*12)]" />;
}
