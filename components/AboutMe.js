import aboutmeStyle from "../styles/aboutme.module.css";

import { useSpring, animated } from "react-spring";

const AboutMe = () => {
  const imgAnim = useSpring({
    from: { translateX: 15000 },
    to: { translateX: 0 },
  });
  const parAnim = useSpring({
    from: { translateX: -15000 },
    to: { translateX: 0 },
  });

  return (
    <div className={aboutmeStyle.aboutme}>
      <animated.div className={aboutmeStyle.image} style={imgAnim}>
        <img src="/images/fun.jpg" />
      </animated.div>
      <animated.p className={aboutmeStyle.paragraph} style={parAnim}>
        Hello. My name is Ari. I am a Computer Science student at the University
        of Waterloo in my third year. I am experienced with web development,
        DevOps, and low level programming. I am currently looking for an
        internship for Winter or Summer 2024. If you'd like to have a coffee
        chat with me you can check my{" "}
        <a href="https://cal.com/ariab">Cal.com</a> account.
      </animated.p>
    </div>
  );
};

export default AboutMe;
