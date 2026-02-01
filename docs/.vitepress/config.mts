import { defineConfig } from 'vitepress'

const site = "https://pv.hoothin.com";
export default defineConfig({
  title: 'Picviewer CE+',
  cleanUrls: true,
  transformPageData(pageData) {
    const canonicalUrl = `${site}/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '.html')

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'link',
      { rel: 'canonical', href: canonicalUrl }
    ])

    // 动态生成 hreflang 链接
    // 获取当前页面路径（移除语言前缀）
    let pagePath = pageData.relativePath
      .replace(/^(zh|zh\-TW|ja|ru)\//, '') // 移除语言前缀
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '.html')

    // 为每种语言添加 hreflang 标签
    const languages = [
      { code: 'x-default', path: '' },
      { code: 'en-us', path: '' },
      { code: 'zh-cn', path: 'zh/' },
      { code: 'zh-tw', path: 'zh-TW/' },
      { code: 'ru', path: 'ru/' },
      { code: 'ja', path: 'ja/' }
    ]

    languages.forEach(lang => {
      const hreflangUrl = `${site}/${lang.path}${pagePath}`
      pageData.frontmatter.head.push([
        'link',
        { rel: 'alternate', href: hreflangUrl, hreflang: lang.code }
      ])
    })
  },
  head: [
    //Google AdSense
    [
      "script",
      {
        "data-ad-client": "ca-pub-3321669220169470", 
        async: '',
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      },
    ],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-BBKBFR2H5P' } 
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BBKBFR2H5P');` 
    ],
    ["meta", { name: "author", content: "Hoothin" }]
  ],
  themeConfig: {
      socialLinks: [
        { icon: 'github', link: 'https://github.com/hoothin/UserScripts/tree/master/Picviewer%20CE%2B' },
        { icon: 'twitter', link: 'https://twitter.com/intent/follow?screen_name=HoothinDev' },
        { icon: 'discord', link: 'https://discord.com/invite/keqypXC6wD' },
        { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="M373 138.6c-25.2 0-46.3-17.5-51.9-41c-30.6 4.3-54.2 30.7-54.2 62.4v.2c47.4 1.8 90.6 15.1 124.9 36.3c12.6-9.7 28.4-15.5 45.5-15.5c41.3 0 74.7 33.4 74.7 74.7c0 29.8-17.4 55.5-42.7 67.5c-2.4 86.8-97 156.6-213.2 156.6S45.5 410.1 43 323.4c-25.4-11.9-43-37.7-43-67.7C0 214.4 33.4 181 74.7 181c17.2 0 33 5.8 45.7 15.6c34-21.1 76.8-34.4 123.7-36.4v-.3c0-44.3 33.7-80.9 76.8-85.5C325.8 50.2 347.2 32 373 32c29.4 0 53.3 23.9 53.3 53.3s-23.9 53.3-53.3 53.3M157.5 255.3c-20.9 0-38.9 20.8-40.2 47.9s17.1 38.1 38 38.1s36.6-9.8 37.8-36.9s-14.7-49.1-35.7-49.1zM395 303.1c-1.2-27.1-19.2-47.9-40.2-47.9s-36.9 22-35.7 49.1s16.9 36.9 37.8 36.9s39.3-11 38-38.1zm-60.1 70.8c1.5-3.6-1-7.7-4.9-8.1c-23-2.3-47.9-3.6-73.8-3.6s-50.8 1.3-73.8 3.6c-3.9.4-6.4 4.5-4.9 8.1c12.9 30.8 43.3 52.4 78.7 52.4s65.8-21.6 78.7-52.4"/></svg>' }, link: 'https://www.reddit.com/r/PicviewerCE' }
]
      ,footer: {
        message: 'Support the project: <a href="https://ko-fi.com/hoothin" target="_blank" rel="noopener noreferrer">Ko-fi</a> ? <a href="https://afdian.com/@hoothin" target="_blank" rel="noopener noreferrer">???</a>'
      }
  },
  sitemap: {
    hostname: site
  },
  
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      head: [
        ['meta', { name: 'keywords', content: 'Picviewer CE+, userscript, image viewer, batch downloader, gallery mode, image search, Tampermonkey, image rules' }]
      ],
      description: 'Powerful userscript for web image viewing and batch downloading. Features hover zoom, gallery mode, auto original image retrieval, and easy export.',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/what-is' },
          { text: 'Rules', link: '/rules/overview' },
          { text: 'Addons', link: '/addons/pdf-addon' },
          { text: 'Reference', link: '/reference/settings' }
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'Introduction',
              items: [
                { text: 'What is it?', link: '/guide/what-is' },
                { text: 'Install & Update', link: '/guide/install' },
                { text: 'Quick Start', link: '/guide/quickstart' },
                { text: 'First Run', link: '/guide/first-run' },
                { text: 'Shortcuts', link: '/guide/shortcuts' }
              ]
            },
            {
              text: 'Core Features',
              items: [
                { text: 'Float Bar', link: '/guide/float-bar' },
                { text: 'Magnifier', link: '/guide/magnifier' },
                { text: 'Image Window', link: '/guide/img-window' },
                { text: 'Gallery & Batch', link: '/guide/gallery' },
                { text: 'Download & Convert', link: '/guide/download' },
                { text: 'Search by Image', link: '/guide/search' },
                { text: 'Languages', link: '/guide/languages' }
              ]
            },
            {
              text: 'Advanced',
              items: [
                { text: 'Internals', link: '/guide/internals' },
                { text: 'FAQ', link: '/guide/faq' }
              ]
            },
            {
              text: 'Donate',
              items: [
                { text: 'Ko-fi', link: 'https://ko-fi.com/hoothin' },
                { text: '愛發電', link: 'https://afdian.com/@hoothin' }
              ]
            }
          ],
          '/rules/': [
            {
              text: 'Rule System',
              items: [
                { text: 'Overview', link: '/rules/overview' },
                { text: 'Basic Fields', link: '/rules/basic' },
                { text: 'Advanced Fields', link: '/rules/advanced' }
              ]
            },
            {
              text: 'Capabilities',
              items: [
                { text: 'getImage: URL Rewrite', link: '/rules/getimage' },
                { text: 'getExtSrc: Non-Image Source', link: '/rules/getextsrc' },
                { text: 'ext: Neighbor Element', link: '/rules/ext' },
                { text: 'xhr: Inner Page Fetch', link: '/rules/xhr' },
                { text: 'clickToOpen: Click to Open', link: '/rules/click-to-open' }
              ]
            },
            {
              text: 'Practice',
              items: [
                { text: 'Examples', link: '/rules/examples' },
                { text: 'Debugging', link: '/rules/debug' }
              ]
            },
            {
              text: 'Donate',
              items: [
                { text: 'Ko-fi', link: 'https://ko-fi.com/hoothin' },
                { text: '愛發電', link: 'https://afdian.com/@hoothin' }
              ]
            }
          ],
          '/addons/': [
            {
              text: 'Extensions',
              items: [
                { text: 'PDF Addon', link: '/addons/pdf-addon' },
                { text: 'Blank Gallery', link: '/addons/blank-gallery' }
              ]
            },
            {
              text: 'Donate',
              items: [
                { text: 'Ko-fi', link: 'https://ko-fi.com/hoothin' },
                { text: '愛發電', link: 'https://afdian.com/@hoothin' }
              ]
            }
          ],
          '/reference/': [
            {
              text: 'Reference',
              items: [
                { text: 'Settings', link: '/reference/settings' },
                { text: 'Defaults', link: '/reference/defaults' },
                { text: 'Templates', link: '/reference/templates' }
              ]
            },
            {
              text: 'Donate',
              items: [
                { text: 'Ko-fi', link: 'https://ko-fi.com/hoothin' },
                { text: '愛發電', link: 'https://afdian.com/@hoothin' }
              ]
            }
          ]
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      head: [
        ['meta', { name: 'keywords', content: 'Picviewer CE+, 脚本, 图片浏览器, 批量下载, 以图搜图, 画廊模式, 油猴脚本, 图片规则' }]
      ],
      description: '强大的网页图片浏览与批量下载脚本。支持悬停放大、画廊模式、自动获取原图及便捷导出。',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh/guide/what-is' },
          { text: '规则', link: '/zh/rules/overview' },
          { text: '插件', link: '/zh/addons/pdf-addon' },
          { text: '参考', link: '/zh/reference/settings' }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              text: '入门',
              items: [
                { text: '脚本是什么', link: '/zh/guide/what-is' },
                { text: '安装与更新', link: '/zh/guide/install' },
                { text: '快速上手', link: '/zh/guide/quickstart' },
                { text: '首次运行', link: '/zh/guide/first-run' },
                { text: '快捷键与手势', link: '/zh/guide/shortcuts' }
              ]
            },
            {
              text: '核心功能',
              items: [
                { text: '浮动工具栏', link: '/zh/guide/float-bar' },
                { text: '放大镜', link: '/zh/guide/magnifier' },
                { text: '图片窗', link: '/zh/guide/img-window' },
                { text: '画廊与批量处理', link: '/zh/guide/gallery' },
                { text: '下载与格式转换', link: '/zh/guide/download' },
                { text: '以图搜图', link: '/zh/guide/search' },
                { text: '语言与多语支持', link: '/zh/guide/languages' }
              ]
            },
            {
              text: '高级',
              items: [
                { text: '运行机制与匹配流程', link: '/zh/guide/internals' },
                { text: '常见问题', link: '/zh/guide/faq' }
              ]
            },
            {
              text: '捐赠支持',
              items: [
                { text: 'Ko-fi', link: 'https://ko-fi.com/hoothin' },
                { text: '愛發電', link: 'https://afdian.com/@hoothin' }
              ]
            }
          ],
          '/zh/rules/': [
            {
              text: '规则体系',
              items: [
                { text: '规则总览', link: '/zh/rules/overview' },
                { text: '基础字段', link: '/zh/rules/basic' },
                { text: '高级字段', link: '/zh/rules/advanced' }
              ]
            },
            {
              text: '能力专项',
              items: [
                { text: 'getImage：改写图片地址', link: '/zh/rules/getimage' },
                { text: 'getExtSrc：非图元素取图', link: '/zh/rules/getextsrc' },
                { text: 'ext：邻近元素捕获', link: '/zh/rules/ext' },
                { text: 'xhr：内页抓取', link: '/zh/rules/xhr' },
                { text: 'clickToOpen：点击打开', link: '/zh/rules/click-to-open' }
              ]
            },
            {
              text: '实战',
              items: [
                { text: '规则示例库', link: '/zh/rules/examples' },
                { text: '排错与调试', link: '/zh/rules/debug' }
              ]
            },
            {
              text: '捐赠支持',
              items: [
                { text: 'Ko-fi', link: 'https://ko-fi.com/hoothin' },
                { text: '愛發電', link: 'https://afdian.com/@hoothin' }
              ]
            }
          ],
          '/zh/addons/': [
            {
              text: '扩展与工具',
              items: [
                { text: 'PDF 插件', link: '/zh/addons/pdf-addon' },
                { text: '空白画廊页', link: '/zh/addons/blank-gallery' }
              ]
            },
            {
              text: '捐赠支持',
              items: [
                { text: 'Ko-fi', link: 'https://ko-fi.com/hoothin' },
                { text: '愛發電', link: 'https://afdian.com/@hoothin' }
              ]
            }
          ],
          '/zh/reference/': [
            {
              text: '参考',
              items: [
                { text: '设置项总览', link: '/zh/reference/settings' },
                { text: '默认值速查', link: '/zh/reference/defaults' },
                { text: '配置模板', link: '/zh/reference/templates' }
              ]
            },
            {
              text: '捐赠支持',
              items: [
                { text: 'Ko-fi', link: 'https://ko-fi.com/hoothin' },
                { text: '愛發電', link: 'https://afdian.com/@hoothin' }
              ]
            }
          ]
        }
      }
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      link: '/zh-TW/',
      head: [
        ['meta', { name: 'keywords', content: 'Picviewer CE+, 腳本, 圖片瀏覽器, 批量下載, 以圖搜圖, 畫廊模式, 油猴腳本, 圖片規則' }]
      ],
      description: '強大的網頁圖片瀏覽與批量下載腳本。支持懸停放大、畫廊模式、自動獲取原圖及便捷導出。',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh-TW/guide/what-is' },
          { text: '規則', link: '/zh-TW/rules/overview' },
          { text: '插件', link: '/zh-TW/addons/pdf-addon' },
          { text: '參考', link: '/zh-TW/reference/settings' }
        ],
        sidebar: {
          '/zh-TW/guide/': [
            {
              text: '入門',
              items: [
                { text: '腳本是什麼', link: '/zh-TW/guide/what-is' },
                { text: '安裝與更新', link: '/zh-TW/guide/install' },
                { text: '快速上手', link: '/zh-TW/guide/quickstart' },
                { text: '首次運行', link: '/zh-TW/guide/first-run' },
                { text: '快捷鍵與手勢', link: '/zh-TW/guide/shortcuts' }
              ]
            },
            {
              text: '核心功能',
              items: [
                { text: '浮動工具欄', link: '/zh-TW/guide/float-bar' },
                { text: '放大鏡', link: '/zh-TW/guide/magnifier' },
                { text: '圖片窗', link: '/zh-TW/guide/img-window' },
                { text: '畫廊與批量處理', link: '/zh-TW/guide/gallery' },
                { text: '下載與格式轉換', link: '/zh-TW/guide/download' },
                { text: '以圖搜圖', link: '/zh-TW/guide/search' },
                { text: '語言與多語支持', link: '/zh-TW/guide/languages' }
              ]
            },
            {
              text: '高級',
              items: [
                { text: '運行機制與匹配流程', link: '/zh-TW/guide/internals' },
                { text: '常見問題', link: '/zh-TW/guide/faq' }
              ]
            },
            {
              text: '捐贈支持',
              items: [
                { text: 'Ko-fi', link: 'https://ko-fi.com/hoothin' },
                { text: '愛發電', link: 'https://afdian.com/@hoothin' }
              ]
            }
          ],
          '/zh-TW/rules/': [
            {
              text: '規則體系',
              items: [
                { text: '規則總覽', link: '/zh-TW/rules/overview' },
                { text: '基礎字段', link: '/zh-TW/rules/basic' },
                { text: '高級字段', link: '/zh-TW/rules/advanced' }
              ]
            },
            {
              text: '能力專項',
              items: [
                { text: 'getImage：改寫圖片地址', link: '/zh-TW/rules/getimage' },
                { text: 'getExtSrc：非圖元素取圖', link: '/zh-TW/rules/getextsrc' },
                { text: 'ext：鄰近元素捕獲', link: '/zh-TW/rules/ext' },
                { text: 'xhr：內頁抓取', link: '/zh-TW/rules/xhr' },
                { text: 'clickToOpen：點擊打開', link: '/zh-TW/rules/click-to-open' }
              ]
            },
            {
              text: '實戰',
              items: [
                { text: '規則示例庫', link: '/zh-TW/rules/examples' },
                { text: '排錯與調試', link: '/zh-TW/rules/debug' }
              ]
            },
            {
              text: '捐贈支持',
              items: [
                { text: 'Ko-fi', link: 'https://ko-fi.com/hoothin' },
                { text: '愛發電', link: 'https://afdian.com/@hoothin' }
              ]
            }
          ],
          '/zh-TW/addons/': [
            {
              text: '擴展與工具',
              items: [
                { text: 'PDF 插件', link: '/zh-TW/addons/pdf-addon' },
                { text: '空白畫廊頁', link: '/zh-TW/addons/blank-gallery' }
              ]
            },
            {
              text: '捐贈支持',
              items: [
                { text: 'Ko-fi', link: 'https://ko-fi.com/hoothin' },
                { text: '愛發電', link: 'https://afdian.com/@hoothin' }
              ]
            }
          ],
          '/zh-TW/reference/': [
            {
              text: '參考',
              items: [
                { text: '設置項總覽', link: '/zh-TW/reference/settings' },
                { text: '默認值速查', link: '/zh-TW/reference/defaults' },
                { text: '配置模板', link: '/zh-TW/reference/templates' }
              ]
            },
            {
              text: '捐贈支持',
              items: [
                { text: 'Ko-fi', link: 'https://ko-fi.com/hoothin' },
                { text: '愛發電', link: 'https://afdian.com/@hoothin' }
              ]
            }
          ]
        }
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      link: '/ja/',
      head: [
        ['meta', { name: 'keywords', content: 'Picviewer CE+, ユーザースクリプト, 画像ビューア, 一括ダウンロード, 画像検索, ギャラリーモード, Tampermonkey, 画像ルール' }]
      ],
      description: 'Web画像の閲覧と一括ダウンロードのための強力なユーザースクリプト。ホバー拡大、ギャラリーモード、元画像の自動取得、簡単なエクスポート機能を備えています。',
      themeConfig: {
        nav: [
          { text: 'ガイド', link: '/ja/guide/what-is' },
          { text: 'ルール', link: '/ja/rules/overview' },
          { text: 'アドオン', link: '/ja/addons/pdf-addon' },
          { text: 'リファレンス', link: '/ja/reference/settings' }
        ],
        sidebar: {
          '/ja/guide/': [
            {
              text: '入門',
              items: [
                { text: 'Picviewer CE+とは', link: '/ja/guide/what-is' },
                { text: 'インストールと更新', link: '/ja/guide/install' },
                { text: 'クイックスタート', link: '/ja/guide/quickstart' },
                { text: '初回実行', link: '/ja/guide/first-run' },
                { text: 'ショートカット', link: '/ja/guide/shortcuts' }
              ]
            },
            {
              text: '主要機能',
              items: [
                { text: 'フローティングバー', link: '/ja/guide/float-bar' },
                { text: '拡大鏡', link: '/ja/guide/magnifier' },
                { text: '画像ウィンドウ', link: '/ja/guide/img-window' },
                { text: 'ギャラリーと一括処理', link: '/ja/guide/gallery' },
                { text: 'ダウンロードと形式変換', link: '/ja/guide/download' },
                { text: '画像検索', link: '/ja/guide/search' },
                { text: '言語設定', link: '/ja/guide/languages' }
              ]
            },
            {
              text: '上級',
              items: [
                { text: '動作メカニズム', link: '/ja/guide/internals' },
                { text: 'よくある質問', link: '/ja/guide/faq' }
              ]
            },
            {
              text: '寄付',
              items: [
                { text: 'Ko-fi', link: 'https://ko-fi.com/hoothin' },
                { text: '愛發電', link: 'https://afdian.com/@hoothin' }
              ]
            }
          ],
          '/ja/rules/': [
            {
              text: 'ルール体系',
              items: [
                { text: 'ルール概要', link: '/ja/rules/overview' },
                { text: '基本フィールド', link: '/ja/rules/basic' },
                { text: '高度なフィールド', link: '/ja/rules/advanced' }
              ]
            },
            {
              text: '機能詳細',
              items: [
                { text: 'getImage：URL書き換え', link: '/ja/rules/getimage' },
                { text: 'getExtSrc：非画像取得', link: '/ja/rules/getextsrc' },
                { text: 'ext：隣接要素', link: '/ja/rules/ext' },
                { text: 'xhr：内部ページ取得', link: '/ja/rules/xhr' },
                { text: 'clickToOpen：クリックして開く', link: '/ja/rules/click-to-open' }
              ]
            },
            {
              text: '実践',
              items: [
                { text: 'ルール例', link: '/ja/rules/examples' },
                { text: 'デバッグ', link: '/ja/rules/debug' }
              ]
            },
            {
              text: '寄付',
              items: [
                { text: 'Ko-fi', link: 'https://ko-fi.com/hoothin' },
                { text: '愛發電', link: 'https://afdian.com/@hoothin' }
              ]
            }
          ],
          '/ja/addons/': [
            {
              text: '拡張機能',
              items: [
                { text: 'PDFアドオン', link: '/ja/addons/pdf-addon' },
                { text: '空のギャラリー', link: '/ja/addons/blank-gallery' }
              ]
            },
            {
              text: '寄付',
              items: [
                { text: 'Ko-fi', link: 'https://ko-fi.com/hoothin' },
                { text: '愛發電', link: 'https://afdian.com/@hoothin' }
              ]
            }
          ],
          '/ja/reference/': [
            {
              text: 'リファレンス',
              items: [
                { text: '設定一覧', link: '/ja/reference/settings' },
                { text: 'デフォルト値', link: '/ja/reference/defaults' },
                { text: '設定テンプレート', link: '/ja/reference/templates' }
              ]
            },
            {
              text: '寄付',
              items: [
                { text: 'Ko-fi', link: 'https://ko-fi.com/hoothin' },
                { text: '愛發電', link: 'https://afdian.com/@hoothin' }
              ]
            }
          ]
        }
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      link: '/ru/',
      head: [
        ['meta', { name: 'keywords', content: 'Picviewer CE+, пользовательский скрипт, просмотрщик изображений, пакетная загрузка, поиск по картинке, режим галереи, Tampermonkey, правила изображений' }]
      ],
      description: 'Мощный пользовательский скрипт для просмотра и пакетного скачивания веб-изображений. Функции включают увеличение при наведении, режим галереи, автоматическое получение оригиналов и простой экспорт.',
      themeConfig: {
        nav: [
          { text: 'Руководство', link: '/ru/guide/what-is' },
          { text: 'Правила', link: '/ru/rules/overview' },
          { text: 'Дополнения', link: '/ru/addons/pdf-addon' },
          { text: 'Справка', link: '/ru/reference/settings' }
        ],
        sidebar: {
          '/ru/guide/': [
            {
              text: 'Введение',
              items: [
                { text: 'Что это такое?', link: '/ru/guide/what-is' },
                { text: 'Установка и обновление', link: '/ru/guide/install' },
                { text: 'Быстрый старт', link: '/ru/guide/quickstart' },
                { text: 'Первый запуск', link: '/ru/guide/first-run' },
                { text: 'Горячие клавиши', link: '/ru/guide/shortcuts' }
              ]
            },
            {
              text: 'Основные функции',
              items: [
                { text: 'Плавающая панель', link: '/ru/guide/float-bar' },
                { text: 'Лупа', link: '/ru/guide/magnifier' },
                { text: 'Окно изображения', link: '/ru/guide/img-window' },
                { text: 'Галерея и пакетная обработка', link: '/ru/guide/gallery' },
                { text: 'Скачивание и конвертация', link: '/ru/guide/download' },
                { text: 'Поиск по картинке', link: '/ru/guide/search' },
                { text: 'Языки', link: '/ru/guide/languages' }
              ]
            },
            {
              text: 'Дополнительно',
              items: [
                { text: 'Внутренние механизмы', link: '/ru/guide/internals' },
                { text: 'Частые вопросы', link: '/ru/guide/faq' }
              ]
            },
            {
              text: 'Поддержать',
              items: [
                { text: 'Ko-fi', link: 'https://ko-fi.com/hoothin' },
                { text: '愛發電', link: 'https://afdian.com/@hoothin' }
              ]
            }
          ],
          '/ru/rules/': [
            {
              text: 'Система правил',
              items: [
                { text: 'Обзор правил', link: '/ru/rules/overview' },
                { text: 'Базовые поля', link: '/ru/rules/basic' },
                { text: 'Продвинутые поля', link: '/ru/rules/advanced' }
              ]
            },
            {
              text: 'Возможности',
              items: [
                { text: 'getImage: Изменение URL', link: '/ru/rules/getimage' },
                { text: 'getExtSrc: Не-изображения', link: '/ru/rules/getextsrc' },
                { text: 'ext: Соседние элементы', link: '/ru/rules/ext' },
                { text: 'xhr: XHR запросы', link: '/ru/rules/xhr' },
                { text: 'clickToOpen: Клик для открытия', link: '/ru/rules/click-to-open' }
              ]
            },
            {
              text: 'Практика',
              items: [
                { text: 'Примеры правил', link: '/ru/rules/examples' },
                { text: 'Отладка', link: '/ru/rules/debug' }
              ]
            },
            {
              text: 'Поддержать',
              items: [
                { text: 'Ko-fi', link: 'https://ko-fi.com/hoothin' },
                { text: '愛發電', link: 'https://afdian.com/@hoothin' }
              ]
            }
          ],
          '/ru/addons/': [
            {
              text: 'Расширения',
              items: [
                { text: 'PDF аддон', link: '/ru/addons/pdf-addon' },
                { text: 'Пустая галерея', link: '/ru/addons/blank-gallery' }
              ]
            },
            {
              text: 'Поддержать',
              items: [
                { text: 'Ko-fi', link: 'https://ko-fi.com/hoothin' },
                { text: '愛發電', link: 'https://afdian.com/@hoothin' }
              ]
            }
          ],
          '/ru/reference/': [
            {
              text: 'Справка',
              items: [
                { text: 'Настройки', link: '/ru/reference/settings' },
                { text: 'Значения по умолчанию', link: '/ru/reference/defaults' },
                { text: 'Шаблоны', link: '/ru/reference/templates' }
              ]
            },
            {
              text: 'Поддержать',
              items: [
                { text: 'Ko-fi', link: 'https://ko-fi.com/hoothin' },
                { text: '愛發電', link: 'https://afdian.com/@hoothin' }
              ]
            }
          ]
        }
      }
    }
  }
})
