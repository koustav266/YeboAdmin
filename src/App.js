import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Screens/AuthScreens/Login_Screen/Login";
import OtpScreen from "./Screens/AuthScreens/Otp_Screen/OtpScreen";
import DashBoardRouts from "./routers/DashBoardRouts/DashBoardRouts";
import YeboSaveRouts from "./routers/YeboSaveRouts";
import ManageUser from "./Screens/YeboSave/ManageUser/ManageUser";
import ManageGurdAgencies from "./Screens/YeboSave/ManageGuardAgencies/ManageGuardAgencies";
import ManageGuards from "./Screens/YeboSave/MangeGuards/ManageGuards"
import Feedbacks from "./Screens/YeboSave/Feedbacks/Feedbacks";
import PageNotFound from "./Screens/Errorpage/PageNotFound"
import InProgressFeedback from "./Screens/YeboSave/Feedbacks/InProgressFeedback/InProgressFeedback"
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
              <Route exact path="ManageGurds" element={<ManageGuards />} />
              <Route exact path="Feedbacks/*" element={<Feedbacks />} />
            </Route>
          </Route>
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
     
    </div>
  );
}

export default App;
