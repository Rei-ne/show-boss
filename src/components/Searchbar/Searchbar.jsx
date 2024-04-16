import { useState } from "react";

import "./Searchbar.css";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  const [word, setWord] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${word}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          onChange={(e) => {
            setWord(e.target.value);
          }}
          required
        />
      </form>
    </div>
  );
}
