import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";

const Home = ({ url }) => {
  const [movies, setMovies] = useState([]);
  const API_KEY = "YOUR_TMDB_API_KEY"; // Ganti dengan API Key Anda

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${url}?api_key=72d936c4732819c7b79c9a0f07ad4c05`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [url]);

  return (
    <div className="movie_container">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
