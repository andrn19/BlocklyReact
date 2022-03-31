import React, { useRef, useState } from "react";

import BlocklyJS from 'blockly/javascript';

//components
import BlocklyComponent, { Block, Value, Field, Shadow, Category } from '../Blockly';
import BackButton from "../Components/BackButton";
import PolicyList from "../Components/PolicyList";

const PolicyProgrammingPage = () => {

    const simpleWorkspace = useRef(null);

    const generateCode = () => {
        var code = BlocklyJS.workspaceToCode(
          simpleWorkspace.current
        );
        console.log(code);
      }

    return (
        <div>
            <BackButton />
            <PolicyList generateCode={generateCode}/>
            <BlocklyComponent ref={simpleWorkspace} readOnly={false} trashcan={true} media={'media/'} move={{ scrollbars: true, drag: true, wheel: true }}>
                <Category name="Logic" colour="210">
                    <Block type="logic_compare" />
                </Category>
            </BlocklyComponent>
        </div>
    );
}

export default PolicyProgrammingPage;