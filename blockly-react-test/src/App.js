import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import PolicyProgrammingPage from './Pages/PolicyProgrammingPage';
import FrontPage from './Pages/FrontPage';
import TableConfigPage from './Pages/TableConfigPage';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FrontPage />} />
        <Route path="/config" element={<TableConfigPage />} />
        <Route path="/programming" element={<PolicyProgrammingPage />} />
      </Routes>
    </Router>
  );
}
export default App;
