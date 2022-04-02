import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

import "../Components/ComponentStyles.css";

//components
import TableInfoBox from "../Components/TableInfoBox";
import ChooseMethod from "../Components/ChooseMethod";
import CanteenOverview from "../Components/CanteenOverview";

const CanteenPage = () => {

    let navigate = useNavigate();

    const toConfig = () => {
        navigate("/config");
    }

    return (
        <div>
            <FontAwesomeIcon id="Wrench" onClick={toConfig} icon={faWrench} />
            <center><h1>Canteen</h1></center>
            <center><CanteenOverview/></center>
            <ChooseMethod />
            <TableInfoBox />
        </div>
    );
}

export default CanteenPage