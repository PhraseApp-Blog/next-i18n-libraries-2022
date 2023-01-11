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
          <div className="nav-left">
            <Link href="/">Home</Link> | <Link href="/about">About</Link>
          </div>

          <div className="nav-right">
            <span>🌐</span>
            <Link href="/" locale="en-US">
              English
            </Link>{" "}
            |
            <Link href="/" locale="ar-EG">
              Arabic (العربية)
            </Link>
          </div>
        </nav>

        <p className={`content ${inter.className}`}>
          A simple about page. Today is {new Date().toString()}.
        </p>
      </main>
    </>
  );
}
