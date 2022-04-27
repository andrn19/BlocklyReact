import mqtt from 'mqtt';
import jsonSimple from 'json-simple';

const url = "ws://localhost";
const options = {
    clientID: 'HMIcl',
    username: 'testuser',
    password: 'testpass',
    protocolId: 'MQTT',
    port: 1884,
    keepAlive: 600,
    reconnectTimeout: 2000,
};

var client;

export function getClient() {
    return client;
}

export function mqttConnect() {
    client = mqtt.connect(url, options);
}

export function subscribe(topic) {
    client.subscribe(topic);
}

export function unsubscribe(topic) {
    client.unsubscribe(topic);
}

//skal nok laves i hvert component der skal bruge det
// export function onMessage() {
//     client.on("message", (topic, message) => {
//         var msg = message.toString()
//         var jsonMSG = jsonSimple.decode(msg)
//         console.log(msg)
//         console.log(jsonMSG)
//     });
// }

export function closeConnection() {
    client.end();
}

