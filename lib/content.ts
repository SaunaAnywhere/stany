import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content");

export async function getContentData(fileName: string) {
  const fullPath = path.join(contentDirectory, `${fileName}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    fileName,
    contentHtml,
    ...(matterResult.data as {
      title: string;
      cats: { description: string; name: string }[];
    }),
    date: new Date(matterResult.data.date).toUTCString() as string,
  };
}
