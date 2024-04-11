import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Show Boss</h1>
        </Link>
        <Link to="/create">
          <h1>Create Show</h1>
        </Link>
      </nav>
    </div>
  );
}
