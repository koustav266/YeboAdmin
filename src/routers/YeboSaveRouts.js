import React from "react";
import { Route, Routes } from "react-router-dom";
import ManageUser from "../Screens/YeboSave/ManageUser/ManageUser";
import ManageGurdAgencies from "../Screens/YeboSave/ManageGuardAgencies/ManageGuardAgencies";
import ManageGurds from "../Screens/YeboSave/MangeGuards/ManageGuards"
import Feedbacks from "../Screens/YeboSave/Feedbacks/Feedbacks";
import InProgressFeedback from "../Screens/YeboSave/Feedbacks/InProgressFeedback/InProgressFeedback";
import ClosedFeedbacks from "../Screens/YeboSave/Feedbacks/ClosedFeedback/ClosedFeedbacks";
import AppreciationFeedback from "../Screens/YeboSave/Feedbacks/AppreciationFeedback/AppreciationFeedback"

const YeboSaveRouts = () => {
    return(
        <div>
            {/* <Outlet /> */}
            <Routes>
                <Route exact path="ManageUser" element={<ManageUser />}/>
                <Route exact path="manageGurdAgencies" element={<ManageGurdAgencies />} />
                <Route exact path="manageGurds" element={<ManageGurds />} />
                <Route exact path="Feedbacks" element={<Feedbacks />} >
                    <Route exact path="" element={<InProgressFeedback />} />
                    <Route exact path="closedfeedbacks" element={<ClosedFeedbacks />} />
                    <Route exact path="appreciationfeedback" element={<AppreciationFeedback />} />
                </Route>
            </Routes>
        </div>
    )
}

export default YeboSaveRouts;