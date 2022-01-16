import ProjectCard from "./ProjectCard";
import cardStyles from "../styles/project.module.css";

const Projects = ({ projectsData }) => (
  <div className={cardStyles.wrapper}>
    {projectsData.projects.map(project => <ProjectCard image={project.image} title={project.title} creators={project.creators} technologies={project.technologies} description={project.description} links={project.links} />)}
  </div>
);

export default Projects;
