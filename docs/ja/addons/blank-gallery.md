---
title: 空のギャラリー
---

# 空のギャラリー

空のギャラリーページは、ギャラリーを個別に開くために使用され、ローカルまたはクロスサイトの整理に適しています。

## 開く方法

アクセス：https://hoothin.github.io/UserScripts/Picviewer%20CE+/gallery.html

ブラウザで直接開き、以下のコンテンツをドラッグアンドドロップできます：
- 画像
- フォルダ
- ビデオまたはオーディオ

## URLパラメータ

| パラメータ | 説明 |
| --- | --- |
| `mode` | `1` はViewMoreモードを示します |
| `imgs` | 画像URLリスト（スペース区切り） |

### 例

```
https://hoothin.github.io/UserScripts/Picviewer%20CE+/gallery.html?mode=0&imgs=http://xxx/xxx[01-99].jpg
```

> `[01-99]` 数値範囲の展開をサポートします。