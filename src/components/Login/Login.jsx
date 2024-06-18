import React, {useState} from "react";
import style from "./Login.module.scss"
import {useSelector, useDispatch} from "react-redux";
import {setAuth} from "../../store/slices/userSlice";

const Login = (props) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [save, setSave] = useState(true)

    const auth = useSelector((state) => state.user.auth)
    console.log(auth)
    const dispatch = useDispatch()
    const onLogin = () => {
        dispatch(setAuth(true))
        fetch(
            "http://localhost:3001/auth/login",
            {method:"POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            body: JSON.stringify({username: login, password: password})}
        )
    }

    return (
        <section className={style.login}>
            <div className={style.login__wrapper}>
                <input className={style.login__input} type="text" placeholder="Логин" value={login} onChange={(e) => setLogin(e.target.value)}/>
                <input className={style.login__input} type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <label className={style.login__save}>
                    <input className={style.login__save_input} type="checkbox"/>
                    <span className={style.login__save_text}>Сохранить вход</span>
                </label>
                <button className={style.login__auth} onClick={onLogin}>Войти</button>
                <button className={style.login__restore}>Забыли пароль?</button>
            </div>
        </section>
    )
}

export default Login;