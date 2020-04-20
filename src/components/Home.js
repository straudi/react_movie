import React,{ useState, useEffect } from 'react';
import Axios from 'axios';
import Movie from './Movie';
import Header from './Header';
import styled from 'styled-components';

const Section = styled.div`
    width: 80%;
    margin: 0 auto; 
    display: flex;
    flex-wrap: wrap;
`;

function Home() {
    
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState(null);

    //useState로 요청 상태 수정, useEffect로 컴포넌트 랜더링 되는 시점에 요청을 시작 즉 마운트 될 때만 실행
    useEffect(() => {
        const getMovies = async () => {
            try{
                setError(null); //error 상태 수정
                setIsLoading(true); //loading 상태 수정
                const  response = await Axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=9f5cd63de20cc79f8c9aac64fc36ab6b")
                setMovies(response.data); 
                console.log(response.data);
            }catch(e){
                setError (e)
            }
            setIsLoading(false);
        }
        getMovies();
    }, []); //업데이트 될 경우 실행할 필요 없을 시 빈 배열

    
   if (error) return <div>에러가 발생했습니다</div>;//에러가 날 경우 에러가 발생했습니다 화면 노출
   if (isLoading) return <div>로딩중..</div>;
   if (!movies) return null;
   return (
    <>
        <Header />
        <Section>
            {movies.results.map(movie => (
                <Movie key={movie.id} id={movie.id} poster={movie.poster_path} title={movie.original_title} summary={movie.overview} date={movie.release_date} />
            ))}
        </Section>
    </>
   );
}

export default Home;