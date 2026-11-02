import CloudDivider from "@/components/clouds/CloudDivider";
import Education from "@/components/sections/Education";
import FindMe from "@/components/sections/FindMe";
import Hero from "@/components/sections/Hero";
import Works from "@/components/sections/Works";
import Navbar from "@/components/ui/Navbar";
import { site } from "@/lib/schemas";

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
        <CloudDivider />
        <FindMe />
      </main>
    </>
  );
}
