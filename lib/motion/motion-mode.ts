export type MotionMode = {
  visualTest: boolean;
  reducedMotion: boolean;
  enabled: boolean;
};

export function readMotionMode(): MotionMode {
  if (typeof window === "undefined") {
    return {
      visualTest: false,
      reducedMotion: false,
      enabled: false,
    };
  }

  const visualTest =
    new URLSearchParams(window.location.search).get("visualTest") === "1";
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  return {
    visualTest,
    reducedMotion,
    enabled: !visualTest && !reducedMotion,
  };
}
