import React from 'react'
import './Card.css'

const Card = ({ title, overview, poster_path }) => {
  return (
    <div className="cards">
      <img className="card-image"  src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{overview}</p>
      </div>
    </div>
  )
}

export default Card


// poster_path
// genre_ids
// title
// overview

// {
//     "adult": false,
//     "backdrop_path": "/bmlkLCjrIWnnZzdAQ4uNPG9JFdj.jpg",
//     "genre_ids": [
//       35,
//       10751,
//       14
//     ],
//     "id": 787699,
//     "original_language": "en",
//     "original_title": "Wonka",
//     "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
//     "popularity": 1035.485,
//     "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
//     "release_date": "2023-12-06",
//     "title": "Wonka",
//     "video": false,
//     "vote_average": 7.2,
//     "vote_count": 410
//   },