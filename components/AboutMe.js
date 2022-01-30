import aboutmeStyle from '../styles/aboutme.module.css';

import { useSpring, animated } from 'react-spring';

const AboutMe = () => {
  const parAnim = useSpring({ from: { marginRight: 10000 }, to: { marginRight: 0 } });
  const imgAnim = useSpring({ from: { marginLeft: 10000 }, to: { marginLeft: 0 } });

  return (
    <div className={aboutmeStyle.aboutme}>
      <div className={aboutmeStyle.image}>
        <img src="/images/fun.jpg" />
      </div>
      <p className={aboutmeStyle.paragraph}>
        Hello. My name is Aryan. I am a Computer Science student at the University of Waterloo in second year. I am experienced with web development and DevOps. I am currently
        working on Congreco, a mobile app designed for managing public and private events. At the time being I am looking
        for an internship for Fall 2022. I am interested in pursuing research after I graduate.
      </p>
    </div>
  );
};

export default AboutMe;
