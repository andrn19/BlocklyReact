import React, { useEffect, useState } from "react";
import Blockly from 'blockly/core';

import "./ComponentStyles.css";

const PolicyList = (props) => {

    const [savedPolicies, setSavedPolicies] = useState([]);
    const [selected, setSelected] = useState()

    useEffect(() => {
        console.log(selected)
    })

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

    const saveClick = () => {
        props.savePolicy()
        getSavedPolicies()
    }

    const policySelect = (policyXML) => {
        setSelected(policyXML)
    }

    return (
        <div className="SavedPolicyDiv">
            <h3><center>Saved Policies</center></h3>
            <ul className="PolicyList" >
                {savedPolicies.map((blockXml, id) => (
                    <button className="policies" key={id} onClick={() => policySelect(blockXml)}>
                        {blockXml.getElementsByTagName("field")[0].textContent}
                    </button>
                ))}
            </ul>
            <button className="saveBtn" onClick={saveClick}>
                Save
            </button>
            <button className="editBtn" onClick={() => props.editPolicy(selected)} > 
                Edit
            </button>
        </div>
    );
}

export default PolicyList