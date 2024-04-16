import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import "./Search.css";

// components
import ShowList from "../../components/ShowList/ShowList";

export default function Search() {
  const queryString = useLocation();

  const queryParams = new URLSearchParams(queryString);

  const query = queryParams.get("q");

  console.log(query);

  const url = "http://localhost:3000/shows?q=" + query;

  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Shows including "{query}"</h2>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}

      {data && <ShowList shows={data} />}
    </div>
  );
}
