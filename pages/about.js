import Head from "next/head";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Head>
        <title>About us | i18n demo</title>
        <meta
          name="description"
          content="A simple internationalization (i18n) demo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>

        <p className={`content ${inter.className}`}>
          A simple about page. Today is {new Date().toString()}.
        </p>
      </main>
    </>
  );
}
