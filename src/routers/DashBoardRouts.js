import React from "react";
import { Route } from "react-router-dom";
import Sidebar from "../Components/GlobalComponents/Sidebar/Sidebar"
import Sidebar1 from "../Components/GlobalComponents/Sidebar/Sidebar1"

const DashBoardRouts = () => {
    return(
        <div>
            <Sidebar1 />
            {/* <Sidebar /> */}
        </div>
    )
}

export default DashBoardRouts;