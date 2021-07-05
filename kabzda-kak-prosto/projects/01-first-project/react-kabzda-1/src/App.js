import React from 'react';
import './App.css'; //файл в этом же каталоге
// import Header from './Header';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import Setting from "./components/Setting/Setting";


const App = (props) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs}/> {/*path='/dialogs' читает какой url отображается в браузере.
            Если URL в браузере - dialogs, то он рисует компоненту Dialogs*/}
                    <Route path='/profile' render={ () => <Profile posts={props.posts}/>}/> /*передаем в Profile в props массив posts, который сейчас в index.js*/
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/setting' component={Setting} />
                </div>
                {/*<Profile />*/}
            </div>
        </BrowserRouter>
    );
}


export default App;


