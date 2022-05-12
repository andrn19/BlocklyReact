import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { mqttConnect, subscribe } from './MQTT/mqtt';

ReactDOM.render(<App />, document.getElementById('root'));
mqttConnect();
//fcs/fcClientTopic is the topic the client should subscribe to, and recive data from send by db
subscribe('fcs/fcClientTopic')

//fcs/fcServiceTopic is the topic that the service should only publish on
subscribe('fcs/fcServiceTopic')

