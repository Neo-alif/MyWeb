import { z } from "zod";
import educationJson from "@/content/education.json";
import profileJson from "@/content/profile.json";
import siteJson from "@/content/site.json";
import socialsJson from "@/content/socials.json";

const ProfileSchema = z.object({
  name: z.string(),
  shortName: z.string(),
  heroGreeting: z.string(),
  heroBio: z.string(),
  heroDesktop: z.string(),
  heroMobile: z.string(),
  heroAlt: z.string(),
  footerPic: z.string(),
  footerBio: z.string(),
  email: z.email(),
  location: z.string().optional(),
});

const EducationSchema = z.object({
  id: z.enum(["university", "college", "school"]),
  heading: z.string(),
  lines: z.array(z.string()),
  logo: z.string(),
  tint: z.enum(["cloud", "paper", "sky-mist", "aqua-mist", "leaf-soft"]),
});

const SocialSchema = z.object({
  platform: z.enum([
    "github",
    "linkedin",
    "codeforces",
    "codechef",
    "facebook",
    "instagram",
    "youtube",
    "leetcode",
    "email",
  ]),
  label: z.string(),
  handle: z.string().optional(),
  url: z.url().or(z.literal("")), // "" hides the entry until a real link exists
  image: z.string(),
  order: z.number(),
});

const SiteSchema = z.object({
  emailLabel: z.string(),
  heroCta: z.string(),
  headings: z.object({ education: z.string() }),
  nav: z.object({
    label: z.string(),
    links: z.array(z.object({ label: z.string(), href: z.string() })),
  }),
  footer: z.object({
    picAlt: z.string(),
    copyright: z.string(),
  }),
  notFound: z.object({
    title: z.string(),
    message: z.string(),
    homeLabel: z.string(),
  }),
});

export type Social = z.infer<typeof SocialSchema>;

export const profile = ProfileSchema.parse(profileJson);
export const education = z.array(EducationSchema).parse(educationJson);
export const socials = z
  .array(SocialSchema)
  .parse(socialsJson)
  .filter((social) => social.url)
  .toSorted((a, b) => a.order - b.order);
export const site = SiteSchema.parse(siteJson);
