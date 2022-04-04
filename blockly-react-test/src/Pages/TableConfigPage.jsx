import React from "react";
import { useNavigate } from "react-router-dom";

import "../Components/ComponentStyles.css";

//components
import TableInfoBox from "../Components/TableInfoBox";
import ChooseMethod from "../Components/ChooseMethod";
import CanteenOverview from "../Components/CanteenOverview";
import Emitter from "../Components/Emitter";

const TableConfigPage = () => {

    let navigate = useNavigate();

    const toProgramming = () => {
        navigate("/programming");
    }

    const toMain = () => {
        navigate("/");
    }


    return (
        <div>
            <button onClick={toProgramming} id="ProgramButton">
                Program
            </button>
            <button onClick={toMain} id="BackButton">
                &laquo; Back
            </button>
            <center><h1>Canteen</h1></center>
            <ChooseMethod />
            <Emitter>
            <TableInfoBox />
            <center><CanteenOverview/></center>
            </Emitter>
        </div>
    );
}

export default TableConfigPage