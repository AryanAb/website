import Image from "next/image";
import projectStyles from "../styles/project.module.css";

const ProjectCard = ({ image, title, creators, technologies, description, links }) => (
  <div className={projectStyles.container}>
    <div className={projectStyles.banner}>
      {/* Image goes here */}
      <Image src={image} layout="fill" />
    </div>
    <div className={projectStyles.info}>
      <h4 className={projectStyles.technologies}>
        <h3 className={projectStyles.title}>{title}</h3>
        <p className={projectStyles.creators}>{creators.map(creator => <span className={projectStyles.creator}>{creator}</span>)}</p>
        <p style={{ marginTop: 5, marginBottom: 8 }}>
          Technologies Used:
          {technologies.map(tech => <span className={projectStyles.technology}>{tech}</span>)}
        </p>
      </h4>
      <p style={{ marginTop: 0 }}>{description}</p>
      {links.map(link => <a className={projectStyles.links} href={link.href}>{link.name}</a>)}
    </div>
  </div>
);

export default ProjectCard;
