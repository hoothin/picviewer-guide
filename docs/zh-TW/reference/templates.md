---
title: 配置模板
---

# 配置模板

## 自定義規則模板

在配置中填寫 `customRules`，格式為 JSON 數組：

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

## 規則腳本模板

獨立腳本方式適用於大型規則集：

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

> 使用獨立腳本可繞開某些站點的 CSP 限制。

```