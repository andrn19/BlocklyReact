import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import jsonSimple from "json-simple";
import Blockly from 'blockly/core';


import "../Components/ComponentStyles.css";
import "../CustomBlocks/customBlocks";
import JSONGenerator from "../generator/generator";

//components
import BlocklyComponent, { Block, Value, Field, Shadow, Category } from '../Blockly';
import PolicyList from "../Components/PolicyList";

import { getClient } from '../MQTT/mqtt';

const PolicyProgrammingPage = () => {

    const simpleWorkspace = useRef(null);
    let navigate = useNavigate();

    const toConfig = () => {
        navigate("/config");
    }

    const generateCode = () => {
        var code = JSONGenerator.workspaceToCode(
            simpleWorkspace.current
        );
        const policyObj = jsonSimple.decode(code)
        const objToSend = {
            "doc": {policyObj},
            "frame": {},
            "schema": {},
        }
        const msgToSend = JSON.stringify(objToSend)
        const client = getClient();
        client.publish('fcs/fcServiceTopic', msgToSend);
    }

    return (
        <div>
            <button onClick={toConfig} id="BackButton">
                &laquo; Back
            </button>
            <PolicyList generateCode={generateCode} />
            <BlocklyComponent readOnly={false} trashcan={true} media={'media/'} move={{ scrollbars: true, drag: true, wheel: true }}>
                <Category name="Policies" colour="120">
                    <Block type="ClearingPolicy" />
                    <Block type="CleaningPolicy" />
                </Category>
                <Category name="Cleaning Actions" colour="330">
                    <Block type="go to" />
                    <Block type="clean" />
                    <Block type="clear and clean" />
                    <Block type="scan" />
                    <Block type="start" />
                    <Block type="stop" />
                    <Block type="no-op" />
                    <Block type="charge" />
                </Category>
                <Category name="Clearing Actions" colour="330">
                    <Block type="go to" />
                    <Block type="clear" />
                    <Block type="clear object" />
                    <Block type="clear and clean" />
                    <Block type="scan" />
                    <Block type="start" />
                    <Block type="stop" />
                    <Block type="no-op" />
                    <Block type="charge" />
                </Category>
                <Category name="Start Conditions" colour="260">
                    <Block type="time start" />
                    <Block type="people count" />
                    <Block type="object count" />
                </Category>
                <Category name="Stop Conditions" colour="260">
                    <Block type="policyOnCompletion" />
                </Category>
                <Category name="Handling" colour="20">
                    <Block type="slow" />
                    <Block type="careful" />
                    <Block type="normal" />
                </Category>
                <Category name="Table Objects" colour="65">
                    <Block type="allobjects" />
                    <Block type="plate" />
                    <Block type="napkin" />
                    <Block type="utensil" />
                    <Block type="glass" />
                    <Block type="bottle" />
                    <Block type="can" />
                    <Block type="cup" />
                </Category>
            </BlocklyComponent>
        </div>
    );
}

export default PolicyProgrammingPage;