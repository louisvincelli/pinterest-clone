import Image from 'next/image';
import React from 'react';

interface UserInfoProps {
  userInfo: {
    userImage: string;
    userName: string;
    email: string;
  };
}

function UserInfo({userInfo}: UserInfoProps) {
    //console.log(userInfo);
  return (
    <div className='flex flex-col item-center'>
        <Image src={userInfo.userImage} alt='userImage' width={100} height={100} className='rounded-full'/>
        <h2 className='text-[30px] font-semibold'>{userInfo.userName}</h2>
        <h2 className='text-gray-400'>{userInfo.email}</h2>
        <button className='bg-gray-200 p-2 px-3 font-semibold mt-5 rounded-full'>Share</button>
    </div>
  );
};

export default UserInfo;