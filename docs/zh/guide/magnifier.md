---
title: 放大镜
---

# 放大镜

放大镜提供局部放大查看，适合细节检查与像素级观察。

## 核心功能

- 跟随鼠标移动显示放大区域
- 支持滚轮缩放
- 可设置缩放范围与步进

## 常用设置

| 设置项 | 说明 | 默认值 |
| --- | --- | --- |
| `magnifier.radius` | 放大镜半径 | `77` |
| `magnifier.wheelZoom.enabled` | 启用滚轮缩放 | `true` |
| `magnifier.wheelZoom.pauseFirst` | 先暂停再缩放 | `true` |
| `magnifier.wheelZoom.scaleImage` | 缩放图片而非移动镜头 | `true` |
| `magnifier.wheelZoom.range` | 缩放倍率列表 | `0.1 ~ 9.0` |

## 使用建议

- 如果放大镜过于敏感，可关闭滚轮缩放或调整倍率列表。
- 在移动跟随不便时，可暂时开启“暂停后缩放”。
