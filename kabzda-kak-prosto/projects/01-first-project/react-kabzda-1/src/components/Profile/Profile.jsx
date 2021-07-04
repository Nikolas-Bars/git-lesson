import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import s from "./Profile.module.css"
const Profile = () =>{
    return  (
        <div>
            <div>
                <img className={s.img} src="https://static.prian.ru/uploads/2021_07/1/20210701133751780428393.jpg" />
            </div>
            <div>
                <img className={s.img2} src='https://img5.goodfon.ru/original/2048x2048/4/16/4k-ultra-hd-background-cat-hood-heterochromia-dark-serious-b.jpg' /><br/>
                My avatar and description
            </div>
            <MyPosts />
        </div>
);
}
export default Profile;