import type { Metadata } from "next";
import CloudDivider from "@/components/clouds/CloudDivider";
import ScrollReveal from "@/components/providers/ScrollReveal";
import Education from "@/components/sections/Education";
import FindMe from "@/components/sections/FindMe";
import Hero from "@/components/sections/Hero";
import Works from "@/components/sections/Works";
import Navbar from "@/components/ui/Navbar";
import { site, siteUrl } from "@/lib/schemas";

// Here, not in the layout, so the 404 page doesn't claim the home URL.
export const metadata: Metadata = {
  alternates: siteUrl ? { canonical: "/" } : undefined,
};

export default function Home() {
  return (
    <>
      <ScrollReveal />
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
