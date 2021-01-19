import React from 'react';
import styled from 'styled-components'

const MovieCard = props => {
  const { title, director, metascore, stars, saveMovie } = props.movie;

  return (
    <Card>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </Card>
  );
};

export default MovieCard;

const Card = styled.div`
  display: grid;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,.35);
`