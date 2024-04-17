import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

import Searchbar from "../Searchbar/Searchbar";

export default function Navbar() {
  // const [showNav, setShowNav] = useState(true)

  return (
    <div className="navbar">
      {/* desktop nav */}
      <nav className="desktop">
        <Link to="/" className="brand">
          <h1>Show Boss</h1>
        </Link>
        <Searchbar />
        <Link to="/create">
          <h1>Create Show</h1>
        </Link>
      </nav>

      {/* mobile nav */}
      <nav className="mobile">
        <Link to="/" className="brand">
          <h1>Show Boss</h1>
        </Link>
        <Searchbar />
        <Link to="/create">
          <h1>Create Show</h1>
        </Link>
      </nav>
    </div>
  );
}
