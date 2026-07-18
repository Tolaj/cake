# ESP12F MCU — relay driver board

The main CAKE board: an ESP12F (ESP8266) module driving up to 6 relay channels through
74HC595 (output) / 74HC165 (input) shift registers, powered directly from mains via an
isolated HLK-PM01 AC-DC converter.

## Core components (consistent across revisions)

| Function | Part |
|---|---|
| MCU | ESP12F (`AJT_ESP12F_Long` footprint) |
| Relay | HF7520-005-HSTP (6x) |
| Relay driver transistor | SS8050 (6x) |
| Flyback diode | M7 (6x) |
| Output shift register | SN74HC595 |
| Input shift register | SN74HC165 |
| AC-DC power supply | HLK-PM01L |
| 3.3V logic regulator | AMS1117-3.3 |
| Load connector | Phoenix 1729186 (8-pin, `CN1`) |
| Switch input header | KH-2.54PH180 6P/9P headers |

## Versions

| Version | Created | Last updated | Status |
|---|---|---|---|
| `master` | 2023-06-23 | 2023-06-26 | First tested prototype |
| `v1.0.3` | 2023-06-26 | 2024-02-08 | Superseded |
| `v1.0.4` | 2024-02-08 | 2024-02-09 | **Current** |

- **[`master/`](master/)** — earliest tested prototype. No relay-driving stage in the BOM yet
  (just the ESP12F, shift registers, PSU, and header breakout) — this was the board used to
  validate the core MCU + IO-expander circuit before the relay stage was added.
- **[`v1.0.3/`](v1.0.3/)** — second full prototype with the 6-relay driver stage in place.
  PCB includes an empty footprint reserved for a future dimming-control signal (not
  populated/used in this revision).
- **[`v1.0.4/`](v1.0.4/)** *(current)* — refined relay-board layout, described as 8-load
  capacity with the ability to extend to 8 more loads via a second board. This is the only
  revision with the full editable EasyEDA schematic source checked in (`v1.0.4/source/`);
  earlier revisions are preserved as schematic/PCB PDF exports + BOM only, since editable
  source wasn't exported for them at the time.

## Design files note

These are exports from EasyEDA (OSHWLab). To continue editing, import the schematic JSON
in `v1.0.4/source/` back into EasyEDA, or recreate the design in KiCad using the PCB/schematic
PDFs and BOM as reference for earlier revisions.
