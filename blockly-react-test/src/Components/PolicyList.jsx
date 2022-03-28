import React from "react";

import "./ComponentStyles.css";

const PolicyList = () => {

    return (
        <div className="SavedPolicyDiv">
            <h2><center>Saved Policies</center></h2>
            <div className="PolicyListDiv">
                <li className="PolicyList">
                    <p>Policy</p>
                </li>
            </div>
            <button className="saveBtn">
                Save
            </button>
            <button className="editBtn">
                Edit
            </button>
        </div>
    );
}

export default PolicyList