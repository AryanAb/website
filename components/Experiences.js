import ExperienceCard from "./ExperienceCard";
import cardStyles from "../styles/experience.module.css"

const Experiences = ({ experiencesData }) => {
  return (
    <div className={cardStyles.gridWrapper}>
      {experiencesData.experiences.map(experience => <ExperienceCard image={experience.image} title={experience.company} role={experience.position} date={experience.date} />)}
    </div>
  );
};

export default Experiences;
