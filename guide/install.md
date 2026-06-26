# 安装

## 环境要求

- Node.js 18 及以上
- 推荐使用 `pnpm`

## 安装 dkPlus

```bash
pnpm add dk-plus
```

如果你使用 `npm`：

```bash
npm install dk-plus
```

## 样式引入

通常需要同时引入主题样式：

```ts
import { createApp } from 'vue'
import App from './App.vue'
import dkPlus from 'dk-plus'
import '@dk-plus/theme-chalk'

const app = createApp(App)

app.use(dkPlus)
app.mount('#app')
```

## 安装后先检查什么

1. `node_modules` 里是否已经出现 `dk-plus`
2. 样式文件是否已经被引入
3. `app.use(dkPlus)` 是否执行
4. 页面里是否已经实际使用了 `dk-` 组件
