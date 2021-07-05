import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {             /*в пропсе массив posts который прошел через index - app - profile*/


    let postsElement =
        props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts} />)

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
                {postsElement}
               {/* <Post message={postsData[0].message} likeCounts={postsData[0].likeCounts}/>
                <Post message={postsData[1].message} likeCounts={postsData[1].likeCounts}/>
                <Post likeCounts={postsData[2].likeCounts} />
                <Post likeCounts={postsData[3].likeCounts} />
                <Post likeCounts={postsData[4].likeCounts} />*/}


            </div>
        </div>


    )
}
export default MyPosts;