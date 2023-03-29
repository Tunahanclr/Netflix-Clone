import React from 'react'
import Main from './Main'
import Movies from './Movies'

export default function Navbar() {
  return (
   <>
    <div className='flex items-center justify-between pl-12 pr-12 absolute p-4 z-50px  w-full '>
<div className='flex items-center gap-10'>
 <h1  className='text-red-600 text-4xl font-bold cursor-pointer z-50'>NETFLİX</h1>
<div className='flex items-center gap-4 z-50'>
<a className='text-white text-sm  transition-all font-semibold' href="">Ana Sayfa</a>
 <a className='text-white text-sm hover:opacity-70 transition-all' href="">Diziler</a>
 <a className='text-white text-sm hover:opacity-70 transition-all' href="">Filmler</a>
 <a className='text-white text-sm hover:opacity-70 transition-all' href="">Yeni ve Popüler</a>
 <a className='text-white text-sm hover:opacity-70 transition-all' href="">Listem</a>
 <a className='text-white text-sm hover:opacity-70 transition-all' href="">Dile Göre Göz At</a>
</div>
</div>

        <div className='z-50'>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer hover:bg-red-700  text-white z-50'>Log out</button>
        </div>
    </div>
    <Main/>

    {/* <Movies/> */}
   </>
  )
}
