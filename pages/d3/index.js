// /** @format */

// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";

// import styles from "../../styles/Home.module.css";

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Charts and Graphs</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Charts & Graphs</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{" "}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <Link href="/bar-chart">
//             <a className={styles.card}>
//               <h2>Bar Chart &rarr;</h2>
//               <p>Find in-depth information about Next.js features and API.</p>
//             </a>
//           </Link>{" "}
//           <Link href="/radial-tidy-chart">
//             <a className={styles.card}>
//               <h2>Radial Tidy Chart &rarr;</h2>
//               <p>Find in-depth information about Next.js features and API.</p>
//             </a>
//           </Link>{" "}
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{" "}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   );
// }
/** @format */

import PageLayout from "../../components/pageLayout";

function Recharts() {
  const list = [
    { title: "bar-chart", value: 1 },
    { title: "bar-chart-2", value: 1 },
    { title: "radial-tidy-chart", value: 0 },
  ];

  return (
    <PageLayout
      {...{
        title: "D3",
        description: "D3 Examples",
        heading: (
          <>
            Welcome to <a href="#">D3 Examples</a>
          </>
        ),
        baseUrl: "/d3",
        list,
      }}
    />
  );
}

export default Recharts;