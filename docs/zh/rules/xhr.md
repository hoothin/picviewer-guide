---
title: xhr：内页抓取
---

# xhr：内页抓取

当原图只存在于内页时，使用 `xhr` 抓取内页并解析图片。

## 结构示例

```js
xhr: {
  url: '.showcase__link',
  query: 'img[fetchpriority]'
}
```

## 字段说明

| 字段 | 说明 |
| --- | --- |
| `url` | 内页链接（选择器、正则或函数） |
| `query` | 内页图片选择器或函数 |
| `caption` | 可选，描述文本 |
| `headers` | 可选，请求头 |
| `cacheNum` | 可选，缓存数量 |

## 进阶：函数形式

```js
xhr: {
  url: function (a) {
    if (!a) return
    return a.href
  },
  query: function (html, doc) {
    let img = doc.querySelector('#img')
    return img && img.src
  }
}
```

## 返回值

- 字符串：单图。
- 数组：多图。
- 对象：`{ url: [], cap: '' }`。

## 注意事项

- 内页请求会消耗网络资源，建议只在必要时使用。
- 可结合 `cacheNum` 降低重复请求。
