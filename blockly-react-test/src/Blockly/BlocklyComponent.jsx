import React, { useRef, useEffect, useState } from "react";
import './BlocklyComponent.css';

import Blockly from 'blockly/core';
import locale from 'blockly/msg/en';
import 'blockly/blocks';

import PolicyList from "../ComponentsProgrammingPage/PolicyList";
import JSONGenerator from "../generator/generator";

Blockly.setLocale(locale);

const BlocklyComponent = (props) => {

    const [workspace, setWorkspace] = useState();
    const [policiesToSave, setSavedPolicies] = useState([])
    const [policiesJSON, setPolicyJSON] = useState([])

    const blocklyDiv = useRef(null);
    const toolbox = useRef(null);

    //when page loads, look if there are policies saved, is så set the policyToSave and policiesJSON state to what is saved
    useEffect(() => {
        if (localStorage.getItem("savedPolicies") !== null) {
            const localPolicies = localStorage.getItem("savedPolicies")
            const localJSON = localStorage.getItem("savedPoliciesJSON")
            const storedPolicies = localPolicies.split(/(?=<xml)/g);
            const storedJSON = localJSON.split(/(?=,{ "@type")/g);
            const sp = storedPolicies.map(string => string.replaceAll('>,', '>'));
            const sj = storedJSON.map(string => string.replaceAll(',{ "@type"', '{ "@type"'));
            setSavedPolicies(sp)
            setPolicyJSON(sj)
        }
    }, [])

    //saveing to localstorage policy xml and json
    useEffect(() => {
        if (policiesToSave.length > 0) {
            localStorage.setItem('savedPolicies', policiesToSave)
            localStorage.setItem('savedPoliciesJSON', policiesJSON)
        }
    }, [policiesToSave])

    //creation of blockly workspace
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
        if (xml !== undefined) {
            Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, workspace)
        }
    }

    const deletePolicy = (xml) => {
        console.log(xml)
        if (policiesToSave.length > 0) {
            var policies = [...policiesToSave]
            var policiesJSONcopy = [...policiesJSON]
            for (let ele of policies) {
                var eleName = Blockly.Xml.textToDom(ele).getElementsByTagName("field")[0].textContent
                const nameOfSavedBlock = xml.getElementsByTagName("field")[0].textContent
                if (eleName === nameOfSavedBlock) {
                    if (policies.length === 1) {
                        policiesJSONcopy.splice(policies.indexOf(ele), 1)
                        policies.splice(policies.indexOf(ele), 1)
                        setPolicyJSON(policiesJSONcopy)
                        setSavedPolicies(policies)
                        localStorage.removeItem("savedPoliciesJSON")
                        localStorage.removeItem("savedPolicies")
                        break
                    }
                    policiesJSONcopy.splice(policies.indexOf(ele), 1)
                    policies.splice(policies.indexOf(ele), 1)
                    setPolicyJSON(policiesJSONcopy)
                    setSavedPolicies(policies)
                    break
                }

            }
        }
    }


    const savePolicy = () => {
        var code = JSONGenerator.workspaceToCode(
            workspace
        );
        //saving the xml for the workspace so user can save created blocks
        if (code.length > 0) {
            var xml = Blockly.Xml.workspaceToDom(workspace);
            //check if the saved block is already saved, if so update it to new one, else just add it
            if (policiesToSave.length > 0) {
                var policies = [...policiesToSave]
                var policiesJSONcopy = [...policiesJSON]
                for (let ele of policies) {
                    var eleName = Blockly.Xml.textToDom(ele).getElementsByTagName("field")[0].textContent
                    const nameOfSavedBlock = xml.getElementsByTagName("field")[0].textContent
                    //check if the saved blocks name is already saved, if so update
                    if (eleName === nameOfSavedBlock) {
                        policiesJSONcopy[policies.indexOf(ele)] = code
                        policies[policies.indexOf(ele)] = Blockly.Xml.domToText(xml)
                        setSavedPolicies(policies)
                        setPolicyJSON(policiesJSONcopy)
                        workspace.clear()
                        break
                    }
                    //if at the end of the saved policies and there is no match, then just push to end of array
                    if (eleName !== nameOfSavedBlock && ele === policies[policies.length - 1]) {
                        policies.push(Blockly.Xml.domToText(xml))
                        policiesJSONcopy.push(code)
                        setSavedPolicies(policies)
                        setPolicyJSON(policiesJSONcopy)
                        workspace.clear()
                        break
                    }
                }
            }
            else {
                var xmlText = Blockly.Xml.domToText(xml);
                setSavedPolicies(arr => [...arr, xmlText])
                setPolicyJSON(arr => [...arr, code])
                workspace.clear()
            }
        }
    }

    const { children } = props;
    return (
        <React.Fragment>
            <PolicyList savePolicy={savePolicy} editPolicy={editPolicy} deletePolicy={deletePolicy} />
            <div ref={blocklyDiv} id="blocklyDiv" />
            <xml xmlns="https://developers.google.com/blockly/xml" is="blockly" style={{ display: 'none' }} ref={toolbox}>
                {children}
            </xml>
        </React.Fragment>
    );
}


export default BlocklyComponent;
