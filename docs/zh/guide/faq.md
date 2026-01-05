---
title: 常见问题
---

# 常见问题

## 浮动工具栏不出现

可能原因与解决方式：

- 图片太小：调整 `floatBar.forceShow.size` 或 `floatBar.minSizeLimit`
- 图片在背景图中：开启 `floatBar.listenBg`
- 站点特殊结构：通过规则系统补充 `ext` 或 `getExtSrc`

## 无法获取原图

- 检查是否需要 `r/s` 替换或 `getImage` 逻辑
- 对内页才能获取原图的站点，使用 `xhr` 规则
- 懒加载站点请指定 `lazyAttr`

## 画廊图片数量不完整

- 开启 `gallery.loadAll` 或 `gallery.viewmoreEndless`
- 使用“加载更多”命令
- 检查是否存在 URL 过滤条件

## 下载失败或超时

- 适当增大 `gallery.downloadGap`
- 尝试 aria2 下载以减少浏览器阻塞
- 某些站点限制跨域下载，可改用批量复制链接

## 以图搜图不弹窗

- 检查是否启用对应引擎
- 在配置中调整 `firstEngine` 或更新 `gallery.searchData`
