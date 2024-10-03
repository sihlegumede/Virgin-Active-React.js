import "./Navbar.css";
import { logo } from "../../assets";

import { navLinks, navHeader } from "../../constants";

const Navbar = () => {
  return (
    <nav className="navbar_section">
      <div className="navbar_top_tabs">
        <ul>
          {navHeader.map((navHead) => (
            <li key={navHead.title}>
              <a>{navHead.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar_list">
        <img src={logo} alt="logo" className="navbar_logo" />
        <ul className="navbar_links">
          {navLinks.map((navLink) => (
            <li key={navLink.title}>
              <a>{navLink.title}</a>
            </li>
          ))}
        </ul>
        <button>Join now</button>
      </div>
    </nav>
  );
};

export default Navbar;
