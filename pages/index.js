import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <b>Yashveer</b>. I'm a software engineer and M.S 
          Computer Science student at University of Minnesota. Check 
          out my <a href="https://github.com/yashveer-bika">Github </a>, <a href="https://github.com/yashveer-bika">interactive portfolio [TODO: change link, make portfolio pages]</a>, and <a href="https://www.overleaf.com/read/dchnnrthggft">resume</a>. 
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

      <section>
        <p>
          Thanks to <a href="https://nextjs.org/learn"> Next.js </a> for this format.
        </p>
      </section>

    </Layout>
  );
}