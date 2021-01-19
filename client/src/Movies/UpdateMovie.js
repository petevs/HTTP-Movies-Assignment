import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios'
import styled from 'styled-components'

const UpdateMovie = () => {
    const [movie, setMovie] = useState(null)
    const params = useParams()
    const history = useHistory();

    const fetchMovie = (id) => {
        axios
          .get(`http://localhost:5000/api/movies/${id}`)
          .then((res) => setMovie(res.data))
          .catch((err) => console.log(err.response));
      };

    useEffect(() => {
        fetchMovie(params.id);
        }, [params.id]);

    const handleChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }

    const updateMovie = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:5000/api/movies/${params.id}`, movie)
            .then(res => {
                setMovie(null)
                history.push('/')
            })
            .catch(err => console.log(err))
    }


    if (!movie) {
        return <div>Loading movie information...</div>;
      }

    return (
        <Wrapper>
            <h1>Update Movie</h1>
            <MyForm onSubmit={updateMovie}>
                <label htmlFor='title'>Title</label>
                <input
                    id='title'
                    name='title'
                    value={movie.title}
                    onChange={handleChange}
                />
                <label htmlFor='director'>Director</label>
                <input
                    id='director'
                    name='director'
                    value={movie.director}
                    onChange={handleChange}
                />
                <label htmlFor='metascore'>Metascore</label>
                <input
                    id='metascore'
                    name='metascore'
                    value={movie.metascore}
                    onChange={handleChange}
                />
                <button type='submit' value='submit'>
                    Update Movie
                </button>
            </MyForm>   
        </Wrapper>
    )
}

export default UpdateMovie


const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
`

const MyForm = styled.form`
    display: grid;
    grid-auto-flow: columns;
    gap: 1rem;
    width: 300px;
    justify-self: center;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0,0,0,.35);
    padding: 2rem 1rem;
    & label {
        font-size: 1.2rem;
        font-weight: 500;
    }
    & input{
        padding: .5rem;
    }
`

