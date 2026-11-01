import Link from "next/link";
import { site } from "@/lib/schemas";

export default function NotFound() {
  const { title, message, homeLabel } = site.notFound;

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="font-serif text-[clamp(2.5rem,7vw,6rem)] leading-none">
        {title}
      </h1>
      <p className="max-w-prose">{message}</p>
      <Link
        href="/"
        className="inline-flex min-h-11 items-center rounded-full bg-ink px-6 text-paper transition-transform hover:-translate-y-0.5 hover:bg-water-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        {homeLabel}
      </Link>
    </main>
  );
}
