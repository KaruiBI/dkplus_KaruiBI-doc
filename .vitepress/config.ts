import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'AgileBI',
  description: 'AgileBI 项目操作文档',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png?v=2' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png?v=2' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico?v=2' }]
  ],
  themeConfig: {
    siteTitle: 'AgileBI 说明文档',
    logo: '/agilebi/brand-icon.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '文档导览', link: '/guide/' },
      { text: '操作手册', link: '/guide/agilebi-operation' },
      { text: 'GitHub', link: 'https://github.com/DKAgileBI/AgileBI_web' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'AgileBI 文档',
          items: [
            { text: '文档导览', link: '/guide/' },
            { text: '为什么选择 dkPlus', link: '/guide/intro' },
            { text: '安装', link: '/guide/install' },
            { text: '快速开始', link: '/guide/quick-start' },
            { text: 'AgileBI 操作手册', link: '/guide/agilebi-operation' },
            { text: '常见问题', link: '/guide/faq' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DKAgileBI/AgileBI_web' }
    ],
    footer: {
      message: '',
      copyright: 'Copyright 2023 dk-plus <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">京ICP备2022007747号-2</a>'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
