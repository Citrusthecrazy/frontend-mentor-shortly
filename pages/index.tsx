import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Header, Hero } from "../widgets";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shortly</title>
        <meta name="description" content="Url shortening made easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Hero />
      </main>
    </div>
  );
};

export default Home;
