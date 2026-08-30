const navigationLinks = [
  "Home",
  "Discover",
  "InvestGPT",
  "Portfolio Toolbox",
];

const toolLinks = [
  "Watchlist",
  "Market Movers",
  "AI Stock Picker",
  "Smart Signals",
  "Stocklist",
];

const resourceLinks = [
  "Affiliate Program",
  "Academy",
  "API for Signal DB",
  "Pricing Plans",
  "Podcast",
];

export function Footer() {
  return (
    <footer
      data-px="footer"
      className="
        footer
        relative isolate w-full overflow-hidden
        bg-white text-black
        [font-family:Lato,Arial,sans-serif]

        lg:aspect-[1199/480]
      "
    >
      {/* ====================================================== */}
      {/* BACKGROUND                                             */}
      {/* ====================================================== */}

      <div
        data-px="footer.background"
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-white
        "
      />

      {/* ====================================================== */}
      {/* CANONICAL 1199 × 480 FRAME                             */}
      {/* ====================================================== */}

      <div
        data-px="footer.stage"
        className="
          relative z-10
          mx-auto w-full
          px-5 pb-0 pt-14

          sm:px-8

          lg:absolute
          lg:inset-0
          lg:p-0

          lg:[container-type:inline-size]
          lg:[--u:0.0834028357cqw]
        "
      >
        {/* ==================================================== */}
        {/* MOBILE / TABLET TOP                                  */}
        {/* ==================================================== */}

        <div
          className="
            grid grid-cols-1 gap-12

            sm:grid-cols-2

            lg:hidden
          "
        >
          <div>
            <FooterLogo />
          </div>

          <FooterColumn
            dataPx="footer.navigation.mobile"
            title="Navigation"
            links={navigationLinks}
          />

          <FooterColumn
            dataPx="footer.tools.mobile"
            title="Tools"
            links={toolLinks}
          />

          <FooterColumn
            dataPx="footer.resources.mobile"
            title="Resources"
            links={resourceLinks}
          />
        </div>

        {/* ==================================================== */}
        {/* DESKTOP TOP REGION                                   */}
        {/* ==================================================== */}

        <div
          data-px="footer.top"
          className="
            hidden

            lg:absolute
            lg:inset-0
            lg:block
          "
        >
          {/* ================================================== */}
          {/* BRAND                                              */}
          {/* ================================================== */}

          <div
            data-px="footer.brand"
            className="
              lg:absolute
              lg:left-[calc(var(--u)*114)]
              lg:top-[calc(var(--u)*122)]
            "
          >
            <FooterLogo />
          </div>

          {/* ================================================== */}
          {/* NAVIGATION                                         */}
          {/* ================================================== */}

          <div
            className="
              lg:absolute
              lg:left-[calc(var(--u)*571)]
              lg:top-[calc(var(--u)*119)]
              lg:w-[calc(var(--u)*150)]
            "
          >
            <FooterColumn
              dataPx="footer.navigation"
              title="Navigation"
              links={navigationLinks}
            />
          </div>

          {/* ================================================== */}
          {/* TOOLS                                              */}
          {/* ================================================== */}

          <div
            className="
              lg:absolute
              lg:left-[calc(var(--u)*772)]
              lg:top-[calc(var(--u)*119)]
              lg:w-[calc(var(--u)*150)]
            "
          >
            <FooterColumn
              dataPx="footer.tools"
              title="Tools"
              links={toolLinks}
            />
          </div>

          {/* ================================================== */}
          {/* RESOURCES                                          */}
          {/* ================================================== */}

          <div
            className="
              lg:absolute
              lg:left-[calc(var(--u)*963)]
              lg:top-[calc(var(--u)*119)]
              lg:w-[calc(var(--u)*170)]
            "
          >
            <FooterColumn
              dataPx="footer.resources"
              title="Resources"
              links={resourceLinks}
            />
          </div>
        </div>

        {/* ==================================================== */}
        {/* LEGAL                                                */}
        {/* ==================================================== */}

        <div
          data-px="footer.legal"
          className="
            mt-14 flex gap-[41px]

            lg:absolute
            lg:left-[calc(var(--u)*114)]
            lg:top-[calc(var(--u)*249)]
            lg:mt-0
            lg:gap-[calc(var(--u)*41)]
          "
        >
          <a
            data-px="footer.legal.privacy"
            href="#"
            className="
              whitespace-nowrap
              text-[13px]
              font-bold
              leading-none

              lg:text-[calc(var(--u)*13)]
              lg:leading-[calc(var(--u)*15)]
            "
          >
            Privacy Policy
          </a>

          <a
            data-px="footer.legal.terms"
            href="#"
            className="
              whitespace-nowrap
              text-[13px]
              font-bold
              leading-none

              lg:text-[calc(var(--u)*13)]
              lg:leading-[calc(var(--u)*15)]
            "
          >
            Terms of Use
          </a>
        </div>

        {/* ==================================================== */}
        {/* GIANT WORDMARK                                       */}
        {/* ==================================================== */}

        <div
          data-px="footer.wordmark"
          aria-hidden="true"
          className="
            mt-20
            select-none
            whitespace-nowrap

            text-[105px]
            font-black
            leading-[0.78]
            tracking-[-0.07em]

            lg:absolute
            lg:left-[calc(var(--u)*106)]
            lg:top-[calc(var(--u)*328)]
            lg:mt-0

            lg:text-[calc(var(--u)*310)]
            lg:leading-[0.77]
            lg:tracking-[-0.07em]
          "
        >
          FinSage
        </div>
      </div>
    </footer>
  );
}

/* ============================================================ */
/* LOGO                                                         */
/* ============================================================ */

function FooterLogo() {
  return (
    <a
      data-px="footer.logo"
      href="#"
      className="
        inline-flex items-center
        gap-[10px]

        lg:gap-[calc(var(--u)*10)]
      "
    >
      <span
        data-px="footer.logo.mark"
        aria-hidden="true"
        className="
          relative block
          h-[23px] w-[35px]
          shrink-0

          lg:h-[calc(var(--u)*23)]
          lg:w-[calc(var(--u)*35)]
        "
      >
        {/* FILLED CIRCLE */}

        <span
          className="
            absolute
            left-0 top-1/2
            h-[22px] w-[22px]
            -translate-y-1/2
            rounded-full
            bg-black

            lg:h-[calc(var(--u)*22)]
            lg:w-[calc(var(--u)*22)]
          "
        />

        {/* OUTLINED CIRCLE */}

        <span
          className="
            absolute
            right-0 top-1/2
            h-[21px] w-[21px]
            -translate-y-1/2
            rounded-full
            border border-black
            bg-transparent

            lg:h-[calc(var(--u)*21)]
            lg:w-[calc(var(--u)*21)]
          "
        />
      </span>

      <span
        className="
          text-[21px]
          font-bold
          leading-none
          tracking-[-0.035em]

          lg:text-[calc(var(--u)*21)]
        "
      >
        FinSage
      </span>
    </a>
  );
}

/* ============================================================ */
/* FOOTER COLUMN                                                */
/* ============================================================ */

function FooterColumn({
  dataPx,
  title,
  links,
}: {
  dataPx: string;
  title: string;
  links: string[];
}) {
  return (
    <nav data-px={dataPx}>
      <h3
        data-px={`${dataPx}.title`}
        className="
          mb-[24px]

          text-[13px]
          font-bold
          leading-none

          lg:mb-[calc(var(--u)*24)]
          lg:text-[calc(var(--u)*13)]
          lg:leading-[calc(var(--u)*13)]
        "
      >
        {title}
      </h3>

      <ul
        data-px={`${dataPx}.links`}
        className="
          space-y-[7px]

          lg:space-y-[calc(var(--u)*7)]
        "
      >
        {links.map((link, index) => (
          <li key={link}>
            <a
              data-px={`${dataPx}.link.${index + 1}`}
              href="#"
              className="
                block
                whitespace-nowrap

                text-[14px]
                leading-[16px]
                text-black

                lg:text-[calc(var(--u)*14)]
                lg:leading-[calc(var(--u)*16)]
              "
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}