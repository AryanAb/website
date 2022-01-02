import scrollStyles from "../styles/scroll.module.css";

import { useState, useEffect, Fragment } from "react";

const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };

  useEffect(() => { window.addEventListener("scroll", onScroll) }, []);

  return (
    <Fragment>
      <div className={scrollStyles.container}>
        <div className={scrollStyles.bar} style={{ width: `${scroll}%` }}>
        </div>
      </div>
    </Fragment>
  );
};

export default ScrollIndicator;
