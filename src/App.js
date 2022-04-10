import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Register";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/register' element={<Registration />} />
    </Routes>
  );
}

export default App;
