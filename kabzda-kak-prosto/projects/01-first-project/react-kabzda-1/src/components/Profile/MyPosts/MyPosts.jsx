import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {id: '1', message: 'Hi! How are you?', likeCounts:' likes: 25'},
        {id: '1', message: 'It`s my first post.', likeCounts:' likes: 12'},
        {id: '1', message: 'Hi! How are you?', likeCounts:' likes: 38'},
        {id: '1', message: 'Hi! How are you?', likeCounts:' likes: 11'},
        {id: '1', message: 'Hi! How are you?', likeCounts:' likes: 7'}

    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div><br />

            </div>

            <div className={s.posts}>
                <Post message={postsData[0].message} likeCounts={postsData[0].likeCounts}/>
                <Post message={postsData[1].message} likeCounts={postsData[1].likeCounts}/>
                <Post likeCounts={postsData[2].likeCounts} />
                <Post likeCounts={postsData[3].likeCounts} />
                <Post likeCounts={postsData[4].likeCounts} />


            </div>
        </div>


    )
}
export default MyPosts;