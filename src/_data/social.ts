export type IconKey = "github";
export type SocialGlob = { name: string; url: string; iconKey: IconKey };
export type SocialData = { social: SocialGlob[] };

const social: SocialGlob[] = [
  {
    name: "GitHub",
    url: "https://github.com/Justiceleeg",
    iconKey: "github",
  },
];

export default social;
