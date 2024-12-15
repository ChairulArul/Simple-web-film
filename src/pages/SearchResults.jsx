import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import axios from "axios";

const Home = ({ url }) => {
  const [movies, setMovies] = useState([]);

  const getMovie = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${url}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmQ5MzZjNDczMjgxOWM3Yjc5YzlhMGYwN2FkNGMwNSIsIm5iZiI6MTczNDA4NDYyMy45OTcsInN1YiI6IjY3NWMwODBmN2Y5MjdkOTM0ZjAwZGFhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kKbB07W3DUje91XV1mVIsg_Hj1JLqdxHnCHB5TiD2kc`,
          },
        }
      );

      // Ambil data film dari response
      const data = response.data.results;
      setMovies(data); // Set data ke state
    } catch (error) {
      console.error("Error fetching movies:", error.response || error);
    }
  };

  useEffect(() => {
    getMovie(); // Panggil fungsi untuk fetch data
  }, [url]); // url sebagai dependency

  return (
    <div className="movie_container">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
