import { GetStaticProps } from "next";
import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import AppsList from "../../components/AppsList";
import { countApps, listAppsContent, AppsContent } from "../../lib/apps";
import config from "../../lib/config";

type Props = {
    apps: AppsContent[];
    pagination: {
        current: number;
        pages: number;
    };
};
export default function Index({ apps, pagination }: Props) {
  const url = "/apps";
  const title = "All apps";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
        <AppsList apps={apps} pagination={pagination} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const apps = listAppsContent(1, config.apps_per_page);  
  const pagination = {
    current: 1,
    pages: Math.ceil(countApps() / config.apps_per_page),
  };
  return {
    props: {
      apps,
      pagination,
    },
  };
};
