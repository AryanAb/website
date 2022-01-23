import Head from 'next/head';

import Navbar from '../components/Navbar';
import Logos from '../components/Logos';
import Title from '../components/Title';
import AboutMe from '../components/AboutMe';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';
import Posts from '../components/Posts';
import Toolchain from '../components/Toolchain';
import ContactIndex from '../components/ContactIndex';

import typewriterStyle from '../styles/typewriter.module.css';

import Typewriter from 'typewriter-effect';

import { getExperiencesData } from '../lib/experiences';
import { getSortedPostsData } from '../lib/posts';
import { getToolchainData } from '../lib/toolchain';
import { getProjectsData } from '../lib/projects';

export async function getStaticProps() {
  const experiencesData = getExperiencesData().experiences;
  const projectsData = getProjectsData().projects.slice(0, 4);
  const allPostsData = getSortedPostsData().slice(0, 4);
  const toolchainData = getToolchainData();
  return {
    props: {
      experiencesData,
      projectsData,
      allPostsData,
      toolchainData
    }
  }
};

const Home = ({ experiencesData, projectsData, allPostsData, toolchainData }) => (
  <>
    <Head>
      <title>Aryan Abed-Esfahani</title>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/hack-font@3/build/web/hack.css" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />

      <meta property="og:title" content="Aryan Abed-Esfahani" />
      <meta property="og:url" content="https://website-aryanab.vercel.app/" />
      <meta property="og:image" content="/images/fun.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Hello, I'm Aryan. Welcome to my personal website. Here, you can see my experiences, my projects and some of the posts I make." />
    </Head>

    <body>
      <Navbar />

      <main style={{ marginTop: 60 }}>

        <div className={typewriterStyle.typewriter}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Hi, I'm Aryan!").pauseFor("2000").deleteAll().typeString("Welcome to my website").pauseFor("2000").deleteAll().typeString("Enjoy :)").start();
            }}
          />
        </div>
        <Logos />

        <AboutMe />

        <Title str={"Experiences"} />
        <Experiences experiencesData={experiencesData} />

        <Title str={"Selected Projects"} />
        <Projects projectsData={projectsData} />

        <Title str={"Selected Blog Posts"} />
        <Posts posts={allPostsData} />

        <Title str={"Toolchain"} />
        <Toolchain toolchainData={toolchainData} />

        <Title str={"Contact Me"} />
        <ContactIndex />
      </main>

      <footer>
      </footer>
    </body>
  </>
);

export default Home;
