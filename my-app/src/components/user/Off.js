import React, { useState , useEffect} from "react";
import axios from "axios";
import { ArrowBackIos , ArrowForwardIos } from "@mui/icons-material";
import DataOff from "./DataOff";

export default function Off() {
  const [value, setValue] = useState(0);
  const [id, setId] = useState("");
  const [movies, setMovies] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3002/products`)
    .then((res) => {setMovies(res.data)})
    .catch((err) => {alert(err.response.statusText);
    });
  } , [] );

  const moveBehind = () => {
    value === -100 * (movies.length - 7)
      ? setValue(0)
      : setValue(value - 100);
  };
  const moveAhead = () => {
    console.log(value);
    value === 0
      ? setValue(-100 * (movies.length - 7))
      : setValue(value + 100);
  };

  function showMovie(event) {
    setId(event.target.alt);
  }
  return (
    <div className="bodyDiv">
        <div className="glider">
          {console.log(movies.Response)}
        {movies.Response === "True" ? (
          movies?.map((movie, index) => {
            return (
              <div
                key={index}
                className="glide"
                style={{ transform: `translateX(${value}%)` }}
              >
                <img
                  key={movie.id}
                  src={`ttp://localhost:3002/files/${movie.image}`}
                  alt={movie.id}
                  onClick={showMovie}
                />
              </div>
            );
          })
        ) : ""}
      </div>
      {movies.Response === "True" && (
        <div>
          <ArrowBackIos id="moveBehind" onClick={moveAhead} />
          <ArrowForwardIos id="moveAhead" onClick={moveBehind} />
        </div>
      )}
      {id && <DataOff className="bodyDiv" imdbid={id} />}
    </div>
  );
}