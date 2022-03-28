import React, { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

import "./DropdownBtnStyle.css";

const ChooseMethod = () => {

    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState('Methods');
    const setSelected = (e) => {
        setValue(e)
    }
    const options = ["Clean", "Clear", "Get that pepper off there"];


    const addMethod = () => {
        setValue("Methods")
    }

    return (
        <div id="ChooseMethodDiv">
            <h2>Clearing Methods</h2>
            <p>Step 2: Choose methods for selected tables</p>
            <div className="dropdown">
                <div className="dropdown-btn" onClick={(e) =>
                    setIsActive(!isActive)}>
                    {value}
                    <span className="fas fa-caret-down"> </span>
                </div>
                {isActive && (
                    <div className="dropdown-content">
                        {options.map((option) => 
                            <div
                                onClick={(e) => {
                                    setSelected(option);
                                    setIsActive(false);
                                }} className="dropdown-item">
                                {option}
                            </div>
                        )}
                    </div>
                )}
            </div>
            <button onClick={addMethod} id="addButton">
                ADD
            </button>
        </div>
    );
}

export default ChooseMethod;