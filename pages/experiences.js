import Navbar from "../components/Navbar";
import Title from "../components/Title";
import ExperienceCardLeft from "../components/ExperienceCardLeft";
import { getExperiencesData } from "../lib/experiences";
import expStyle from '../styles/experiencePage.module.css';
import Head from "next/head";

export async function getStaticProps() {
  const experiences = getExperiencesData().experiences;
  console.log(experiences);
  return {
    props: {
      experiences
    }
  }
}

const ExperiencesPage = ({ experiences }) => {
  return (
    <>
      <Head>
        <title> Experiences | Aryan Abed-Esfahani </title>

        <meta property="og:title" content="Aryan Abed-Esfahani" />
        <meta property="og:url" content="https://website-aryanab.vercel.app/experiences" />
        <meta property="og:image" content="/images/fun.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="See my work experiences, my impressions, and the lessons I learned." />
      </Head>

      <body>
        <Navbar />

        <main style={{ marginTop: 80, marginBottom: 20 }}>
          <Title str="Experiences" />
          <div className={expStyle.wrapper}>
            {experiences.map(experience => <ExperienceCardLeft image={experience.image} company={experience.company} role={experience.role} duration={experience.duration} summary={experience.summary} />)}
          </div>
        </main>
      </body>
    </>
  );
};

export default ExperiencesPage;
