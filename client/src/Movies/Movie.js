import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";
import styled from 'styled-components'

function Movie({ addToSavedList }) {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const history = useHistory();

  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  const updateMovie = () => {
    history.push(`/update-movie/${params.id}`)
  }

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <Wrapper>
      <MovieCard movie={movie}/>
      <Buttons>
        <button onClick={saveMovie}>
          Save
        </button>
        <button onClick={updateMovie}>
          Update
        </button>
        <button onClick={saveMovie}>
          Delete
        </button>
      </Buttons>
    </Wrapper>
  );
}

export default Movie;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`

const Buttons = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: .5rem;
`