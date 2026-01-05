---
title: 高级字段
---

# 高级字段

高级字段用于提升规则命中率与交互体验。

## lazyAttr
指定懒加载字段名称。
```js
lazyAttr: 'data-original'
```

## exclude
排除某些图片地址，避免误匹配。
```js
exclude: /weixin_code\.png$/i
```

## description
在画廊中使用的描述字段，支持选择器或 XPath。
```js
description: '.image-caption'
```

## clickToOpen
用于指定点击打开行为。
```js
clickToOpen: {
  enabled: true,
  preventDefault: true,
  type: 'actual'
}
```

## 何时使用高级字段
- 懒加载站点：优先 `lazyAttr`。
- 需要标题或注释：使用 `description`。
- 站点点击才能打开大图：使用 `clickToOpen`。


