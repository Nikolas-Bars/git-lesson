import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import state from "../../../redux/state";

const MyPosts = (props) => {             /*в пропсе массив posts который прошел через index - app - profile*/

    let newPostsElement = React.createRef();


    let postsElement =
        props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts} />)

    let addPosts = () => {
        props.addPost(); /*в качестве аргумента будет state.profilePage.newPostText (уже прописано в самой функции в state.js)*/
    }

    let onPostChange = () => {
        let text = newPostsElement.current.value;
        props.upText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostsElement} onChange={onPostChange} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPosts}>Add Post</button> {/*концепция callback - мы не вызываем ф-ию, а отдаем ее чтобы ее кто-то вызывал*/}
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