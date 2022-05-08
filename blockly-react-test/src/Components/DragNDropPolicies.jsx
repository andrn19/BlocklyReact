import React, { useEffect, useState } from "react";
import { useEmitter } from './Emitter';
import { DragDropContainer } from 'react-drag-drop-container';
import { getClient } from '../MQTT/mqtt';
import jsonSimple from "json-simple";


function DragNDropPolicies(props) {

    const [policies, setPolicies] = useState([]);

    // const query = '"@type": "scm:CleaningPolicy"\n "@type": "scm:ClearingPolicy"'
    // const frameToSend = {
    //     "frame": { query }
    // }
    
    useEffect(() => {
        if (localStorage.getItem("savedPoliciesJSON") !== null) {
            const localJSON = localStorage.getItem("savedPoliciesJSON")
            const storedJSON = localJSON.split(/(?=,{\n \"@type")/g);
            const sj = storedJSON.map(string => string.replaceAll(',{\n \"@type"', '{\n "@type"'));
            setPolicies(sj)
        }
    }, [])


    // useEffect(() => {
    //     setPolicies(frameToSend)
    // }, []);

    // useEffect(() => {
    //     const client = getClient();
    //     let isActive = true;
    //     if (isActive) {
    //         client.publish('fcs/fcServiceTopic', JSON.stringify(frameToSend))
    //         client.on("message", (topic, message) => {
    //             var msg = message.toString()
    //             var jsonMSG = jsonSimple.decode(msg)
    //             var policies = jsonMSG.policies
    //             setPolicies(policies)
    //         });
    //     }
    //     return () => { isActive = false }
    // }, []);

    const { setDataEvent } = useEmitter();

    const dropHandler = (e, policy) => {
        setDataEvent(`${JSON.stringify(e.dropData) }`);
        //setJsonPolicies('{\n "@type": "ClearingPolicy",\n "name": "",\n "description": "",\n "enabled": "true",\n "condition": "",\n "vars": "",\n "action": "",\n "policyOn": [\n {\n "@type": "Table", \n "name:" "' + e.dropData.tableData + '" \n } \n ] \n}')

        var policyJson = policy; 
        const tableObj = {"@type": "Table", "name": e.dropData.tableData };
        policyJson.policyOn.push(tableObj);
        
        if (policyJson.vars.length > 0) {
            var varString = JSON.stringify(policyJson.vars)
            varString = varString.replaceAll('"name":""', '"name":"'+e.dropData.tableData+'"')
            var varObj = JSON.parse(varString);
            policyJson.vars = varObj
        }
    };

    return (
        <div>
            <h1 style={{ fontSize: 20, paddingLeft: 25 }}>Drag and drop policies</h1>
            <ul>
                {policies.map((policy) => (
                    <DragDropContainer
                        targetKey="foo"
                        dragData={JSON.parse(policy).name}
                        onDrop={(e) => dropHandler(e, policy)}
                        key={policy.Id}>
                        <p className="policies"> {JSON.parse(policy).name} </p>
                    </DragDropContainer>
                ))}
            </ul>
        </div>
    )
}

export default DragNDropPolicies
