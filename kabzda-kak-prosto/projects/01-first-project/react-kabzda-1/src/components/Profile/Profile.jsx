import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import s from "./Profile.module.css"
const Profile = () =>{
    return  (
        <div className={s.content1}>
            <div>
                <img src="https://static.prian.ru/uploads/2021_07/1/20210701133751780428393.jpg" />
            </div>
            <div>
                My avatar and description
            </div>
            <MyPosts />
        </div>
);
}
export default Profile;