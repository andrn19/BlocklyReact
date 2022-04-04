import React from "react";
import { useNavigate } from "react-router-dom";
import { FaWrench } from "react-icons/fa"

import "../Components/ComponentStyles.css";

//components
import TableLog from "../Components/TableLog";
import StatusQue from "../Components/StatusQue";
import CanteenOverview from "../Components/CanteenOverview";
import Emitter from "../Components/Emitter";

const CanteenPage = () => {

    let navigate = useNavigate();

    const toConfig = () => {
        navigate("/config");
    }

    return (
        <div>
            <FaWrench onClick={toConfig} size="2em" style={{ position:"fixed", bottom:"2%", right:"2%" }}/>
            <center><h1>Canteen</h1></center>
            <Emitter>
            <center><CanteenOverview/></center>
            <TableLog />
            </Emitter>
            <StatusQue />
        </div>
    );
}

export default CanteenPage