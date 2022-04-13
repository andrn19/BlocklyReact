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
                <Category name="Policy" colour="210">
                    <Block type="logic_compare" />
                    <Block type="policy" />
                    <Block type="schedulestart" />
                    <Block type="actions" />
                    <Block type="goto" />
                </Category>
            </BlocklyComponent>
        </div>
    );
}

export default PolicyProgrammingPage;