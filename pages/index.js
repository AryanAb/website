import Head from 'next/head';

import Navbar from '../components/Navbar';
import Logos from '../components/Logos';
import Title from '../components/Title';
import AboutMe from '../components/AboutMe';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';

import typewriterStyle from '../styles/typewriter.module.css';

import Typewriter from 'typewriter-effect';

import { getExperiencesData } from '../lib/experiences';

export async function getStaticProps() {
  const experiencesData = getExperiencesData();
  return {
    props: {
      experiencesData
    }
  }
};

export default function Home({ experiencesData }) {
  return (
    <div className="container">
      <Head>
        <title>Aryan Abed-Esfahani</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

        <Title str={"Toolchain"} />
      </main>

      <footer>
      </footer>
    </div>
  )
}
