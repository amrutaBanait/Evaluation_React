import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
const Movies = () => {
  const [movieData, setMovieData] = useState([]);
  let IMG_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
   
    const fetchData = async () => {
      const url = 'http://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=Avengers';
      const response = await axios.get(url);
      setMovieData(response.data.results);
    }
    fetchData();
  
  }, []);

  return (
    <>
    <h1>Movie Page</h1>
     <Maindiv>
      
    {
      movieData.slice(0,8).map(movie => {
      
        return (
          
          <MovieDiv key={movie.id} className="mainDiv">
            <h4>{movie.title}</h4>
           <Img src={IMG_URL + movie.poster_path}/>
          </MovieDiv>
        )
      })
    }
    </Maindiv>



    </>
  )
};

export default Movies;

const Maindiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;`;



const MovieDiv = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 400px;
  height: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);`;

  const Img = styled.img`
  width: 98%;
  height: 100%;`;