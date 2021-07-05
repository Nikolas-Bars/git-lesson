import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: '1', message: 'Hi! How are you?', likeCounts:' likes: 25'},
    {id: '1', message: 'It`s my first post.', likeCounts:' likes: 12'},
    {id: '1', message: 'Hi! How are you?', likeCounts:' likes: 38'},
    {id: '1', message: 'Hi! How are you?', likeCounts:' likes: 11'},
    {id: '1', message: 'Hi! How are you?', likeCounts:' likes: 7'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts}/> /*передаем APP props posts*/
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
