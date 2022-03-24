import React, { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

const ChooseMethod = () => {

    const [value, setValue] = useState('Methods');
    const handleSelect = (e) => {
        setValue(e)
    }
    const addMethod = () => {

    }

    return (
        <div id="ChooseMethodDiv">
            <h2>Clearing Methods</h2>
            <p>Step 2: Choose methods for selected tables</p>
            <DropdownButton id="dropdown-basic-button" title={value} onSelect={handleSelect}>
                <Dropdown.Item eventKey="clean">Clean</Dropdown.Item>
                <Dropdown.Item eventKey="clear">Clear</Dropdown.Item>
                <Dropdown.Item eventKey="Get that plate off the table">Get that plate off the table</Dropdown.Item>
            </DropdownButton>
            <button onClick={addMethod} id="addButton">
                ADD
            </button>
        </div>
    );
}

export default ChooseMethod;