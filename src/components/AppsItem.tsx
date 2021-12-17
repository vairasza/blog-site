import { AppsContent } from "../lib/apps";
import GitHub from "../assets/github-alt.svg";
import Website from "../assets/Website";

type Props = {
  app: AppsContent;
};
export default function AppItem({ app }: Props) {
  return (
    <div className="appItem">
      <div className="flexHeader">
        <h2>{app.title}</h2>
        <a href={app.liveLink} target="_blank" rel="noopener" title="Deployed Version"><Website width={24} heigth={24} altText={"Icon that leads to live version"}/></a>
        <a 
          className="flexappItem"
          title="GitHub"
          href={app.githubLink}
          target="_blank"
          rel="noopener"
        >
          <GitHub width={24} height={24} fill={"#222"} />
        </a>
      </div>

      <ul>
        {app.tools.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <img src={app.imagePath} alt={app.imageAlt} />
      <p>{app.text}</p>
      <style jsx>
          {`
            .appItem {
              display: flex;
              flex-direction: column;
            }
            .flexHeader {
              display: flex;
              flex-direction: row;
              gap: 10px;
            }
            .flexappItem {
            }
            a:hover {
              border: 1px dotted black;
            }
            a {
              color: #222;
              display: inline-block;
              border: 1px solid transparent;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
            .appItem {
              padding: 4px;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }
          `}
        </style>
    </div>
  );
}