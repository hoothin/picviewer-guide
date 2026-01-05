---
title: getImage：改写图片地址
---

# getImage：改写图片地址

`getImage` 用于通过 JS 获取原图地址，适用于简单替换无法解决的站点。

## 函数签名

```js
getImage(a, p) {}
```

- `a`：图片所在的第一个父级 A 元素（可能为空）。
- `p`：所有父级元素数组。
- `this`：当前图片元素。

## 常用模式

### 从链接参数中取原图

```js
getImage: function (a) {
  if (!a) return
  if (a.href.match(/imgurl=(.*?)&/i)) {
    return decodeURIComponent(RegExp.$1)
  }
}
```

### 通过数据属性取图

```js
getImage: function () {
  return this.getAttribute('data-original')
}
```

### 返回多图

```js
getImage: function () {
  return [this.src, this.src.replace('thumb', 'large')]
}
```

## 建议

- 返回 `null` 或 `undefined` 会继续走后续逻辑。
- 复杂站点可在函数内触发事件或解析 DOM。
