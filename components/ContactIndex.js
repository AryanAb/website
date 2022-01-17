import Link from "next/link";
import contactStyles from '../styles/contactme.module.css';

const ContactIndex = () => (
  <div className={contactStyles.container}>
    <p className={contactStyles.text}>
      Do you have any questions or feedback? Do you want to arrange a coffee chat? Do you want to collaborate on a project?
      Whatever is on your mind, don't hesitate to reach out.
    </p>
    <div className={contactStyles.btn}>
      <Link href="contactme"><a className={contactStyles.link}>Contact Me</a></Link>
    </div>
  </div >
);

export default ContactIndex;
