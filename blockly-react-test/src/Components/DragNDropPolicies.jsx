import React, { useEffect, useState } from "react";
import { useEmitter } from './Emitter';
import { DragDropContainer } from 'react-drag-drop-container';
import { closeConnection, getClient } from '../MQTT/mqtt';


function DragNDropPolicies() {
    const [policies, setPolicies] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("savedPoliciesJSON") !== null) {
            const localJSON = localStorage.getItem("savedPoliciesJSON")
            const storedJSON = localJSON.split(/(?=,{ \"@type")/g);
            const sj = storedJSON.map(string => string.replaceAll(',{ \"@type"', '{ "@type"'));
            setPolicies(sj)
        }
    }, [])


    const { setDataEvent } = useEmitter();

    const dropHandler = (e, policy) => {
        setDataEvent(`${JSON.stringify(e.dropData)}`);

        var policyJson = policy;
        const tableObj = { "@type": "Table", "name": e.dropData.tableData };
        policyJson.policyOn.push(tableObj);

        if (policyJson.vars.length > 0) {
            var varString = JSON.stringify(policyJson.vars)
            varString = varString.replaceAll('"name":""', '"name":"' + e.dropData.tableData + '"')
            var varObj = JSON.parse(varString);
            policyJson.vars = varObj
        }
        console.log('hey')
        //mqtt publishing the generated code
        // const docObj = {"doc": policyJson }
        // const jsonMSG = JSON.stringify(docObj)
        // const client = getClient();
        // client.publish('fcs/fcServiceTopic', jsonMSG);
    };

    return (
        <div>
            <h1 style={{ fontSize: 20, textAlign: 'center'}}>Drag and drop policies</h1>
            <center>               
                {policies.map((policy) => (
                    <DragDropContainer
                        targetKey="foo"
                        dragData={JSON.parse(policy).name}
                        onHit={(e) => dropHandler(e, JSON.parse(policy))}
                        key={policy.Id}>
                        <p className="policies"> {JSON.parse(policy).name} </p>
                    </DragDropContainer>
                ))}
            </center>
        </div>
    )
}

export default DragNDropPolicies
