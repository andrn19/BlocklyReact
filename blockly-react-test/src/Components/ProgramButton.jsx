import React from "react";
import { useNavigate } from "react-router-dom";
import "./ComponentStyles.css";

const ProgramButton = () => {

    let navigate = useNavigate();

    const pressed = () => {
        navigate("/programming");
    }

    return (
        <button onClick={pressed} id="ProgramButton">
            Program
        </button>
    );
}

export default ProgramButton;