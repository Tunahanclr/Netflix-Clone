import React from 'react'

export default function Auth() {
        return ( 
  <>
   <div className='w-full h-screen'>
                <div className='absolute top-8 left-10  z-50'>
                    <h2 className='text-5xl font-bold text-red-500'>NETFLİX</h2>
                </div>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] z-50 bg-black/75 mx-auto text-white'>
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='text-white text-4xl pt-24 text-center font-bold'>Oturum Aç</h3>
                    <form
                className=' justify-center items-center text-center flex flex-col py-4'
              >
                <input
                  className='p-3 my-2 w-80 bg-inputColor rounded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                  className='p-3 my-2 bg-inputColor w-80 rounded'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
                <button className='bg-red-600 py-3 my-6 w-[314px] rounded font-bold'>
                  Oturum Aç
                </button>
                </form>
                <span className='text-gray-600 cursor-pointer'>
                    Kayıt olmadınız mı?
                  </span>
                   </div>
            </div>
</div>
</div>
  </>
  )
}
