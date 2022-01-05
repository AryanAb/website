import Link from 'next/link';
import navbarStyle from '../styles/navbar.module.css'

const Navbar = () => {
  return (
    <nav className={navbarStyle.navbar}>
      <ul className={navbarStyle.navbar_ul}>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><a href="#">Experiences</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Blog Posts</a></li>
        <li><Link href="/contactme"><a>Contact Me</a></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
