"use client"
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

function UserTag() {
    const {data:session} = useSession();
  return (
    <div className='mt-8'>
        {session?.user?
        <div className='flex gap-4'>
            <Image src={session.user.image || ''}
            alt='userImage'
            width={50}
            height={50}
            className='rounded-full'/>
            <div>
                <h2 className='text-[14px] font-medium'>{session.user.name}</h2>
                <h2 className='text-[12px]'>{session.user.email}</h2>
            </div>
        </div>
        :null}
    </div>
  )
}

export default UserTag