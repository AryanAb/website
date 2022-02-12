import { useState, useRef, useEffect } from "react";
import useOnScreen from "../lib/useOnScreen";
import Image from 'next/image';
import postsStyles from '../styles/posts.module.css';
import Link from 'next/link';
import parseDate from '../lib/parseDate';
import { useSpring, animated } from "react-spring";

const PostCardRight = ({ id, image, title, authors, summary, date }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const [viewed, setViewed] = useState(false);

  useEffect(() => {
    if (!viewed)
      setViewed(isVisible);
  }, [isVisible]);

  const cardsAnim = useSpring({
    from: { translateX: 4000 },
    to: { translateX: viewed ? 0 : 4000 },
    config: { duration: 1000 }
  });

  return (
    <div ref={ref}>
      <animated.div style={cardsAnim}>
        <Link href={`posts/${id}`}>
          <div className={postsStyles.container}>
            <div className={postsStyles.info}>
              <div className={postsStyles.row} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <h3 className={postsStyles.title}>{title}</h3>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p className={postsStyles.creators}>{authors}</p>
                <p className={postsStyles.date}>{parseDate(date)}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p style={{ textAlign: 'left' }}>{summary}</p>
              </div>
            </div>

            <div className={postsStyles.banner}>
              <Image src={image} layout="fill" />
            </div>
          </div>
        </Link>
      </animated.div>
    </div>
  );
};

export default PostCardRight;
