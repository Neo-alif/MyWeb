import CloudDivider from "@/components/clouds/CloudDivider";
import Education from "@/components/sections/Education";
import Hero from "@/components/sections/Hero";
import Works from "@/components/sections/Works";
import IconLinks from "@/components/ui/IconLinks";
import Navbar from "@/components/ui/Navbar";
import { profile, site, socials } from "@/lib/schemas";

export default function Home() {
  return (
    <>
      <Navbar label={site.nav.label} links={site.nav.links} />
      <main>
        <Hero />
        <CloudDivider />
        <Education />
        <CloudDivider />
        <Works />
        {/* Stubs: Phase 6 replaces these with the last page. */}
        <section
          id="socials"
          className="flex min-h-svh items-center justify-center px-4"
        >
          <IconLinks socials={socials} />
        </section>
        <section
          id="contact"
          className="flex min-h-svh items-center justify-center px-4"
        >
          <IconLinks
            email={{ address: profile.email, label: site.emailLabel }}
          />
        </section>
      </main>
    </>
  );
}
