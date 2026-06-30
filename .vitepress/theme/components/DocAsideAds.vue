<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import adSlots from '../ad-slots.json'

type QuickLink = {
  title: string
  href: string
  image: string
}

type PromoItem = {
  title: string
  desc: string
  href: string
  image: string
  meta?: string
}

const quickLinks = (adSlots.quickSlots || []) as QuickLink[]
const promoSlides = ref((adSlots.mainSlots || []) as PromoItem[])

const activeIndex = ref(0)
let timer: number | undefined

const activeSlide = computed(() => promoSlides.value[activeIndex.value] || promoSlides.value[0])

const setActive = (index: number) => {
  activeIndex.value = index
}

const startAutoplay = () => {
  if (promoSlides.value.length <= 1) return
  stopAutoplay()
  timer = window.setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % promoSlides.value.length
  }, 3200)
}

const stopAutoplay = () => {
  if (timer) {
    window.clearInterval(timer)
    timer = undefined
  }
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
})
</script>

<template>
  <aside class="doc-aside-ads" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
    <nav class="doc-aside-ads__quick-list">
      <a
        v-for="item in quickLinks"
        :key="item.title"
        class="doc-aside-ads__quick-item doc-aside-ads__quick-item--image"
        :href="item.href"
      >
        <img :src="item.image" :alt="item.title" class="doc-aside-ads__quick-thumb" />
        <span class="doc-aside-ads__quick-title">{{ item.title }}</span>
      </a>
    </nav>

    <section v-if="activeSlide" class="doc-aside-ads__promo">
      <a class="doc-aside-ads__promo-image-link" :href="activeSlide.href" :aria-label="activeSlide.title">
        <img :src="activeSlide.image" :alt="activeSlide.title" class="doc-aside-ads__promo-image" />
      </a>

      <div class="doc-aside-ads__promo-copy">
        <a class="doc-aside-ads__promo-link" :href="activeSlide.href">{{ activeSlide.title }}</a>
        <p>{{ activeSlide.desc }}</p>
        <div class="doc-aside-ads__promo-meta">
          <span>{{ activeSlide.meta || '广告位' }}</span>
          <div v-if="promoSlides.length > 1" class="doc-aside-ads__dots">
            <button
              v-for="(item, index) in promoSlides"
              :key="item.title"
              :class="['doc-aside-ads__dot', { 'is-active': index === activeIndex }]"
              type="button"
              :aria-label="`切换到 ${item.title}`"
              @click="setActive(index)"
            />
          </div>
        </div>
      </div>
    </section>
  </aside>
</template>
