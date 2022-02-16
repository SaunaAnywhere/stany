import { GetStaticProps } from "next";
import Head from "next/head";
import Button from "@mui/material/Button";

import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import Link, { NextLinkComposed } from "../components/Link";
import utilStyles from "../styles/utils.module.css";
import Divider from "@mui/material/Divider";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <footer>
        <Divider>Links</Divider>
        <Link href="/home" color="secondary">
          Go to the cats page
        </Link>{" "}
        <Button variant="contained" component={NextLinkComposed} to="/home">
          Go To the Cats Page
        </Button>
      </footer>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
