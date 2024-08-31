export type IconKey = "github" | "linkedin" | "instagram";
export type SocialGlob = { name: string; url: string; iconKey: IconKey };
export type SocialData = { social: SocialGlob[] };

const social: SocialGlob[] = [
  {
    name: "GitHub",
    url: "https://github.com/Justiceleeg",
    iconKey: "github",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/justicepwhite/",
    iconKey: "instagram",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/justiceperezwhite/",
    iconKey: "linkedin",
  },
];

export default social;
