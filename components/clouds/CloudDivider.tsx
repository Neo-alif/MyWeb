"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import CloudLayer from "@/components/clouds/CloudLayer";

type DriftLayerProps = {
  progress: MotionValue<number>;
  travel: number; // % of own height moved either side of centre; bigger = faster
  seed: number;
  className: string;
};

function DriftLayer({ progress, travel, seed, className }: DriftLayerProps) {
  const y = useTransform(progress, [0, 1], [`${travel}%`, `${-travel}%`]);

  return (
    <motion.div
      data-cloud-layer
      style={{ y }}
      // CSS, not useReducedMotion, so server and client markup match.
      className={`absolute inset-x-0 top-0 h-full will-change-transform motion-reduce:transform-none! ${className}`}
    >
      <CloudLayer seed={seed} className="size-full" />
    </motion.div>
  );
}

export default function CloudDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={ref}
      aria-hidden
      // Negative margins take it out of the page flow, centred on the join.
      className="pointer-events-none relative z-10 -my-[20svh] h-[40svh] overflow-x-clip md:-my-[25svh] md:h-[50svh]"
    >
      <DriftLayer
        progress={scrollYProgress}
        travel={15}
        seed={1.3}
        className="fill-cloud-shade opacity-70"
      />
      <DriftLayer
        progress={scrollYProgress}
        travel={35}
        seed={2.1}
        className="hidden fill-cloud opacity-85 md:block"
      />
      <DriftLayer
        progress={scrollYProgress}
        travel={60}
        seed={3.7}
        className="fill-cloud"
      />
    </div>
  );
}
