import IconLinks from "@/components/ui/IconLinks";
import { profile, site, socials } from "@/lib/schemas";

export default function FindMe() {
  return (
    <section
      id="find-me"
      // Starts on the cloud colour so the join with My Works has no edge.
      className="flex min-h-svh flex-col items-center bg-linear-to-b from-cloud to-transparent to-40% px-4 pt-[calc(20svh+48px)] pb-24 text-center md:px-6 md:pt-[calc(25svh+64px)] md:pb-[33svh]"
    >
      <h2 className="reveal-on-scroll mb-12 font-serif text-[clamp(2rem,5vw,3.5rem)] leading-tight">
        {site.headings.findMe}
      </h2>
      <h3
        id="socials"
        className="reveal-on-scroll mb-4 scroll-mt-24 font-serif text-3xl"
      >
        {site.headings.socials}
      </h3>
      <IconLinks
        tile
        socials={socials.filter(({ group }) => group === "social")}
        email={{
          address: profile.email,
          label: site.emailLabel,
          id: "contact",
        }}
        className="reveal-on-scroll mb-12"
      />
      <h3 className="reveal-on-scroll mb-4 font-serif text-3xl">
        {site.headings.coding}
      </h3>
      <IconLinks
        tile
        socials={socials.filter(({ group }) => group === "coding")}
        className="reveal-on-scroll"
      />
    </section>
  );
}
