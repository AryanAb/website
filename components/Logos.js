import Image from 'next/image'

import logosStyle from '../styles/logos.module.css'

const Logos = () => (
  <ul className={logosStyle.logos}>
    <li> <a href='https://github.com/AryanAb' target='_blank'> <div className={logosStyle.container}> <Image src="/images/GitHubLogo.png" layout="fill" alt="GitHub" /> </div> </a> </li>
    <li> <a href="mailto:aryan.abed@protonmail.com" target='_blank'> <div className={logosStyle.container}> <Image src="/images/protonmail-logo.png" layout="fill" alt="Proton Mail" /> </div> </a> </li>
    <li> <a href="misc/cv_2.pdf" target='_blank'> <div className={logosStyle.container}> <Image src="/images/resume.png" layout="fill" alt="Resume" /> </div> </a> </li>
    <li> <a href="https://devpost.com/AryanAbed?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target='_blank'> <div className={logosStyle.container}> <Image src="/images/DevpostLogo.jpg" layout="fill" alt="Dev Post" /> </div> </a> </li>
    <li> <a href="https://www.linkedin.com/in/aryan-abed-esfahani-482927b8/" target='_blank'> <div className={logosStyle.container}> <Image src="/images/LinkedInLogo.webp" layout="fill" alt="LinkedIn" /> </div> </a> </li>
  </ul>
);

export default Logos;
