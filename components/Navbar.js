import navbarStyle from '../styles/navbar.module.css'

const Navbar = () => {
  return (
    <nav className={navbarStyle.navbar}>
      <ul className={navbarStyle.navbar_ul}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Experiences</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Blog Posts</a></li>
        <li><a href="#">Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
