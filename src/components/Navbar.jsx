import { signOut } from 'firebase/auth'
import React from 'react'
import { toast } from 'react-toastify'
import { auth } from '../firebase'
import Main from './Main'
import Movies from './Movies'

export default function Navbar() {
  const logout= async()=>{
    await signOut(auth)
    window.location="/"
  }
  return (
   <>
   
    <div className='flex items-center justify-between pl-8   lg:pl-16 lg:pr-16 pr-10 absolute p-4 z-50px  w-full '>
<div className='flex items-center gap-10'>
 <h1  className='text-red-600 text-3xl md:text-4xl  font-bold cursor-pointer z-50'>NETFLİX</h1>
<div>
<div className="lg:hidden relative  -space-x-8 z-50">
        <label htmlFor="mobile-menu" className="sr-only">
        </label>
        <select
          id="mobile-menu"
          name="mobile-menu"
          className="block appearance-none w-36 px-4 py-2  rounded-lg  focus:outline-none  bg-black/25 text-sm  text-white  font-bold "
        >
          <option value="a" selected><a className='text-white text-sm  transition-all font-semibold' href="">Ana Sayfa</a>
</option>
          <option value="b"> 
 <a className='text-white text-sm hover:opacity-70 transition-all' href="">Diziler</a>
           </option>
          <option value="c">
 <a className='text-white text-sm hover:opacity-70 transition-all' href="">Filmler</a>
          </option>
          <option value="d">
 <a className='text-white text-sm hover:opacity-70 transition-all' href="">Yeni ve Popüler</a>
          </option>
          <option value="e">
 <a className='text-white text-sm hover:opacity-70 transition-all' href="">Listem</a>
          </option>
          <option value="f">
 <a className='text-white text-sm hover:opacity-70 transition-all' href="">Dile Göre Göz At</a>

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
<div className=' lg:items-center hidden lg:flex lg:whitespace-nowrap lg:gap-4 lg:z-50'>
<a className='text-white text-sm  transition-all font-semibold' href="">Ana Sayfa</a>
 <a className='text-white text-sm hover:opacity-70 transition-all' href="">Diziler</a>
 <a className='text-white text-sm hover:opacity-70 transition-all' href="">Filmler</a>
 <a className='text-white text-sm hover:opacity-70 transition-all' href="">Yeni ve Popüler</a>
 <a className='text-white text-sm hover:opacity-70 transition-all' href="">Listem</a>
 <a className='text-white text-sm hover:opacity-70 transition-all' href="">Dile Göre Göz At</a>
</div>
</div>

        <div className='z-50'>
            <button className='bg-red-600 px-2 lg:px-6 py-2 rounded cursor-pointer hover:bg-red-700 whitespace-nowrap   text-white z-50' onClick={logout}>Log out</button>
        </div>
      
    </div>
    <Main/>

    {/* <Movies/> */}
   </>
  )
}
