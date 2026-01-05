---
title: 設定テンプレート
---

# 設定テンプレート

## カスタムルールテンプレート

設定の `customRules` に記入します。形式はJSON配列です：

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

## ルールスクリプトテンプレート

大規模なルールセットに適した独立したスクリプトメソッド：

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

> 独立したスクリプトを使用すると、一部のサイトのCSP制限を回避できます。

```