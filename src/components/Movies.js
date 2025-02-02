import React from 'react';
import { movies } from '../data';

const renderMovies = (movies) => {
  return movies.map(movie => {
    return (
      <div className="movie">
        <p>Title: {movie.title}</p>
        <p>Time: {movie.time} minutes</p>
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    )
  })
}


const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies(movies)}
    </div>
  );
};

export default Movies;
