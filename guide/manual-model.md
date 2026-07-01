# 模型管理

`后台管理 > 模型管理` 可以理解成 KaruiBI 的 AI 能力总控区。  
这里不只是在“接模型”，还在统一管理平台 AI 开关、模型接入、用户记忆、公共提示词和场景方案。

为了方便培训、交付和后续维护，这一组内容已经拆成多个独立页面，不再全部堆在同一个长页面里。

---

## 当前文档入口

建议按下面顺序阅读：

1. [全局 AI 设置](/guide/manual-model-global)
2. [模型列表管理](/guide/manual-model-list)
3. [用户记忆](/guide/manual-model-memory)
4. [公共技能提示词](/guide/manual-model-prompt)
5. [场景配置](/guide/manual-model-scene)
6. [模型使用统计](/guide/manual-model-stats)
7. [会话列表管理](/guide/manual-model-session)
8. [appKey 管理](/guide/manual-model-appkey)
9. [开放接口联调](/guide/manual-model-openapi-debug)
10. [影子用户日志](/guide/manual-model-shadow-user)
11. [AI 调试控制台](/guide/manual-model-debug-console)

---

## 这一组页面主要解决什么问题

模型管理通常负责回答下面这些问题：

- 平台 AI 功能有没有整体打开
- 默认模型是谁
- 模型是从哪家供应商接进来的
- 用户能不能自己切换模型
- AI 为什么能记住之前的内容
- AI 回答口径为什么会统一
- 第三方联调时用哪个 appKey、怎么验通
- 出了问题以后去哪里看会话、日志和调试过程

所以你可以把这一组理解成：`平台 AI 能力的后台管理入口`。

---

## 建议阅读顺序

如果你是第一次讲这块，建议按这个顺序：

1. 先讲 [全局 AI 设置](/guide/manual-model-global)  
   先让别人知道平台 AI 有没有开、入口有没有开、默认模型是谁。
2. 再讲 [模型列表管理](/guide/manual-model-list)  
   说明模型是怎么接进来的，哪一个模型正在用。
3. 再讲 [用户记忆](/guide/manual-model-memory)  
   说明 AI 为什么能延续上下文、为什么有时会保留之前的信息。
4. 再讲 [公共技能提示词](/guide/manual-model-prompt)  
   说明平台怎么统一 AI 的回复口径和行为风格。
5. 后面再按业务需要扩展到场景、统计、会话、联调和调试页面。

---

## 现在这一组已经覆盖到哪里

目前模型管理已经按实际使用入口拆成独立页面，后续培训时可以按左侧菜单逐个讲：

- 全局 AI 设置
- 模型列表管理
- 用户记忆
- 公共技能提示词
- 场景配置
- 模型使用统计
- 会话列表管理
- appKey 管理
- 开放接口联调
- 影子用户日志
- AI 调试控制台

这样就不会再把所有模型管理内容挤在一个超长页面里。

