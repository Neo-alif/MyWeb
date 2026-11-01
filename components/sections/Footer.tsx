import Image from "next/image";
import type { IconType } from "react-icons";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";
import EmailLink from "@/components/ui/EmailLink";
import { profile, site, socials, type Social } from "@/lib/schemas";

const icons: Record<Social["platform"], IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  codeforces: SiCodeforces,
  codechef: SiCodechef,
  facebook: FaFacebook,
  instagram: FaInstagram,
  youtube: FaYoutube,
  leetcode: SiLeetcode,
  email: MdEmail,
};

const pill =
  "inline-flex size-11 items-center justify-center rounded-full bg-paper/10 text-xl transition-transform hover:-translate-y-0.5 hover:text-sun hover:shadow-[0_0_16px_var(--color-sun)] focus-visible:outline-2 focus-visible:outline-current";

export default function Footer() {
  return (
    <footer className="px-4 pb-4">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-6 rounded-[32px] bg-footer p-8 text-center text-paper md:flex-row md:gap-10 md:p-12 md:text-left">
        <Image
          src={profile.footerPic}
          alt={site.footer.picAlt}
          width={160}
          height={160}
          className="size-32 rounded-[28px] md:size-40"
        />
        <div className="flex flex-col items-center gap-4 md:items-start">
          <h2 className="font-serif text-3xl">{profile.name}</h2>
          <p className="max-w-prose">{profile.footerBio}</p>
          <ul className="flex flex-wrap justify-center gap-2">
            {socials.map(({ platform, label, url }) => {
              const Icon = icons[platform];
              return (
                <li key={platform}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={pill}
                  >
                    <Icon aria-hidden />
                  </a>
                </li>
              );
            })}
          </ul>
          <EmailLink email={profile.email} />
          <p className="text-sm">{site.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
