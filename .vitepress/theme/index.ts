import DefaultTheme from 'vitepress/theme'
import { inBrowser, useRoute } from 'vitepress'
import { h, nextTick, watch } from 'vue'
import DocAsideAds from './components/DocAsideAds.vue'
import AuthorSponsorPage from './components/AuthorSponsorPage.vue'
import './custom.css'

const ZOOMABLE_SELECTOR = '.vp-doc img'

function createImagePreview() {
  const overlay = document.createElement('div')
  overlay.className = 'doc-image-preview'
  overlay.innerHTML = `
    <button class="doc-image-preview__close" aria-label="关闭预览">×</button>
    <img class="doc-image-preview__img" alt="图片预览" />
  `

  const previewImage = overlay.querySelector('.doc-image-preview__img') as HTMLImageElement
  const closeButton = overlay.querySelector('.doc-image-preview__close') as HTMLButtonElement

  const closePreview = () => {
    overlay.classList.remove('is-visible')
    document.body.classList.remove('doc-image-preview-open')
    previewImage.removeAttribute('src')
  }

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closePreview()
  })

  closeButton.addEventListener('click', closePreview)

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay.classList.contains('is-visible')) {
      closePreview()
    }
  })

  document.body.appendChild(overlay)

  return {
    open(src: string, alt: string) {
      previewImage.src = src
      previewImage.alt = alt || '图片预览'
      overlay.classList.add('is-visible')
      document.body.classList.add('doc-image-preview-open')
    }
  }
}

function setupZoomableImages() {
  if (!inBrowser) return

  const existingPreview = document.querySelector('.doc-image-preview')
  const preview = existingPreview
    ? {
        open(src: string, alt: string) {
          const image = existingPreview.querySelector('.doc-image-preview__img') as HTMLImageElement
          image.src = src
          image.alt = alt || '图片预览'
          existingPreview.classList.add('is-visible')
          document.body.classList.add('doc-image-preview-open')
        }
      }
    : createImagePreview()

  document.querySelectorAll<HTMLImageElement>(ZOOMABLE_SELECTOR).forEach((image) => {
    if (image.dataset.zoomBound === 'true') return
    image.dataset.zoomBound = 'true'
    image.classList.add('is-zoomable')
    image.addEventListener('click', () => {
      preview.open(image.currentSrc || image.src, image.alt)
    })
  })
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('AuthorSponsorPage', AuthorSponsorPage)
    app.component('DocAsideAds', DocAsideAds)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-before': () => h(DocAsideAds)
    })
  },
  setup() {
    const route = useRoute()

    if (inBrowser) {
      nextTick(setupZoomableImages)
      watch(
        () => route.path,
        () => {
          nextTick(setupZoomableImages)
        }
      )
    }
  }
}
