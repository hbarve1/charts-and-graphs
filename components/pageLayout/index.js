/** @format */

import Head from "next/head";
import Link from "next/link";

import styles from "../../styles/Home.module.css";
import convertUrlToTitle from "../../utils/convertUrlToTitle";

import Footer from "../Footer";

function PageLayout({ title, description, heading, baseUrl, list }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{heading}</h1>

        <div className={styles.grid}>
          {list.map(({ title ,value}) => (
            <Link href={`${baseUrl}/${title}`} key={title}>
              <a
                className={styles.card}
                style={{
                  borderColor: value > 0 ? "green" : "red",
                  borderWidth: 2,
                }}
              >
                <h2>{convertUrlToTitle(title)} &rarr;</h2>
                {/* <p>Find in-depth information about Next.js features and API.</p> */}
              </a>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

PageLayout.defaultProps = {
  title: "Charts and Graphs",
  description:
    "Find all Charts and Graphs examples of React.js implementation in one place.",
  heading: (
    <>
      Welcome to <a href="https://nextjs.org">Apache Echarts Examples</a>
    </>
  ),
};

export default PageLayout;
