import React, {useState, useRef} from 'react';
import './BlocklyComponent.css';

import Blockly from 'blockly/core';
import locale from 'blockly/msg/en';
import 'blockly/blocks';
import { useEffect } from 'react';

Blockly.setLocale(locale);

const BlocklyComponent = (props) => {

    const blocklyDiv = useRef(null);
    const toolbox = useRef(null);

    useEffect(() => {
        const { children, ...rest} = props;
        console.log({...rest});
        const primaryWorkspace = Blockly.inject(
            blocklyDiv.current,
            {
                toolbox: toolbox.current,
                ...rest
            },
        );
    });

    const {children} = props;
    console.log({children});
    return (
    <React.Fragment>
        <div ref={blocklyDiv} id="blocklyDiv" />
        <xml xmlns = "https://developers.google.com/blockly/xml" is="blockly" style={{ display: 'none' }} ref={toolbox}>
            {children}
        </xml>
    </React.Fragment>
    );
}


export default BlocklyComponent;
