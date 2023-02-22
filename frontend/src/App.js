import { Fragment } from "react";

import {Route, Routes } from "react-router-dom";

import Header from "./Components/Layout/Header";
import MainImage from "./Components/Layout/MainImage";

import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Diary from "./pages/Diary";
import CurrentProgram from "./pages/CurrentProgram";
import NewProgram from "./pages/NewProgram";
import PreviousProgram from "./pages/PreviousPrograms";
import UpdateWorkout from "./pages/UpdateWorkout";

function App() {
  return (
    <Fragment>
      <header>
        <Header />
        <MainImage />
      </header>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/diary/currentprogram" element={<CurrentProgram />} />
        <Route path="/diary/currentprogram/updateworkout" element={<UpdateWorkout />}/>
        <Route path="/diary/newprogram" element={<NewProgram />} />
        <Route path="/diary/previousprograms" element={<PreviousProgram />}/>
      </Routes>
    </Fragment>
  );
}

export default App;
