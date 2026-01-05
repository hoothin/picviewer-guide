--- 
title: デフォルト値
---

# デフォルト値

以下は、スクリプト設定の一般的なフィールドとデフォルト値です。

## floatBar

| Key | Default | Notes |
| --- | --- | --- |
| `butonOrder` | `actual,current,gallery,magnifier,download` | ボタン順序 |
| `additionalFeature` | `open` | 追加アクション |
| `invertAdditionalFeature` | `false` | アクション反転 |
| `listenBg` | `true` | 背景監視 |
| `showDelay` | `100` | 表示遅延 (ms) |
| `hideDelay` | `566` | 非表示遅延 (ms) |
| `position` | `top left` | 位置 |
| `stayOut` | `false` | 外側に配置 |
| `stayOutOffsetX` | `0` | オフセット X |
| `stayOutOffsetY` | `0` | オフセット Y |
| `forceShow.enabled` | `true` | 強制表示 |
| `forceShow.size` | `w:100 h:100` | サイズしきい値 |
| `showWithRules` | `true` | ルール一致時に表示 |
| `minSizeLimit` | `w:50 h:50` | 最小サイズ |
| `sizeLimitOr` | `false` | サイズ論理OR |
| `keys.enable` | `false` | ショートカット有効 |
| `keys.actual` | `a` | 元画像 |
| `keys.search` | `s` | 検索 |
| `keys.current` | `c` | 現在の画像 |
| `keys.magnifier` | `m` | 拡大鏡 |
| `keys.gallery` | `g` | ギャラリー |
| `keys.download` | `d` | ダウンロード |
| `globalkeys.ctrl` | `true` | Ctrlプレビュー |
| `globalkeys.type` | `hold` | ホールドモード |
| `globalkeys.closeAfterPreview` | `true` | プレビュー後閉じる |
| `globalkeys.previewFollowMouse` | `true` | プレビュー追従 |

## magnifier

| Key | Default | Notes |
| --- | --- | --- |
| `magnifier.radius` | `77` | 半径 |
| `magnifier.wheelZoom.enabled` | `true` | ホイールズーム |
| `magnifier.wheelZoom.pauseFirst` | `true` | 最初に一時停止 |
| `magnifier.wheelZoom.scaleImage` | `true` | 画像スケーリング |
| `magnifier.wheelZoom.range` | `0.1 ~ 9.0` | スケールリスト |

## gallery

| Key | Default | Notes |
| --- | --- | --- |
| `gallery.loadMore` | `false` | 自動ロードモア |
| `gallery.loadAll` | `true` | すべてロード |
| `gallery.viewmoreEndless` | `true` | ViewMore |
| `gallery.fitToScreen` | `true` | 画面に合わせる |
| `gallery.fitToScreenSmall` | `false` | 小画像も合わせる |
| `gallery.scrollEndToChange` | `true` | スクロール切り替え |
| `gallery.exportType` | `grid` | エクスポート順序 |
| `gallery.sidebarPosition` | `bottom` | サイドバー位置 |
| `gallery.sidebarSize` | `120` | サイドバーサイズ |
| `gallery.backgroundColor` | `rgba(20,20,20,0.75)` | 背景色 |
| `gallery.formatConversion` | `webp>png` | 形式変換 |
| `gallery.aria2Host` | `http://localhost:6800` | aria2 RPC |
| `gallery.aria2Token` | "" | aria2トークン |
| `gallery.transition` | `true` | トランジション |
| `gallery.preload` | `true` | プリロード |
| `gallery.max` | `3` | プリロード数 |
| `gallery.scaleSmallSize` | `250` | 小画像しきい値 |
| `gallery.showSmallSize` | `true` | 小画像表示 |
| `gallery.disableArrow` | `false` | 矢印無効 |
| `gallery.autoZoom` | `false` | 自動ズームリセット |
| `gallery.descriptionLength` | `32` | 説明長 |
| `gallery.defaultSizeLimit` | `w:80 h:80` | デフォルトサイズ |
| `gallery.downloadWithZip` | `true` | ZIPダウンロード |
| `gallery.autoOpenViewmore` | `false` | ViewMore自動オープン |
| `gallery.downloadGap` | `100` | ダウンロード間隔 |

## imgWindow

| Key | Default | Notes |
| --- | --- | --- |
| `imgWindow.suitLongImg` | `true` | 長画像モード |
| `imgWindow.fitToScreen` | `true` | 画面に合わせる |
| `imgWindow.fitToScreenSmall` | `false` | 小画像も合わせる |
| `imgWindow.syncSelectedTool` | `true` | ツール同期 |
| `imgWindow.defaultTool` | `hand` | デフォルトツール |
| `imgWindow.close.escKey` | `true` | Escで閉じる |
| `imgWindow.close.dblClickImgWindow` | `true` | ダブルクリックで閉じる |
| `imgWindow.close.clickOutside` | "" | 外側クリックで閉じる |
| `imgWindow.overlayer.shown` | `false` | オーバーレイ表示 |
| `imgWindow.overlayer.color` | `rgba(200,200,200,0.3)` | オーバーレイ色 |
| `imgWindow.shiftRotateStep` | `15` | 回転ステップ |
| `imgWindow.zoom.mouseWheelZoom` | `true` | ホイールズーム |
| `imgWindow.zoom.range` | `0.1 ~ 9.0` | スケールリスト |
| `imgWindow.fixed` | `false` | 固定位置 |

## other

| Key | Default | Notes |
| --- | --- | --- |
| `waitImgLoad` | `false` | ロード待機 |
| `framesPicOpenInTopWindow` | `true` | トップウィンドウで開く |
| `customLang` | `auto` | 言語 |
| `customRules` | JSON Template | カスタムルール |
| `firstEngine` | `Tineye` | デフォルトエンジン |
| `debug` | `false` | デバッグ出力 |