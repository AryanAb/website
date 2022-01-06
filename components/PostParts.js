import postStyles from "../styles/post.module.css";
import Image from "next/image";

export const H1 = props => (
  <h1 className={postStyles.h1}>{props.children}</h1>
);

export const H2 = props => (
  <h2 className={postStyles.h2}>{props.children}</h2>
);

export const H3 = props => (
  <h3 className={postStyles.h3}>{props.children}</h3>
);

export const H4 = props => (
  <h4 className={postStyles.h4}>{props.children}</h4>
);

export const P = props => (
  <p className={postStyles.p}>{props.children}</p>
);

export const Img = props => (
  <div className={postStyles.img}>
    <img {...props} width={300} />
  </div>
);

export const ImgExtra = ({ src, alt, width, caption }) => (
  <div className={postStyles.imgExtra}>
    <img src={src} alt={alt} width={width} />
    <figcaption>{caption}</figcaption>
  </div>
);
