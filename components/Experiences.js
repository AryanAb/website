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
    <Waypoint onEnter={() => setInView(true)} topOffset={100}>
      <div className={cardStyles.gridWrapper}>
        {experiencesData.map(experience => <ExperienceCard image={experience.image} company={experience.company} role={experience.role} duration={experience.duration} />)}
      </div>
    </Waypoint>
  );
};

export default Experiences;
