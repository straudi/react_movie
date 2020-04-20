import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Header from './Header';
import styled from 'styled-components';

const DetailSection = styled.div`
    background-image: url(${props => props.bgImage});
    background-size: cover;
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    opacity:0.3;
    z-index:-5;
`;

const Thumb = styled.div`
    img{
        margin:0 auto;
        display:block;
        padding-top:2%;
    }
`;

const TextBox = styled.div`
    padding : 5% 10%;
    span{
        margin-right:10px;
    }
`;

const Summary = styled.div`
    padding-top:2%;
`;

const Detail = ({ match, props}) => {
    //파라미터를 받아 오기 위해 match안에 들어있는 params 값을 참조
    const { id } = match.params;
    const baseURL = "https://image.tmdb.org/t/p/w300";

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const getMovie = async () => {
            try{
                setIsLoading(true);
                const response = await Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=10923b261ba94d897ac6b81148314a3f`)
                setMovie(response.data); 
                console.log(response);
            }catch(e){
                console.error('Error during find the movie:', e);
            }
            setIsLoading(false);
        }
        getMovie();
    }, [id]);
   
    if (isLoading) return <div>로딩중..</div>;
    if (!movie) return <div>영화 정보를 불러 올 수 없습니다.</div>;
    return (
        <>
        <Header />
        
            <div>
                <Thumb className="poster">
                    <img src={`${baseURL}${movie.poster_path}`} alt={movie.original_title} title={movie.original_title}/>
                </Thumb>
                <TextBox className="text">
                    <div className="top">
                        <div className="title">{movie.original_title}</div>
                        <div className="star">grade : {movie.vote_average}</div>
                        <div className="running">running Time: {movie.runtime}</div>
                        {movie.genres && movie.genres.map((genre, {id}) => (
                            <span key={genre.id}>{genre.name}</span>
                        ))}
                    </div>
                    <Summary className="summary">{movie.overview}</Summary>
                </TextBox>
            </div>
            <DetailSection bgImage={`${baseURL}${movie.backdrop_path}`} />
        </>
    );

}

export default Detail;