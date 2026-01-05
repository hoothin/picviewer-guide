---
title: Gallery & Batch
---

# Gallery & Batch Processing

The Gallery is used for batch viewing, filtering, and exporting images.
It is the core feature for efficient collection.

## Access Methods

- `Ctrl + G`: Quickly enter Gallery.
- Float Bar: Click "Gallery".

## Core Capabilities

- Automatically collect available images on the current page.
- Sidebar thumbnails (Top/Bottom/Left/Right layout).
- Image information and description display.
- Slideshow, view switching, fullscreen.

## Gallery Commands

Common commands include:
- Load More / Load All
- URL Filter (filter out unwanted images)
- Export Images (ZIP/aria2/Copy Links)
- Add Image URLs (batch append)

## Common Settings

| Setting | Description | Default |
| --- | --- | --- |
| `gallery.loadMore` | Auto Load More | `false` |
| `gallery.loadAll` | Load All at Once | `true` |
| `gallery.viewmoreEndless` | ViewMore Mode | `true` |
| `gallery.fitToScreen` | Fit to Screen | `true` |
| `gallery.sidebarPosition` | Thumbnail Position | `bottom` |
| `gallery.sidebarSize` | Thumbnail Size | `120` |
| `gallery.backgroundColor` | Background Color | `rgba(20,20,20,0.75)` |
| `gallery.scaleSmallSize` | Small Image Threshold | `250` |
| `gallery.showSmallSize` | Show Small Images by Default | `true` |

## Demos

<img src="https://v2fy.com/asset/063_picviewer_ce/72723103-d911ce00-3bba-11ea-9541-0be746977dbc.gif" width="325" />
<img src="https://v2fy.com/asset/063_picviewer_ce/72767872-7eb35480-3c30-11ea-814d-ce4678c81089.gif" width="325" />
<img src="https://v2fy.com/asset/063_picviewer_ce/73130353-c4598e00-4031-11ea-810e-9498677a40d1.gif" width="325" />

## Tips

- Enable ViewMore and set it to auto-open for automatic cross-page collection.
- If there are too many thumbnails affecting efficiency, use URL filtering or category filtering.