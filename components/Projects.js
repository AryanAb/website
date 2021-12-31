import ProjectCard from "./ProjectCard";
import cardStyles from "../styles/project.module.css";

const Projects = ({ projectsData }) => {
  return (
    <div className={cardStyles.gridWrapper}>
      <ProjectCard image={"/images/C1.png"} title={"Songyo"} />
    </div>
  );
};

export default Projects;
