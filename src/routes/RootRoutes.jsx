import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import SearchMovie from "../pages/SearchMovie";

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/now_playing" element={<Home url="now_playing" />} />
      <Route path="/popular" element={<Home url="popular" />} />
      <Route path="/top_rated" element={<Home url="top_rated" />} />
      <Route path="/upcoming" element={<Home url="upcoming" />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/search" element={<SearchMovie />} />
    </Routes>
  );
};

export default RootRoutes;
