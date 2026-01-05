---
title: 常見問題
---

# 常見問題

## 浮動工具欄不出現

可能原因與解決方式：
- 圖片太小：調整 `floatBar.forceShow.size` 或 `floatBar.minSizeLimit`
- 圖片在背景圖中：開啟 `floatBar.listenBg`
- 站點特殊結構：通過規則系統補充 `ext` 或 `getExtSrc`

## 無法獲取原圖

- 檢查是否需要 `r/s` 替換或 `getImage` 邏輯
- 對內頁才能獲取原圖的站點，使用 `xhr` 規則
- 懶加載站點請指定 `lazyAttr`

## 畫廊圖片數量不完整

- 開啟 `gallery.loadAll` 或 `gallery.viewmoreEndless`
- 使用「加載更多」命令
- 檢查是否存在 URL 過濾條件

## 下載失敗或超時

- 適當增大 `gallery.downloadGap`
- 嘗試 aria2 下載以減少瀏覽器阻塞
- 某些站點限制跨域下載，可改用批量複製鏈接

## 以圖搜圖不彈窗

- 檢查是否啟用對應引擎
- 在配置中調整 `firstEngine` 或更新 `gallery.searchData`