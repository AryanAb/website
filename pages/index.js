import Head from 'next/head';

import Navbar from '../components/Navbar';
import Logos from '../components/Logos';
import Title from '../components/Title';
import AboutMe from '../components/AboutMe';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';
import SelectedPosts from '../components/SelectedPosts';
import Toolchain from '../components/Toolchain';

import typewriterStyle from '../styles/typewriter.module.css';

import Typewriter from 'typewriter-effect';

import { getExperiencesData } from '../lib/experiences';
import { getSortedPostsData } from '../lib/posts';
import { getToolchainData } from '../lib/toolchain';

export async function getStaticProps() {
  const experiencesData = getExperiencesData();
  const allPostsData = getSortedPostsData();
  const toolchainData = getToolchainData();
  return {
    props: {
      experiencesData,
      allPostsData,
      toolchainData
    }
  }
};

export default function Home({ experiencesData, allPostsData, toolchainData }) {
  return (
    <div className="container">
      <Head>
        <title>Aryan Abed-Esfahani</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/hack-font@3/build/web/hack.css" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />

      </Head>

      <body>
        <Navbar />

        <main style={{ marginTop: 80 }}>

          <div className={typewriterStyle.typewriter}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Hi, I'm Aryan!").pauseFor("2000").deleteAll().typeString("Welcome to my website").pauseFor("2000").deleteAll().typeString("Enjoy :)").start();
              }}
            />
          </div>

          <Logos />

          <AboutMe />

          <div className={typewriterStyle.gap}></div>
          <Title str={"Experiences"} />
          <Experiences experiencesData={experiencesData} />

          <Title str={"Selected Projects"} />
          <Projects projectsData={""} />

          <Title str={"Selected Blog Posts"} />
          <SelectedPosts posts={allPostsData} />

          <Title str={"Toolchain"} />
          <Toolchain toolchainData={toolchainData} />
        </main>

        <footer>
        </footer>
      </body>
    </div>
  )
}
