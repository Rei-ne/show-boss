import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

import "./Navbar.css";

// components
import Searchbar from "../Searchbar/Searchbar";

export default function Navbar() {
  // const [showNav, setShowNav] = useState(true)
  const { color, changeColor } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      {/* desktop nav */}
      <nav className="desktop" onClick={() => changeColor("pink")}>
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
        <Link to="/create" className="create-link">
          <h1>Create Show</h1>
        </Link>
      </nav>
    </div>
  );
}
