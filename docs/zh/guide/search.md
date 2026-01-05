---
title: 以图搜图
---

# 以图搜图

脚本内置多搜索引擎，以图搜图无需复制链接即可快速切换。

## 默认引擎

默认搜索列表（可自定义顺序与增删）：

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

## 常用设置

| 设置项 | 说明 | 默认值 |
| --- | --- | --- |
| `firstEngine` | 默认引擎 | `Tineye` |
| `gallery.searchData` | 搜索引擎列表 | 预置模板 |

## 自定义搜索引擎

在配置中编辑 `gallery.searchData`，格式为：

```
引擎名称 | 搜索链接#t#
```

`#t#` 会被替换为图片 URL。

## 使用建议

- 动漫/插画类更推荐 SauceNAO 与 Ascii2D。
- 人物图片可优先使用 Google 与 Yandex。
