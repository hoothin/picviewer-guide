---
title: Float Bar
---

# Float Bar

The float bar is the script's core entry point, used for previewing, opening original images, magnifier, gallery, and downloading.

## Trigger Conditions

- Mouse hovers over an image element.
- Or the rule system successfully matches a non-image element and returns a usable image URL.

## Common Settings

| Setting | Description | Default |
| --- | --- | --- |
| `floatBar.butonOrder` | Button Order | `actual,current,gallery,magnifier,download` |
| `floatBar.showDelay` | Show Delay (ms) | `100` |
| `floatBar.hideDelay` | Hide Delay (ms) | `566` |
| `floatBar.position` | Position | `top left` |
| `floatBar.forceShow.enabled` | Force Show | `true` |
| `floatBar.forceShow.size` | Force Show Size Threshold | `w:100 h:100` |
| `floatBar.minSizeLimit` | Min Size Threshold | `w:50 h:50` |

## Behavior Description

- **Force Show**: Even if the image is not scaled, the toolbar appears as long as the size meets the threshold.
- **Min Size**: Images that are too small will not show the toolbar to reduce accidental clicks.
- **Monitor Background Images**: Can work on CSS background images (toggle in settings).

## Global Shortcuts

If global shortcuts are enabled, you can enter preview mode via `Ctrl/Alt/Shift/Command` combinations, suitable for sites without obvious image elements.