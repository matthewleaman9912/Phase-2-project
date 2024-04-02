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
            to="/movies"
            style={NavBar.css}
            className="nav-link"
            >Movies
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
        </nav>
    );
};

export default NavBar;