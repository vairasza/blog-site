import { AppsContent } from "../lib/apps";

type Props = {
  app: AppsContent;
};
export default function AppItem({ app }: Props) {
  //missing: date, slug, fullpath
  
  return (
    <div className="test">
      <p>{app.title}</p>
      <p>{app.author}</p>
      <a href={app.liveLink} target="_blank">Live Version Link</a>
      <a href={app.githubLink} target="_blank">GitHub Link</a>
      <p>{app.partners ? app.partners.join() : null }</p>
      <ul>
        {app.tools.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <img src={app.imagePath} alt={app.imageAlt} />
      <p>{app.text}</p>
      <style jsx>
          {`
            a {
              color: #222;
              display: inline-block;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
            .test {
              border: 1px solid black;
            }
          `}
        </style>
    </div>
  );
}