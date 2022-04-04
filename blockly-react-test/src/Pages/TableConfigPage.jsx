import React from "react";
import { useNavigate } from "react-router-dom";

import "../Components/ComponentStyles.css";

//components
import TableInfoBox from "../Components/TableInfoBox";
import ChooseMethod from "../Components/ChooseMethod";
import CanteenOverview from "../Components/CanteenOverview";

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
            <TableInfoBox />
            <center><CanteenOverview/></center>
        </div>
    );
}

export default TableConfigPage