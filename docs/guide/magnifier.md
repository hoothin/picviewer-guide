---
title: Magnifier
---

# Magnifier

The magnifier provides a localized zoomed view, suitable for checking details and pixel-level observation.

## Core Features

- Follows mouse movement to show zoomed area
- Supports mouse wheel zoom
- Configurable zoom range and step

## Common Settings

| Setting | Description | Default |
| --- | --- | --- |
| `magnifier.radius` | Magnifier Radius | `77` |
| `magnifier.wheelZoom.enabled` | Enable Wheel Zoom | `true` |
| `magnifier.wheelZoom.pauseFirst` | Pause Before Zoom | `true` |
| `magnifier.wheelZoom.scaleImage` | Scale Image Instead of Moving Lens | `true` |
| `magnifier.wheelZoom.range` | Zoom Scale List | `0.1 ~ 9.0` |

## Usage Tips

- If the magnifier is too sensitive, you can disable wheel zoom or adjust the scale list.
- When moving and following is inconvenient, you can temporarily enable "Pause Before Zoom".