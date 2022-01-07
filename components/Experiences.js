import ExperienceCard from "./ExperienceCard";
import cardStyles from "../styles/experience.module.css"

import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";

const Experiences = ({ experiencesData }) => {
  const [inView, setInView] = useState(false);

  const cardsAnim = useSpring({
    from: { y: 7000 },
    to: { y: inView ? 0 : 7000 }
  });

  return (
    <Waypoint onEnter={() => setInView(true)}>
      <div className={cardStyles.gridWrapper}>
        {experiencesData.experiences.map(experience => <ExperienceCard image={experience.image} title={experience.company} role={experience.position} date={experience.date} />)}
      </div>
    </Waypoint>
  );
};

export default Experiences;
