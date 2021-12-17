import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <p>Hello <span className="fancy">&</span> Welcome on my Website</p>
          <h1>( ) =&gt; <span className="fancy"> &#123; vairasza &#125; </span>( )</h1>
          <p>I am a master's media informatics student at the University of Regensburg and an anspiring web developer.</p>
          <p>I like JavaScript, Rust and Backend Technology.</p>

        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
          max-width: 50rem;
          z-index: 2;
        }
        h1 {
          font-size: 3rem;
          margin: 0;
          font-weight: 300;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #E60000;
          font-weight: 10;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

      `}</style>
    </Layout>
  );
}
