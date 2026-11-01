import type { ElementType } from "react";
import { Mail } from "lucide-react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";
import type { Social } from "@/lib/schemas";

const icons: Record<Social["platform"], ElementType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  codeforces: SiCodeforces,
  codechef: SiCodechef,
  facebook: FaFacebook,
  instagram: FaInstagram,
  youtube: FaYoutube,
  leetcode: SiLeetcode,
  email: Mail,
};

const linkClass =
  "inline-flex size-11 items-center justify-center rounded-full bg-current/10 transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_16px_var(--color-sun)] focus-visible:outline-2 focus-visible:outline-current";

type IconLinksProps = {
  socials?: Social[];
  email?: { address: string; label: string };
  className?: string;
};

export default function IconLinks({
  socials = [],
  email,
  className = "",
}: IconLinksProps) {
  return (
    <ul className={`flex flex-wrap justify-center gap-2 ${className}`}>
      {socials.map(({ platform, label, url }) => {
        const Icon = icons[platform];
        return (
          <li key={platform}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className={linkClass}
            >
              <Icon aria-hidden className="size-5" />
            </a>
          </li>
        );
      })}
      {email && (
        <li>
          <a
            href={`mailto:${email.address}`}
            aria-label={email.label}
            title={email.address}
            className={linkClass}
          >
            <Mail aria-hidden className="size-5" />
          </a>
        </li>
      )}
    </ul>
  );
}
