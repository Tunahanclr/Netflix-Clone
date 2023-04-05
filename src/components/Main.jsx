import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import requests from '../Requests'
import {BsFillPlayFill} from 'react-icons/bs'
import {CiCircleInfo} from 'react-icons/ci'
export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <div className="w-full h-screen text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-screen object-cover bg-gradient-to-tr from-black"></div>
        <img
          className="h-full w-full object-cover object-center"
          src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
          alt={randomMovie?.title}
        />
        <div className="absolute w-full top-[30%] p-4 md:p-8">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl w-[80%] lg:w-[1000px] ">
            {randomMovie?.title}
          </h1>
          <p className="w-[300px] sm:w-[500px] text-xs sm:text-base md:w-[700px] mt-4">
            {randomMovie?.overview}
          </p>
          <div className="mt-5 flex">
            <button className="border flex items-center justify-center md:w-60 h-16 bg-white opacity-90 hover:opacity-100 text-black text-2xl border-gray-300 py-2 px-5">
             <BsFillPlayFill className='text-3xl'/> Play
            </button>
            <button
              className="border flex items-center justify-center gap-2  whitespace-nowrap w-40 bg-gray-200 bg-opacity-20 hover:bg-opacity-40 md:w-60 h-12 md:h-16 rounded text-white text-lg sm:text-xl border-gray-300 py-2 px-5 ml-4"
            >
            <CiCircleInfo className='text-2xl' />  More information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
