import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import ManageUser from "../Screens/YeboSave/ManageUser/ManageUser";
import ManageGurdAgencies from "../Screens/YeboSave/ManageGuardAgencies/ManageGuardAgencies";

const YeboSaveRouts = () => {
    return(
        <div>
            {/* <Outlet /> */}
            <Routes>
                <Route exact path="ManageUser" element={<ManageUser />}/>
                <Route exact path="manageGurdAgencies" element={<ManageGurdAgencies />} />
            </Routes>
        </div>
    )
}

export default YeboSaveRouts;