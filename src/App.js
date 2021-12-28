import React from "react";
import { BrowserRouter ,Routes, Route, Router } from "react-router-dom";
import Login from "./Screens/AuthScreens/Login_Screen/Login";
import OtpScreen from "./Screens/AuthScreens/Otp_Screen/OtpScreen";
import DashBoardRouts from "./routers/DashBoardRouts";
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/otp" element={<OtpScreen />} />
          <Route exact path="/dashboard" element={<DashBoardRouts />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
