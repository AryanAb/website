import Image from "next/image";
import projectStyles from "../styles/project.module.css";

const ProjectCard = ({ image, title, creators, technologies, description, links }) => (
  <div className={projectStyles.container}>
    <div className={projectStyles.banner}>
      {/* Image goes here */}
      <Image src={image} width={200} height={200} />
    </div>
    <div className={projectStyles.info}>
      <div className={projectStyles.row}>
        <h3 className={projectStyles.title}>{title}</h3>
        <p className={projectStyles.creators}>{creators.join(', ')}</p>
      </div>
      <div>
        {/* Technologies, description, and links go here */}
        <div className={projectStyles.row}>
          <h4 className={projectStyles.technologies}>Technologies Used:</h4>
          {technologies.map(tech => <span className={projectStyles.technology}>{tech}</span>)}
        </div>
        <p>{description}</p>
        {links.map(link => <a className={projectStyles.links} href={link.href}>{link.name}</a>)}
      </div>
    </div>
  </div>
);

export default ProjectCard;
