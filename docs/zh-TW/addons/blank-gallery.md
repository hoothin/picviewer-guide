---
title: 空白畫廊頁
---

# 空白畫廊頁

空白畫廊頁用於獨立打開畫廊，適合本地或跨站整理。

## 打開方式

訪問：https://hoothin.github.io/UserScripts/Picviewer%20CE+/gallery.html

在瀏覽器直接打開後，可拖拽以下內容：
- 圖片
- 文件夾
- 視頻或音頻

## URL 參數

| 參數 | 說明 |
| --- | --- |
| `mode` | `1` 表示 ViewMore 模式 |
| `imgs` | 圖片 URL 列表（空格分隔） |

### 示例

```
https://hoothin.github.io/UserScripts/Picviewer%20CE+/gallery.html?mode=0&imgs=http://xxx/xxx[01-99].jpg
```

> 支持 `[01-99]` 數字區間展開。