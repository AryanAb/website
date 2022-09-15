import aboutmeStyle from '../styles/aboutme.module.css';

import { useSpring, animated } from 'react-spring';

const AboutMe = () => {
  const imgAnim = useSpring({ from: { translateX: 15000 }, to: { translateX: 0 } });
  const parAnim = useSpring({ from: { translateX: -15000 }, to: { translateX: 0 } });

  return (
    <div className={aboutmeStyle.aboutme}>
      <animated.div className={aboutmeStyle.image} style={imgAnim}>
        <img src="/images/fun.jpg" />
      </animated.div>
      <animated.p className={aboutmeStyle.paragraph} style={parAnim}>
        Hello. My name is Aryan. I am a Computer Science student at the University of Waterloo in second year. I am experienced with web development and DevOps. I am currently
        working on Congreco, a mobile app designed for managing public and private events. At the time being I am looking
        for an internship for Summer 2023. I am interested in pursuing research after I graduate.
      </animated.p>
    </div>
  );
};

export default AboutMe;
