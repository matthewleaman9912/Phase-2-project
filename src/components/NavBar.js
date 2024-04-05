import {NavLink} from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink
            to="/"
            style={NavBar.css}
            className="nav-link"
            >Home
            </NavLink>
            <NavLink
            to="/shorts"
            style={NavBar.css}
            className="nav-link"
            >Shorts
            </NavLink>
            <NavLink
            to="/leadership"
            style={NavBar.css}
            className="nav-link"
            >Leadership
            </NavLink>
            <NavLink 
            to="/funfacts"
            style={NavBar.css}
            className="nav-link"
            >Fun Facts
            </NavLink>
        </nav>
    );
};

export default NavBar;