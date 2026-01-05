---
title: 图片窗
---

# 图片窗

图片窗用于查看原图或大图，并提供更完整的缩放、旋转与拖拽操作。

## 核心功能

- 拖拽移动、滚轮缩放
- 旋转与翻转（可设置步进）
- 长图优化显示

## 常用设置

| 设置项 | 说明 | 默认值 |
| --- | --- | --- |
| `imgWindow.fitToScreen` | 适应屏幕 | `true` |
| `imgWindow.fitToScreenSmall` | 小图也适应屏幕 | `false` |
| `imgWindow.suitLongImg` | 长图模式 | `true` |
| `imgWindow.defaultTool` | 默认工具 | `hand` |
| `imgWindow.close.escKey` | Esc 关闭 | `true` |
| `imgWindow.close.dblClickImgWindow` | 双击关闭 | `true` |
| `imgWindow.close.clickOutside` | 点击外部关闭 | `\"\"` |
| `imgWindow.shiftRotateStep` | Shift 旋转步进 | `15` |
| `imgWindow.zoom.range` | 缩放倍率列表 | `0.1 ~ 9.0` |

## 使用建议

- 需要精准角度时按住 `Shift` 旋转。
- 若浏览器中存在遮罩层冲突，可关闭“点击外部关闭”。
