---
title: Install & Update
---

# Install & Update

## Prerequisites

It is recommended to install a user script manager in your browser:

- Tampermonkey
- Violentmonkey
- ScriptCat

### Browser Permissions (for Chrome-based browsers)

Due to security policy updates in Chrome (e.g., Chrome 138+), you may need to enable "Developer Mode" or the "Allow User Scripts" toggle for the script to function correctly:

1. Right-click the Tampermonkey icon and select **"Manage Extension"**.
   ![](/images/manage_extension.jpg)
2. Locate and enable the **"Allow User Scripts"** toggle.
   ![](/images/userscripts_toggle.png)
3. Alternatively: Navigate to `chrome://extensions` and enable **"Developer Mode"** in the top right corner.

For more details, see the [Tampermonkey FAQ](https://www.tampermonkey.net/faq.php#Q209).

## Installation

1. Open the script installation page and confirm installation.
2. After installation, refresh any webpage. Hover your mouse over an image to see the float bar.
3. If you need PDF export functionality, install the PDF addon additionally (see Addons section).

## Download Links

<div style="display: flex">
	<a style="transition: box-shadow .2s; display: inline-block; background-color: #005200; padding: 0.7rem 1.1rem; color: #fff; text-decoration: none; font-weight: 700; height: fit-content; margin: 6px 0 0 10px;" href="https://greasyfork.org/scripts/24204-picviewer-ce">📲 Install from Greasyfork (Recommended)</a>
	<a style="transition: box-shadow .2s; display: inline-block; background-color: #e2510a; padding: 0.7rem 1.1rem; color: #fff; text-decoration: none; font-weight: 700; height: fit-content; margin: 6px 0 0 10px;" href="https://hoothin.github.io/UserScripts/Picviewer%20CE+/dist.user.js">📲 Install from Github (Mirror)</a>
</div>

## Updates

Your script manager will check for updates automatically. To update immediately, check for updates manually in your manager or reinstall the latest script.

## Initial Configuration

- Open the script configuration interface and confirm the Float Bar is enabled.
- If the preview window does not follow the mouse, check the global shortcut settings.
- It is recommended to set up your preferred download method (ZIP or aria2) in advance.