---
title: 下载与格式转换
---

# 下载与格式转换

下载能力集中在画廊和浮动工具栏中，支持多种导出方式。

## 下载方式

- **直接下载**：单图或批量下载到本地
- **ZIP 打包**：一键打包，适合大批量收集
- **aria2 远程下载**：将任务发送到 aria2 RPC

## 格式转换

使用 `gallery.formatConversion` 可将格式转换写成规则，例如：

```
webp>png
```

支持多行配置，按顺序尝试匹配。

## aria2 配置

| 设置项 | 说明 | 默认值 |
| --- | --- | --- |
| `gallery.aria2Host` | RPC 地址 | `http://localhost:6800` |
| `gallery.aria2Token` | RPC Token | `\"\"` |

## 下载节奏控制

`gallery.downloadGap` 用于控制请求间隔，避免触发站点限流。

## 推荐用法

- 批量下载时优先使用 ZIP 或 aria2。
- 大图站点建议配合格式转换，以免下载到 webp 导致后续处理不便。
