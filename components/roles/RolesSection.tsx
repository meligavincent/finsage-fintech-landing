const roles = [
  {
    title: "Day Traders",
    description: (
      <>
        Live signals and momentum
        <br />
        indicators to capture intraday
        <br />
        and swing opportunities.
      </>
    ),
    icon: "chart",
  },
  {
    title: "Long-term Investors",
    description: (
      <>
        In-depth research and strategic value
        <br />
        assessment to create lasting wealth
        <br />
        through time.
      </>
    ),
    icon: "card",
  },
  {
    title: "Advisors & Planners",
    description: (
      <>
        Client-ready reports and portfolio
        <br />
        optimization features for superior
        <br />
        advisory outcomes.
      </>
    ),
    icon: "folder",
  },
];

export function RolesSection() {
  return (
    <section
      data-px="roles"
      className="
        roles relative isolate w-full overflow-hidden bg-white
        [font-family:Lato,Arial,sans-serif]

        min-h-screen
        lg:min-h-0
        lg:aspect-[1198/1087]
      "
    >
      {/* BACKGROUND */}
      <div
        data-px="roles.background"
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-0
          bg-white

          before:absolute
          before:inset-x-0
          before:top-0
          before:h-[32%]
          before:bg-[radial-gradient(ellipse_at_8%_0%,rgba(215,229,247,0.48)_0%,rgba(235,240,248,0.20)_35%,transparent_68%),radial-gradient(ellipse_at_88%_2%,rgba(255,223,236,0.27)_0%,transparent_60%)]
          before:content-['']
        "
      />

      {/* DESIGN FRAME */}
      <div
        className="
          relative z-10 mx-auto w-full
          px-5 py-14
          sm:px-8

          lg:absolute lg:inset-0
          lg:p-0
          lg:[container-type:inline-size]
          lg:[--u:0.083472454cqw]
        "
      >
        {/* EYEBROW */}
        <div
          data-px="roles.label"
          className="
            flex items-center justify-center gap-2

            lg:absolute
            lg:left-1/2
            lg:top-[calc(var(--u)*64)]
            lg:-translate-x-1/2
            lg:gap-[calc(var(--u)*8)]
          "
        >
          <span
            aria-hidden="true"
            className="
              h-[7px] w-[7px] rounded-full bg-black

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
            Roles
          </span>
        </div>

        {/* HEADER */}
        <div
          data-px="roles.header"
          className="
            mt-14 flex flex-col items-center

            lg:absolute
            lg:left-1/2
            lg:top-[calc(var(--u)*128)]
            lg:mt-0
            lg:-translate-x-1/2
          "
        >
          <h2
            data-px="roles.title"
            className="
              text-center text-[38px] font-black
              leading-[1.02] tracking-[-0.045em]
              text-black

              sm:text-[48px]

              lg:whitespace-nowrap
              lg:text-[calc(var(--u)*47)]
              lg:leading-[calc(var(--u)*52)]
            "
          >
            Solutions for Every Market Role.
          </h2>

          <p
            data-px="roles.subtitle"
            className="
              mt-6 max-w-[470px]
              text-center text-[13px]
              leading-[19px] text-black

              lg:mt-[calc(var(--u)*20)]
              lg:w-[calc(var(--u)*430)]
              lg:max-w-none
              lg:text-[calc(var(--u)*13)]
              lg:leading-[calc(var(--u)*19)]
            "
          >
            Whether you trade, invest, advise, or research, FinSage seamlessly
            <br className="hidden lg:block" />
            integrates into your workflow.
          </p>
        </div>

        {/* ROLE CARDS */}
        <div
          data-px="roles.cards"
          className="
            mt-16 grid grid-cols-1 gap-0

            lg:absolute
            lg:left-[calc(var(--u)*118)]
            lg:top-[calc(var(--u)*323)]
            lg:mt-0
            lg:h-[calc(var(--u)*99)]
            lg:w-[calc(var(--u)*966)]
            lg:grid-cols-3
          "
        >
          {roles.map((role, index) => (
            <article
              key={role.title}
              data-px={`roles.card.${index + 1}`}
              className="
                relative flex
                border-t border-black/50
                py-7

                first:border-t-0

                lg:h-full
                lg:border-l
                lg:border-t-0
                lg:py-0

                lg:last:border-r
              "
            >
              <div
                className="
                  flex w-full items-start gap-4

                  lg:absolute
                  lg:left-[calc(var(--u)*25)]
                  lg:top-0
                  lg:gap-[calc(var(--u)*14)]
                "
              >
                <div
                  data-px={`roles.card.${index + 1}.icon`}
                  className="
                    flex h-[40px] w-[40px]
                    shrink-0 items-center justify-center
                    rounded-full bg-black text-white

                    lg:h-[calc(var(--u)*40)]
                    lg:w-[calc(var(--u)*40)]
                  "
                >
                  <RoleIcon type={role.icon} />
                </div>

                <div
                  data-px={`roles.card.${index + 1}.copy`}
                  className="min-w-0"
                >
                  <h3
                    data-px={`roles.card.${index + 1}.title`}
                    className="
                      text-[17px] font-bold
                      leading-[20px] text-black

                      lg:text-[calc(var(--u)*17)]
                      lg:leading-[calc(var(--u)*20)]
                    "
                  >
                    {role.title}
                  </h3>

                  <p
                    data-px={`roles.card.${index + 1}.description`}
                    className="
                      mt-[14px]
                      text-[13px]
                      leading-[19px]
                      text-[#666]

                      lg:mt-[calc(var(--u)*14)]
                      lg:text-[calc(var(--u)*13)]
                      lg:leading-[calc(var(--u)*19)]
                    "
                  >
                    {role.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* INVESTGPT */}
        <div
          data-px="roles.investgpt"
          className="
            mt-20 grid overflow-hidden
            grid-cols-1 bg-black

            lg:absolute
            lg:left-[calc(var(--u)*117)]
            lg:top-[calc(var(--u)*583)]
            lg:mt-0
            lg:h-[calc(var(--u)*460)]
            lg:w-[calc(var(--u)*969)]
            lg:grid-cols-[calc(var(--u)*417)_calc(var(--u)*552)]
          "
        >
          {/* LEFT VISUAL */}
          <div
            data-px="roles.investgpt.visual"
            className="
              relative aspect-square
              overflow-hidden bg-black

              lg:aspect-auto
              lg:h-[calc(var(--u)*460)]
              lg:w-[calc(var(--u)*417)]
            "
          >
            {/* AMBIENT GLOW */}
            <div
              data-motion="investgpt-glow"
              aria-hidden="true"
              className="
                absolute left-1/2 top-1/2
                aspect-square w-[72%]
                -translate-x-1/2 -translate-y-1/2
                rounded-full
                bg-[radial-gradient(circle_at_45%_50%,rgba(237,155,210,0.65)_0%,rgba(88,137,255,0.55)_32%,rgba(24,53,119,0.25)_50%,transparent_71%)]
                blur-[8px]
              "
            />

            {/* OUTER RING */}
            <div
              aria-hidden="true"
              className="
                absolute left-1/2 top-1/2
                aspect-square w-[58%]
                -translate-x-1/2 -translate-y-1/2
                rounded-full
                border border-white/15
              "
            />

            {/* INNER RING */}
            <div
              aria-hidden="true"
              className="
                absolute left-1/2 top-1/2
                aspect-square w-[40.5%]
                -translate-x-1/2 -translate-y-1/2
                rounded-full
                border border-white/35
              "
            />

            {/* CENTER MARK */}
            <div
              data-px="roles.investgpt.mark"
              className="
                absolute left-1/2 top-1/2
                flex h-[70px] w-[70px]
                -translate-x-1/2 -translate-y-1/2
                items-center justify-center
                rounded-full bg-white

                lg:h-[calc(var(--u)*70)]
                lg:w-[calc(var(--u)*70)]
              "
            >
              <div
                data-motion="investgpt-symbol"
                className="
                  relative h-[34px] w-[34px]

                  lg:h-[calc(var(--u)*34)]
                  lg:w-[calc(var(--u)*34)]
                "
              >
                <span
                  className="
                    absolute left-1/2 top-[2px]
                    h-0 w-0 -translate-x-1/2

                    border-l-[17px]
                    border-r-[17px]
                    border-t-[15px]

                    border-l-transparent
                    border-r-transparent
                    border-t-black

                    lg:top-[calc(var(--u)*2)]
                    lg:border-l-[calc(var(--u)*17)]
                    lg:border-r-[calc(var(--u)*17)]
                    lg:border-t-[calc(var(--u)*15)]
                  "
                />

                <span
                  className="
                    absolute bottom-[2px] left-1/2
                    h-0 w-0 -translate-x-1/2

                    border-b-[15px]
                    border-l-[17px]
                    border-r-[17px]

                    border-b-black
                    border-l-transparent
                    border-r-transparent

                    lg:bottom-[calc(var(--u)*2)]
                    lg:border-b-[calc(var(--u)*15)]
                    lg:border-l-[calc(var(--u)*17)]
                    lg:border-r-[calc(var(--u)*17)]
                  "
                />
              </div>
            </div>
          </div>

          {/* BLUE PANEL */}
          <div
            data-px="roles.investgpt.panel"
            className="
              relative overflow-hidden
              bg-[#4e82f3]
              px-7 py-12
              text-white

              lg:h-[calc(var(--u)*460)]
              lg:w-[calc(var(--u)*552)]
              lg:px-0
              lg:py-0
            "
          >
            {/* LIGHT FIELD */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0
                bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_35%),linear-gradient(115deg,rgba(255,255,255,0.03),rgba(22,93,238,0.08))]
              "
            />

            {/* DIAGONAL LINE 1 */}
            <div
              aria-hidden="true"
              className="
                absolute -top-[8%] right-[25%]
                h-[120%] w-px
                rotate-[7deg]
                bg-black/80
              "
            />

            {/* DIAGONAL LINE 2 */}
            <div
              aria-hidden="true"
              className="
                absolute -top-[8%] right-[15%]
                h-[120%] w-px
                rotate-[7deg]
                bg-black/80
              "
            />

            {/* CONTENT */}
            <div
              data-px="roles.investgpt.content"
              className="
                relative z-10

                lg:absolute
                lg:left-[calc(var(--u)*52)]
                lg:top-[calc(var(--u)*85)]
              "
            >
              <div
                data-px="roles.investgpt.label"
                className="
                  flex items-center gap-2
                  text-[13px] leading-none

                  lg:gap-[calc(var(--u)*8)]
                  lg:text-[calc(var(--u)*13)]
                "
              >
                <span
                  className="
                    h-[7px] w-[7px]
                    rounded-full bg-white

                    lg:h-[calc(var(--u)*7)]
                    lg:w-[calc(var(--u)*7)]
                  "
                />

                <span>InvestGPT</span>
              </div>

              <h3
                data-px="roles.investgpt.title"
                className="
                  mt-9 max-w-[350px]
                  text-[30px] font-bold
                  leading-[1.05]
                  tracking-[-0.025em]

                  lg:mt-[calc(var(--u)*36)]
                  lg:w-[calc(var(--u)*330)]
                  lg:max-w-none
                  lg:text-[calc(var(--u)*27)]
                  lg:leading-[calc(var(--u)*30)]
                "
              >
                AI Tools for Smarter
                <br />
                Investing Decisions.
              </h3>

              <p
                data-px="roles.investgpt.description"
                className="
                  mt-6 text-[13px]
                  leading-[18px] text-white/95

                  lg:mt-[calc(var(--u)*22)]
                  lg:text-[calc(var(--u)*13)]
                  lg:leading-[calc(var(--u)*18)]
                "
              >
                Your 24/7 AI analyst for instant market answers.
              </p>

              <ul
                data-px="roles.investgpt.features"
                className="
                  mt-5 space-y-[7px]
                  text-[13px] leading-none

                  lg:mt-[calc(var(--u)*21)]
                  lg:space-y-[calc(var(--u)*7)]
                  lg:text-[calc(var(--u)*13)]
                "
              >
                <li>→ &nbsp; Live data analysis</li>
                <li>→ &nbsp; Tech &amp; fundamental insights</li>
                <li>→ &nbsp; Just ask, get immediate answers</li>
              </ul>

              <a
                data-px="roles.investgpt.cta"
                href="#"
                className="
                  mt-12 inline-flex
                  text-[13px] font-bold
                  leading-none text-white

                  lg:mt-[calc(var(--u)*51)]
                  lg:text-[calc(var(--u)*13)]
                "
              >
                Start Chatting&nbsp; →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoleIcon({ type }: { type: string }) {
  if (type === "chart") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        aria-hidden="true"
      >
        <rect x="4" y="11" width="3" height="8" fill="currentColor" />
        <rect x="10" y="6" width="3" height="13" fill="currentColor" />
        <rect x="16" y="9" width="3" height="10" fill="currentColor" />
      </svg>
    );
  }

  if (type === "card") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="6"
          width="16"
          height="12"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle cx="9" cy="12" r="2" fill="currentColor" />

        <path
          d="M14 10H18M14 14H18"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.5 8.5H10L11.6 10H19.5V18H4.5V8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M7 8.5V6.5H13L14.5 8.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
