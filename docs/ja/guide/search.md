---
title: 画像検索
---

# 画像検索

スクリプトには複数の検索エンジンが組み込まれており、リンクをコピーすることなく素早く切り替えることができます。

## デフォルトエンジン

デフォルトの検索リスト（順序のカスタマイズや追加/削除が可能）：

- Google
- Yandex
- SauceNAO
- IQDB / 3D IQDB
- Baidu
- Bing
- TinEye
- Sogou
- 360
- Ascii2D
- Trace Moe
- KarmaDecay
- QRCode / QRdecode

## 一般的な設定

| 設定項目 | 説明 | デフォルト値 |
| --- | --- | --- |
| `firstEngine` | デフォルトエンジン | `Tineye` |
| `gallery.searchData` | エンジンリスト | プリセットテンプレート |

## カスタム検索エンジン

設定で `gallery.searchData` を編集します。形式：

```
エンジン名 | 検索リンク#t#
```

`#t#` は画像URLに置換されます。

## 使用上のヒント

- アニメ/イラスト系はSauceNAOとAscii2Dが推奨されます。
- 人物画像はGoogleとYandexを優先してください。