---
title: clickToOpen：點擊打開
---

# clickToOpen：點擊打開

`clickToOpen` 用於讓點擊行為觸發打開原圖、當前圖或放大鏡。

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

## 字段說明

| 字段 | 說明 |
| --- | --- |
| `enabled` | 是否啟用 |
| `preventDefault` | 阻止默認點擊行為 |
| `type` | `actual` / `current` / `magnifier` |
| `button` | 鼠標按鈕（0/1/2） |
| `alt/ctrl/shift/meta` | 是否需要組合鍵 |

## 建議

對需要點擊交互的站點，可用 `clickToOpen` 替代懸停觸發。