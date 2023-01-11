import Head from "next/head";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Head>
        <title>{`${t("aboutTitle")} | ${t("title")}`}</title>
        <meta name="description" content={t("metaDescription")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main" dir={i18n.dir()}>
        <nav className="nav">
          <div className="nav-left">
            <Link href="/">{t("home")}</Link> |
            <Link href="/about">{t("about")}</Link>
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
          {t("aboutContent", { val: new Date() })}
        </p>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
