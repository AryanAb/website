import { useState, useRef, useEffect } from "react";
import useOnScreen from "../lib/useOnScreen";
import Image from "next/image";
import projectStyles from "../styles/project.module.css";
import { useSpring, animated } from "react-spring";

const ProjectCard = ({ image, title, creators, technologies, description, links }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const [viewed, setViewed] = useState(false);

  useEffect(() => {
    if (!viewed)
      setViewed(isVisible);
  }, [isVisible]);

  const cardsAnim = useSpring({
    from: { translateX: -4000 },
    to: { translateX: viewed ? 0 : -4000 },
    config: { duration: 1000 }
  });

  return (
    <div ref={ref}>
      <animated.div className={projectStyles.container} style={cardsAnim}>
        <div className={projectStyles.banner}>
          {/* Image goes here */}
          <Image src={image} layout="fill" />
        </div>
        <div className={projectStyles.info}>
          <div className={projectStyles.technologies}>
            <h3 className={projectStyles.title}>{title}</h3>
            <p className={projectStyles.creators}>{creators.map(creator => <span className={projectStyles.creator}>{creator}</span>)}</p>
            <h4 style={{display: 'inline-block', marginTop: 5, marginBottom: 0}}>Technologies Used:</h4>
            <h4 style={{display: 'inline-block', marginTop: 0, marginBottom: 10}}>
              {technologies.map(tech => <span className={projectStyles.technology}>{tech}</span>)}
            </h4>
          </div>
          <p style={{ marginTop: 0 }}>{description}</p>
          {links.map(link => <a className={projectStyles.links} href={link.href}>{link.name}</a>)}
        </div>
      </animated.div>
    </div>
  );
};

export default ProjectCard;
