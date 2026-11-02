import type { CSSProperties, ElementType } from "react";
import { Mail } from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { SiCodechef, SiCodeforces } from "react-icons/si";
import type { Social } from "@/lib/schemas";

// VJudge has no icon in react-icons, so it uses its monogram from socials.json.
const icons: Partial<Record<Social["platform"], ElementType>> = {
  github: FaGithub,
  codeforces: SiCodeforces,
  codechef: SiCodechef,
  facebook: FaFacebook,
  instagram: FaInstagram,
};

const pillClass =
  "inline-flex size-11 items-center justify-center rounded-full bg-current/10 transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_16px_var(--color-sun)] focus-visible:outline-2 focus-visible:outline-current";

// The glow sits on ::after so it can fade with opacity alone.
const tileClass =
  "relative inline-flex size-18 scroll-mt-[35svh] items-center justify-center rounded-3xl bg-card shadow-[0_20px_50px_rgba(14,58,71,0.12)] backdrop-blur-sm transition-transform after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:shadow-[0_0_24px_var(--color-sun)] after:transition-opacity hover:-translate-y-1 hover:after:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current";

type IconLinksProps = {
  socials?: Social[];
  email?: { address: string; label: string; id?: string };
  tile?: boolean;
  className?: string;
};

export default function IconLinks({
  socials = [],
  email,
  tile = false,
  className = "",
}: IconLinksProps) {
  const linkClass = tile ? tileClass : pillClass;
  const iconClass = tile ? "size-8" : "size-5";

  return (
    <ul
      className={`flex flex-wrap justify-center ${tile ? "gap-4" : "gap-2"} ${className}`}
    >
      {socials.map(({ platform, label, url, monogram }, i) => {
        const Icon = icons[platform];
        return (
          <li
            key={platform}
            style={{ "--i": i } as CSSProperties}
            className="reveal-on-scroll"
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className={linkClass}
            >
              {Icon ? (
                <Icon aria-hidden className={iconClass} />
              ) : (
                <span aria-hidden className="text-2xl font-bold tracking-tight">
                  {monogram}
                </span>
              )}
            </a>
          </li>
        );
      })}
      {email && (
        <li
          style={{ "--i": socials.length } as CSSProperties}
          className="reveal-on-scroll"
        >
          <a
            id={email.id}
            data-arrival-pulse={email.id ? "" : undefined}
            href={`mailto:${email.address}`}
            aria-label={email.label}
            title={email.address}
            className={linkClass}
          >
            <Mail aria-hidden className={iconClass} />
          </a>
        </li>
      )}
    </ul>
  );
}
