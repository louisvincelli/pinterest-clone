"use client"
import Image from 'next/image';
import React, { useEffect } from 'react';
import { HiSearch, HiBell, HiChat } from "react-icons/hi";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useSession, signIn, signOut } from "next-auth/react"
import app from './../Shared/firebaseConfig';
import { useRouter } from 'next/navigation';

function Header() {
    const { data: session } = useSession();
    const router = useRouter();
    const db = getFirestore(app);

    //whenever we get session info useEffect starts
    useEffect(()=>{
        saveUserInfo();
    },[session])

    const saveUserInfo = async()=>{
        if(session?.user?.email)
        {
            //setuseremail is document id
            await setDoc(doc(db, "user", session.user.email),{
                userName: session.user.name,
                email: session.user.email,
                userImage: session.user.image
            });
        }
    }

    //console.log(session);

  return (
    <div className='flex gap-3 md:gap-2 items-center p-6'>
        <Image src='/pinterest.png' alt='logo' width={50} height={50} className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/>
        <button className='bg-black text-white p-2 px-4 rounded-full hidden md:block'>Home</button>
        <button className='font-semibold p-2 px-4 rounded-full text-black' onClick={()=>router.push('/pin-builder')}>Create</button>
        <div className='bg-[#e9e9e9] p-3 gap-3 items-center rounded-full w-full hidden md:flex'>
            <HiSearch className='text-[25px] text-gray-500 md:hidden'/>
            <input type='text' placeholder='Search' className='bg-transparent outline-none' />
        </div>
            <HiBell className='text-[40px] text-gray-500'/>
            <HiChat className='text-[40px] text-gray-500'/>
            {(() => {
              const user = session?.user;
              return user?.image && user.email ? 
                <Image src={user.image} onClick={()=>router.push('/'+ user.email)} alt='user-image' width={50} height={50} className='hover:bg-gray-300 p-2 rounded-full cursor-pointer' />:
                <button className='font-semibold text-black p-2 px-4 rounded-full'onClick={() => signIn()}>Login</button>;
            })()}
    </div>
  );
};

export default Header;