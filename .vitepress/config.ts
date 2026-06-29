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
      { text: '操作手册', link: '/guide/manual-login' },
      { text: 'GitHub', link: 'https://github.com/DKAgileBI/AgileBI_web' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '使用指引',
          items: [
            { text: '开始阅读', link: '/guide/' },
            { text: '系统定位', link: '/guide/intro' },
            { text: '页面指引', link: '/guide/install' },
            { text: '模块介绍', link: '/guide/quick-start' }
          ]
        },
        {
          text: '操作手册',
          items: [
            { text: '手册总览', link: '/guide/agilebi-operation' },
            { text: '登录系统', link: '/guide/manual-login' },
            { text: '首页与工作台', link: '/guide/manual-home' },
            { text: '我的模板', link: '/guide/manual-template' },
            { text: '我的组件', link: '/guide/manual-component' },
            { text: '我的数据集', link: '/guide/manual-dataset' },
            { text: '字典管理', link: '/guide/manual-dict' },
            { text: '用户管理', link: '/guide/manual-user' }
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
