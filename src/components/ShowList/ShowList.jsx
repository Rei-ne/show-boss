import { Link } from "react-router-dom";
import "./ShowList.css";

export default function ShowList({ shows }) {
  return (
    <div className="show-list">
      {shows.map((show) => (
        <div key={show.id} className="card">
          <h3>{show.title}</h3>
          <h4>{show.location}</h4>
          <div>{show.description.substring(0, 40)}...</div>
          <Link to={`/shows/${show.id}`}>View More</Link>
          <div className="artists">
            <ul>
              {show.artists.map((artist) => (
                <li key={artist}>{artist}</li>
              ))}
            </ul>
          </div>
          <div className="details">
            <p>{show.date}</p>
            <p>{show.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
