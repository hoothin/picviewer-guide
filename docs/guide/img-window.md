---
title: Image Window
---

# Image Window

The Image Window is used to view original or large images, providing complete zoom, rotate, and drag operations.

## Core Features

- Drag to move, wheel to zoom
- Rotate and flip (configurable step)
- Long image display optimization

## Common Settings

| Setting | Description | Default |
| --- | --- | --- |
| `imgWindow.fitToScreen` | Fit to Screen | `true` |
| `imgWindow.fitToScreenSmall` | Fit Small Images to Screen | `false` |
| `imgWindow.suitLongImg` | Long Image Mode | `true` |
| `imgWindow.defaultTool` | Default Tool | `hand` |
| `imgWindow.close.escKey` | Close with Esc | `true` |
| `imgWindow.close.dblClickImgWindow` | Double Click to Close | `true` |
| `imgWindow.close.clickOutside` | Click Outside to Close | `""` |
| `imgWindow.shiftRotateStep` | Shift Rotate Step | `15` |
| `imgWindow.zoom.range` | Zoom Scale List | `0.1 ~ 9.0` |

## Usage Tips

- Need precise angles? Hold `Shift` while rotating.
- If there are overlay conflicts on the site, you can disable "Click Outside to Close".