import Script from "next/script";
import { GetStaticProps } from "next";

import { getContentData } from "../lib/content";

export default function Home({
  contentData,
}: {
  contentData: {
    title: string;
    date: string;
    cats: { name: string; description: string }[];
    contentHtml: string;
  };
}) {
  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <article>
        <h1>{contentData.title}</h1>
        <section
          dangerouslySetInnerHTML={{ __html: contentData.contentHtml }}
        />
        <ul>
          {contentData.cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const contentData = await getContentData("home");
  return {
    props: {
      contentData,
    },
  };
};
