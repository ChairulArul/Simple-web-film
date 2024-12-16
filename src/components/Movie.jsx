import React from "react";
import { convertTitle } from "../utils/convert_text";
import { useNavigate } from "react-router-dom";

const Movie = ({ movie }) => {
  const navigate = useNavigate();

  // Handler ketika kartu film diklik
  const handleMovieClick = () => {
    if (movie && movie.id) {
      navigate(`/movie/${movie.id}`);
    }
  };

  return (
    <div
      className="movie_card"
      onClick={handleMovieClick}
      style={{
        cursor: "pointer",
        transition: "transform 0.3s ease",
      }}
    >
      {/* Gambar Poster */}
      <img
        src={
          movie?.poster_path
            ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
            : "https://via.placeholder.com/185x300?text=No+Image"
        }
        alt={movie?.title || "No Title"}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      />

      {/* Bagian Bawah Kartu */}
      <div className="movie_card_bot">
        {/* Judul dan Rating */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h6 className="title" style={{ margin: 0 }}>
            {movie?.title ? convertTitle(movie.title) : "No Title"}
          </h6>
          <p
            className="rating"
            style={{
              margin: 0,
              color: movie?.vote_average > 7 ? "green" : "black",
            }}
          >
            {movie?.vote_average ? Math.round(movie.vote_average) : "N/A"}
            /10
          </p>
        </div>

        {/* Teks Informasi */}
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

        {/* Tanggal Rilis dan Popularitas */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "4px",
          }}
        >
          <p style={{ margin: 0 }}>{movie?.release_date || "Unknown"}</p>
          <p className="duration" style={{ margin: 0 }}>
            {movie?.popularity ? movie.popularity.toFixed(1) : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
