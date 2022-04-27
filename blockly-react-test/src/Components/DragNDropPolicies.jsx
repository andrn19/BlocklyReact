import React, { useEffect, useState } from "react";
import { useEmitter } from './Emitter';
import { DragDropContainer } from 'react-drag-drop-container';
import { getClient } from '../MQTT/mqtt';
import jsonSimple from "json-simple";


function DragNDropPolicies(props) {

    const [policies, setPolicies] = useState([]);

    // const query = "SELECT * FROM SemanticDB WHERE @type='CleaningPolicy'"
    // const frameToSend = {
    //     "frame": { query }
    // }

    const frameToSend = {
        policies: [
            {
                PolicyName: 'Policy 1',
                Id: '1'
            },
            {
                PolicyName: 'Policy 2',
                Id: '2'
            },
            {
                PolicyName: 'Policy 3',
                Id: '3'
            },
            {
                PolicyName: 'Policy 4',
                Id: '4'
            },
        ]
    }

    // useEffect(() => {
    //     const client = getClient();
    //     let isActive = true;
    //     if (isActive) {
    //         client.publish('fcs/fcServiceTopic', JSON.stringify(frameToSend))
    //         client.on("message", (topic, message) => {
    //             var msg = message.toString()
    //             var jsonMSG = jsonSimple.decode(msg)
    //             var policies = jsonMSG.policies
    //             //console.log(policies)
    //             setPolicies(policies)
    //         });
    //         console.log(policies)
    //     }
    //     return () => { isActive = false }
    // }, []);

    const { setDataEvent } = useEmitter();

    const dropHandler = (e) => {
        setDataEvent(`${e.dropData}`);
    };

    return ( 
            <div> 
                <h1 style={{fontSize: 20, paddingLeft: 25}}>Drag and drop policies</h1>
                <ul>
                    {policies.map((policy) => (
                    <DragDropContainer 
                        targetKey="foo"  
                        dragData={policy.PolicyName}
                        onDrop={dropHandler}
                        key={policy.Id}>                  
                    <ul className={'policies'}> {policy.PolicyName} </ul> 
                    </DragDropContainer>
                    ))}
                </ul>
            </div>
    )
}

export default DragNDropPolicies
