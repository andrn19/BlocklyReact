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

export function closeConnection() {
    client.end();
}

export function mqttPublish(topic, msg) {
    client.publish(topic, msg)
}