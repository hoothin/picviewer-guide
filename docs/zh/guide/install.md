---
title: 安装与更新
---

# 安装与更新

## 安装前准备

建议在浏览器中安装任一用户脚本管理器：

- Tampermonkey
- Violentmonkey
- ScriptCat

### 浏览器权限设置 (针对 Chrome 浏览器)

由于 Chrome 浏览器的安全策略更新（如 Chrome 138+），您可能需要开启“开发者模式”或“允许用户脚本”开关，脚本才能正常运行：

1. 右键点击 Tampermonkey 图标，选择 **“管理扩展程序”**。
   ![](/images/manage_extension.jpg)
2. 找到并开启 **“允许用户脚本”** 开关。
   ![](/images/userscripts_toggle.png)
3. 或者：访问 `chrome://extensions`，在页面右上角开启 **“开发者模式”**。

详细说明请参考 [Tampermonkey FAQ](https://www.tampermonkey.net/faq.php#Q209)。

## 安装步骤

1. 打开脚本安装页并确认安装。
2. 安装完成后刷新任意网页，鼠标悬停图片即可看到浮动工具栏。
3. 若需要 PDF 导出功能，额外安装 PDF 插件（见插件章节）。

## 下载地址

<div style="display: flex">
	<a style="transition: box-shadow .2s; display: inline-block; background-color: #005200; padding: 0.7rem 1.1rem; color: #fff; text-decoration: none; font-weight: 700; height: fit-content; margin: 6px 0 0 10px;" href="https://greasyfork.org/scripts/24204-picviewer-ce">📲 从 Greasyfork 安装 (推荐)</a>
	<a style="transition: box-shadow .2s; display: inline-block; background-color: #e2510a; padding: 0.7rem 1.1rem; color: #fff; text-decoration: none; font-weight: 700; height: fit-content; margin: 6px 0 0 10px;" href="https://hoothin.github.io/UserScripts/Picviewer%20CE+/dist.user.js">📲 从 Github 安装 (备用)</a>
</div>

## 更新方式

脚本管理器会自动检查更新。若希望立即更新，可在管理器中手动点击检查更新或重新安装最新脚本。

## 初次配置建议

- 打开脚本配置界面，确认浮动工具栏启用。
- 若预览窗口不跟随鼠标，检查全局快捷键设置。
- 常用下载方式（ZIP 或 aria2）建议提前设置好。
