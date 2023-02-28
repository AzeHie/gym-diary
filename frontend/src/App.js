import { Fragment } from "react";

import {Route, Routes } from "react-router-dom";

import Header from "./Components/Layout/Header";
import MainImage from "./Components/Layout/MainImage";

import "./App.css";

import Home from "./Homepage/pages/Home";
import Login from "./Auth/pages/Login";
import Signup from "./Auth/pages/Signup";
import Diary from "./Diary/pages/Diary";
import CurrentProgram from "./Diary/pages/CurrentProgram";
import NewProgram from "./Diary/pages/NewProgram";
import PreviousProgram from "./Diary/pages/PreviousPrograms";
import UpdateWorkout from "./Diary/pages/UpdateWorkout";

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
