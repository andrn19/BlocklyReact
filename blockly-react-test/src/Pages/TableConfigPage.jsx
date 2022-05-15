import React from "react";
import { useNavigate } from "react-router-dom";

import "../Styles/ComponentStyles.css";

//components
import TableInfoBox from "../ComponentsConfigPage/TableInfoBox";
import DragNDropBoard from "../ComponentsConfigPage/DragNDropBoards";
import CanteenOverview from "../CommonComponents/CanteenOverview";

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
            <center><h1>Canteen</h1></center>
            <button onClick={toProgramming} id="ProgramButton">
                Program
            </button>
            <button onClick={toMain} id="BackButton">
                &laquo; Back
            </button>
            <TableInfoBox />
            <DragNDropBoard id="board-1"></DragNDropBoard>
            <center><CanteenOverview/></center>
        </div>
    );
}


export default TableConfigPage