---
title: clickToOpen：点击打开
---

# clickToOpen：点击打开

`clickToOpen` 用于让点击行为触发打开原图、当前图或放大镜。

## 示例

```js
clickToOpen: {
  enabled: true,
  preventDefault: true,
  type: 'actual',
  button: 0,
  alt: false,
  ctrl: false,
  shift: false,
  meta: false
}
```

## 字段说明

| 字段 | 说明 |
| --- | --- |
| `enabled` | 是否启用 |
| `preventDefault` | 阻止默认点击行为 |
| `type` | `actual` / `current` / `magnifier` |
| `button` | 鼠标按钮（0/1/2） |
| `alt/ctrl/shift/meta` | 是否需要组合键 |

## 建议

对需要点击交互的站点，可用 `clickToOpen` 替代悬停触发。
