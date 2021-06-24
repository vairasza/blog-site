import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";

const appsDirectory = path.join(process.cwd(), "content/apps");

export type AppsContent = {
  readonly date: string;
  readonly title: string;
  readonly slug: string;
  readonly author: string,
  readonly fullPath: string;
  readonly liveLink: string;
  readonly githubLink: string;
  readonly partners: Array<string> | null;
  readonly tools: Array<string>;
  readonly imagePath: string;
  readonly imageAlt: string;
  readonly text: string;
};

let appsCache: AppsContent[];

export function fetchPostContent(): AppsContent[] {
  if (appsCache) {
    return appsCache;
  }
  // Get file names under /posts
  const fileNames = fs.readdirSync(appsDirectory);
  const allAppsData = fileNames
    .filter((it) => it.endsWith(".mdx"))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(appsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      });
      const matterData = matterResult.data as {
        date: string;
        title: string;
        slug: string;
        author: string,
        fullPath: string;
        liveLink: string;
        githubLink: string;
        partners: Array<string> | null;
        tools: Array<string>;
        imagePath: string;
        imageAlt: string;
        text: string;
      };
      matterData.fullPath = fullPath;      

      const slug = fileName.replace(/\.mdx$/, "");

      // Validate slug string
      if (matterData.slug !== slug) {
        throw new Error(
          "slug field not match with the path of its content source"
        );
      }

      return matterData;
    });
  // Sort posts by date
  appsCache = allAppsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return appsCache;
}

export function countApps(): number {
  return fetchPostContent().length;
}

export function listAppsContent(
  page: number,
  limit: number,
): AppsContent[] {
  return fetchPostContent()
    .slice((page - 1) * limit, page * limit);
}
