import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./components/nav/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
