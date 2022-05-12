import React from "react";
import { useNavigate } from "react-router-dom";


import "../Components/ComponentStyles.css";
import "../CustomBlocks/customBlocks";

//components
import BlocklyComponent, { Block, Category } from '../Blockly';

const PolicyProgrammingPage = () => {

    let navigate = useNavigate();

    const toConfig = () => {
        navigate("/config");
    }

    return (
        <div>
            <button onClick={toConfig} id="BackButton">
                &laquo; Back
            </button>
            <BlocklyComponent readOnly={false} trashcan={true} media={'media/'} move={{ scrollbars: true, drag: true, wheel: true }}>
                <Category name="Table Policies" colour="120">
                    <Block type="SpecificClearingPolicy" />
                    <Block type="ClearingPolicy" />
                    <Block type="CleaningPolicy" />
                </Category>
                <Category name="Object Policies" colour="120">
                    <Block type="objectpolicy" />
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
                {/* <Category name="Clearing Actions" colour="330">
                    <Block type="go to" />
                    <Block type="clear" />
                    <Block type="clear and clean" />
                    <Block type="scan" />
                    <Block type="start" />
                    <Block type="stop" />
                    <Block type="no-op" />
                    <Block type="charge" />
                </Category> */}
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