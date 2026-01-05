---
title: Шаблоны
---

# Шаблоны

## Шаблон пользовательских правил

Заполните `customRules` в настройках, формат — массив JSON:

```json
[
  {
    "name": "Example",
    "url": "^https://xxx\\.com",
    "src": "/avatar/i",
    "r": "/\\?.*$/i",
    "s": ""
  }
]
```

## Шаблон скрипта правил

Метод независимого скрипта, подходит для больших наборов правил:

```js
// ==UserScript==
// @name         Picviewer CE+ custom rules
// @namespace    hoothin
// @version      0.1
// @description  Picviewer CE+ custom rules
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict'
  window.pvcepRules = (window.pvcepRules || []).concat([
    {
      name: 'rule1',
      src: /pics\\.dmm\\.co\\.jp/i,
      r: 'ps.jpg',
      s: 'pl.jpg'
    }
  ])
})()
```

> Использование независимого скрипта позволяет обойти ограничения CSP на некоторых сайтах.

```