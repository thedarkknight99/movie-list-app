import React, { useEffect, useState } from "react";
import "./Movies.css";
import Card from "../card/Card";

// const cards = [
//   {
//     title: "Card 1",
//     overview: "Description for Card 1",
//     poster_path: "https://placekitten.com/300/200", 
//   },
//  
// ];

const Movies = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const fetchMovies = async() => {
      const a = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=2023&page=1&vote_count.gte=100"
      );
      const moviesData= await a.json()
    //   console.log(moviesData)
      setMovies(moviesData)
    };

     fetchMovies()
  },[]);
  return (
    <div className="movieContainer">
      <div className="card-list">
        {movies?.results.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
