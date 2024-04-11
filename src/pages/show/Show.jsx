import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import "./Show.css";

export default function Show() {
  const { id } = useParams();
  const url = "http://localhost:3000/shows/" + id;

  const { error, isPending, data: show } = useFetch(url);

  return (
    <div className="show">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {show && (
        <>
          <h2 className="page-title">{show.title}</h2>
          <p className="">{show.description}</p>
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
        </>
      )}
    </div>
  );
}
