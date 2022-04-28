import React, { useEffect, useState } from "react";
import Blockly from 'blockly/core';

import "./ComponentStyles.css";

const PolicyList = (props) => {

    const [savedPolicies, setSavedPolicies] = useState([]);


    const getSavedPolicies = () => {
        const storedData = localStorage.getItem("savedPolicies");
        //console.log(storedData)
        if (storedData !== null && storedData.length > 0) {
                const storedPolicies = storedData.split(/(?=<xml)/g);
                const ss = storedPolicies.map(string => string.replaceAll('>,', '>')) ;
                console.log(ss)
            } 
            // for (var Policy in storedPolicies) {
            //     const policyXML = Blockly.Xml.textToDom(storedPolicies[Policy])
            //     setSavedPolicies(arr => [policyXML])
            // }
        
    }

    // useEffect(() => {
    //     console.log(savedPolicies)
    // }, [savedPolicies])

    useEffect(() => {
        getSavedPolicies()
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