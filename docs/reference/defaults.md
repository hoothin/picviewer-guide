---
title: Defaults
---

# Defaults

The following are common fields and default values for script settings.

## floatBar

| Key | Default | Notes |
| --- | --- | --- |
| `butonOrder` | `actual,current,gallery,magnifier,download` | Button Order |
| `additionalFeature` | `open` | Additional Action |
| `invertAdditionalFeature` | `false` | Invert Action |
| `listenBg` | `true` | Listen to Background |
| `showDelay` | `100` | Show Delay (ms) |
| `hideDelay` | `566` | Hide Delay (ms) |
| `position` | `top left` | Position |
| `stayOut` | `false` | Stay Out |
| `stayOutOffsetX` | `0` | Offset X |
| `stayOutOffsetY` | `0` | Offset Y |
| `forceShow.enabled` | `true` | Force Show |
| `forceShow.size` | `w:100 h:100` | Size Threshold |
| `showWithRules` | `true` | Show on Rule Match |
| `minSizeLimit` | `w:50 h:50` | Min Size |
| `sizeLimitOr` | `false` | Size Logic OR |
| `keys.enable` | `false` | Enable Shortcuts |
| `keys.actual` | `a` | Actual |
| `keys.search` | `s` | Search |
| `keys.current` | `c` | Current |
| `keys.magnifier` | `m` | Magnifier |
| `keys.gallery` | `g` | Gallery |
| `keys.download` | `d` | Download |
| `globalkeys.ctrl` | `true` | Ctrl Preview |
| `globalkeys.type` | `hold` | Hold Mode |
| `globalkeys.closeAfterPreview` | `true` | Close After Preview |
| `globalkeys.previewFollowMouse` | `true` | Preview Follow Mouse |

## magnifier

| Key | Default | Notes |
| --- | --- | --- |
| `magnifier.radius` | `77` | Radius |
| `magnifier.wheelZoom.enabled` | `true` | Wheel Zoom |
| `magnifier.wheelZoom.pauseFirst` | `true` | Pause First |
| `magnifier.wheelZoom.scaleImage` | `true` | Scale Image |
| `magnifier.wheelZoom.range` | `0.1 ~ 9.0` | Scale List |

## gallery

| Key | Default | Notes |
| --- | --- | --- |
| `gallery.loadMore` | `false` | Auto Load More |
| `gallery.loadAll` | `true` | Load All |
| `gallery.viewmoreEndless` | `true` | ViewMore |
| `gallery.fitToScreen` | `true` | Fit to Screen |
| `gallery.fitToScreenSmall` | `false` | Fit Small to Screen |
| `gallery.scrollEndToChange` | `true` | Scroll Change |
| `gallery.exportType` | `grid` | Export Sort |
| `gallery.sidebarPosition` | `bottom` | Sidebar Pos |
| `gallery.sidebarSize` | `120` | Sidebar Size |
| `gallery.backgroundColor` | `rgba(20,20,20,0.75)` | Background Color |
| `gallery.formatConversion` | `webp>png` | Format Conversion |
| `gallery.aria2Host` | `http://localhost:6800` | aria2 RPC |
| `gallery.aria2Token` | `""` | aria2 Token |
| `gallery.transition` | `true` | Transition |
| `gallery.preload` | `true` | Preload |
| `gallery.max` | `3` | Preload Count |
| `gallery.scaleSmallSize` | `250` | Small Size Threshold |
| `gallery.showSmallSize` | `true` | Show Small Size |
| `gallery.disableArrow` | `false` | Disable Arrow |
| `gallery.autoZoom` | `false` | Auto Reset Zoom |
| `gallery.descriptionLength` | `32` | Description Length |
| `gallery.defaultSizeLimit` | `w:80 h:80` | Default Size |
| `gallery.downloadWithZip` | `true` | ZIP Download |
| `gallery.autoOpenViewmore` | `false` | Auto Open ViewMore |
| `gallery.downloadGap` | `100` | Download Gap |

## imgWindow

| Key | Default | Notes |
| --- | --- | --- |
| `imgWindow.suitLongImg` | `true` | Long Image Mode |
| `imgWindow.fitToScreen` | `true` | Fit to Screen |
| `imgWindow.fitToScreenSmall` | `false` | Fit Small to Screen |
| `imgWindow.syncSelectedTool` | `true` | Sync Tool |
| `imgWindow.defaultTool` | `hand` | Default Tool |
| `imgWindow.close.escKey` | `true` | Esc Close |
| `imgWindow.close.dblClickImgWindow` | `true` | Double Click Close |
| `imgWindow.close.clickOutside` | `""` | Click Outside Close |
| `imgWindow.overlayer.shown` | `false` | Overlay Shown |
| `imgWindow.overlayer.color` | `rgba(200,200,200,0.3)` | Overlay Color |
| `imgWindow.shiftRotateStep` | `15` | Rotate Step |
| `imgWindow.zoom.mouseWheelZoom` | `true` | Wheel Zoom |
| `imgWindow.zoom.range` | `0.1 ~ 9.0` | Scale List |
| `imgWindow.fixed` | `false` | Fixed Position |

## other

| Key | Default | Notes |
| --- | --- | --- |
| `waitImgLoad` | `false` | Wait Load |
| `framesPicOpenInTopWindow` | `true` | Open in Top |
| `customLang` | `auto` | Language |
| `customRules` | JSON Template | Custom Rules |
| `firstEngine` | `Tineye` | Default Engine |
| `debug` | `false` | Debug Output |