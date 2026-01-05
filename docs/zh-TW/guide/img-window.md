---
title: 圖片窗
---

# 圖片窗

圖片窗用於查看原圖或大圖，並提供更完整的縮放、旋轉與拖拽操作。

## 核心功能

- 拖拽移動、滾輪縮放
- 旋轉與翻轉（可設置步進）
- 長圖優化顯示

## 常用設置

| 設置項 | 說明 | 默認值 |
| --- | --- | --- |
| `imgWindow.fitToScreen` | 適應屏幕 | `true` |
| `imgWindow.fitToScreenSmall` | 小圖也適應屏幕 | `false` |
| `imgWindow.suitLongImg` | 長圖模式 | `true` |
| `imgWindow.defaultTool` | 默認工具 | `hand` |
| `imgWindow.close.escKey` | Esc 關閉 | `true` |
| `imgWindow.close.dblClickImgWindow` | 雙擊關閉 | `true` |
| `imgWindow.close.clickOutside` | 點擊外部關閉 | `""` |
| `imgWindow.shiftRotateStep` | Shift 旋轉步進 | `15` |
| `imgWindow.zoom.range` | 縮放倍率列表 | `0.1 ~ 9.0` |

## 使用建議

- 需要精準角度時按住 `Shift` 旋轉。
- 若瀏覽器中存在遮罩層衝突，可關閉「點擊外部關閉」。