import React, { useEffect, useState } from "react";
import { DragDropContainer } from 'react-drag-drop-container';
import { mqttPublish } from '../MQTT/mqtt';


function DragNDropPolicies() {
    const [policies, setPolicies] = useState([]);
    //const [appliedPolicies, setAppliedPolicies] = useState([])

    useEffect(() => {
        if (localStorage.getItem("savedPoliciesJSON") !== null) {
            const localJSON = localStorage.getItem("savedPoliciesJSON")
            const storedJSON = localJSON.split(/(?=,{ "@type")/g);
            const sj = storedJSON.map(string => string.replaceAll(',{ "@type"', '{ "@type"'));
            setPolicies(sj)
        }

    }, [])

    // useEffect(() => {
    //     if(appliedPolicies.length > 0){
    //         localStorage.setItem('appliedPolicies', appliedPolicies)  
    //     }
    // }, [appliedPolicies])

    
    const dropHandler = (e, policy) => {
        const policyJson = policy;
        const tableObj = { "@type": "Table", "name": e.dropData.tableData };
        policyJson.policyOn.push(tableObj);
        policyJson.enabled = true

        if (policyJson.vars.length > 0) {
            var varString = JSON.stringify(policyJson.vars)
            varString = varString.replaceAll('"name":""', '"name":"' + e.dropData.tableData + '"')
            var varObj = JSON.parse(varString);
            policyJson.vars = varObj
        }
        //const stringPolicyJson = JSON.stringify(policyJson)
        //setAppliedPolicies(arr => [...arr, stringPolicyJson])


        //mqtt publishing the generated code
        const docObj = {"doc": policyJson }
        const jsonMSG = JSON.stringify(docObj)
        mqttPublish('fcs/fcServiceTopic', jsonMSG);

        e.stopImmediatePropagation()
    };

    return (
        <div>
            <h1 style={{ fontSize: 20, textAlign: 'center'}}>Drag and drop policies</h1>
            <center>               
                {policies.map((policy) => (
                    <DragDropContainer
                        targetKey="foo"
                        dragData={JSON.parse(policy).name}
                        onDrop={(e) => dropHandler(e, JSON.parse(policy))}
                        key={JSON.parse(policy).name}>
                        <p className="policies"> {JSON.parse(policy).name} </p>
                    </DragDropContainer>
                ))}
            </center>
        </div>
    )
}

export default DragNDropPolicies
