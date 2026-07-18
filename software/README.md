# Software

Backend server and web dashboard for the CAKE smart-switch system.

## Components

| Directory | What | Tech |
|---|---|---|
| [`server/`](server/) | EMQX MQTT broker + Node.js bridge server | Docker Compose, Express, Socket.IO, mqtt.js |
| [`client/`](client/) | Web dashboard for controlling CAKE modules | Next.js 13, Tailwind CSS, Ant Design, mqtt.js |

## How they fit together

```
┌────────────┐      MQTT       ┌──────────────┐      MQTT       ┌──────────────┐
│  ESP12F    │ ──────────────► │  EMQX Broker │ ◄────────────── │  Node.js     │
│  MCU Board │ ◄────────────── │  (Docker)    │ ──────────────► │  Server      │
└────────────┘   port 1883     └──────────────┘   port 1883     └──────┬───────┘
                                     │                                 │
                                     │ WebSocket (port 8083)     Socket.IO
                                     ▼                                 │
                              ┌──────────────┐                         │
                              │  Next.js Web │ ◄───────────────────────┘
                              │  Dashboard   │
                              └──────────────┘
```

1. The **ESP12F MCU board** publishes sensor data and listens for relay commands over MQTT.
2. The **EMQX broker** (Dockerized) routes MQTT messages between all clients.
3. The **Node.js server** subscribes to device topics and forwards messages to the web
   dashboard via Socket.IO.
4. The **Next.js dashboard** also connects directly to EMQX over WebSocket for real-time
   control (toggle switches publish `on`/`off` to `esp8266/led`).

## Quick start

```bash
# 1. Start the broker + server
cd server
cp .env.example .env
docker compose up --build

# 2. Start the dashboard (in another terminal)
cd ../client
cp .env.example .env.local
npm install
npm run dev
```

Then open `http://localhost:8081/admin/dashboard` to control the switch.

## Not yet implemented

Per the original MVP roadmap ([`../docs/CAKE_MVP_Roadmap.pdf`](../docs/CAKE_MVP_Roadmap.pdf)):

- **Mobile app** — React Native app mirroring the dashboard's features (scheduling,
  remote control, energy monitoring).
- **Scheduling and automation** — routines, timers, sleep modes.
- **Energy monitoring** — power consumption tracking and reporting.
- **Access control** — user auth with role-based permissions.

Licensed under [MIT](../LICENSE-SOFTWARE).
