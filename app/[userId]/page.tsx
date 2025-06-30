"use client"
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import app from './../Shared/firebaseConfig';
import UserInfo from '../components/UserInfo';

interface ProfileParams {
  userId: string;
}

interface UserInfoData {
  userImage: string;
  userName: string;
  email: string;
}

function Profile({params}: {params: ProfileParams}) {
    const db = getFirestore(app);
    const [userInfo, setUserInfo] = useState<UserInfoData | null>(null);

    useEffect(()=>{
        console.log(params.userId.replace('&40','@'))
        if(params)
        {
            getUserInfo(params.userId.replace('&40', '@'))
        }
    },[params]);

    const getUserInfo= async(email: string)=>{
        const docRef = doc(db, "user", email);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()) {
            console.log("doc data:", docSnap.data());
            setUserInfo(docSnap.data() as UserInfoData);
        } else {
            //docsnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }
  return (
    <div>
        {userInfo?
        <UserInfo userInfo={userInfo} />
        :null}
    </div>
  );
};

export default Profile;