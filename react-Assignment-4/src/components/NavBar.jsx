import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <NavLink to="/" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>Home</NavLink>
            {" | "}
            <NavLink to="/characters" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>Characters</NavLink>
            {" | "}
            <NavLink to="/comics" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>Comics</NavLink>
        </nav>
    );
}

export default Navbar;