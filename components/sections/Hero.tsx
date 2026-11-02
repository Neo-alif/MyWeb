import { Fragment } from "react";
import { getImageProps } from "next/image";
import { ArrowDown, ChevronDown } from "lucide-react";
import HeroIntro from "@/components/sections/HeroIntro";
import { profile, site } from "@/lib/schemas";

export default function Hero() {
  const common = {
    alt: profile.heroAlt,
    sizes: "100vw",
    fetchPriority: "high" as const,
    loading: "eager" as const,
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    src: profile.heroDesktop,
    width: 1672,
    height: 941,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    src: profile.heroMobile,
    width: 1086,
    height: 1448,
  });

  return (
    <section id="hero" className="relative h-svh overflow-hidden">
      <HeroIntro />
      <picture>
        <source media="(min-width: 768px)" srcSet={desktop} />
        <source srcSet={mobile} />
        <img
          {...rest}
          alt={profile.heroAlt}
          data-intro="art"
          // 35%, not the spec's 60%, keeps Alif clear of the button on phones.
          className="absolute inset-0 size-full object-cover object-[35%_85%] md:object-[60%_70%]"
        />
      </picture>
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-3/5 bg-linear-to-b from-ink/60 to-transparent"
      />
      {/* Stops short of the face. */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 hidden w-1/2 bg-linear-to-r from-ink/55 to-transparent md:block"
      />
      {/* Fades the art into the cloud colour that Education starts on. */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-cloud to-transparent"
      />
      <div className="relative mx-auto max-w-[1100px] px-6 pt-24 text-paper [text-shadow:0_1px_10px_rgba(31,70,80,.7)] md:pt-28">
        <div className="max-w-[520px]">
          <h1 className="font-serif text-[clamp(2.5rem,7vw,6rem)] leading-none">
            {profile.heroGreeting.split("\n").map((line) => (
              <span key={line} className="block">
                {line.split(" ").map((word, i) => (
                  <Fragment key={word}>
                    {i > 0 && " "}
                    <span data-intro="word" className="inline-block">
                      {word}
                    </span>
                  </Fragment>
                ))}
              </span>
            ))}
          </h1>
          <p data-intro="bio" className="mt-4 text-lg">
            {profile.heroBio}
          </p>
        </div>
      </div>
      {/* Phase 5: point this at #works. */}
      <a
        href="#education"
        data-intro="cta"
        className="absolute bottom-4 left-4 z-20 inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-paper transition-transform hover:-translate-y-0.5 hover:bg-water-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink md:bottom-6 md:left-6"
      >
        {site.heroCta}
        <ArrowDown aria-hidden className="size-4" />
      </a>
      <div
        aria-hidden
        data-intro="hint"
        className="absolute right-6 bottom-5 z-20 text-ink"
      >
        <ChevronDown className="scroll-hint size-7" />
      </div>
    </section>
  );
}
