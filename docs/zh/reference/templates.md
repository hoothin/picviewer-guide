---
title: 配置模板
---

# 配置模板

## 自定义规则模板

在配置中填写 `customRules`，格式为 JSON 数组：

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

## 规则脚本模板

独立脚本方式适用于大型规则集：

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

> 使用独立脚本可绕开某些站点的 CSP 限制。
