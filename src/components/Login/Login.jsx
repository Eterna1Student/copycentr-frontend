import React, {useState} from "react";
import style from "./Login.module.scss"
import {useSelector, useDispatch} from "react-redux";
import {userAuth} from "../../store/actions/userActions";

const Login = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [save, setSave] = useState(true)

    const userState = useSelector((state) => state.user)
    console.log(userState)
    const dispatch = useDispatch()
    const onClickAuth = () => {
        dispatch(userAuth(username, password));
    };

    return (
        <section className={style.login}>
            <div className={style.login__wrapper}>
                <input className={style.login__input} type="text" placeholder="Логин" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input className={style.login__input} type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <label className={style.login__save}>
                    <input className={style.login__save_input} type="checkbox"/>
                    <span className={style.login__save_text}>Сохранить вход</span>
                </label>
                <button className={style.login__auth} onClick={onClickAuth}>Войти</button>
                <button className={style.login__restore}>Забыли пароль?</button>
            </div>
        </section>
    )
}

export default Login;