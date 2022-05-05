import React, { useRef, useEffect, useState } from "react";
import './BlocklyComponent.css';
import jsonSimple from "json-simple";

import Blockly from 'blockly/core';
import locale from 'blockly/msg/en';
import 'blockly/blocks';

import PolicyList from "../Components/PolicyList";
import JSONGenerator from "../generator/generator";

import { getClient } from '../MQTT/mqtt';
import { Block } from "blockly";

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
            const ts = []
            for (var Policy in sp) {
                ts.push(sp[Policy])
            }
            setSavedPolicies(ts)
        }
    }, [])

    useEffect(() => {
        if (policiesToSave.length > 0) {
            localStorage.setItem('savedPolicies', policiesToSave)
        }
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
        if (xml !== undefined) {
            Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, workspace)
        }
    }

    const deletePolicy = (xml) => {
            console.log(xml)
            if (policiesToSave.length > 0) {
                var policies = [...policiesToSave]
                for (let ele of policies) {
                    var eleName = Blockly.Xml.textToDom(ele).getElementsByTagName("field")[0].textContent
                    const nameOfSavedBlock = xml.getElementsByTagName("field")[0].textContent
                    if (eleName === nameOfSavedBlock) {
                        if (policies.length === 1) {
                            policies.splice(policies.indexOf(ele), 1)
                            setSavedPolicies(policies);
                            localStorage.removeItem("savedPolicies")
                            break
                        }
                        policies.splice(policies.indexOf(ele), 1)
                        setSavedPolicies(policies);
                        break
                    }

                }
            }
    }
    

    const savePolicy = () => {
        var code = JSONGenerator.workspaceToCode(
            workspace
        );
        //console.log(code)

        //saving the xml for the workspace so user can save created blocks
        if (code.length > 0) {
            var xml = Blockly.Xml.workspaceToDom(workspace);
            //check if the saved block is already saved, if so update it to new one, else just add it
            if (policiesToSave.length > 0) {
                var policies = [...policiesToSave]
                for (let ele of policies) {
                    console.log(ele)
                    var eleName = Blockly.Xml.textToDom(ele).getElementsByTagName("field")[0].textContent
                    const nameOfSavedBlock = xml.getElementsByTagName("field")[0].textContent

                    //check if the saved blocks name is already saved, if so update
                    if (eleName === nameOfSavedBlock) {
                        policies[policies.indexOf(ele)] = Blockly.Xml.domToText(xml)
                        setSavedPolicies(policies)
                        workspace.clear()
                        break
                    }
                    if (eleName !== nameOfSavedBlock && ele === policies[policies.length - 1]) {
                        policies.push(Blockly.Xml.domToText(xml))
                        setSavedPolicies(policies)
                        workspace.clear()
                        break
                    }
                }
            }
            else {
                var xmlText = Blockly.Xml.domToText(xml);
                setSavedPolicies(arr => [...arr, xmlText])
                workspace.clear()
            }

            //mqtt publishing the generated code
            const objToSend = '{\n"doc": {\n' + code + '\n}\n}'
            const client = getClient();
            client.publish('fcs/fcServiceTopic', objToSend);
        }
    }

    const { children } = props;
    return (
        <React.Fragment>
            <PolicyList savePolicy={savePolicy} editPolicy={editPolicy} deletePolicy={deletePolicy}/>
            <div ref={blocklyDiv} id="blocklyDiv" />
            <xml xmlns="https://developers.google.com/blockly/xml" is="blockly" style={{ display: 'none' }} ref={toolbox}>
                {children}
            </xml>
        </React.Fragment>
    );
}


export default BlocklyComponent;
