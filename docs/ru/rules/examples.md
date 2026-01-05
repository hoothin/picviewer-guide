---
title: Примеры правил
---

# Примеры правил

Следующие примеры охватывают распространенные сценарии, чтобы помочь вам быстро начать.

## 1. Замена миниатюры на оригинал

```js
{
  name: 'Dmm',
  src: /pics\.dmm\.co\.jp/i,
  r: 'ps.jpg',
  s: 'pl.jpg'
}
```

## 2. Разбор поля ленивой загрузки

```js
{
  name: 'LazyLoad',
  url: /example\.com/,
  lazyAttr: 'data-original'
}
```

## 3. Запрос внутренней страницы

```js
{
  name: 'Freepik',
  url: /^https?:\/\/www\.freepik\.com\//i,
  xhr: {
    url: '.showcase__link',
    query: 'img[fetchpriority]'
  }
}
```

## 4. Получение оригинала из поисковика

```js
{
  name: 'Google Image Search',
  url: /https?:\/\/www.google(\.\w{1,3}){1,3}\/search\?.*&(tbm=isch|udm=2)/,
  getImage: function (a) {
    if (!a) return
    if (a.href.match(/imgurl=(.*?)&/i)) return decodeURIComponent(RegExp.$1)
  }
}
```

## 5. Простое удаление параметров

```js
{
  name: 'Bilibili',
  url: /^https?:\/\/[^.]+\.bilibili\.com/i,
  r: /\d+_x\d+\.jpg$|@\d+w_\d+h.*\.webp$|_\d+x\d+\.jpg$/i,
  s: ''
}
```

## Визуальный пример

![Диаграмма правил](/images/custom-rule.png)

```