import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import "./Search.css";

// components
import ShowList from "../../components/ShowList/ShowList";
import { useEffect } from "react";

export default function Search() {
  const queryString = useLocation().search;

  const queryParams = new URLSearchParams(queryString);

  const query = queryParams.get("q");

  console.log(query);

  const url = "http://localhost:3000/shows?q=" + query;

  const { error, isPending, data } = useFetch(url);

  useEffect(() => {
    console.log(data);
    console.log(url);
  }, [data, url]);

  return (
    <div>
      <h2 className="page-title">Shows including "{query}"</h2>
      {error && <p>{error}</p>}
      {isPending && <p className="loading">Loading...</p>}

      {data && <ShowList shows={data} />}
    </div>
  );
}
