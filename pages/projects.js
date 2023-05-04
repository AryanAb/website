import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Title from "../components/Title";
import { getProjectsData } from "../lib/projects";
import Head from "next/head";

export async function getStaticProps() {
  const projectsData = getProjectsData().projects;
  return {
    props: {
      projectsData,
    },
  };
}

const ProjectsPage = ({ projectsData }) => (
  <>
    <Head>
      <title> Projects | Ari Abed-Esfahani </title>

      <meta property="og:title" content="Ari Abed-Esfahani" />
      <meta
        property="og:url"
        content="https://website-aryanab.vercel.app/projects"
      />
      <meta property="og:image" content="/images/fun.jpg" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="See the full list of my projects, the tech stack I used to make them, and a brief summary."
      />
    </Head>

    <body>
      <Navbar />

      <main style={{ marginTop: 80, marginBottom: 20 }}>
        <Title str="Projects" />
        <Projects projectsData={projectsData} />
      </main>
    </body>
  </>
);

export default ProjectsPage;
