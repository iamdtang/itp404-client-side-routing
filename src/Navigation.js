import { NavLink } from "react-router-dom";
import { isLinkActive } from "./utils";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-2">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          My Blog
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={isLinkActive} end>
                Posts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={isLinkActive}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
