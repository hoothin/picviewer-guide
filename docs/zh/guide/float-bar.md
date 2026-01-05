---
title: 浮动工具栏
---

# 浮动工具栏

浮动工具栏是脚本的核心入口，用于预览、打开原图、放大镜、画廊与下载。

## 触发条件

- 鼠标悬停在图片元素上
- 或规则系统成功匹配到非图片元素并返回可用图片地址

## 常用设置

| 设置项 | 说明 | 默认值 |
| --- | --- | --- |
| `floatBar.butonOrder` | 按钮顺序 | `actual,current,gallery,magnifier,download` |
| `floatBar.showDelay` | 显示延迟（毫秒） | `100` |
| `floatBar.hideDelay` | 隐藏延迟（毫秒） | `566` |
| `floatBar.position` | 位置 | `top left` |
| `floatBar.forceShow.enabled` | 强制显示 | `true` |
| `floatBar.forceShow.size` | 强制显示尺寸阈值 | `w:100 h:100` |
| `floatBar.minSizeLimit` | 最小尺寸阈值 | `w:50 h:50` |

## 行为说明

- **强制显示**：即使图片未缩放，只要尺寸达到阈值仍显示工具栏。
- **最小尺寸**：尺寸过小的图片不显示工具栏，减少误触。
- **监听背景图**：可对 CSS 背景图生效（可在设置中切换）。

## 全局快捷键

若开启全局快捷键，可通过 `Ctrl/Alt/Shift/Command` 组合进入预览模式，适用于无明显图片元素的站点。
