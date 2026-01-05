---
title: Templates
---

# Templates

## Custom Rules Template

Fill in `customRules` in settings, formatted as a JSON array:

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

## Rule Script Template

Independent script method suitable for large rule sets:

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

> Using an independent script can bypass CSP restrictions on some sites.