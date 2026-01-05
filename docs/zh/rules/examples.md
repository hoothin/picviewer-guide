---
title: 规则示例库
---

# 规则示例库

以下示例覆盖常见场景，便于快速上手。

## 1. 缩略图替换为原图

```js
{
  name: 'Dmm',
  src: /pics\\.dmm\\.co\\.jp/i,
  r: 'ps.jpg',
  s: 'pl.jpg'
}
```

## 2. 懒加载字段解析
```js
{
  name: 'LazyLoad',
  url: /example\\.com/,
  lazyAttr: 'data-original'
}
```

## 3. 内页抓取
```js
{
  name: 'Freepik',
  url: /^https?:\\/\\/www\\.freepik\\.com\\//i,
  xhr: {
    url: '.showcase__link',
    query: 'img[fetchpriority]'
  }
}
```

## 4. 搜索引擎取原图
```js
{
  name: 'Google 图片搜索',
  url: /https?:\\/\\/www.google(\\.\\w{1,3}){1,3}\\/search\\?.*&(tbm=isch|udm=2)/,
  getImage: function (a) {
    if (!a) return
    if (a.href.match(/imgurl=(.*?)&/i)) return decodeURIComponent(RegExp.$1)
  }
}
```

## 5. 简单参数移除
```js
{
  name: 'Bilibili',
  url: /^https?:\\/\\/[^.]+\\.bilibili\\.com/i,
  r: /\\d+_x\\d+\\.jpg$|@\\d+w_\\d+h.*\\.webp$|_\\d+x\\d+\\.jpg$/i,
  s: ''
}
```

## 规则可视化示例

![规则示意图](/images/custom-rule.png)
