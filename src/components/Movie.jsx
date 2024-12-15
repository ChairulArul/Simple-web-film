import React from "react";
import { convertTitle } from "../utils/convert_text";
import { useNavigate } from "react-router-dom";

const Movie = ({ movie }) => {
  const navigate = useNavigate();

  const handleMovieClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div
      className="movie_card"
      onClick={handleMovieClick}
      style={{
        cursor: "pointer",
        transition: "transform 0.3s ease",
        hover: { transform: "scale(1.05)" },
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
        alt={movie.title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      />
      <div className="movie_card_bot">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h6 className="title" style={{ margin: 0 }}>
            {convertTitle(movie.title)}
          </h6>
          <p
            className="rating"
            style={{
              margin: 0,
              color: movie.vote_average > 7 ? "green" : "black",
            }}
          >
            {Math.round(movie.vote_average)}/10
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "8px",
            color: "#666",
          }}
        >
          <p className="last_update" style={{ margin: 0, fontSize: "0.8em" }}>
            Release Date
          </p>
          <p className="running_time" style={{ margin: 0, fontSize: "0.8em" }}>
            Popularity
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "4px",
          }}
        >
          <p style={{ margin: 0 }}>{movie.release_date}</p>
          <p className="duration" style={{ margin: 0 }}>
            {movie.popularity.toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
