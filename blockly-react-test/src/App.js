import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import PolicyProgrammingPage from './Pages/PolicyProgrammingPage';
import CanteenPage from './Pages/CanteenPage';
import TableConfigPage from './Pages/TableConfigPage';

import {mqttConnect, subscribe, onMessage, unsubscribe} from './MQTT/mqtt';

const App = () => {

  useEffect(() => {
    const client = mqttConnect();
    subscribe(client, 'test');
    onMessage(client);
    //unsubscribe(client, 'sensors/+/temperature/+')
  })

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
