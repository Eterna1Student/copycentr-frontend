
import style from "./App.module.scss"
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sales from "./components/Sales/Sales";
import {Route, Routes} from 'react-router-dom';
import Expenses from "./components/Expenses/Expenses";
import Statistics from "./components/Statistics/Statistics";

function App() {
    return (
        <div className={style.app}>
            <Header/>
            <main className={style.app__main}>
                {/*<Login/>*/}
                <Routes>
                    <Route path='/' element={<Sales/>}/>
                    <Route path='/expenses' element={<Expenses />}/>
                    <Route path='/statistics' element={<Statistics />}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
