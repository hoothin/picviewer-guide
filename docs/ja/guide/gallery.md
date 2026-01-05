---
title: ギャラリーと一括処理
---

# ギャラリーと一括処理

ギャラリーは、画像の一括閲覧、フィルタリング、エクスポートに使用されます。
これは効率的な収集のための中核機能です。

## アクセス方法

- `Ctrl + G`: ギャラリーへ素早くアクセス
- フローティングバー: 「ギャラリー」をクリック

## コア機能

- 現在のページで利用可能な画像を自動的に収集
- サムネイルサイドバー（上/下/左/右レイアウト）
- 画像情報と説明の表示
- スライドショー、ビュー切り替え、全画面表示

## ギャラリーコマンドの説明

一般的なコマンドは以下の通りです：
- もっと読み込む / すべて読み込む
- URLフィルタリング（不要な画像を除外）
- 画像のエクスポート（ZIP/aria2/リンクのコピー）
- 画像URLの追加（一括追加）

## 一般的な設定

| 設定項目 | 説明 | デフォルト値 |
| --- | --- | --- |
| `gallery.loadMore` | 自動的にもっと読み込む | `false` |
| `gallery.loadAll` | すべて一度に読み込む | `true` |
| `gallery.viewmoreEndless` | ViewMoreモード | `true` |
| `gallery.fitToScreen` | 画面に合わせる | `true` |
| `gallery.sidebarPosition` | サムネイルの位置 | `bottom` |
| `gallery.sidebarSize` | サムネイルのサイズ | `120` |
| `gallery.backgroundColor` | 背景色 | `rgba(20,20,20,0.75)` |
| `gallery.scaleSmallSize` | 小さい画像のしきい値 | `250` |
| `gallery.showSmallSize` | デフォルトで小さい画像を表示 | `true` |

## デモ

<img src="https://v2fy.com/asset/063_picviewer_ce/72723103-d911ce00-3bba-11ea-9541-0be746977dbc.gif" width="325" />
<img src="https://v2fy.com/asset/063_picviewer_ce/72767872-7eb35480-3c30-11ea-814d-ce4678c81089.gif" width="325" />
<img src="https://v2fy.com/asset/063_picviewer_ce/73130353-c4598e00-4031-11ea-810e-9498677a40d1.gif" width="325" />

## ヒント

- ページをまたいで自動的に収集する必要がある場合は、ViewMoreを有効にし、自動オープンを設定できます。
- サムネイルが多すぎて効率に影響する場合は、URLフィルタリングまたはカテゴリフィルタリングを利用してください。