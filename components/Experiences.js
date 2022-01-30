import ExperienceCard from "./ExperienceCard";
import cardStyles from "../styles/experience.module.css"

import { useState } from "react";

const Experiences = ({ experiencesData }) => (
  <div className={cardStyles.gridWrapper}>
    {experiencesData.map(experience => <ExperienceCard image={experience.image} company={experience.company} role={experience.role} duration={experience.duration} />)}
  </div>
);

export default Experiences;
