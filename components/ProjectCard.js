import Image from "next/image";
import projectStyles from "../styles/project.module.css";

const ProjectCard = ({ image, title }) => (
  <div className={projectStyles.container}>
    <div className={projectStyles.banner}>
      <Image src={image} width={300} height={130} alt={title} />
    </div>
    <h1 className={projectStyles.title}>{title}</h1>
  </div>
);

export default ProjectCard;
