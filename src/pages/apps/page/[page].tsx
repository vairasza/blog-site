import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../../components/Layout";
import BasicMeta from "../../../components/meta/BasicMeta";
import OpenGraphMeta from "../../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../../components/meta/TwitterCardMeta";
import AppList from "../../../components/AppsList";
import config from "../../../lib/config";
import { countApps, listAppsContent, AppsContent } from "../../../lib/apps";

type Props = {
  apps: AppsContent[];
  page: number;
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Page({ apps, pagination, page }: Props) { 
  const url = `/apps/page/${page}`;
  const title = "All apps";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <AppList apps={apps} pagination={pagination} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = parseInt(params.page as string);
  const apps = listAppsContent(page, config.apps_per_page);
  const pagination = {
    current: page,
    pages: Math.ceil(countApps() / config.apps_per_page),
  };
  return {
    props: {
      page,
      apps,
      pagination,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = Math.ceil(countApps() / config.apps_per_page);
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};
