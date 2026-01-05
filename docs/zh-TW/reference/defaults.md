--- 
title: 默認值速查
---

# 默認值速查

以下為腳本默認設置的常用字段與默認值。

## floatBar

| Key | Default | Notes |
| --- | --- | --- |
| `butonOrder` | `actual,current,gallery,magnifier,download` | 按鈕順序 |
| `additionalFeature` | `open` | 額外動作 |
| `invertAdditionalFeature` | `false` | 反轉額外動作 |
| `listenBg` | `true` | 監聽背景圖 |
| `showDelay` | `100` | 顯示延遲（ms） |
| `hideDelay` | `566` | 隱藏延遲（ms） |
| `position` | `top left` | 位置 |
| `stayOut` | `false` | 工具欄外移 |
| `stayOutOffsetX` | `0` | X 偏移 |
| `stayOutOffsetY` | `0` | Y 偏移 |
| `forceShow.enabled` | `true` | 強制顯示 |
| `forceShow.size` | `w:100 h:100` | 尺寸閾值 |
| `showWithRules` | `true` | 規則匹配後顯示 |
| `minSizeLimit` | `w:50 h:50` | 最小尺寸 |
| `sizeLimitOr` | `false` | 尺寸邏輯 |
| `keys.enable` | `false` | 啟用快捷鍵 |
| `keys.actual` | `a` | 原圖 |
| `keys.search` | `s` | 搜圖 |
| `keys.current` | `c` | 當前圖 |
| `keys.magnifier` | `m` | 放大鏡 |
| `keys.gallery` | `g` | 畫廊 |
| `keys.download` | `d` | 下載 |
| `globalkeys.ctrl` | `true` | Ctrl 預覽 |
| `globalkeys.type` | `hold` | 按住模式 |
| `globalkeys.closeAfterPreview` | `true` | 預覽後關閉 |
| `globalkeys.previewFollowMouse` | `true` | 預覽跟隨 |

## magnifier

| Key | Default | Notes |
| --- | --- | --- |
| `magnifier.radius` | `77` | 半徑 |
| `magnifier.wheelZoom.enabled` | `true` | 滾輪縮放 |
| `magnifier.wheelZoom.pauseFirst` | `true` | 先暫停再縮放 |
| `magnifier.wheelZoom.scaleImage` | `true` | 縮放圖片 |
| `magnifier.wheelZoom.range` | `0.1 ~ 9.0` | 比例列表 |

## gallery

| Key | Default | Notes |
| --- | --- | --- |
| `gallery.loadMore` | `false` | 自動加載更多 |
| `gallery.loadAll` | `true` | 加載全部 |
| `gallery.viewmoreEndless` | `true` | ViewMore |
| `gallery.fitToScreen` | `true` | 適應屏幕 |
| `gallery.fitToScreenSmall` | `false` | 小圖適應屏幕 |
| `gallery.scrollEndToChange` | `true` | 滾動切換 |
| `gallery.exportType` | `grid` | 導出排序 |
| `gallery.sidebarPosition` | `bottom` | 縮略圖位置 |
| `gallery.sidebarSize` | `120` | 縮略圖尺寸 |
| `gallery.backgroundColor` | `rgba(20,20,20,0.75)` | 背景色 |
| `gallery.formatConversion` | `webp>png` | 格式轉換 |
| `gallery.aria2Host` | `http://localhost:6800` | aria2 RPC |
| `gallery.aria2Token` | `""` | aria2 Token |
| `gallery.transition` | `true` | 過渡動畫 |
| `gallery.preload` | `true` | 預讀 |
| `gallery.max` | `3` | 預讀數量 |
| `gallery.scaleSmallSize` | `250` | 小圖閾值 |
| `gallery.showSmallSize` | `true` | 默認顯示小圖 |
| `gallery.disableArrow` | `false` | 禁用箭頭 |
| `gallery.autoZoom` | `false` | 自動重置縮放 |
| `gallery.descriptionLength` | `32` | 描述長度 |
| `gallery.defaultSizeLimit` | `w:80 h:80` | 默認尺寸 |
| `gallery.downloadWithZip` | `true` | ZIP 下載 |
| `gallery.autoOpenViewmore` | `false` | 自動打開 ViewMore |
| `gallery.downloadGap` | `100` | 下載間隔 |

## imgWindow

| Key | Default | Notes |
| --- | --- | --- |
| `imgWindow.suitLongImg` | `true` | 長圖模式 |
| `imgWindow.fitToScreen` | `true` | 適應屏幕 |
| `imgWindow.fitToScreenSmall` | `false` | 小圖適應屏幕 |
| `imgWindow.syncSelectedTool` | `true` | 同步工具 |
| `imgWindow.defaultTool` | `hand` | 默認工具 |
| `imgWindow.close.escKey` | `true` | Esc 關閉 |
| `imgWindow.close.dblClickImgWindow` | `true` | 雙擊關閉 |
| `imgWindow.close.clickOutside` | `""` | 點擊外部關閉 |
| `imgWindow.overlayer.shown` | `false` | 遮罩顯示 |
| `imgWindow.overlayer.color` | `rgba(200,200,200,0.3)` | 遮罩顏色 |
| `imgWindow.shiftRotateStep` | `15` | 旋轉步進 |
| `imgWindow.zoom.mouseWheelZoom` | `true` | 滾輪縮放 |
| `imgWindow.zoom.range` | `0.1 ~ 9.0` | 比例列表 |
| `imgWindow.fixed` | `false` | 固定位置 |

## other

| Key | Default | Notes |
| --- | --- | --- |
| `waitImgLoad` | `false` | 等待加載 |
| `framesPicOpenInTopWindow` | `true` | 頂層打開 |
| `customLang` | `auto` | 語言 |
| `customRules` | JSON 模板 | 自定義規則 |
| `firstEngine` | `Tineye` | 默認搜尋引擎 |
| `debug` | `false` | 調試輸出 |