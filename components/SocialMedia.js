import Image from "next/image";

import logosStyle from "../styles/logos.module.css";

const SocialMedia = () => (
  <ul className={logosStyle.logos}>
    <li>
      {" "}
      <a href="https://twitter.com/aryAbed48" target="_blank">
        {" "}
        <Image
          src="/images/TwitterLogo.png"
          height={55}
          width={55}
          alt="Twitter"
        />{" "}
      </a>{" "}
    </li>
    <li>
      {" "}
      <a href="https://www.facebook.com/aryan.abed.338/" target="_blank">
        {" "}
        <Image
          src="/images/FacebookLogo.png"
          height={55}
          width={55}
          alt="Facebook"
        />{" "}
      </a>{" "}
    </li>
  </ul>
);

export default SocialMedia;
