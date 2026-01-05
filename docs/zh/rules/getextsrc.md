---
title: getExtSrc：非图元素取图
---

# getExtSrc：非图元素取图

当鼠标悬停的是非图片元素时，可用 `getExtSrc` 直接返回图片 URL。

## 示例：从按钮附近找图

```js
getExtSrc: function () {
  if (this.tagName === 'A' && this.className === 'msk') {
    return this.previousElementSibling.src.replace(/\?param=\d+y\d+/, '')
  }
}
```

## 返回值

- `string`：单图地址。
- `array`：多图地址。

## 注意事项

`getExtSrc` 只在目标不是 `img` 元素时触发，适用于卡片、按钮或视频封面等场景。
