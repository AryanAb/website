import Image from 'next/image'

import logosStyle from '../styles/logos.module.css'

const Logos = () => {
  return (
    <ul className={logosStyle.logos}>
      <li> <a href='https://github.com/AryanAb' target='_blank'> <Image src="/../public/images/GitHubLogo.png" height={55} width={55} alt="GitHub" /> </a> </li>
      <li> <a href="mailto:aryan.abed@protonmail.com" target='_blank'> <Image src="/../public/images/protonmail-logo.png" height={55} width={55} alt="Proton Mail" /> </a> </li>
      <li> <a href="misc/cv_2.pdf" target='_blank'> <Image src="/../public/images/resume.png" height={65} width={65} alt="Resume" /> </a> </li>
      <li> <a href="https://devpost.com/AryanAbed?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target='_blank'> <Image src="/../public/images/DevpostLogo.jpg" height={55} width={55} alt="Dev Post" /> </a> </li>
      <li> <a href="https://www.linkedin.com/in/aryan-abed-esfahani-482927b8/" target='_blank'> <Image src="/../public/images/LinkedInLogo.webp" height={55} width={55} alt="LinkedIn" /> </a> </li>
    </ul>
  );
};

export default Logos;
