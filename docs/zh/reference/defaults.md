---
title: 默认值速查
---

# 默认值速查

以下为脚本默认设置的常用字段与默认值。

## floatBar

| Key | Default | Notes |
| --- | --- | --- |
| `butonOrder` | `actual,current,gallery,magnifier,download` | 按钮顺序 |
| `additionalFeature` | `open` | 额外动作 |
| `invertAdditionalFeature` | `false` | 反转额外动作 |
| `listenBg` | `true` | 监听背景图 |
| `showDelay` | `100` | 显示延迟（ms） |
| `hideDelay` | `566` | 隐藏延迟（ms） |
| `position` | `top left` | 位置 |
| `stayOut` | `false` | 工具栏外移 |
| `stayOutOffsetX` | `0` | X 偏移 |
| `stayOutOffsetY` | `0` | Y 偏移 |
| `forceShow.enabled` | `true` | 强制显示 |
| `forceShow.size` | `w:100 h:100` | 尺寸阈值 |
| `showWithRules` | `true` | 规则匹配后显示 |
| `minSizeLimit` | `w:50 h:50` | 最小尺寸 |
| `sizeLimitOr` | `false` | 尺寸逻辑 |
| `keys.enable` | `false` | 启用快捷键 |
| `keys.actual` | `a` | 原图 |
| `keys.search` | `s` | 搜图 |
| `keys.current` | `c` | 当前图 |
| `keys.magnifier` | `m` | 放大镜 |
| `keys.gallery` | `g` | 画廊 |
| `keys.download` | `d` | 下载 |
| `globalkeys.ctrl` | `true` | Ctrl 预览 |
| `globalkeys.type` | `hold` | 按住模式 |
| `globalkeys.closeAfterPreview` | `true` | 预览后关闭 |
| `globalkeys.previewFollowMouse` | `true` | 预览跟随 |

## magnifier

| Key | Default | Notes |
| --- | --- | --- |
| `magnifier.radius` | `77` | 半径 |
| `magnifier.wheelZoom.enabled` | `true` | 滚轮缩放 |
| `magnifier.wheelZoom.pauseFirst` | `true` | 先暂停再缩放 |
| `magnifier.wheelZoom.scaleImage` | `true` | 缩放图片 |
| `magnifier.wheelZoom.range` | `0.1 ~ 9.0` | 比例列表 |

## gallery

| Key | Default | Notes |
| --- | --- | --- |
| `gallery.loadMore` | `false` | 自动加载更多 |
| `gallery.loadAll` | `true` | 加载全部 |
| `gallery.viewmoreEndless` | `true` | ViewMore |
| `gallery.fitToScreen` | `true` | 适应屏幕 |
| `gallery.fitToScreenSmall` | `false` | 小图适应屏幕 |
| `gallery.scrollEndToChange` | `true` | 滚动切换 |
| `gallery.exportType` | `grid` | 导出排序 |
| `gallery.sidebarPosition` | `bottom` | 缩略图位置 |
| `gallery.sidebarSize` | `120` | 缩略图尺寸 |
| `gallery.backgroundColor` | `rgba(20,20,20,0.75)` | 背景色 |
| `gallery.formatConversion` | `webp>png` | 格式转换 |
| `gallery.aria2Host` | `http://localhost:6800` | aria2 RPC |
| `gallery.aria2Token` | `\"\"` | aria2 Token |
| `gallery.transition` | `true` | 过渡动画 |
| `gallery.preload` | `true` | 预读 |
| `gallery.max` | `3` | 预读数量 |
| `gallery.scaleSmallSize` | `250` | 小图阈值 |
| `gallery.showSmallSize` | `true` | 默认显示小图 |
| `gallery.disableArrow` | `false` | 禁用箭头 |
| `gallery.autoZoom` | `false` | 自动重置缩放 |
| `gallery.descriptionLength` | `32` | 描述长度 |
| `gallery.defaultSizeLimit` | `w:80 h:80` | 默认尺寸 |
| `gallery.downloadWithZip` | `true` | ZIP 下载 |
| `gallery.autoOpenViewmore` | `false` | 自动打开 ViewMore |
| `gallery.downloadGap` | `100` | 下载间隔 |

## imgWindow

| Key | Default | Notes |
| --- | --- | --- |
| `imgWindow.suitLongImg` | `true` | 长图模式 |
| `imgWindow.fitToScreen` | `true` | 适应屏幕 |
| `imgWindow.fitToScreenSmall` | `false` | 小图适应屏幕 |
| `imgWindow.syncSelectedTool` | `true` | 同步工具 |
| `imgWindow.defaultTool` | `hand` | 默认工具 |
| `imgWindow.close.escKey` | `true` | Esc 关闭 |
| `imgWindow.close.dblClickImgWindow` | `true` | 双击关闭 |
| `imgWindow.close.clickOutside` | `\"\"` | 点击外部关闭 |
| `imgWindow.overlayer.shown` | `false` | 遮罩显示 |
| `imgWindow.overlayer.color` | `rgba(200,200,200,0.3)` | 遮罩颜色 |
| `imgWindow.shiftRotateStep` | `15` | 旋转步进 |
| `imgWindow.zoom.mouseWheelZoom` | `true` | 滚轮缩放 |
| `imgWindow.zoom.range` | `0.1 ~ 9.0` | 比例列表 |
| `imgWindow.fixed` | `false` | 固定位置 |

## other

| Key | Default | Notes |
| --- | --- | --- |
| `waitImgLoad` | `false` | 等待加载 |
| `framesPicOpenInTopWindow` | `true` | 顶层打开 |
| `customLang` | `auto` | 语言 |
| `customRules` | JSON 模板 | 自定义规则 |
| `firstEngine` | `Tineye` | 默认搜索引擎 |
| `debug` | `false` | 调试输出 |
