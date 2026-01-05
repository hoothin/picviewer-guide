---
title: 畫廊與批量處理
---

# 畫廊與批量處理

畫廊用於批量瀏覽、篩選與導出圖片。
它是高效收集的核心功能。

## 進入方式

- `Ctrl + G`：快速進入畫廊
- 浮動工具欄：點擊「畫廊」

## 核心能力
- 自動收集當前頁面可用圖片
- 側邊縮略圖欄（上/下/左/右佈局）
- 圖片信息與描述展示
- 幻燈播放、視圖切換、全屏

## 畫廊命令說明
常用命令包括：
- 加載更多/加載全部
- URL 過濾（篩掉不需要的圖片）
- 導出圖片（ZIP/aria2/複製鏈接）
- 添加圖片 URL（批量追加）

## 常用設置

| 設置項 | 說明 | 默認值 |
| --- | --- | --- |
| `gallery.loadMore` | 自動加載更多 | `false` |
| `gallery.loadAll` | 一次加載全部 | `true` |
| `gallery.viewmoreEndless` | ViewMore 模式 | `true` |
| `gallery.fitToScreen` | 適應屏幕 | `true` |
| `gallery.sidebarPosition` | 縮略圖位置 | `bottom` |
| `gallery.sidebarSize` | 縮略圖尺寸 | `120` |
| `gallery.backgroundColor` | 背景色 | `rgba(20,20,20,0.75)` |
| `gallery.scaleSmallSize` | 小圖閾值 | `250` |
| `gallery.showSmallSize` | 默認顯示小圖 | `true` |

## 動圖演示

<img src="https://v2fy.com/asset/063_picviewer_ce/72723103-d911ce00-3bba-11ea-9541-0be746977dbc.gif" width="325" />
<img src="https://v2fy.com/asset/063_picviewer_ce/72767872-7eb35480-3c30-11ea-814d-ce4678c81089.gif" width="325" />
<img src="https://v2fy.com/asset/063_picviewer_ce/73130353-c4598e00-4031-11ea-810e-9498677a40d1.gif" width="325" />

## 小貼士
- 需要自動跨頁收集時，可開啟 ViewMore 並設置自動打開。
- 若縮略圖太多影響效率，可利用 URL 過濾或分類篩選。