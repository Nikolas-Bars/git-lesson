import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
const MyPosts = () =>{
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                </div>

            <div className={s.posts}>
                <Post message='Hi! How are you?' likeCounts=' likes: 25' />
                <Post message='It`s my first post.' likeCounts=' likes:17' />
                <Post likeCounts=' likes:15'/>
                <Post likeCounts=' likes:14'/>
                <Post likeCounts=' likes:31'/>
                <Post />

            </div>
</div>




)
}
export default MyPosts;