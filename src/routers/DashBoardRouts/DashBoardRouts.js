import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Sidebar from "../../Components/GlobalComponents/Sidebar/Sidebar"
import YeboSaveRouts from "../YeboSaveRouts"
import RouteStrings from "../routingString";
import "./DashBoard.scss"

const DashBoardRouts = () => {
    return(
        <div className="dashboard">
            <Sidebar />
            <Outlet />
            {/* <Routes>
                <Route path="/*" element={<YeboSaveRouts />}/>
            </Routes> */}
        </div>
    )
}

export default DashBoardRouts;