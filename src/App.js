import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Skills from "./pages/Skills";
import Home from "./pages/Home";

import Projects from "./pages/Projects";

function App() {
  return (
    
         <div>
          <BrowserRouter>
          <Sidebar>
          <Routes>
          <Route path="/"element={<Home/>}></Route>
            <Route path="/home"element={<Home/>}></Route>
            <Route path="/skills"element={<Skills/>}></Route>
            <Route path="/projects"element={<Projects/>}></Route>
          </Routes>
          </Sidebar>
          </BrowserRouter>
         </div>
  );
};

export default App;
