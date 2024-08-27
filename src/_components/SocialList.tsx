import type { SocialData } from "../_data/social.ts";

export default ({ social }: Lume.Data & SocialData, helpers: Lume.Helpers) => (
  <ul>
    {social.map((media) => (
      <li key={media.name}>
        <a href={media.url} title={media.name} target="_blank" rel="noreferrer">
          {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
          <div dangerouslySetInnerHTML={{ __html: media.icon }} />
        </a>
      </li>
    ))}
  </ul>
);
