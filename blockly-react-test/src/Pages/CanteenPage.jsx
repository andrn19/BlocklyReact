import React from "react";
import { useNavigate } from "react-router-dom";
import { FaWrench } from "react-icons/fa"
import "../Components/ComponentStyles.css";

//components
import CanteenOverview from "../Components/CanteenOverview";
import Emitter from "../Components/Emitter";
import PolicyQue from "../Components/policyQue";
import StopButton from "../Components/StopButton";

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
                <div className="frontPageCanteenView">
                <CanteenOverview/>
                </div>
            </Emitter>
            <PolicyQue/>
            <StopButton/>
        </div>
    );
}

export default CanteenPage