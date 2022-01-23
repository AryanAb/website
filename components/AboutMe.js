import aboutmeStyle from '../styles/aboutme.module.css';

import { useSpring, animated } from 'react-spring';

const AboutMe = () => {
  const parAnim = useSpring({ from: { x: -10000 }, to: { x: 0 } });
  const imgAnim = useSpring({ from: { x: 10000 }, to: { x: 0 } });
  return (
    <div className={aboutmeStyle.aboutme}>
      <animated.div className={aboutmeStyle.image} style={imgAnim}>
        <img src="/images/fun.jpg" />
      </animated.div>
      <animated.p className={aboutmeStyle.paragraph} style={parAnim}>
        Hello. My name is Aryan. I am a Computer Science student at the University of Waterloo.
        I love learning new stuff and I like working with other people. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tortor quis sapien hendrerit, ac consectetur justo placerat. Donec feugiat ultricies nisl nec sollicitudin. Mauris quis egestas quam. In rhoncus libero nec mauris ullamcorper, ac egestas tortor congue.
      </animated.p>
    </div>
  );
};

export default AboutMe;
