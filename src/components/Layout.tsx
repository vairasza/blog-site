import Head from "next/head";
import Copyright from "./Copyright";
import Navigation from "./Navigation";
import { SocialList }  from "./SocialList";


type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#000" />
      </Head>
      <nav>
        <Navigation />
      </nav>
      <main>{children}</main>
      <footer>
          <div className={"social-list"}>
            <SocialList />
          </div>
          <Copyright />
      </footer>
      <style jsx>
        {`
          .root {
            display: flex;
            flex-direction: column;
            padding: 4rem 0;
            box-sizing: border-box;
            height: 100%;
          }
          main {
            display: flex;
            margin: auto;
            min-height: 100%;
          }
          footer {
            position: block;
            left: 0;
            bottom: 0;
            width: 100%;
            text-align: center;
          }
          @media (min-width: 769px) {
            .root {
              display: flex;
              flex: 1 0 auto;
            }
            main {
              flex: 1 0 auto;
            }
          }
        `}
      </style>
    </div>
  );
}
