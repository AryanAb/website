import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Title from "../components/Title";
import { getProjectsData } from "../lib/projects";

export async function getStaticProps() {
  const projectsData = getProjectsData().projects;
  return {
    props: {
      projectsData
    }
  }
}

const ProjectsPage = ({ projectsData }) => {
  return (
    <body>
      <Navbar />

      <main style={{ marginTop: 80, marginBottom: 20 }}>
        <Title str="Projects" />
        <Projects projectsData={projectsData} />
      </main>
    </body>
  );
};

export default ProjectsPage;
