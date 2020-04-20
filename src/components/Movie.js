import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MovieBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: none;
    flex-basis: 10%;
    margin-top: 20px;
    margin-bottom: 50px;
    padding: 0 15px;

    h2 {
        color: #fff;
        font-size:1.3rem;
        margin : 3% 0; 
    }

    span {
        color: #fff;
    }
`;

const Thumb = styled.div`

    &:hover{
        opacity:0.5;
    }
`;

function Movie({id, date, title, summary, poster}) {
    const baseURL = "https://image.tmdb.org/t/p/w300";
    return (
        <MovieBox className="movie">
            <Link to = {`/detail/${id}`} >/ 
                <Thumb className="img">
                    <img src={`${baseURL}${poster}`} alt={title} title={title}/>
                </Thumb>
                <div className="text">
                    <h2 className="title">{title.length > 18 ? `${title.substring(0,30)}...`: title}</h2>
                    <span className="summary">{summary.length > 18 ? `${summary.substring(0,80)}...`: summary}</span>
                </div>
            </Link>
        </MovieBox>
    )
}

export default Movie;