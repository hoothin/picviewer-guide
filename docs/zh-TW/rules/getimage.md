---
title: getImage：改寫圖片地址
---

# getImage：改寫圖片地址

`getImage` 用於通過 JS 獲取原圖地址，適用於簡單替換無法解決的站點。

## 函數簽名

```js
getImage(a, p) {}
```

- `a`：圖片所在的第一個父級 A 元素（可能為空）。
- `p`：所有父級元素數組。
- `this`：當前圖片元素。

## 常用模式

### 從鏈接參數中取原圖

```js
getImage: function (a) {
  if (!a) return
  if (a.href.match(/imgurl=(.*?)&/i)) {
    return decodeURIComponent(RegExp.$1)
  }
}
```

### 通過數據屬性取圖

```js
getImage: function () {
  return this.getAttribute('data-original')
}
```

### 返回多圖

```js
getImage: function () {
  return [this.src, this.src.replace('thumb', 'large')]
}
```

## 建議

- 返回 `null` 或 `undefined` 會繼續走後續邏輯。
- 複雜站點可在函數內觸發事件或解析 DOM。