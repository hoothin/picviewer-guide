---
title: 画廊与批量处理
---

# 画廊与批量处理

画廊用于批量浏览、筛选与导出图片。
它是高效收集的核心功能。

## 进入方式

- `Ctrl + G`：快速进入画廊
- 浮动工具栏：点击“画廊”

## 核心能力
- 自动收集当前页面可用图片
- 侧边缩略图栏（上/下/左/右布局）
- 图片信息与描述展示
- 幻灯播放、视图切换、全屏

## 画廊命令说明
常用命令包括：
- 加载更多/加载全部
- URL 过滤（筛掉不需要的图片）
- 导出图片（ZIP/aria2/复制链接）
- 添加图片 URL（批量追加）

## 常用设置

| 设置项 | 说明 | 默认值 |
| --- | --- | --- |
| `gallery.loadMore` | 自动加载更多 | `false` |
| `gallery.loadAll` | 一次加载全部 | `true` |
| `gallery.viewmoreEndless` | ViewMore 模式 | `true` |
| `gallery.fitToScreen` | 适应屏幕 | `true` |
| `gallery.sidebarPosition` | 缩略图位置 | `bottom` |
| `gallery.sidebarSize` | 缩略图尺寸 | `120` |
| `gallery.backgroundColor` | 背景色 | `rgba(20,20,20,0.75)` |
| `gallery.scaleSmallSize` | 小图阈值 | `250` |
| `gallery.showSmallSize` | 默认显示小图 | `true` |

## 动图演示

<img src="https://v2fy.com/asset/063_picviewer_ce/72723103-d911ce00-3bba-11ea-9541-0be746977dbc.gif" width="325" />
<img src="https://v2fy.com/asset/063_picviewer_ce/72767872-7eb35480-3c30-11ea-814d-ce4678c81089.gif" width="325" />
<img src="https://v2fy.com/asset/063_picviewer_ce/73130353-c4598e00-4031-11ea-810e-9498677a40d1.gif" width="325" />

## 小贴士
- 需要自动跨页收集时，可开启 ViewMore 并设置自动打开。
- 若缩略图太多影响效率，可利用 URL 过滤或分类筛选。
