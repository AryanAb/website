import Image from "next/image";
import cardStyles from "../styles/experience.module.css"

const ExperienceCard = ({ image, title, role, date }) => (
  <div className={cardStyles.container}>
    <div className={cardStyles.banner}>
      <Image src={image} width={300} height={130} alt={title} />
    </div>
    <h1 className={cardStyles.title}>{title}</h1>
    <h2 className={cardStyles.role}>{role}</h2>
    <h3 className={cardStyles.date}>{date}</h3>
  </div>
);

export default ExperienceCard;
