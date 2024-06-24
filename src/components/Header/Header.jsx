import React from "react";
import style from "./Header.module.scss"
import {NavLink} from "react-router-dom";


const Header = (props) => {

    const onExit = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.reload()
    }

    return (
        <header className={style.header}>
            <div className={style.header__logo}>logo</div>
            <nav className={style.nav}>
                <ul className={style.nav__list}>
                    <li className={style.nav__item}>
                        <NavLink className={({isActive}) => (isActive ? style.nav__linkActive : style.nav__link) } to="/">Продажи</NavLink>
                    </li>
                    <li className={style.nav__item}>
                        <NavLink className={({isActive}) => (isActive ? style.nav__linkActive : style.nav__link) } to="/expenses">Расходы</NavLink>
                    </li>
                    <li className={style.nav__item}>
                        <NavLink className={({isActive}) => (isActive ? style.nav__linkActive : style.nav__link) } to="/statistics">Статистика</NavLink>
                    </li>
                </ul>
            </nav>
            <button className={style.nav__item} onClick={onExit}>ВЫЙТИ</button>
        </header>
    )
}

export default Header;