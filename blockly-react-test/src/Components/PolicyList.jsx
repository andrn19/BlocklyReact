import React from "react";

import "./ComponentStyles.css";

const PolicyList = (props) => {

    return (
        <div className="SavedPolicyDiv">
            <h3><center>Saved Policies</center></h3>
            <div className="PolicyListDiv">
                <li className="PolicyList">
                    <p>Policy</p>
                </li>
            </div>
            <button className="saveBtn" onClick={props.generateCode}>
                Save
            </button>
            <button className="editBtn">
                Edit
            </button>
        </div>
    );
}

export default PolicyList