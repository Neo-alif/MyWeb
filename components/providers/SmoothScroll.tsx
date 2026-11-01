"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ autoRaf: true, anchors: true });
    // Lenis scrolls to anchors but leaves the browser's jump on, and the two fight.
    const stopNativeJump = (event: MouseEvent) => {
      if ((event.target as Element).closest('a[href^="#"]')) {
        event.preventDefault();
      }
    };
    document.addEventListener("click", stopNativeJump);
    return () => {
      document.removeEventListener("click", stopNativeJump);
      lenis.destroy();
    };
  }, []);

  return null;
}
