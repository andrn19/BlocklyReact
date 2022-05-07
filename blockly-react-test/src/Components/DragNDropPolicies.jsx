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
        if (policies.length > 0) {
            const json = policies[0]
            console.log(json)
            console.log(JSON.parse(json))
        }
    })

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

    // sets dropdata from CanteenOverview in the Applied polices list
    // recieves JSON format for policyOn
    const dropHandler = (e) => {
        setDataEvent(`${e.dropData.number}`);
        console.log('{\n "@type": "Table",\n "name": "' + e.dropData.tableData + '"\n}')
    };

    return (
        <div>
            <h1 style={{ fontSize: 20, paddingLeft: 25 }}>Drag and drop policies</h1>
            <ul>
                {policies.map((policy) => (
                    <DragDropContainer
                        targetKey="foo"
                        dragData={JSON.parse(policy).name}
                        onDrop={dropHandler}
                        key={policy.Id}>
                        <p className="policies"> {JSON.parse(policy).name} </p>
                    </DragDropContainer>
                ))}
            </ul>
        </div>
    )
}

export default DragNDropPolicies
