import React from 'react';
import s from "./Post.module.css"
const Post = (props) =>{
      return  (
                <div className={s.item}>
                   <img src='https://www.mirf.ru/wp-content/uploads/2020/09/1480331127-2048x1152.jpg' />
                    {props.message}<br/>
                    {props.likeCounts}
                    <div>
                        <span></span>
                    </div>

                </div>
    )
}
export default Post;