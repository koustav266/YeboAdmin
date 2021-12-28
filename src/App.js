import React from "react";
import { BrowserRouter ,Routes, Route, Router } from "react-router-dom";
import Login from "./Screens/AuthScreens/Login_Screen/Login";
import OtpScreen from "./Screens/AuthScreens/Otp_Screen/OtpScreen";
import DashBoardRouts from "./routers/DashBoardRouts/DashBoardRouts";
import YeboSaveRouts from "./routers/YeboSaveRouts";
import ManageUser from "./Screens/YeboSave/ManageUser/ManageUser";
import ManageGurdAgencies from "./Screens/YeboSave/ManageGuardAgencies/ManageGuardAgencies";
import './App.scss';

function App() {
  return (
    <div className="App">
    
        <Routes>
          <Route exact path="login" element={<Login />} />
          <Route exact path="otp" element={<OtpScreen />} />
          <Route exact path="dashboard" element={<DashBoardRouts />}>
            <Route exact path="YeboSave" element={<YeboSaveRouts />}>
              <Route exact path="ManageUser" element={<ManageUser />}/>
              <Route exact path="ManageGurdAgencies" element={<ManageGurdAgencies />}/>
            </Route>
          </Route>
        </Routes>
     
    </div>
  );
}

export default App;
