import './App.css';
import React from 'react';

//import BlocklyJS from 'blockly/javascript';
//import './blocks/customblocks';
//import './generator/generator';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

//pages
import PolicyProgrammingPage from './Pages/PolicyProgrammingPage';
import CanteenPage from './Pages/CanteenPage';
import TableConfigPage from './Pages/TableConfigPage';

const App = () => {

  // generateCode = () => {
  //   var code = BlocklyJS.workspaceToCode(
  //     this.simpleWorkspace.current.workspace
  //   );
  //   console.log(code);
  // }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CanteenPage />} />
        <Route path="/config" element={<TableConfigPage />} />
        <Route path="/programming" element={<PolicyProgrammingPage />} />
      </Routes>
    </Router>
  );
}
export default App;
