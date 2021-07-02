import React from 'react';
import './App.css'; //файл в этом же каталоге
// import Header from './Header';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";




const App = () => {
  return (
    <div className="app-wrapper">
        <Header />
        <Navbar />
        <Profile />
    </div>
  );
}




export default App;


