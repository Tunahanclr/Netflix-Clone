import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function Row({ title, fetchUrl, rowID }) {
  const [movies, setMovies] = useState([]);
  const [like, setLİke] = useState(false);

  useEffect(() => {
    axios.get(fetchUrl).then((Response) => {
      setMovies(Response.data.results);
    });
  }, [fetchUrl]);

  console.log(movies);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 800;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 800;
  };
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center  group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white z-50 left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer group-hover:block: "
          size={40}
        />
        <div
          className="w-full h-full overflow-x-
            whitespace-nowrap overflow-hidden scroll-smooth relative"
          id={"slider" + rowID}
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} fetchUrl={fetchUrl} like={like} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white  right-0 rounded-full absolute opacity-50  hover:opacity-100 cursor-pointer z-50 group-hover:block"
          size={40}
        />
      </div>
    </>
  );
}
