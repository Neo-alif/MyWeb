import type { CSSProperties } from "react";
import Image from "next/image";
import { education, site } from "@/lib/schemas";

export default function Education() {
  return (
    <section
      id="education"
      // Starts on the cloud colour so the join with the hero has no edge.
      className="relative bg-linear-to-b from-cloud to-transparent to-40% px-4 py-[34svh] md:px-6 md:py-[42svh]"
    >
      {/* Fades into the cloud colour that Works starts on. */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[34svh] bg-linear-to-t from-cloud to-transparent md:h-[42svh]"
      />
      <div className="mx-auto max-w-[1100px]">
        <h2 className="reveal-on-scroll mb-8 font-serif text-[clamp(2rem,5vw,3.5rem)] leading-tight">
          {site.headings.education}
        </h2>
        <div className="flex flex-col gap-6">
          {education.map(({ id, heading, lines, logo, tint }, i) => (
            <article
              key={id}
              style={
                {
                  "--i": i,
                  backgroundColor: `color-mix(in srgb, var(--color-${tint}) 75%, transparent)`,
                } as CSSProperties
              }
              className="reveal-on-scroll group relative overflow-hidden rounded-[28px] p-6 pr-24 shadow-[0_20px_50px_rgba(14,58,71,0.12)] backdrop-blur-sm md:p-8 md:pr-40"
            >
              {/* Cover on a wide box leaves only the middle of the logo showing. */}
              <Image
                src={logo}
                alt=""
                fill
                sizes="(min-width: 1100px) 1100px, 100vw"
                className="object-cover opacity-15"
              />
              <div className="relative">
                <h3 className="mb-2 font-serif text-3xl">{heading}</h3>
                {lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="absolute inset-y-0 right-4 flex items-center md:right-8">
                <div className="hover-logo relative size-16 md:size-24">
                  <Image
                    src={logo}
                    alt=""
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
