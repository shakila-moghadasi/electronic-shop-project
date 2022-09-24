import React, { useState, useEffect } from "react";
import axios from "axios";
export default function DataOff(props) {
  const [movies, setMovies] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3002/products`)
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, [props.imdbid]);

  return (
    <div className="mainDetails">
      <div className="float-child">
        <img key={movies.imdbID} src={movies.Poster} alt={movies.imdbID} />
      </div>

      <div className="float-child">
        <div className="details">
          <h1>{movies.Title}</h1>
          <p className="stretch">
            <span>
              <span role="img" aria-label="IMDb Rating">
                ⭐
              </span>
              &nbsp;&nbsp;
              {movies.imdbRating}
              &nbsp;&nbsp;
              <span role="img" aria-label="IMDb Votes">
                👍
              </span>{" "}
              &nbsp;&nbsp;
              {movies.imdbVotes}
            </span>
          </p>
          <p className="stretch">Actors:{movies.Actors}</p>
          <p className="stretch">Director:{movies.Director}</p>
          <p className="stretch">Writer:{movies.Writer}</p>
          <p className="stretch">Plot:{movies.Plot}</p>
          <p className="stretch">Released:{movies.Released}</p>
        </div>
      </div>
    </div>
  );
}