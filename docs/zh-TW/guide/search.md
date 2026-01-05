---
title: 以圖搜圖
---

# 以圖搜圖

腳本內置多搜尋引擎，以圖搜圖無需複製鏈接即可快速切換。

## 默認引擎

默認搜索列表（可自定義順序與增刪）：

- Google
- Yandex
- SauceNAO
- IQDB / 3D IQDB
- Baidu
- Bing
- TinEye
- Sogou
- 360
- Ascii2D
- Trace Moe
- KarmaDecay
- QRCode / QRdecode

## 常用設置

| 設置項 | 說明 | 默認值 |
| --- | --- | --- |
| `firstEngine` | 默認引擎 | `Tineye` |
| `gallery.searchData` | 搜尋引擎列表 | 預置模板 |

## 自定義搜尋引擎

在配置中編輯 `gallery.searchData`，格式為：

```
引擎名稱 | 搜尋鏈接#t#
```

`#t#` 會被替換為圖片 URL。

## 使用建議

- 動漫/插畫類更推薦 SauceNAO 與 Ascii2D。
- 人物圖片可優先使用 Google 與 Yandex。