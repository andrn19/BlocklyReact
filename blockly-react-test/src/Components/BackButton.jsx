import React from "react";
import { useNavigate } from "react-router-dom";
import "./ComponentStyles.css";

const BackButton = () => {

    let navigate = useNavigate();

    const pressed = () => {
        navigate("/");
    }

    return (
        <div>
            <button onClick={pressed} id="BackButton">
                &laquo; Back
            </button>
        </div>
    );
}

export default BackButton;