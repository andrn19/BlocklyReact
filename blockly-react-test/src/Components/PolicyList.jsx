import React, { useEffect, useState } from "react";
import Blockly from 'blockly/core';

import "./ComponentStyles.css";

const PolicyList = (props) => {

    const [savedPolicies, setSavedPolicies] = useState([]);


    const getSavedPolicies = () => {
        const storedPolicies = localStorage.getItem("savedPolicies")
        console.log(storedPolicies)
        if (storedPolicies.length > 0) {
            for (var Policy in storedPolicies) {
                const policyXML = Blockly.Xml.textToDom(storedPolicies[Policy])
                setSavedPolicies(arr => [...arr, policyXML])
            }
        }
    }

    // useEffect(() => {
    //     getSavedPolicies()
    // }, [savedPolicies])

    useEffect(() => {
        getSavedPolicies()
        console.log(savedPolicies)
    })

    return (
        <div className="SavedPolicyDiv">
            <h3><center>Saved Policies</center></h3>
            <div className="PolicyListDiv">
                <li className="PolicyList">
                    <p>Policy</p>
                </li>
            </div>
            <button className="saveBtn" onClick={props.savePolicy}>
                Save
            </button>
            <button className="editBtn" onClick={props.editPolicy}>
                Edit
            </button>
        </div>
    );
}

export default PolicyList