import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios'
import styled from 'styled-components'

const AddMovie = () => {

    const initialForm = {
        title: '',
        director: '',
        metascore: '',
        stars: ['starOne', 'starTwo']
    }

    const [movie, setMovie] = useState(initialForm)
    const history = useHistory()

    const handleChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }

    const updateMovie = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:5000/api/movies/`, movie)
            .then(res => {
                setMovie(initialForm)
                history.push('/')
            })
            .catch(err => console.log(err))
    }


    return (
        <Wrapper>
            <h1>Add Movie</h1>
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
                <label htmlFor='stars'>Stars</label>
                <input
                    id='stars'
                    name='stars'
                    value={movie.stars}
                    onChange={handleChange}
                />
                <button type='submit' value='submit'>
                    Add Movie
                </button>
            </MyForm>   
        </Wrapper>
    )
}

export default AddMovie


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
