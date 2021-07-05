import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import s from "./Profile.module.css"
import ProfileInfo from "./Profile info/ProfileInfo";

const Profile = (props) => {


    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/> /*передаем в props MyPosts массив posts*/
        </div>
    );
}
export default Profile;