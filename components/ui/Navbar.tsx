"use client";

import { useEffect, useState } from "react";

type NavbarProps = {
  label: string;
  links: { label: string; href: string }[];
  heroId?: string;
};

export default function Navbar({ label, links, heroId = "hero" }: NavbarProps) {
  const [heroVisible, setHeroVisible] = useState(true);
  const [cloudAtNav, setCloudAtNav] = useState(false);
  const overHero = heroVisible && !cloudAtNav;

  useEffect(() => {
    const hero = document.getElementById(heroId);
    if (!hero) return;
    const heroObserver = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      // Stop 64px early so the box appears as the hero's end passes under the nav.
      { rootMargin: "-64px 0px 0px 0px" },
    );
    heroObserver.observe(hero);

    const touching = new Set<Element>();
    const cloudObserver = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting } of entries) {
          if (isIntersecting) touching.add(target);
          else touching.delete(target);
        }
        setCloudAtNav(touching.size > 0);
      },
      // Only the top 10% of the screen counts: the band the nav sits in.
      { rootMargin: "0px 0px -90% 0px" },
    );
    document
      .querySelectorAll("[data-cloud-layer]")
      .forEach((layer) => cloudObserver.observe(layer));

    return () => {
      heroObserver.disconnect();
      cloudObserver.disconnect();
    };
  }, [heroId]);

  return (
    <nav
      aria-label={label}
      className="fixed inset-x-2 top-3 z-50 mx-auto flex max-w-[420px] justify-center gap-1 rounded-full p-1"
    >
      {/* Separate layer so the box change is an opacity fade. */}
      <span
        aria-hidden
        className={`absolute inset-0 -z-10 rounded-full border border-ink/12 bg-card shadow-[0_10px_30px_rgba(31,70,80,.15)] backdrop-blur-[14px] transition-opacity duration-250 ${
          overHero ? "opacity-0" : "opacity-100"
        }`}
      />
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={`inline-flex min-h-11 items-center rounded-full px-5 transition-colors duration-250 focus-visible:outline-2 focus-visible:outline-current ${
            overHero
              ? "text-paper hover:text-cloud"
              : "text-ink hover:text-water-deep"
          }`}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
