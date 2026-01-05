---
title: clickToOpen：Клик для открытия
---

# clickToOpen: Клик для открытия

`clickToOpen` используется для запуска открытия оригинала, текущего изображения или лупы по клику.

## Пример

```js
clickToOpen: {
  enabled: true,
  preventDefault: true,
  type: 'actual',
  button: 0,
  alt: false,
  ctrl: false,
  shift: false,
  meta: false
}
```

## Описание полей

| Поле | Описание |
| --- | --- |
| `enabled` | Включено ли |
| `preventDefault` | Предотвращать поведение по умолчанию |
| `type` | `actual` / `current` / `magnifier` |
| `button` | Кнопка мыши (0/1/2) |
| `alt/ctrl/shift/meta` | Нужны ли клавиши-модификаторы |

## Советы

Для сайтов, требующих взаимодействия по клику, `clickToOpen` может заменить срабатывание по наведению.