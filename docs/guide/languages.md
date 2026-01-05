---
title: Languages
---

# Languages & Multi-language Support

The script has built-in language packs and supports automatic detection and manual switching.

## Language Mechanism

- When `customLang` is set to `auto`, it automatically detects the browser language.
- You can also manually specify a specific language.

## Custom Language Packs

Language packs are based on `pvcep_lang.js`, containing:

- Language list
- Field and text mapping
- Language switching function

If you need to add a new translation, you can append a new language entry based on the template.

## Tips

- If text is missing on the site, check if `customLang` matches.
- Keep keys complete when customizing languages to avoid missing strings.