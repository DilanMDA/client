import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/register/Register";
import Home from "./pages/Home";
import AppHeader from "./components/nav/AppHeader";

function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
