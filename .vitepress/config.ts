import { defineConfig } from 'vitepress'

const siteUrl = 'https://karuibi.dk-plus.com'
const siteTitle = 'KaruiBI'
const siteDescription =
  'KaruiBI 项目型 BI 平台操作文档，由君衍、Mr·Fan、FanKai、范凯持续整理，覆盖首页工作台、模板、组件、数据集、AI 分析页、模型管理、字典管理与用户管理，适用于产品说明、培训交付与实施讲解。'
const ogImage = `${siteUrl}/agilebi/doc-preview-fresh.png`
const githubRepo = 'https://github.com/KaruiBI/dkplus_KaruiBI-doc'

export default defineConfig({
  lang: 'zh-CN',
  title: siteTitle,
  description: siteDescription,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=3' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.svg?v=3' }],
    ['link', { rel: 'canonical', href: siteUrl }],
    ['meta', { name: 'description', content: siteDescription }],
    [
      'meta',
      {
        name: 'keywords',
        content:
          'KaruiBI,FanKai,范凯,君衍,Mr·Fan,dkplus,dk-plus,dkplusui,dk-plus-ui,BI文档,BI平台,操作文档,项目文档,培训交付,数据看板,模板管理,组件管理,数据集管理,AI分析,模型管理'
      }
    ],
    ['meta', { name: 'author', content: '君衍 / Mr·Fan / FanKai / 范凯 / KaruiBI' }],
    ['meta', { name: 'robots', content: 'index,follow,max-image-preview:large' }],
    ['meta', { name: 'theme-color', content: '#2f73ff' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: siteTitle }],
    ['meta', { property: 'og:title', content: `${siteTitle} | 项目操作文档` }],
    ['meta', { property: 'og:description', content: siteDescription }],
    ['meta', { property: 'og:url', content: siteUrl }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:image:alt', content: 'KaruiBI 项目操作文档首页预览图' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: `${siteTitle} | 项目操作文档` }],
    ['meta', { name: 'twitter:description', content: siteDescription }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteTitle,
        alternateName: ['dkplus', 'dkplusui', 'dk-plus', 'dk-plus-ui'],
        url: siteUrl,
        logo: `${siteUrl}/favicon.svg`,
        sameAs: [githubRepo, 'https://dk-plus.com/zh/']
      })
    ],
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteTitle,
        alternateName: ['dkplus', 'dkplusui', 'KaruiBI 文档', 'KaruiBI 操作文档'],
        url: siteUrl,
        description: siteDescription,
        inLanguage: 'zh-CN',
        publisher: {
          '@type': 'Organization',
          name: siteTitle
        }
      })
    ],
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: `${siteTitle} 项目操作文档`,
        description: siteDescription,
        url: siteUrl,
        image: ogImage,
        inLanguage: 'zh-CN',
        author: {
          '@type': 'Person',
          name: '君衍 / Mr·Fan / FanKai / 范凯',
          alternateName: ['君衍', 'Mr·Fan', 'FanKai', '范凯']
        },
        publisher: {
          '@type': 'Organization',
          name: siteTitle,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/favicon.svg`
          }
        }
      })
    ]
  ],
  themeConfig: {
    siteTitle: false,
    logo: '/agilebi/karuibi-brand-logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '文档导览', link: '/guide/' },
      { text: '关于作者｜赞助', link: '/author' },
      { text: '免责声明', link: '/statement' },
      {
        text: '相关链接',
        items: [
          { text: 'Vue3', link: 'https://cn.vuejs.org/' },
          { text: 'NaiveUI', link: 'https://www.naiveui.com/' },
          { text: 'Pinia', link: 'https://pinia.vuejs.org/' },
          { text: 'Vite', link: 'https://cn.vitejs.dev/' },
          { text: 'TypeScript', link: 'https://www.typescriptlang.org/' },
          { text: 'ECharts', link: 'https://echarts.apache.org/zh/index.html' },
          { text: 'VisActor', link: 'https://www.visactor.io/' }
        ]
      },
      { text: 'GitHub', link: githubRepo }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '使用指引',
          items: [
            { text: '开始阅读', link: '/guide/' },
            { text: '系统定位', link: '/guide/intro' },
            { text: '页面指引', link: '/guide/install' },
            { text: '模块介绍', link: '/guide/quick-start' },
            { text: '常见问题', link: '/guide/faq' }
          ]
        },
        {
          text: '操作手册',
          items: [
            { text: '手册总览', link: '/guide/agilebi-operation' },
            { text: '登录系统', link: '/guide/manual-login' },
            {
              text: '我的工作台',
              collapsed: false,
              items: [
                { text: '首页与工作台', link: '/guide/manual-home' },
                { text: '我的模板', link: '/guide/manual-template' },
                { text: '我的组件', link: '/guide/manual-component' },
                { text: '我的数据集', link: '/guide/manual-dataset' }
              ]
            },
            {
              text: '公共',
              collapsed: false,
              items: [
                { text: '公共模板', link: '/guide/manual-public-template' },
                { text: '公共组件', link: '/guide/manual-public-component' },
                { text: '公共数据集', link: '/guide/manual-public-dataset' }
              ]
            },
            {
              text: 'AI分析页',
              collapsed: false,
              items: [
                { text: '列表', link: '/guide/manual-ai-list' },
                { text: '设置', link: '/guide/manual-ai-setting' }
              ]
            },
            {
              text: '后台管理',
              collapsed: false,
              items: [
                {
                  text: '模型管理',
                  collapsed: false,
                  items: [
                    { text: '总览', link: '/guide/manual-model' },
                    { text: '全局 AI 设置', link: '/guide/manual-model-global' },
                    { text: '模型列表管理', link: '/guide/manual-model-list' },
                    { text: 'AI 助手弹窗', link: '/guide/manual-model-ai-popup' },
                    { text: '用户记忆', link: '/guide/manual-model-memory' },
                    { text: '公共技能提示词', link: '/guide/manual-model-prompt' },
                    { text: '场景配置', link: '/guide/manual-model-scene' },
                    { text: '模型使用统计', link: '/guide/manual-model-stats' },
                    { text: '会话列表管理', link: '/guide/manual-model-session' },
                    { text: 'appKey 管理', link: '/guide/manual-model-appkey' },
                    { text: '开放接口联调', link: '/guide/manual-model-openapi-debug' },
                    { text: '影子用户日志', link: '/guide/manual-model-shadow-user' },
                    { text: 'AI 调试控制台', link: '/guide/manual-model-debug-console' }
                  ]
                },
                { text: '字典管理', link: '/guide/manual-dict' },
                { text: '用户管理', link: '/guide/manual-user' }
              ]
            }
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: githubRepo }],
    footer: {
      message: '',
      copyright:
        'Copyright 2023 dk-plus <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">京ICP备2022007747号-2</a>'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
