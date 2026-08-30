import "@fontsource/lato/400.css";
import "@fontsource/lato/900.css";

import type { CSSProperties } from "react";

const tickerItems = [
  { name: "Alphabet", value: "↗ +0.85%" },
  { name: "Amazon", value: "↗ +2.05%" },
  { name: "Meta", value: "↗ +1.67%" },
  { name: "Vanguard", value: "↘ +0.90%" },
  { name: "Apple", value: "↗ +0.78%" },
  { name: "Nvidia", value: "↗ +2.34%" },
];

const navigationItems = [
  "Favorites",
  "Market Movers",
  "AI Picks",
  "Trade Alerts",
  "History",
  "Explore",
];

/* ============================================================
   FITTED BACKGROUND MODEL

   Reference design space:
   1024 × 657

   IMPORTANT:
   This background is rendered inside a proportional design
   frame. The frame itself uses COVER behaviour.

   Therefore the ellipses never stretch independently in X/Y.
============================================================ */
const heroBackgroundStyle: CSSProperties = {
  backgroundColor: "#ffffff",

  backgroundImage: `
    radial-gradient(
      ellipse 31.905% 37.902%
      at 23.122% 23.428%,
      rgba(255,255,255,0.5001) 0%,
      rgba(255,255,255,0.4411) 16.7%,
      rgba(255,255,255,0.3036) 33.3%,
      rgba(255,255,255,0.1623) 50%,
      rgba(255,255,255,0.0675) 66.7%,
      rgba(255,255,255,0.0220) 83.3%,
      rgba(255,255,255,0) 100%
    ),

    radial-gradient(
      ellipse 40.198% 50.201%
      at 57.714% 22.303%,
      rgba(0,0,226,0.2483) 0%,
      rgba(0,0,226,0.2190) 16.7%,
      rgba(0,0,226,0.1508) 33.3%,
      rgba(0,0,226,0.0806) 50%,
      rgba(0,0,226,0.0335) 66.7%,
      rgba(0,0,226,0.0109) 83.3%,
      rgba(0,0,226,0) 100%
    ),

    radial-gradient(
      ellipse 63.969% 61.001%
      at 73.822% -0.298%,
      rgba(255,210,233,0.9800) 0%,
      rgba(255,210,233,0.8644) 16.7%,
      rgba(255,210,233,0.5950) 33.3%,
      rgba(255,210,233,0.3182) 50%,
      rgba(255,210,233,0.1324) 66.7%,
      rgba(255,210,233,0.0432) 83.3%,
      rgba(255,210,233,0) 100%
    ),

    radial-gradient(
      ellipse 83.621% 59.252%
      at 84.128% 18.134%,
      rgba(0,189,244,0.9040) 0%,
      rgba(0,189,244,0.7974) 16.7%,
      rgba(0,189,244,0.5488) 33.3%,
      rgba(0,189,244,0.2935) 50%,
      rgba(0,189,244,0.1221) 66.7%,
      rgba(0,189,244,0.0398) 83.3%,
      rgba(0,189,244,0) 100%
    ),

    radial-gradient(
      ellipse 38.215% 39.413%
      at 48.934% 2.424%,
      rgba(0,115,253,0.9744) 0%,
      rgba(0,115,253,0.8594) 16.7%,
      rgba(0,115,253,0.5916) 33.3%,
      rgba(0,115,253,0.3163) 50%,
      rgba(0,115,253,0.1316) 66.7%,
      rgba(0,115,253,0.0429) 83.3%,
      rgba(0,115,253,0) 100%
    )
  `,

  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
};

export function Hero() {
  return (
    <section data-px="hero" className="hero relative min-h-screen overflow-hidden">
      {/* =====================================================
          1. MARKET TICKER
      ====================================================== */}
      <div data-px="hero.ticker" className="hero-ticker relative z-30 h-7 w-full overflow-hidden bg-black text-white">
        <div className="hero-ticker-track grid h-full w-full grid-cols-6 items-center">
          {tickerItems.map((item) => (
            <div
              key={item.name}
              className="
                hero-ticker-item
                flex
                h-full
                min-w-0
                items-center
                justify-between
                px-5
                text-[11px]
                leading-none
              "
            >
              <span className="hero-ticker-name whitespace-nowrap">
                {item.name}
              </span>

              <span className="hero-ticker-value whitespace-nowrap">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          2. HERO BODY

          Reference design space:
          1024 × 657

          hero-body itself is only the viewport canvas.

          Background and content use DIFFERENT scale modes:

          background = COVER
          content    = CONTAIN
      ====================================================== */}
      <div
        data-px="hero.body"
        className="
          hero-body
          relative
          isolate
          h-[calc(100svh-28px)]
          min-h-[620px]
          w-full
          overflow-hidden
          bg-white
          [container-type:size]
          [font-family:Lato,sans-serif]
        "
      >
        {/* ===================================================
            RESPONSIVE BACKGROUND DESIGN FRAME

            COVER formula:

            width =
              max(
                viewport width,
                hero height × 1024 / 657
              )

            This means:

            1024×657
            → exact 1024×657

            ultrawide
            → width follows viewport
            → height grows proportionally
            → excess bottom is cropped

            tall viewport
            → height constraint wins
            → excess horizontal content is cropped

            NO distortion.
            NO bitmap holes.
            NO ghost UI.
        ==================================================== */}
        <div
          data-px="hero.background"
          aria-hidden="true"
          style={heroBackgroundStyle}
          className="
            hero-background-model
            pointer-events-none
            absolute
            left-1/2
            top-0
            z-0
            aspect-[1024/657]
            w-[max(100vw,calc((100svh-28px)*1.5586))]
            -translate-x-1/2
          "
        />

        {/* ===================================================
            3. HEADER

            Header is NOT inside the content design frame.

            Horizontal anchors are viewport-relative.

            --u uses CONTAIN scaling:

            min(
              viewportWidth / 1024,
              heroHeight / 657
            )
        ==================================================== */}
        <header
          data-px="hero.header"
          style={
            {
              "--u": "min(0.09765625cqw,0.152207cqh)",
            } as CSSProperties
          }
          className="
            hero-header
            absolute
            left-[9.5vw]
            right-[9.5vw]
            top-[calc(var(--u)*28)]
            z-20
            flex
            items-start
            justify-between
          "
        >
          {/* =================================================
              BRAND
          ================================================== */}
          <div data-px="hero.brand" className="hero-brand flex items-center">
            <div
              className="
                hero-brand-mark
                relative
                h-[calc(var(--u)*18)]
                w-[calc(var(--u)*28)]
                shrink-0
              "
            >
              <div
                className="
                  hero-brand-circle
                  hero-brand-circle-left
                  absolute
                  left-0
                  top-1/2
                  h-[calc(var(--u)*18)]
                  w-[calc(var(--u)*18)]
                  -translate-y-1/2
                  rounded-full
                  bg-black
                "
              />

              <div
                className="
                  hero-brand-circle
                  hero-brand-circle-right
                  absolute
                  left-[calc(var(--u)*11)]
                  top-1/2
                  h-[calc(var(--u)*18)]
                  w-[calc(var(--u)*18)]
                  -translate-y-1/2
                  rounded-full
                  border
                  border-black
                  bg-white
                "
              />
            </div>

            <span
              className="
                hero-brand-name
                -ml-[calc(var(--u)*2)]
                whitespace-nowrap
                text-[calc(var(--u)*18)]
                font-normal
                leading-[calc(var(--u)*18)]
              "
            >
              FinSage
            </span>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================== */}
          <nav
            data-px="hero.nav"
            className="
              hero-navigation
              relative
              right-[calc(var(--u)*2)]
              top-[calc(var(--u)*-5)]
              flex
              flex-col
              items-end
              text-[calc(var(--u)*11)]
              font-normal
              leading-[calc(var(--u)*21.2)]
            "
          >
            {navigationItems.map((item) => (
              <a
                key={item}
                href="#"
                data-px="hero.nav.item"
                className="
                  hero-navigation-item
                  whitespace-nowrap
                  underline
                  decoration-[calc(var(--u)*1)]
                  underline-offset-[calc(var(--u)*1)]
                "
              >
                {item}
              </a>
            ))}
          </nav>
        </header>

        {/* ===================================================
            4. CENTRAL CONTENT DESIGN FRAME

            CONTAIN formula:

            width =
              min(
                viewport width,
                hero height × 1024 / 657
              )

            Everything inside scales with one coefficient.
        ==================================================== */}
        <div
          data-px="hero.stage"
          className="
            hero-stage
            absolute
            left-1/2
            top-1/2
            z-10
            aspect-[1024/657]
            w-[min(100vw,calc((100svh-28px)*1.5586))]
            -translate-x-1/2
            -translate-y-1/2
            [container-type:inline-size]
          "
        >
          {/* =================================================
              ARTWORK
          ================================================== */}
          <div
            data-px="hero.artwork"
            className="
              hero-artwork
              absolute
              left-1/2
              top-[10.9375cqw]
              h-[7.128906cqw]
              w-[12.988281cqw]
              -translate-x-1/2
            "
          >
            <div className="hero-artwork-stage relative h-full w-full">
              <div
                className="
                  hero-artwork-circle
                  absolute
                  left-0
                  top-1/2
                  aspect-square
                  h-full
                  -translate-y-1/2
                  rounded-full
                  border
                  border-black
                "
              />

              <div
                className="
                  hero-artwork-circle
                  absolute
                  left-[1.464844cqw]
                  top-1/2
                  aspect-square
                  h-full
                  -translate-y-1/2
                  rounded-full
                  border
                  border-black
                "
              />

              <div
                className="
                  hero-artwork-circle
                  absolute
                  left-[2.929688cqw]
                  top-1/2
                  aspect-square
                  h-full
                  -translate-y-1/2
                  rounded-full
                  border
                  border-black
                "
              />

              <div
                className="
                  hero-artwork-circle
                  absolute
                  left-[4.394531cqw]
                  top-1/2
                  aspect-square
                  h-full
                  -translate-y-1/2
                  rounded-full
                  border
                  border-black
                "
              />

              <div
                className="
                  hero-artwork-circle
                  absolute
                  left-[5.859375cqw]
                  top-1/2
                  aspect-square
                  h-full
                  -translate-y-1/2
                  rounded-full
                  border
                  border-black
                "
              />
            </div>
          </div>

          {/* =================================================
              EYEBROW
          ================================================== */}
          <p
            data-px="hero.eyebrow"
            className="
              hero-eyebrow
              absolute
              left-[calc(50%_-_0.09765625cqw)]
              top-[22.460938cqw]
              -translate-x-1/2
              whitespace-nowrap
              text-center
              text-[1.074219cqw]
              font-normal
              leading-[1.367188cqw]
              tracking-[0.001953125cqw]
            "
          >
            On-demand AI insights for stocks, ETFs, crypto, and forex.
          </p>

          {/* =================================================
              TITLE
          ================================================== */}
          <h1
            data-px="hero.title"
            className="
              hero-title
              absolute
              left-1/2
              top-[25.292969cqw]
              -translate-x-1/2
              text-center
              text-[5.957031cqw]
              font-black
              leading-[6.152344cqw]
              tracking-normal
            "
          >
            <span
              className="block whitespace-nowrap"
              style={{
                transform:
                  "translate(0.09765625cqw, 0.1171875cqw) scaleX(0.985) scaleY(1.16)",
                transformOrigin: "center center",
              }}
            >
              Data-Powered
            </span>

            <span
              className="block whitespace-nowrap"
              style={{
                transform:
                  "translate(-0.244140625cqw, 0.1171875cqw) scaleX(0.985) scaleY(1.16)",
                transformOrigin: "center center",
              }}
            >
              Investment Strategies.
            </span>
          </h1>

          {/* =================================================
              PROMPT
          ================================================== */}
          <div
            data-px="hero.prompt"
            className="
              hero-prompt
              absolute
              left-1/2
              top-[41.79082cqw]
              flex
              w-[39.746094cqw]
              -translate-x-1/2
              flex-col
              gap-[0.195313cqw]
            "
          >
            <textarea
              data-px="hero.prompt.input"
              className="
                hero-prompt-input
                h-[7.617188cqw]
                w-full
                resize-none
                rounded-[0.78125cqw]
                border
                border-black
                bg-transparent
                px-[1.464844cqw]
                py-[1.269531cqw]
                text-[0.976563cqw]
                font-normal
                leading-[1.367188cqw]
                outline-none
              "
              placeholder="Type a ticker or question..."
            />

            <button
              type="button"
              data-px="hero.prompt.submit"
              className="
                hero-prompt-submit
                flex
                h-[3.125cqw]
                w-full
                items-center
                justify-center
                rounded-[0.878906cqw]
                bg-black
                text-[0.976563cqw]
                font-normal
                leading-none
                text-white
              "
            >
              Ask AI →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
