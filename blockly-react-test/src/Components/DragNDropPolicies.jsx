import React, { useEffect, useState } from "react";
import { useEmitter } from './Emitter';
import { DragDropContainer } from 'react-drag-drop-container';
import { getClient } from '../MQTT/mqtt';
import jsonSimple from "json-simple";


function DragNDropPolicies(props) {

    const [policies, setPolicies] = useState([]);
    const [jsonPolicy, setJsonPolicies] = useState([]);

    // const query = '"@type": "scm:CleaningPolicy"\n "@type": "scm:ClearingPolicy"'
    // const frameToSend = {
    //     "frame": { query }
    // }
    
    const clearingPolicyExample = [
        {
            "@type": "ClearingPolicy",
            "name": "<name>",
            "description": "",
            "enabled": "false",
            "condition": {"and": [
           {"==": [{"var": "plate"}, {"var": "plateType"}]},
           {"==": [{"var": "napkin"}, {"var": "napkinType"}]},
           ]},
           "vars": [  
                {"plateType": {"value": "Plate"}},
                {"plate": {"property": "anchorOf", "@type": "SensedEntity", "name": ""}},
                {"napkinType": {"value": "Napkin"}},
                {"napkin": {"property": "anchorOf", "@type": "SensedEntity", "name": ""}}
            ],
            "action": "clear",
            "policyOn": []
        },
    ]
    

    const frameToSend = [
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
    

    useEffect(() => {
        setPolicies(frameToSend)
        setJsonPolicies(clearingPolicyExample)
        
    }, []);

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
        //setJsonPolicies('{\n "@type": "ClearingPolicy",\n "name": "",\n "description": "",\n "enabled": "true",\n "condition": "",\n "vars": "",\n "action": "",\n "policyOn": [\n {\n "@type": "Table", \n "name:" "' + e.dropData.tableData + '" \n } \n ] \n}')
        
        //setJsonPolicies(prevState => ({
         //   jsonPolicy: {
         //       ...prevState.policyOn,
         //       policyOn: e.dropData
        //    }
        //}))

        //console.log(clearingPolicyExample[0].vars[1].plate.name)
        clearingPolicyExample[0].policyOn.push(e.dropData)
        console.log(clearingPolicyExample[0])
        
        if (jsonPolicy.length > 0) {
            var jsonPolicies = [...jsonPolicy]
            for (let ele of jsonPolicies) {
                
               
            }
        }
        
        

        //arr = { ...arr, policyOn: { policyOn: e.dropData }};

        //let arr = jsonPolicy
        //arr.put("policyOn", e.dropData) 
        

        //pos = arr.map(val => val.policyOn).indexOf('policyOn')
        

        //console.log()
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
