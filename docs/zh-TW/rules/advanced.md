---
title: 高級字段
---

# 高級字段

高級字段用於提升規則命中率與交互體驗。

## lazyAttr

指定懶加載字段名稱。

```js
lazyAttr: 'data-original'
```

## exclude

排除某些圖片地址，避免誤匹配。

```js
exclude: /weixin_code\.png$/i
```

## description

在畫廊中使用的描述字段，支持選擇器或 XPath。

```js
description: '.image-caption'
```

## clickToOpen

用於指定點擊打開行為。

```js
clickToOpen: {
  enabled: true,
  preventDefault: true,
  type: 'actual'
}
```

## 何時使用高級字段

- 懶加載站點：優先 `lazyAttr`。
- 需要標題或註釋：使用 `description`。
- 站點點擊才能打開大圖：使用 `clickToOpen`。