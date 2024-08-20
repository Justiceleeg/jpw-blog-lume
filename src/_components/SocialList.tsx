export default ({ social, comp }: Lume.Data, helpers: Lume.Helpers) => (
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
