import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Carousel from "@/components/ui/Carousel";
import { projects, site } from "@/lib/schemas";

export default function Works() {
  return (
    <section
      id="works"
      // Starts on the cloud colour so the join with Education has no edge.
      // 20svh/25svh is how far each neighbouring cloud overlaps this section.
      className="flex min-h-svh flex-col justify-center bg-linear-to-b from-cloud to-transparent to-40% px-4 pt-[calc(20svh+72px)] pb-[calc(20svh+120px)] md:px-6 md:pt-[calc(25svh+96px)] md:pb-[calc(25svh+160px)]"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <h2 className="reveal-on-scroll mb-8 font-serif text-[clamp(2rem,5vw,3.5rem)] leading-tight">
          {site.headings.works}
        </h2>
        {/* Reveal sits outside the track: inside it, view() would follow the row's own scroller. */}
        <div className="reveal-on-scroll">
          <Carousel
            previousLabel={site.previousProjectLabel}
            nextLabel={site.nextProjectLabel}
          >
            {projects.map(
              ({ id, title, summary, tags, image, logo, tint, liveUrl }) => {
                const dark = tint === "ink";
                return (
                  <article
                    key={id}
                    style={
                      tint && {
                        backgroundColor: `color-mix(in srgb, var(--color-${tint}) ${dark ? 92 : 75}%, transparent)`,
                      }
                    }
                    className={`group relative flex w-full flex-col overflow-hidden rounded-[28px] p-6 shadow-[0_20px_50px_rgba(14,58,71,0.12)] backdrop-blur-sm md:p-8 ${tint ? "" : "bg-card"} ${dark ? "text-paper" : ""}`}
                  >
                    {/* Cover on a wide box leaves only the middle of the logo showing. */}
                    {logo && (
                      <Image
                        src={logo}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 350px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover opacity-15"
                      />
                    )}
                    <div className="relative flex flex-1 flex-col">
                      {image && (
                        <div className="relative mb-4 aspect-video overflow-hidden rounded-2xl">
                          <Image
                            src={image}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 350px, (min-width: 768px) 50vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <h3 className="mb-2 font-serif text-3xl">{title}</h3>
                      <p>{summary}</p>
                      <ul className="mt-4 mb-6 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full bg-sky-mist px-3 py-1 text-sm text-ink"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                      {liveUrl && (
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${site.viewSiteLabel}: ${title}`}
                          className={`hover-button mt-auto inline-flex min-h-11 items-center gap-2 self-start rounded-full px-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current ${dark ? "bg-paper text-ink hover:bg-sky-mist" : "bg-ink text-paper hover:bg-water-deep"}`}
                        >
                          {site.viewSiteLabel}
                          <ArrowUpRight aria-hidden className="size-4" />
                        </a>
                      )}
                    </div>
                  </article>
                );
              },
            )}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
