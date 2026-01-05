---
title: Значения по умолчанию
---

# Значения по умолчанию

Ниже приведены основные поля и значения по умолчанию для настроек скрипта.

## floatBar

| Key | Default | Notes |
| --- | --- | --- |
| `butonOrder` | `actual,current,gallery,magnifier,download` | Порядок кнопок |
| `additionalFeature` | `open` | Доп. действие |
| `invertAdditionalFeature` | `false` | Инверсия действия |
| `listenBg` | `true` | Фон |
| `showDelay` | `100` | Задержка показа (мс) |
| `hideDelay` | `566` | Задержка скрытия (мс) |
| `position` | `top left` | Позиция |
| `stayOut` | `false` | Снаружи |
| `stayOutOffsetX` | `0` | Смещение X |
| `stayOutOffsetY` | `0` | Смещение Y |
| `forceShow.enabled` | `true` | Принуд. показ |
| `forceShow.size` | `w:100 h:100` | Порог размера |
| `showWithRules` | `true` | Показ по правилам |
| `minSizeLimit` | `w:50 h:50` | Мин. размер |
| `sizeLimitOr` | `false` | Логика размера OR |
| `keys.enable` | `false` | Включить клавиши |
| `keys.actual` | `a` | Оригинал |
| `keys.search` | `s` | Поиск |
| `keys.current` | `c` | Текущее |
| `keys.magnifier` | `m` | Лупа |
| `keys.gallery` | `g` | Галерея |
| `keys.download` | `d` | Скачивание |
| `globalkeys.ctrl` | `true` | Ctrl Предпросмотр |
| `globalkeys.type` | `hold` | Режим удержания |
| `globalkeys.closeAfterPreview` | `true` | Закрыть после |
| `globalkeys.previewFollowMouse` | `true` | Следовать за мышью |

## magnifier

| Key | Default | Notes |
| --- | --- | --- |
| `magnifier.radius` | `77` | Радиус |
| `magnifier.wheelZoom.enabled` | `true` | Зум колесом |
| `magnifier.wheelZoom.pauseFirst` | `true` | Сначала пауза |
| `magnifier.wheelZoom.scaleImage` | `true` | Масштаб картинки |
| `magnifier.wheelZoom.range` | `0.1 ~ 9.0` | Список масштабов |

## gallery

| Key | Default | Notes |
| --- | --- | --- |
| `gallery.loadMore` | `false` | Автозагрузка еще |
| `gallery.loadAll` | `true` | Загрузить все |
| `gallery.viewmoreEndless` | `true` | ViewMore |
| `gallery.fitToScreen` | `true` | По экрану |
| `gallery.fitToScreenSmall` | `false` | Мелкие по экрану |
| `gallery.scrollEndToChange` | `true` | Смена прокруткой |
| `gallery.exportType` | `grid` | Сортировка экспорта |
| `gallery.sidebarPosition` | `bottom` | Позиция панели |
| `gallery.sidebarSize` | `120` | Размер панели |
| `gallery.backgroundColor` | `rgba(20,20,20,0.75)` | Цвет фона |
| `gallery.formatConversion` | `webp>png` | Конвертация |
| `gallery.aria2Host` | `http://localhost:6800` | aria2 RPC |
| `gallery.aria2Token` | `""` | aria2 Token |
| `gallery.transition` | `true` | Анимация |
| `gallery.preload` | `true` | Предзагрузка |
| `gallery.max` | `3` | Кол-во предзагрузки |
| `gallery.scaleSmallSize` | `250` | Порог мелких |
| `gallery.showSmallSize` | `true` | Показывать мелкие |
| `gallery.disableArrow` | `false` | Отключить стрелки |
| `gallery.autoZoom` | `false` | Автосброс зума |
| `gallery.descriptionLength` | `32` | Длина описания |
| `gallery.defaultSizeLimit` | `w:80 h:80` | Размер по умолчанию |
| `gallery.downloadWithZip` | `true` | ZIP скачивание |
| `gallery.autoOpenViewmore` | `false` | Авто ViewMore |
| `gallery.downloadGap` | `100` | Интервал скачивания |

## imgWindow

| Key | Default | Notes |
| --- | --- | --- |
| `imgWindow.suitLongImg` | `true` | Длинные изображения |
| `imgWindow.fitToScreen` | `true` | По экрану |
| `imgWindow.fitToScreenSmall` | `false` | Мелкие по экрану |
| `imgWindow.syncSelectedTool` | `true` | Синхронизация |
| `imgWindow.defaultTool` | `hand` | Инструмент |
| `imgWindow.close.escKey` | `true` | Esc закрыть |
| `imgWindow.close.dblClickImgWindow` | `true` | Двойной клик закрыть |
| `imgWindow.close.clickOutside` | `""` | Клик снаружи закрыть |
| `imgWindow.overlayer.shown` | `false` | Показать маску |
| `imgWindow.overlayer.color` | `rgba(200,200,200,0.3)` | Цвет маски |
| `imgWindow.shiftRotateStep` | `15` | Шаг вращения |
| `imgWindow.zoom.mouseWheelZoom` | `true` | Зум колесом |
| `imgWindow.zoom.range` | `0.1 ~ 9.0` | Список масштабов |
| `imgWindow.fixed` | `false` | Фиксация позиции |

## other

| Key | Default | Notes |
| --- | --- | --- |
| `waitImgLoad` | `false` | Ждать загрузку |
| `framesPicOpenInTopWindow` | `true` | Открыть в топ окне |
| `customLang` | `auto` | Язык |
| `customRules` | JSON Template | Польз. правила |
| `firstEngine` | `Tineye` | Поисковик |
| `debug` | `false` | Отладка |