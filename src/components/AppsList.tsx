import React from "react";
import Pagination from "./Pagination";
import AppsItem from "./AppsItem";
import { AppsContent } from "../lib/apps";

type Props = {
  apps: AppsContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function AppsList({ apps, pagination }: Props) {  
  return (
    <div className={"container"}>
      <div className={"apps"}>
        <ul className={"app-list"}>
          {apps.map((it, i) => (
            <li key={i}>
              <AppsItem app={it} />
            </li>
          ))}
        </ul>
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? "/apps" : "/apps/page/[page]"),
            as: (page) => (page === 1 ? null : "/apps/page/" + page),
          }}
        />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          margin: 0 auto;
          max-width: 1200px;
          width: 100%;
          padding: 0 1.5rem;
        }
        ul {
          margin: 0;
        }
        li {
          list-style: none;
        }
        .posts {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          padding-right: 10%;
          padding-left: 10%;
        }
        .posts li {
          margin-bottom: 1.5rem;
        }
        .post-list {
          flex: 1 0 auto;
        }
        .categories {
          display: none;
        }
        .categories li {
          margin-bottom: 0.75em;
        }

        @media (min-width: 769px) {
          .categories {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
