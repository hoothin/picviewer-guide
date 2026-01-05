---
title: ext：邻近元素捕获
---
# ext：邻近元素捕获

`ext` 用于在鼠标悬停非图片元素时，尝试从附近的节点获取图片。

## 支持的内置值

- `previous`：前一个兄弟节点
- `previous-2`：前两个兄弟节点
- `next`：后一个兄弟节点

## 示例

```js
ext: 'previous-2'
```

## 函数形式

```js
ext: function (target) {
  if (target && target.previousElementSibling) {
    return target.previousElementSibling.querySelector('img')
  }
}
```

## 使用建议

当页面结构稳定时，`ext` 能快速解决"鼠标悬停在按钮或文本上"的取图需求。
