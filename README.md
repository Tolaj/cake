# CAKE — Centralized API Knot Enhancer

CAKE is an open-hardware automation module built around the **ESP12F** (ESP8266) and **ESP32**, designed to retrofit any switchboard — home, office, or factory — into a remotely controllable, schedulable, MQTT-connected smart switch. It's the hardware side of **Minisense**, a project incubated at [KIT's Innovation & Research Foundation](https://kitirf.org/) under the DST NIDHI i-TBI program.

**Project started:** June 2023 | **Latest hardware revision:** February 2024

> Status: hardware design is in active iteration (see version history below). Firmware and the companion server/dashboard/app are planned but not yet implemented in this repo — see [`firmware/`](firmware/) and [`software/`](software/).

## What it does

- Drives up to **6 relay channels** per board (8-load capacity in the current revision, extendable via daisy-chained shift registers) to switch mains-connected loads (lights, fans, factory equipment, etc.).
- Uses **74HC595 / 74HC165** shift registers to multiplex relay outputs and switch inputs over a handful of ESP12F GPIOs.
- Powers itself directly off mains via an **HLK-PM01** isolated AC-DC module, with an **AMS1117-3.3** regulator for the logic rail.
- Talks to the outside world over Wi-Fi using **MQTT**, intended to connect to a self-hosted **EMQX** broker.
- Planned software layer (per the original MVP roadmap, not yet in this repo): a Node.js backend, a React web dashboard, and a React Native mobile app for scheduling, remote control, and energy-usage monitoring.

See [`docs/KIT-IRF_Pitch_Deck_Minisense.pdf`](docs/KIT-IRF_Pitch_Deck_Minisense.pdf) for the original problem statement/market pitch, and [`docs/CAKE_MVP_Roadmap.pdf`](docs/CAKE_MVP_Roadmap.pdf) for the 3-month MVP plan this project was built against.

## Repository layout

```
cake/
├── docs/                    Pitch deck and MVP roadmap (project background)
├── hardware/
│   ├── esp12f-mcu/          Main relay-driver board, ESP12F-based
│   │   ├── master/          Earliest tested prototype
│   │   ├── v1.0.3/          Second prototype (added footprint for a dimming signal)
│   │   └── v1.0.4/          Current revision (8-load capacity, extendable)
│   └── esp12f16bit/         Earlier ESP12F + shift-register breakout (DIP/through-hole)
├── firmware/                 (planned) ESP12F/ESP32 firmware
└── software/                 (planned) MQTT broker config, backend server, dashboard, mobile app
```

Each hardware version folder contains its own `README.md` with what's inside and what changed. Every version ships:

- `schematic/` — schematic PDF/PNG export
- `pcb/` — PCB layout PDF export(s)
- `bom/` — bill of materials (CSV, LCSC/JLCPCB part numbers)
- `images/` — 3D renders, where available
- `source/` — editable EasyEDA project source, where it was exported (currently only `v1.0.4`)

All hardware files originate from EasyEDA/OSHWLab exports. BOM CSVs were re-encoded from UTF-16 to UTF-8 for readability; no data was altered.

## Version history

| Version | Board | Started | Last updated | Status | Notes |
|---|---|---|---|---|---|
| `esp12f16bit` | ESP12F IO breakout | Early 2023 | — | Early prototype | DIP shift registers, no relay stage — precursor to the relay board below |
| `master` | ESP12F MCU | 2023-06-23 | 2023-06-26 | Tested prototype | First relay-board layout to be bench-tested |
| `v1.0.3` | ESP12F MCU | 2023-06-26 | 2024-02-08 | Superseded | Added PCB footprint for a future dimming signal |
| `v1.0.4` | ESP12F MCU | 2024-02-08 | 2024-02-09 | **Current** | 8-load capacity, extendable with a second board for 8 more loads |

## License

- **Hardware** (schematics, PCB layouts, BOMs under `hardware/`) is licensed under [CERN-OHL-S v2](LICENSE-HARDWARE) — you're free to use, modify, and manufacture it, but derivatives distributed to others must be released under the same license.
- **Firmware and software** (once added under `firmware/` and `software/`) is licensed under the [MIT License](LICENSE-SOFTWARE).

## Contributing

Issues and PRs are welcome — whether that's a schematic review, a firmware implementation, or the dashboard/app described in the roadmap. Please open an issue before starting large changes so we can coordinate.

## Team

Built by Swapnil Jadhav, Sandip Mate, and Swapnil Rathod as part of the Minisense project.
