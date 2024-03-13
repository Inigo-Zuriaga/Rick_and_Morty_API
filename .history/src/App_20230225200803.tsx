import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { NavBar } from "./components/library/visual/NavBar";
import MainPage from "./subpages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/library/visual/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar title1={"Characters"} title2={"Locations"} title3={"Episodes"}/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
      <Footer title={"Group 3 @ Cph Business Lyngby - Web Development"}/>
    </>
  );
}

export default App;
