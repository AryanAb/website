import Image from "next/image";
import cardStyles from "../styles/experience.module.css"

const ExperienceCard = ({ image, company, role, duration }) => (
  <div className={cardStyles.container}>
    <div className={cardStyles.banner}>
      <Image src={image} width={300} height={130} alt={image} />
    </div>
    <h1 className={cardStyles.title}>{company}</h1>
    <h2 className={cardStyles.role}>{role}</h2>
    <h3 className={cardStyles.date}>{duration}</h3>
  </div>
);

export default ExperienceCard;
