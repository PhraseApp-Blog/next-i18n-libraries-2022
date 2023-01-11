import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>i18n demo</title>
        <meta
          name="description"
          content="A simple internationalization (i18n) demo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>

        <p className={`${styles.content} ${inter.className}`}>
          This app will be internationalized by a couple of Next.js i18n
          libraries.
        </p>
      </main>
    </>
  );
}
