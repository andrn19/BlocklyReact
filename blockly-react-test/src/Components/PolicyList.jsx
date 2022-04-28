import React, { useEffect, useState } from "react";
import Blockly from 'blockly/core';

import "./ComponentStyles.css";

const PolicyList = (props) => {

    const [savedPolicies, setSavedPolicies] = useState([]);


    const getSavedPolicies = () => {
        const storedData = localStorage.getItem("savedPolicies");
        if (storedData !== null && storedData.length > 0) {
            if (savedPolicies !== []) {
                setSavedPolicies([])
            }
            const storedPolicies = storedData.split(/(?=<xml)/g);
            const sp = storedPolicies.map(string => string.replaceAll('>,', '>'));
            for (var Policy in sp) {
                const policyXML = Blockly.Xml.textToDom(sp[Policy])
                setSavedPolicies(arr => [...arr, policyXML])
            }
        }
    }

    // useEffect(() => {
    //     console.log(savedPolicies)
    // }, [savedPolicies])

    const saveClick = () => {
        props.savePolicy()
        getSavedPolicies()
    }

    return (
        <div className="SavedPolicyDiv">
            <h3><center>Saved Policies</center></h3>
            <ul className="PolicyList" >
                {savedPolicies.map((blockXml) => (
                    <button className="policies">{blockXml.getElementsByTagName("field")[0].textContent}</button>
                ))}
            </ul>
            <button className="saveBtn" onClick={saveClick}>
                Save
            </button>
            <button className="editBtn" onClick={props.editPolicy} >
                Edit
            </button>
        </div>
    );
}

export default PolicyList