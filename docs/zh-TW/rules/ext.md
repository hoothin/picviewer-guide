---
title: ext：鄰近元素捕獲
---
# ext：鄰近元素捕獲

`ext` 用於在鼠標懸停非圖片元素時，嘗試從附近的節點獲取圖片。

## 支持的內置值

- `previous`：前一個兄弟節點
- `previous-2`：前兩個兄弟節點
- `next`：後一個兄弟節點

## 示例

```js
ext: 'previous-2'
```

## 函數形式

```js
ext: function (target) {
  if (target && target.previousElementSibling) {
    return target.previousElementSibling.querySelector('img')
  }
}
```

## 使用建議

當頁面結構穩定時，`ext` 能快速解決「鼠標懸停在按鈕或文本上」的取圖需求。