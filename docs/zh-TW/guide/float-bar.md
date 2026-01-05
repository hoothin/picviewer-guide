---
title: 浮動工具欄
---

# 浮動工具欄

浮動工具欄是腳本的核心入口，用於預覽、打開原圖、放大鏡、畫廊與下載。

## 觸發條件

- 鼠標懸停在圖片元素上
- 或規則系統成功匹配到非圖片元素並返回可用圖片地址

## 常用設置

| 設置項 | 說明 | 默認值 |
| --- | --- | --- |
| `floatBar.butonOrder` | 按鈕順序 | `actual,current,gallery,magnifier,download` |
| `floatBar.showDelay` | 顯示延遲（毫秒） | `100` |
| `floatBar.hideDelay` | 隱藏延遲（毫秒） | `566` |
| `floatBar.position` | 位置 | `top left` |
| `floatBar.forceShow.enabled` | 強制顯示 | `true` |
| `floatBar.forceShow.size` | 強制顯示尺寸閾值 | `w:100 h:100` |
| `floatBar.minSizeLimit` | 最小尺寸閾值 | `w:50 h:50` |

## 行為說明

- **強制顯示**：即使圖片未縮放，只要尺寸達到閾值仍顯示工具欄。
- **最小尺寸**：尺寸過小的圖片不顯示工具欄，減少誤觸。
- **監聽背景圖**：可對 CSS 背景圖生效（可在設置中切換）。

## 全局快捷鍵

若開啟全局快捷鍵，可通過 `Ctrl/Alt/Shift/Command` 組合進入預覽模式，適用於無明顯圖片元素的站點。