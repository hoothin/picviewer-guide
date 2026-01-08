---
title: インストールと更新
---

# インストールと更新

## 事前準備

ブラウザにユーザースクリプトマネージャーをインストールすることをお勧めします：

- Tampermonkey
- Violentmonkey
- ScriptCat

### ブラウザの権限設定 (Chrome系ブラウザ向け)

Chromeのセキュリティポリシー更新（Chrome 138+など）により、スクリプトを正しく動作させるために「デベロッパーモード」または「ユーザースクリプトの許可」を有効にする必要がある場合があります：

1. Tampermonkeyのアイコンを右クリックし、**「拡張機能を管理」** を選択します。
   ![](/images/manage_extension.jpg)
2. **「ユーザースクリプトの許可」** スイッチを探してオンにします。
   ![](/images/userscripts_toggle.png)
3. または：`chrome://extensions`にアクセスし、画面右上の **「デベロッパーモード」** をオンにします。

詳細については、[Tampermonkey FAQ](https://www.tampermonkey.net/faq.php#Q209) を参照してください。

## インストール手順

1. スクリプトインストールページを開き、インストールを確認します。
2. インストール後、Webページをリロードし、画像にマウスをホバーするとフローティングバーが表示されます。
3. PDFエクスポート機能が必要な場合は、PDFアドオンを追加でインストールしてください（アドオンのセクションを参照）。

## ダウンロードリンク

<div style="display: flex">
	<a style="transition: box-shadow .2s; display: inline-block; background-color: #005200; padding: 0.7rem 1.1rem; color: #fff; text-decoration: none; font-weight: 700; height: fit-content; margin: 6px 0 0 10px;" href="https://greasyfork.org/scripts/24204-picviewer-ce">📲 Greasyforkからインストール (推奨)</a>
	<a style="transition: box-shadow .2s; display: inline-block; background-color: #e2510a; padding: 0.7rem 1.1rem; color: #fff; text-decoration: none; font-weight: 700; height: fit-content; margin: 6px 0 0 10px;" href="https://hoothin.github.io/UserScripts/Picviewer%20CE+/dist.user.js">📲 Githubからインストール (予備)</a>
</div>

## 更新方法

スクリプトマネージャーは自動的に更新を確認します。すぐに更新したい場合は、マネージャーで手動で更新を確認するか、最新のスクリプトを再インストールしてください。

## 初回設定の提案

- スクリプト設定画面を開き、フローティングバーが有効になっていることを確認します。
- プレビューウィンドウがマウスに追従しない場合は、グローバルショートカット設定を確認してください。
- 頻繁に使用するダウンロード方法（ZIPまたはaria2）を事前に設定しておくことをお勧めします。