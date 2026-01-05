---
title: 放大鏡
---

# 放大鏡

放大鏡提供局部放大查看，適合細節檢查與像素級觀察。

## 核心功能

- 跟隨鼠標移動顯示放大區域
- 支持滾輪縮放
- 可設置縮放範圍與步進

## 常用設置

| 設置項 | 說明 | 默認值 |
| --- | --- | --- |
| `magnifier.radius` | 放大鏡半徑 | `77` |
| `magnifier.wheelZoom.enabled` | 啟用滾輪縮放 | `true` |
| `magnifier.wheelZoom.pauseFirst` | 先暫停再縮放 | `true` |
| `magnifier.wheelZoom.scaleImage` | 縮放圖片而非移動鏡頭 | `true` |
| `magnifier.wheelZoom.range` | 縮放倍率列表 | `0.1 ~ 9.0` |

## 使用建議

- 如果放大鏡過於敏感，可關閉滾輪縮放或調整倍率列表。
- 在移動跟隨不便時，可暫時開啟「暫停後縮放」。