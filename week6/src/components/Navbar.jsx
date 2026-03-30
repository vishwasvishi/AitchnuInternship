import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaChartBar } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">

      <h2 className="logo">Portfolio</h2>

      <div className="nav-links">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">
          <FaHome /> Home
        </Link>

        <Link className={location.pathname === "/about" ? "active" : ""} to="/about">
          <FaUser /> About
        </Link>

        <Link className={location.pathname === "/projects" ? "active" : ""} to="/projects">
          <FaProjectDiagram /> Projects
        </Link>

        <Link className={location.pathname === "/contact" ? "active" : ""} to="/contact">
          <FaEnvelope /> Contact
        </Link>

        <Link className={location.pathname === "/dashboard" ? "active" : ""} to="/dashboard">
          <FaChartBar /> Dashboard
        </Link>
      </div>

    </nav>
  );
}
