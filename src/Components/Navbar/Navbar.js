import "../../Styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="characters-navbar-container">
      <Link to="/" className="logo">
        Breaking Bad Characters
      </Link>
    </div>
  );
}
