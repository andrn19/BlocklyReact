import React, { useRef, useState } from "react";
import { useEffect } from "react";

import "./ComponentStyles.css";

const useClickOutside = (handler) => {
    const domNode = useRef();

    useEffect(() => {
        const targetHandler = (event) => {
            if (!domNode.current.contains(event.target)) {
                handler();
            };
        };
        document.addEventListener("mousedown", targetHandler);
        return () => {
            document.removeEventListener("mousedown", targetHandler);
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
        <div className="ChooseMethodDiv">
            <h3>Clearing Methods</h3>
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
            <button onClick={addMethod} className="addBtn">
                ADD
            </button>
        </div>
    );
}

export default ChooseMethod;