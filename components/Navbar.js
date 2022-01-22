import Link from 'next/link';
import navbarStyle from '../styles/navbar.module.css'

const Navbar = () => (
  <nav className={navbarStyle.navbar}>
    <ul className={navbarStyle.navbar_ul}>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><a>Experiences</a></li>
      <li><Link href="/projects"><a>Projects</a></Link></li>
      <li><Link href="/posts"><a>Blog Posts</a></Link></li>
      <li><Link href="/contactme"><a>Contact Me</a></Link></li>
    </ul>
  </nav>
);

export default Navbar;
