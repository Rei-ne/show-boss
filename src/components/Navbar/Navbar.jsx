import { Link } from "react-router-dom";
import "./Navbar.css";
import Searchbar from "../Searchbar/Searchbar";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
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
