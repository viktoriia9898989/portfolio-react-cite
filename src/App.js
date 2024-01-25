import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AboutMe from "./pages/AboutMe";
import Contacts from "./pages/Contacts";
import Skills from "./pages/Skills";
import Home from "./pages/Home";

function App() {
  return (
    
         <div>
          <BrowserRouter>
          <Sidebar>
          <Routes>
          <Route path="/"element={<Home/>}></Route>
            <Route path="/home"element={<Home/>}></Route>
            <Route path="/about"element={<AboutMe/>}></Route>
            <Route path="/contacts"element={<Contacts/>}></Route>
            <Route path="/skills"element={<Skills/>}></Route>
          </Routes>
          </Sidebar>
          </BrowserRouter>
         </div>
  );
};

export default App;
