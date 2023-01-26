/** @format */

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { database } from "../../../data/database";


import styles from "../../../styles/Home.module.css";

import convertUrlToTitle from "../../../utils/convertUrlToTitle";

export default function Home() {
  const BASE_URL = "/recharts/composed-charts";
  const list=[...database.recharts["bar-charts"]]

  // const list = [
  //   "line-bar-area-composed-chart",
  //   "same-data-composed-chart",
  //   "vertical-composed-chart",
  //   "composed-chart-with-axis-labels",
  //   "scatter-and-line-of-best-fit",
  // ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Charts and Graphs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Recharts Examples</a>
        </h1>

        <div className={styles.grid}>
        {list.map(({title,value}) => (
            <Link href={`${BASE_URL}/${title}`} key={title}>
              <a className={styles.card}style={{
                borderColor: value > 0 ? "green" : "red",
                borderWidth:2
              }}   >
                <h2>{convertUrlToTitle(title)} &rarr;</h2>
                {/* <p>Find in-depth information about Next.js features and API.</p> */}
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
