
import style from "./App.module.scss"
import Login from "./components/Login/Login";

function App() {
  return (
      <div className={style.app}>
          <header>header</header>
          <main className={style.app__main}>
              <Login/>
          </main>
      </div>
  );
}

export default App;
