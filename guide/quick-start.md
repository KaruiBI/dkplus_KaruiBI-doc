# 快速开始

下面给你一个最短可运行示例，目标是先确认 `dkPlus` 在你的 Vue 3 项目里能正常显示。

## 入口文件

```ts
import { createApp } from 'vue'
import App from './App.vue'
import dkPlus from 'dk-plus'
import '@dk-plus/theme-chalk'

createApp(App).use(dkPlus).mount('#app')
```

## 页面示例

```vue
<template>
  <div style="padding: 24px">
    <dk-button type="primary">立即体验</dk-button>
  </div>
</template>
```

## 跑不起来时先看这里

- 组件标签是否写成了 `dk-button`
- 是否已经引入 `@dk-plus/theme-chalk`
- 当前项目是否是 Vue 3
- 包管理器安装后是否需要重新启动开发服务

## 推荐下一步

跑通后，继续做这几件事：

1. 在 `components/` 下为常用组件补文档页。
2. 为业务场景准备 2 到 3 个真实案例。
3. 给首页补上产品截图、演示地址和版本说明。
