import mqtt from 'mqtt';

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


export function mqttConnect() {
    const client = mqtt.connect(url, options);
    return client
}

export function subscribe(client, topic) {
    client.subscribe(topic);
}

export function unsubscribe(client, topic) {
    client.unsubscribe(topic);
}

//skal nok laves i hvert component der skal bruge det
export function onMessage(client) {
    client.on("message", (topic, message) => {     
        console.log(message.toString());
    });
}

export function closeConnection(client) {
    client.end();
}

