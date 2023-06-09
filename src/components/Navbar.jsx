import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import Main from "./Main";
import Movies from "./Movies";
import Row from "./Row";
import requests from "../Requests";

export default function Navbar() {
  const [navbarBackground, setNavbarBackground] = useState("transparent");

  const logout = async () => {
    await signOut(auth);
    window.location = "/";
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 0) {
        setNavbarBackground("black");
      } else {
        setNavbarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="flex items-center justify-between pl-8 lg:pl-16 lg:pr-16 pr-10 absolute p-4  w-full"
        style={{
          position: "fixed",
          backgroundColor: navbarBackground,
          zIndex: "9999",
        }}
      >
        <div className="flex items-center gap-10">
          <h1 className="text-red-600 text-2xl md:text-3xl font-bold cursor-pointer">
            NETFLİX
          </h1>
          <div>
            <div className="lg:hidden relative  -space-x-8 ">
              <label htmlFor="mobile-menu" className="sr-only"></label>
              <select
                id="mobile-menu"
                name="mobile-menu"
                className="block appearance-none w-36 px-4 py-2  rounded-lg  focus:outline-none  bg-black/25 text-sm  text-white  font-bold "
              >
                <option value="a" selected>
                  <a
                    className="text-white text-sm  transition-all font-semibold"
                    href=""
                  >
                    Ana Sayfa
                  </a>
                </option>
                <option value="b">
                  <a
                    className="text-white text-sm hover:opacity-70 transition-all"
                    href=""
                  >
                    Diziler
                  </a>
                </option>
                <option value="c">
                  <a
                    className="text-white text-sm hover:opacity-70 transition-all"
                    href=""
                  >
                    Filmler
                  </a>
                </option>
                <option value="d">
                  <a
                    className="text-white text-sm hover:opacity-70 transition-all"
                    href=""
                  >
                    Yeni ve Popüler
                  </a>
                </option>
                <option value="e">
                  <a
                    className="text-white text-sm hover:opacity-70 transition-all"
                    href=""
                  >
                    Listem
                  </a>
                </option>
                <option value="f">
                  <a
                    className="text-white text-sm hover:opacity-70 transition-all"
                    href=""
                  >
                    Dile Göre Göz At
                  </a>
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className=" lg:items-center hidden lg:flex lg:whitespace-nowrap lg:gap-4 ">
            <a
              className="text-white text-sm  transition-all font-semibold"
              href=""
            >
              Ana Sayfa
            </a>
            <a
              className="text-white text-sm hover:opacity-70 transition-all"
              href=""
            >
              Diziler
            </a>
            <a
              className="text-white text-sm hover:opacity-70 transition-all"
              href=""
            >
              Filmler
            </a>
            <a
              className="text-white text-sm hover:opacity-70 transition-all"
              href=""
            >
              Yeni ve Popüler
            </a>
            <a
              className="text-white text-sm hover:opacity-70 transition-all"
              href=""
            >
              Listem
            </a>
            <a
              className="text-white text-sm hover:opacity-70 transition-all"
              href=""
            >
              Dile Göre Göz At
            </a>
          </div>
        </div>

        <div className="z-50">
          <button
            className="bg-red-600 px-2 lg:px-6 py-2 rounded cursor-pointer hover:bg-red-700 whitespace-nowrap   text-white "
            onClick={logout}
          >
            Log out
          </button>
        </div>
      </div>
      <Main />
      <Row rowID="1" title="Up Comming" fetchUrl={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchUrl={requests.requestPopular} />
      <Row rowID="3" title="Trending" fetchUrl={requests.requestTrending} />
      <Row rowID="4" title="Trending" fetchUrl={requests.requestTopRated} />
      <Row rowID="5" title="Horror" fetchUrl={requests.requestHorror} />
      {/* <Movies/> */}
    </>
  );
}
