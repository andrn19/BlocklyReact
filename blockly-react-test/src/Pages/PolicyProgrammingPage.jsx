import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Blockly from 'blockly/core';

import "../Components/ComponentStyles.css";
import "../CustomBlocks/customBlocks"
import JSONGenerator from "../generator/generator"

//components
import BlocklyComponent, { Block, Value, Field, Shadow, Category } from '../Blockly';
import PolicyList from "../Components/PolicyList";

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
        console.log(code);
      }

    return (
        <div>
            <button onClick={toConfig} id="BackButton">
                &laquo; Back
            </button>
            <PolicyList generateCode={generateCode}/>
            <BlocklyComponent ref={simpleWorkspace} readOnly={false} trashcan={true} media={'media/'} move={{ scrollbars: true, drag: true, wheel: true }}>
                <Category name="Policies" colour="120">
                    <Block type="template" />
                    <Block type="schedulestart" />
                    <Block type="actions" />
                    <Block type="goto" />
                </Category>
                <Category name="Table Objects" colour="65">
                    <Block type="plate" />
                    <Block type="napkin" />
                    <Block type="utensil" />
                    <Block type="glass" />
                    <Block type="bottle" />
                    <Block type="can" />
                    <Block type="cup" />
                </Category>
                <Category name="Conditions" colour="260">
                    <Block type="time start" />
                    <Block type="people count" />
                    <Block type="object count" />
                </Category>
                <Category name="Actions" colour="330">
                    <Block type="go to" />
                    <Block type="clean" />
                    <Block type="clear" />
                    <Block type="clear and clean" />
                    <Block type="scan" />
                    <Block type="start" />
                    <Block type="stop" />
                    <Block type="no-op" />
                    <Block type="charge" />
                </Category>
                <Category name="Handling" colour="20">
                    <Block type="slow" />
                    <Block type="careful" />
                </Category>

            </BlocklyComponent>
        </div>
    );
}

export default PolicyProgrammingPage;