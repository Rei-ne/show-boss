import { useState } from "react";
import { useRef } from "react";

// styles
import "./Create.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [newArtist, setNewArtist] = useState("");
  const [artists, setArtists] = useState([]);
  const artistInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setLocation("");
    setDate("");
    setTime("");
    setDescription("");
    setArtists([]);

    console.log(title, location, date, time, description, artists);
  };
  // to add new artists
  const handleAdd = (e) => {
    e.preventDefault();
    const artistItem = newArtist.trim();

    // checks
    if (artistItem && !artists.includes(artistItem)) {
      setArtists((prevArtists) => [...prevArtists, artistItem]);
    }
    setNewArtist("");
    artistInput.current.focus();
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a New Show</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Show Title/ Headline:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Location:</span>
          <input
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            required
          />
        </label>
        <label>
          <span>Date:</span>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
          />
        </label>
        <label>
          <span>Time:</span>
          <input
            type="time"
            onChange={(e) => setTime(e.target.value)}
            value={time}
            required
          />
        </label>
        {/* artists */}
        <label>
          <span>Artists:</span>
          <div className="artists">
            <input
              type="text"
              onChange={(e) => {
                setNewArtist(e.target.value);
              }}
              value={newArtist}
              ref={artistInput}
            />
            <button onClick={handleAdd} className="btn">
              add
            </button>
          </div>
        </label>
        <p>
          Current Artists:{" "}
          {artists.map((artist) => (
            <em key={artist}>{artist}, </em>
          ))}{" "}
        </p>

        <label>
          <span>Description:</span>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
