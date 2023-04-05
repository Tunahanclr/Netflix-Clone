import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

export default function Movie({ item, like }) {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        <button onClick={openModal}>
          <img
            className="w-full h-auto block"
            src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
            alt={item.title}
          />
        </button>
        {modal && (
          <OutsideClickHandler onOutsideClick={closeModal}>
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
              <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
              <div className="relative w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3 h-auto bg-white rounded-lg p-6">
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <img
                  className="w-full h-auto mb-4"
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.title}
                />
                <p className="text-lg font-bold mb-2">{item.title}</p>
                <p className="text-sm mb-2">
                  Release Date: {item.release_date}
                </p>
                <p className="text-sm mb-4">
                  Average Rating: {item.vote_average}
                </p>
                <p className="text-sm">{item.overview}</p>
              </div>
            </div>
          </OutsideClickHandler>
        )}
        <div className="absolute top-0 left-0 text-center w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {item?.title}
          </p>
          <p>
            {like ? (
              <FaHeart className="absolute top-4 left-4 text-gray-30" />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 text-gray-30" />
            )}
          </p>
        </div>
      </div>
    </>
  );
}
