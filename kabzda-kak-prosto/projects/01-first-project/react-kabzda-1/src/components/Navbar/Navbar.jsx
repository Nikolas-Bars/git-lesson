import React from 'react';
import s from "./Navbar.module.css"


const Navbar = () =>{
    return  (
      <nav className={s.nav1}>
        <div className={s.item}>
            <a>Profile</a>
        </div>
    <div className={s.active}>
        <a>Message</a>
    </div>
    <div className={`${s.item} ${s.active}`}>
        <a>News</a>
    </div>
    <div className={s.item}>
        <a>Music</a>
    </div>
    <div className={s.item}>
        <a>Settings</a>
    </div>
      </nav>
);
}
export default Navbar;