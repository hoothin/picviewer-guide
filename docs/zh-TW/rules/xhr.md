---
title: xhr：內頁抓取
---

# xhr：內頁抓取

當原圖只存在於內頁時，使用 `xhr` 抓取內頁並解析圖片。

## 結構示例

```js
xhr: {
  url: '.showcase__link',
  query: 'img[fetchpriority]'
}
```

## 字段說明

| 字段 | 說明 |
| --- | --- |
| `url` | 內頁鏈接（選擇器、正則或函數） |
| `query` | 內頁圖片選擇器或函數 |
| `caption` | 可選，描述文本 |
| `headers` | 可選，請求頭 |
| `cacheNum` | 可選，緩存數量 |

## 進階：函數形式

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

- 字符串：單圖。
- 數組：多圖。
- 對象：`{ url: [], cap: '' }`。

## 注意事項

- 內頁請求會消耗網絡資源，建議只在必要時使用。
- 可結合 `cacheNum` 降低重複請求。