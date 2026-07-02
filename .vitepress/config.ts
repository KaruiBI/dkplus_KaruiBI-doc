import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'KaruiBI',
  description: 'KaruiBI 项目操作文档',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=3' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.svg?v=3' }]
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
      { text: 'GitHub', link: 'https://github.com/KaruiBI/dkplus_KaruiBI-doc' }
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
    socialLinks: [{ icon: 'github', link: 'https://github.com/KaruiBI/dkplus_KaruiBI-doc' }],
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
