
import style from "./App.module.scss"
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sales from "./components/Sales/Sales";
import {Route, Routes} from 'react-router-dom';
import Expenses from "./components/Expenses/Expenses";
import Statistics from "./components/Statistics/Statistics";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkAuth} from "./store/actions/userActions";

function App() {

    const {auth, load} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if(auth === null) {
            dispatch(checkAuth());
        }
    }, [])

    if(auth === false) return <Login/>;
    if(load) return null;

    return (
        <div className={style.app}>
            <Header/>
            <main className={style.app__main}>
                <Routes>
                    <Route path='/' element={<Sales/>}/>
                    <Route path='/login' element={<Sales/>}/>
                    <Route path='/expenses' element={<Expenses />}/>
                    <Route path='/statistics' element={<Statistics />}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
