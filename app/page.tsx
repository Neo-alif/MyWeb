import CloudDivider from "@/components/clouds/CloudDivider";
import IconLinks from "@/components/ui/IconLinks";
import Navbar from "@/components/ui/Navbar";
import { profile, site, socials } from "@/lib/schemas";

export default function Home() {
  return (
    <>
      <Navbar label={site.nav.label} links={site.nav.links} />
      {/* Stubs: Phases 4 and 7 fill these in. */}
      <main>
        <section id="hero" className="min-h-svh" />
        <CloudDivider />
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
