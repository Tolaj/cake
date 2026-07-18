
const mqtt = require('mqtt')

const host = process.env.MQTT_HOST || "localhost"
const port = process.env.MQTT_PORT || "1883"
const clientId = process.env.MQTT_CLIENT_ID || 'nextJsClient'

const connectUrl = `mqtt://${host}:${port}`
const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: process.env.MQTT_USERNAME || '',
  password: process.env.MQTT_PASSWORD || '',
  reconnectPeriod: 1000,
})
console.log('started')
const topic = "/mqtt/led"
client.on('connect', () => {
  console.log('Connected')
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`)
  })
//   client.publish(topic, 'nodejs mqtt test', { qos: 0, retain: false }, (error) => {
//     if (error) {
//       console.error(error)
//     }
//   })
})

module.exports = client;

