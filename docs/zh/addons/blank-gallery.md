---
title: 空白画廊页
---

# 空白画廊页

空白画廊页用于独立打开画廊，适合本地或跨站整理。

## 打开方式

访问：https://hoothin.github.io/UserScripts/Picviewer%20CE+/gallery.html

在浏览器直接打开后，可拖拽以下内容：
- 图片
- 文件夹
- 视频或音频

## URL 参数

| 参数 | 说明 |
| --- | --- |
| `mode` | `1` 表示 ViewMore 模式 |
| `imgs` | 图片 URL 列表（空格分隔） |

### 示例
```
https://hoothin.github.io/UserScripts/Picviewer%20CE+/gallery.html?mode=0&imgs=http://xxx/xxx[01-99].jpg
```
> 支持 `[01-99]` 数字区间展开。
