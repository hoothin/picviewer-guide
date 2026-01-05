---
title: 画像ウィンドウ
---

# 画像ウィンドウ

画像ウィンドウは、元画像や大きな画像を表示するために使用され、完全なズーム、回転、ドラッグ操作を提供します。

## 主要機能

- ドラッグで移動、ホイールでズーム
- 回転と反転（ステップ設定可能）
- 長い画像の表示最適化

## 一般的な設定

| 設定項目 | 説明 | デフォルト値 |
| --- | --- | --- |
| `imgWindow.fitToScreen` | 画面に合わせる | `true` |
| `imgWindow.fitToScreenSmall` | 小さい画像も画面に合わせる | `false` |
| `imgWindow.suitLongImg` | 長画像モード | `true` |
| `imgWindow.defaultTool` | デフォルトツール | `hand` |
| `imgWindow.close.escKey` | Escで閉じる | `true` |
| `imgWindow.close.dblClickImgWindow` | ダブルクリックで閉じる | `true` |
| `imgWindow.close.clickOutside` | 外側クリックで閉じる | `""` |
| `imgWindow.shiftRotateStep` | Shift回転ステップ | `15` |
| `imgWindow.zoom.range` | ズーム倍率リスト | `0.1 ~ 9.0` |

## 使用上のヒント

- 正確な角度が必要な場合は、`Shift` を押しながら回転させます。
- サイト上でオーバーレイの競合が発生する場合は、「外側クリックで閉じる」を無効にすることができます。