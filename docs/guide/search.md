---
title: Search by Image
---

# Search by Image

The script has built-in multi-search engine support, allowing you to quickly switch engines without copying links.

## Default Engines

Default search list (order can be customized, engines can be added/removed):

- Google
- Yandex
- SauceNAO
- IQDB / 3D IQDB
- Baidu
- Bing
- TinEye
- Sogou
- 360
- Ascii2D
- Trace Moe
- KarmaDecay
- QRCode / QRdecode

## Common Settings

| Setting | Description | Default |
| --- | --- | --- |
| `firstEngine` | Default Engine | `Tineye` |
| `gallery.searchData` | Engine List | Preset Template |

## Custom Engines

Edit `gallery.searchData` in settings, format:

```
Engine Name | Search Link#t#
```

`#t#` will be replaced by the image URL.

## Usage Tips

- For Anime/Illustration, SauceNAO and Ascii2D are recommended.
- For people/faces, prioritize Google and Yandex.