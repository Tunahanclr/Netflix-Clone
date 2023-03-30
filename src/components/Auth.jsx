
import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const [signUp, setSignUp] = useState(true);
  const [authData, setAuthData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const onChangeFunc = (e) => {
      setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const authFunc = async () => {
    if (signUp) {
      try {
        const data = await createUserWithEmailAndPassword(auth,authData.email,authData.password    );
        const user = data.user;
        if (user) {
          navigate('/browse');
        }
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      try {
        const data = await signInWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );
        const user = data.user;
        if (user) {
          navigate('/browse');
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  }
return (
<>
<ToastContainer/>
<div className='w-full h-screen'>
<div className='absolute top-8 left-10 z-50'>
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
<h3 className='text-white text-4xl pt-24 text-center font-bold'>{signUp ? 'Kayıt Ol' : 'Oturum Aç'}</h3>
<form className=' justify-center items-center text-center flex flex-col py-4'>
<input
               className='p-3 my-2 w-80 bg-inputColor rounded'
               name='email'
               value={authData.email}
               onChange={onChangeFunc}
               type='email'
               placeholder='E-posta giriniz'
             />
<input
               className='p-3 my-2 bg-inputColor w-80 rounded'
               name='password'
               value={authData.password}
               onChange={onChangeFunc}
               type='password'
               placeholder='Password'
             />
                <button onClick={authFunc} type='button' className='z-50 cursor-pointer hover:bg-red-700 transition-all bg-red-600 py-3 my-6 w-[314px] rounded font-bold'>
                {signUp ? "Kayıt Ol" : "Oturum Aç"}
                </button>
                </form>
               <div className='flex gap-2 text-white items-center justify-center text-center'>
               <p onClick={()=> setSignUp (!signUp)} className='cursor-pointer'>{signUp ? "Zaten hesabın var mı?" : "Şimdi Kayıt ol"}</p>
               </div>
                   </div>
            </div>
</div>
</div>
  </>
  )
}
