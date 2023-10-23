import "./index.scss";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";

const App = () => {
  return (
    <div className="app">
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О Сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;