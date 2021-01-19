import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import styled from 'styled-components'

function MovieList({ movies }) {
  return (
    <Wrapper>
      {
        movies.map(movie => (
          <MyLink key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard movie={movie} />
          </MyLink>
        ))
      }
    </Wrapper>
  );
}

export default MovieList;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 1rem;
`

const MyLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  width: 75%;
`