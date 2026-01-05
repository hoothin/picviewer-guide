---
title: Download & Convert
---

# Download & Convert

Download capabilities are centralized in the Gallery and Float Bar, supporting multiple export methods.

## Download Methods

- **Direct Download**: Single image or batch download to local storage.
- **ZIP Pack**: One-click packing, suitable for large batches.
- **aria2 Remote**: Send tasks to aria2 RPC.

## Format Conversion

Use `gallery.formatConversion` to define conversion rules, for example:

```
webp>png
```

Supports multi-line configuration, tried in order.

## aria2 Configuration

| Setting | Description | Default |
| --- | --- | --- |
| `gallery.aria2Host` | RPC Address | `http://localhost:6800` |
| `gallery.aria2Token` | RPC Token | `""` |

## Download Pace Control

`gallery.downloadGap` is used to control the interval between requests to avoid triggering site rate limits.

## Recommended Usage

- Prefer ZIP or aria2 for batch downloads.
- For high-res image sites, it is recommended to use format conversion to avoid downloading webp files which might be inconvenient to process later.