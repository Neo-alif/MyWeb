"use client";

import { useEffect } from "react";
import { animate, stagger } from "framer-motion";

const LATE_MS = 3500; // Past this the CSS safety net is close, so just show everything.
const IMAGE_WAIT_MS = 1500;

let played = false;

export default function HeroIntro() {
  useEffect(() => {
    const root = document.documentElement;
    if (played || !root.classList.contains("intro")) return;
    played = true;

    const art = document.querySelector<HTMLImageElement>('[data-intro="art"]');
    const artReady = art?.decode().catch(() => {});
    const timeout = new Promise((done) => setTimeout(done, IMAGE_WAIT_MS));

    Promise.race([artReady, timeout]).then(async () => {
      if (performance.now() > LATE_MS) {
        root.classList.remove("intro");
        return;
      }
      await Promise.all([
        animate(
          '[data-intro="art"]',
          { opacity: [0, 1], scale: [1.06, 1] },
          { duration: 0.9, ease: "easeOut" },
        ),
        animate(
          '[data-intro="word"]',
          { opacity: [0, 1], y: [16, 0] },
          { duration: 0.4, delay: stagger(0.08, { startDelay: 0.3 }) },
        ),
        animate(
          '[data-intro="bio"]',
          { opacity: [0, 1], y: [16, 0] },
          { duration: 0.4, delay: 0.95 },
        ),
        animate(
          '[data-intro="cta"]',
          { opacity: [0, 1], y: [16, 0] },
          { duration: 0.4, delay: 1.15 },
        ),
        animate(
          '[data-intro="nav"]',
          { opacity: [0, 1] },
          { duration: 0.4, delay: 1.15 },
        ),
        animate(
          '[data-intro="hint"]',
          { opacity: [0, 1] },
          { duration: 0.3, delay: 1.35 },
        ),
      ]);
      root.classList.remove("intro");
    });
  }, []);

  return null;
}
