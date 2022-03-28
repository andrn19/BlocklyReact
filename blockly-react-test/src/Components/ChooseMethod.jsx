import React, { useRef, useState } from "react";
import { useEffect } from "react";

import "./DropdownBtnStyle.css";

const useClickOutside = (handler) => {
    const domNode = useRef();

    useEffect(() => {
        const maybeHandler = (event) => {
            if (!domNode.current.contains(event.target)) {
                handler();
            };
        };
        document.addEventListener("mousedown", maybeHandler);
        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode
};

const ChooseMethod = () => {

    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState('Methods');
    const setSelected = (e) => {
        setValue(e);
    };
    const options = ["Clean", "Clear", "Get that pepper off there"];

    const addMethod = () => {
        setValue("Methods");
    };

    const domNode = useClickOutside(() => {
        setIsActive(false);
    });



    return (
        <div id="ChooseMethodDiv">
            <h2>Clearing Methods</h2>
            <p>Step 2: Choose methods for selected tables</p>
            <div ref={domNode} className="dropdown">
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