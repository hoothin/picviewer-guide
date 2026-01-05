---
title: 下載與格式轉換
---

# 下載與格式轉換

下載能力集中在畫廊和浮動工具欄中，支持多種導出方式。

## 下載方式

- **直接下載**：單圖或批量下載到本地
- **ZIP 打包**：一鍵打包，適合大批量收集
- **aria2 遠程下載**：將任務發送到 aria2 RPC

## 格式轉換

使用 `gallery.formatConversion` 可將格式轉換寫成規則，例如：

```
webp>png
```

支持多行配置，按順序嘗試匹配。

## aria2 配置

| 設置項 | 說明 | 默認值 |
| --- | --- | --- |
| `gallery.aria2Host` | RPC 地址 | `http://localhost:6800` |
| `gallery.aria2Token` | RPC Token | `""` |

## 下載節奏控制

`gallery.downloadGap` 用於控制請求間隔，避免觸發站點限流。

## 推薦用法

- 批量下載時優先使用 ZIP 或 aria2。
- 大圖站點建議配合格式轉換，以免下載到 webp 導致後續處理不便。