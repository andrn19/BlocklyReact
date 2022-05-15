import React from "react";
import { useNavigate } from "react-router-dom";
import { FaWrench } from "react-icons/fa"
import "../Styles/ComponentStyles.css";

//components
import CanteenOverview from "../CommonComponents/CanteenOverview";
import PolicyQue from "../ComponentsCanteenPage/policyQue";
import StopButton from "../ComponentsCanteenPage/StopButton";

const CanteenPage = () => {

    let navigate = useNavigate();

    const toConfig = () => {
        navigate("/config");
    }

    return (
        <div>
            <FaWrench onClick={toConfig} size="2em" style={{ position:"fixed", bottom:"2%", right:"2%" }}/>
            <center><h1>Canteen</h1></center>
                <div className="frontPageCanteenView">
                <CanteenOverview/>
                </div>
            <PolicyQue/>
            <StopButton/>
        </div>
    );
}

export default CanteenPage