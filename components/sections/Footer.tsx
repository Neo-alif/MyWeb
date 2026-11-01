import Image from "next/image";
import IconLinks from "@/components/ui/IconLinks";
import { profile, site, socials } from "@/lib/schemas";

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
          <IconLinks
            socials={socials}
            email={{ address: profile.email, label: site.emailLabel }}
          />
          <p className="text-sm">{site.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
