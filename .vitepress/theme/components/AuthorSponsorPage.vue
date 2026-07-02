<template>
  <div class="author-two-col">
    <div class="author-two-col__main">
      <h1># 作者 & 赞助</h1>

      <hr />

      <section class="author-two-col__section">
        <h2>作者信息</h2>
        <p><strong>名称：</strong>作者网名“君衍”“Mr·Fan”，真名范凯，河北人，目前在北京。</p>
        <p>
          <strong>描述：</strong>
          一位 93 年开发者，长期从事产品与工程系统构建，擅长前端与业务系统设计，喜欢用代码解决实际问题。
        </p>
        <p>
          早期经历过创业与较大的商业风险，累计约 280 万债务；在持续还债的过程中逐步回归工程与产品实践，并在
          2026 年完成债务清理。
        </p>
        <p>
          在这段人生周期中，遇到了女朋友小尹，并共同努力至今。同时养有两只猫咪：多米与土豆。
        </p>
        <p>
          业余时间喜欢王者荣耀、DNF 手游等高节奏竞技类游戏。
        </p>

        <section class="author-two-col__section author-two-col__section--inner">
          <h2>技术能力</h2>
          <div class="author-skill-tags">
            <span>TypeScript</span>
            <span>Vue / React</span>
            <span>Vite / Webpack</span>
            <span>Monorepo</span>
            <span>CI / CD</span>
            <span>Node.js</span>
            <span>Python</span>
            <span>MySQL</span>
            <span>Redis</span>
            <span>uni-app</span>
            <span>Flutter</span>
            <span>AI Agent</span>
            <span>系统架构</span>
          </div>
        </section>

        <p><strong>定位：</strong>项目型产品整理者</p>

        <section class="author-two-col__section author-two-col__section--inner">
          <h2>猫咪档案</h2>
          <div class="author-pets">
            <article class="author-pet-card">
              <img class="author-pet-card__image" src="/agilebi/author-cats/tudou.jpeg" alt="土豆" />
              <div class="author-pet-card__body">
                <strong>土豆</strong>
                <span>小的是土豆，蓝眼小奶猫时期就很上镜。</span>
              </div>
            </article>

            <article class="author-pet-card">
              <img class="author-pet-card__image" src="/agilebi/author-cats/duomi.jpeg" alt="多米" />
              <div class="author-pet-card__body">
                <strong>多米</strong>
                <span>大的是多米，睡觉姿势一看就很有主场气质。</span>
              </div>
            </article>
          </div>
        </section>
      </section>

      <section class="author-two-col__section">
        <h2>赞助与合作</h2>

        <div class="author-support-intro">
          <strong>赞助支持</strong>
          <span>如果这套文档和项目整理方式对你有帮助，欢迎直接扫码支持。</span>
        </div>

        <div class="author-support-qrcodes">
          <article class="author-support-qrcode">
            <img src="/agilebi/support/alipay.png" alt="支付宝赞助二维码" />
            <strong>支付宝赞助</strong>
            <span>推荐使用支付宝支持，适合快速打赏和请我喝杯咖啡。</span>
          </article>

          <article class="author-support-qrcode">
            <img src="/agilebi/support/wechatpay.png" alt="微信赞助二维码" />
            <strong>微信赞助</strong>
            <span>也欢迎通过微信支持 KaruiBI 文档持续更新与后续内容建设。</span>
          </article>
        </div>

        <div class="author-support-intro author-support-intro--links">
          <strong>合作联系</strong>
          <span>
            品牌露出、广告展示、培训合作或联合共建，可通过邮箱联系：
            <a href="mailto:dk-plus-ui@foxmail.com">dk-plus-ui@foxmail.com</a>
          </span>
          <span>
            声明入口：
            <a href="/statement" target="_blank" rel="noreferrer">查看免责声明</a>
          </span>
        </div>

      </section>
    </div>

    <aside class="author-two-col__aside">
      <DocAsideAds />
    </aside>
  </div>
</template>
