# CAKE Server

Node.js + Express + Socket.IO server that bridges the EMQX MQTT broker to web clients.

## Architecture

```
ESP12F MCU  ──MQTT──►  EMQX Broker  ◄──MQTT──  Node.js Server  ──Socket.IO──►  Web Client
                       (port 1883)              (port 3000)
```

- The server connects to the EMQX broker as an MQTT client, subscribing to device topics.
- Incoming MQTT messages are forwarded to connected web clients via Socket.IO in real time.
- A simple HTML test UI (`server/index.html`) is served at `/` for debugging.

## Quick start (Docker)

```bash
cp .env.example .env          # edit as needed
docker compose up --build
```

This starts two containers:
- **EMQX broker** on ports `1883` (MQTT), `8083` (WebSocket), `18083` (dashboard)
- **Node.js server** on port `3000`

## Quick start (local, no Docker)

```bash
cd server
npm install
MQTT_HOST=localhost npm start
```

Requires a running EMQX broker at the configured `MQTT_HOST`.

## Environment variables

| Variable | Default | Description |
|---|---|---|
| `PORT` | `3000` | HTTP/Socket.IO listen port |
| `MQTT_HOST` | `foo_emqx` | MQTT broker hostname (Docker service name or IP) |
| `MQTT_PORT` | `1883` | MQTT broker port |
| `MQTT_CLIENT_ID` | `nodejsServer` | MQTT client identifier |
| `MQTT_USERNAME` | *(empty)* | MQTT auth username |
| `MQTT_PASSWORD` | *(empty)* | MQTT auth password |

## License

[MIT](../../LICENSE-SOFTWARE)
