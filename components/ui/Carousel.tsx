"use client";

import { Children, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselProps = {
  previousLabel: string;
  nextLabel: string;
  children: ReactNode;
};

const arrowClass =
  "hidden size-11 shrink-0 items-center justify-center self-center rounded-full bg-ink text-paper transition-colors hover:bg-water-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink aria-disabled:cursor-default aria-disabled:opacity-40 aria-disabled:hover:bg-ink pointer-fine:inline-flex";

export default function Carousel({
  previousLabel,
  nextLabel,
  children,
}: CarouselProps) {
  const track = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: true });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const measure = () =>
      setEdges({
        start: el.scrollLeft <= 1,
        end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1,
      });
    // Fires once on observe too, so the arrows follow the screen width and project count.
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    el.addEventListener("scroll", measure, { passive: true });
    return () => {
      observer.disconnect();
      el.removeEventListener("scroll", measure);
    };
  }, []);

  const move = (direction: number) => {
    const el = track.current;
    if (!el) return;
    const [first, second] = el.children as HTMLCollectionOf<HTMLElement>;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({
      left: direction * (second.offsetLeft - first.offsetLeft),
      behavior: reduced ? "auto" : "smooth",
    });
  };

  const overflows = !(edges.start && edges.end);

  return (
    <div className="flex gap-3">
      {overflows && (
        // aria-disabled, not disabled, so keyboard focus survives reaching the end.
        <button
          type="button"
          aria-label={previousLabel}
          aria-disabled={edges.start}
          onClick={() => move(-1)}
          className={arrowClass}
        >
          <ChevronLeft aria-hidden className="size-5" />
        </button>
      )}
      <ul
        ref={track}
        // Padding gives the box shadows room and the mask softens the side edges; overflow would clip them hard.
        className="-mx-4 -my-20 flex min-w-0 flex-1 snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto px-4 py-20 [mask-image:linear-gradient(to_right,transparent,black_1rem,black_calc(100%-1rem),transparent)] [scrollbar-width:none]"
      >
        {Children.map(children, (child) => (
          // Auto margins centre a short row without cutting off a long one.
          <li className="flex shrink-0 basis-full snap-start first:ms-auto last:me-auto md:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]">
            {child}
          </li>
        ))}
      </ul>
      {overflows && (
        <button
          type="button"
          aria-label={nextLabel}
          aria-disabled={edges.end}
          onClick={() => move(1)}
          className={arrowClass}
        >
          <ChevronRight aria-hidden className="size-5" />
        </button>
      )}
    </div>
  );
}
