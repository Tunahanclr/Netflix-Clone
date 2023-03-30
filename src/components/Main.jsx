import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'
export default function Home() {
  const [movies,setMovies]=useState([])

    const movie= movies[Math.floor(Math.random()* movies.length)]

  useEffect(()=>{
        axios.get(requests.requestPopular).then((response)=>{
          setMovies(response.data.results)
        })
  },[])
  console.log(movie)
  return (
    <div className='w-full h-[95vh] text-white'>
        <div className='w-full h-full'>  
        <div className='absolute w-full h-[95vh] object-cover bg-gradient-to-tr from-black'></div>
        <img className='h-full w-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        <div className='absolute  w-full top-[30%] p-4 md:p-8'>
          <h1 className=' text-4xl font-bold  md:text-6xl lg:text-7xl w-[80%] lg:w-[1000px] '>{movie?.title}</h1>
          <p className=' w-[300px] text-xs md:text-base md:w-[700px] mt-4'>{movie?.overview}</p>
        <div className='mt-5'>
          <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
          <button className='border bg-gray-300 text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
   </div>
        </div>
        </div>
        </div>
  )
}
