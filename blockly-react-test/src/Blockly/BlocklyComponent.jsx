import React, { useRef, createContext, useContext, useState } from "react";
import './BlocklyComponent.css';

import Blockly from 'blockly/core';
import locale from 'blockly/msg/en';
import 'blockly/blocks';
import { useEffect } from 'react';

import PolicyList from "../Components/PolicyList";
import JSONGenerator from "../generator/generator";

import { getClient } from '../MQTT/mqtt';

Blockly.setLocale(locale);

const BlocklyComponent = (props) => {

    const [workspace, setWorkspace] = useState();
    const [policiesToSave, setSavedPolicies] = useState([])

    const blocklyDiv = useRef(null);
    const toolbox = useRef(null);

    useEffect(() => {
        if (localStorage.getItem("savedPolicies") !== null) {
            const localPolicies = localStorage.getItem("savedPolicies")
            const storedPolicies = localPolicies.split(/(?=<xml)/g);
            const sp = storedPolicies.map(string => string.replaceAll('>,', '>'));
            for (var Policy in sp) {
                setSavedPolicies(arr => [...arr, sp[Policy]])
            }
        }
        else {
            localStorage.setItem('savedPolicies', policiesToSave)
        }
    },[])

    useEffect(() => {
        localStorage.setItem('savedPolicies', policiesToSave)
    }, [policiesToSave])

    useEffect(() => {
        const { children, ...rest } = props;
        const primaryWorkspace = Blockly.inject(
            blocklyDiv.current,
            {
                toolbox: toolbox.current,
                ...rest
            },
        );
        setWorkspace(primaryWorkspace);
    }, []);

    const editPolicy = (xml) => {
        console.log(xml)
        if(xml !== undefined){
            Blockly.Xml.domToWorkspace(xml, workspace)
        }
    }

    const savePolicy = () => {
        var code = JSONGenerator.workspaceToCode(
            workspace
        );
        //saving the xml for the workspace so user can save created blocks
        if (code.length > 0) {
            var xml = Blockly.Xml.workspaceToDom(workspace);
            var xmlText = Blockly.Xml.domToText(xml);
            setSavedPolicies(arr => [...arr, xmlText])
            workspace.clear()
        }
        //mqtt publishing the generated code
        // if (code.length > 0) {
        //     const policyObj = jsonSimple.decode(code)
        //     const objToSend = {
        //         "doc": { policyObj },
        //     }
        //     const msgToSend = JSON.stringify(objToSend)
        //     const client = getClient();
        //     client.publish('fcs/fcServiceTopic', msgToSend);
        // }
    }

    const { children } = props;
    return (
        <React.Fragment>
            <PolicyList savePolicy={savePolicy} editPolicy={editPolicy} />
            <div ref={blocklyDiv} id="blocklyDiv" />
            <xml xmlns="https://developers.google.com/blockly/xml" is="blockly" style={{ display: 'none' }} ref={toolbox}>
                {children}
            </xml>
        </React.Fragment>
    );
}


export default BlocklyComponent;
