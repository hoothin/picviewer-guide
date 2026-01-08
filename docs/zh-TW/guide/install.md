---
title: 安裝與更新
---

# 安裝與更新

## 安裝前準備

建議在瀏覽器中安裝任一使用者腳本管理員：

- Tampermonkey
- Violentmonkey
- ScriptCat

### 瀏覽器權限設定 (針對 Chrome 瀏覽器)

由於 Chrome 瀏覽器的安全性策略更新（如 Chrome 138+），您可能需要開啟「開發者模式」或「允許使用者腳本」開關，腳本才能正常執行：

1. 右鍵點擊 Tampermonkey 圖示，選擇 **「管理擴充功能」**。
   ![](/images/manage_extension.jpg)
2. 找到並開啟 **「允許使用者腳本」** 開關。
   ![](/images/userscripts_toggle.png)
3. 或者：造訪 `chrome://extensions`，在頁面右上角開啟 **「開發者模式」**。

詳細說明請參考 [Tampermonkey FAQ](https://www.tampermonkey.net/faq.php#Q209)。


## 安裝步驟

1. 打開腳本安裝頁並確認安裝。
2. 安裝完成後刷新任意網頁，鼠標懸停圖片即可看到浮動工具欄。
3. 若需要 PDF 導出功能，額外安裝 PDF 插件（見插件章節）。

## 下載地址

<div style="display: flex">
	<a style="transition: box-shadow .2s; display: inline-block; background-color: #005200; padding: 0.7rem 1.1rem; color: #fff; text-decoration: none; font-weight: 700; height: fit-content; margin: 6px 0 0 10px;" href="https://greasyfork.org/scripts/24204-picviewer-ce">📲 從 Greasyfork 安裝 (推薦)</a>
	<a style="transition: box-shadow .2s; display: inline-block; background-color: #e2510a; padding: 0.7rem 1.1rem; color: #fff; text-decoration: none; font-weight: 700; height: fit-content; margin: 6px 0 0 10px;" href="https://hoothin.github.io/UserScripts/Picviewer%20CE+/dist.user.js">📲 從 Github 安裝 (備用)</a>
</div>

## 更新方式

腳本管理器會自動檢查更新。若希望立即更新，可在管理器中手動點擊檢查更新或重新安裝最新腳本。

## 初次配置建議

- 打開腳本配置界面，確認浮動工具欄啟用。
- 若預覽窗口不跟隨鼠標，檢查全局快捷鍵設置。
- 常用下載方式（ZIP 或 aria2）建議提前設置好。