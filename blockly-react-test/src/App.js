import './App.css';
import React, { useState } from 'react';

import BlocklyComponent, { Block, Value, Field, Shadow } from './Blockly';

import BlocklyJS from 'blockly/javascript';

//import './blocks/customblocks';
//import './generator/generator';

function App() {

  const [simpleWorkspace] = useState();

  // generateCode = () => {
  //   var code = BlocklyJS.workspaceToCode(
  //     this.simpleWorkspace.current.workspace
  //   );
  //   console.log(code);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <BlocklyComponent ref={simpleWorkspace} readOnly={false} trashcan={true} media={'media/'}
          move={{
            scrollbars: true,
            drag: true,
            wheel: true
          }}>
          <Block type="controls_ifelse" />
          <Block type="logic_compare" />
          <Block type="logic_operation" />
          <Block type="controls_repeat_ext">
            <Value name="TIMES">
              <Shadow type="math_number">
                <Field name="NUM">10</Field>
              </Shadow>
            </Value>
          </Block>
        </BlocklyComponent>
      </header>
    </div>
  );

}
export default App;
