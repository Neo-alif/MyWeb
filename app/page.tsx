import EmailLink from "@/components/ui/EmailLink";
import Navbar from "@/components/ui/Navbar";
import { profile, site } from "@/lib/schemas";

export default function Home() {
  return (
    <>
      <Navbar label={site.nav.label} links={site.nav.links} />
      {/* Stubs: Phases 4 and 7 fill these in. */}
      <main>
        <section id="hero" className="min-h-svh" />
        <section id="socials" className="min-h-svh" />
        <section
          id="contact"
          className="flex min-h-svh items-center justify-center px-4"
        >
          <EmailLink email={profile.email} />
        </section>
      </main>
    </>
  );
}
