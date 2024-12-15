import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const API_KEY = "72d936c4732819c7b79c9a0f07ad4c05"; // Ganti dengan API Key Anda

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-header">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={movie.title}
          className="movie-backdrop"
        />
        <div className="movie-detail-info">
          <h1>{movie.title}</h1>
          <div className="movie-meta">
            <span>Rating: {movie.vote_average}/10</span>
            <span>Release Date: {movie.release_date}</span>
          </div>
        </div>
      </div>
      <div className="movie-detail-content">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="movie-description">
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <div className="movie-additional-info">
            <p>Genre: {movie.genres.map((genre) => genre.name).join(", ")}</p>
            <p>Runtime: {movie.runtime} minutes</p>
            <p>Status: {movie.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
