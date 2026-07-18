# CAKE Web Dashboard

Next.js (v13) web portal for controlling CAKE smart-switch modules over MQTT. Built with
Tailwind CSS and Ant Design.

## What it does

- Connects to the EMQX broker over WebSocket (port 8083) from the browser.
- Provides a toggle switch UI (at `/admin/dashboard`) that publishes `on`/`off` messages to
  the `esp8266/led` topic, controlling the relay on the ESP12F MCU board in real time.
- Includes MQTT connection, subscribe, publish, and message-receive components
  (`controllers/HookMqtt/`).
- Ships with an admin layout (sidebar, navbar, stats header) scaffolded from the
  Notus NextJS template — auth pages, settings, tables, and records views are stubbed out
  for future use.

## Quick start

```bash
cp .env.example .env.local    # edit MQTT_HOST to point at your broker
npm install                   # or: yarn
npm run dev                   # starts on http://localhost:8081
```

## Environment variables

| Variable | Default | Description |
|---|---|---|
| `MQTT_HOST` | `localhost` | MQTT broker hostname (used by `server.js` Node-side client) |
| `MQTT_PORT` | `1883` | MQTT broker port (Node-side) |
| `MQTT_CLIENT_ID` | `nextJsClient` | MQTT client ID (Node-side) |
| `MQTT_USERNAME` | *(empty)* | MQTT auth username |
| `MQTT_PASSWORD` | *(empty)* | MQTT auth password |
| `NEXT_PUBLIC_MQTT_HOST` | `localhost` | MQTT broker hostname (browser-side WebSocket connection) |

## Project structure

```
software/client/
├── components/
│   ├── EspTest/esp.js         Toggle switch → publishes MQTT on/off
│   ├── Cards/                 Dashboard stat/chart cards
│   ├── Sidebar/               Admin sidebar navigation
│   └── ...                    Navbars, footers, dropdowns
├── controllers/
│   └── HookMqtt/              MQTT React hooks (connect, subscribe, publish, receive)
├── layouts/                   Admin and Auth page layouts
├── pages/
│   ├── admin/dashboard.js     Main control page with the ESP toggle
│   ├── auth/                  Login/register stubs
│   └── ...
├── server.js                  Node-side MQTT client (subscribes to device topics)
└── public/                    Static assets and images
```

## License

[MIT](../../LICENSE-SOFTWARE)
