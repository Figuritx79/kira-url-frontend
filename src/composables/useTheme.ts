import { ref } from 'vue'
import gsap from 'gsap'

type Theme = 'light' | 'dark' | 'system'

const isDark = ref(false)
const currentTheme = ref<Theme>('system')

function getSystemDark(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function applyTheme(t: Theme) {
  const resolved = t === 'system' ? (getSystemDark() ? 'dark' : 'light') : t
  isDark.value = resolved === 'dark'
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', t)
  currentTheme.value = t
}

function toggleWithAnimation() {
  const oldBg = getComputedStyle(document.body).backgroundColor
  const overlay = document.createElement('div')
  overlay.style.cssText = `position:fixed;inset:0;z-index:9999;background:${oldBg};pointer-events:none;`
  document.body.appendChild(overlay)

  const targetDark = !isDark.value
  isDark.value = targetDark
  document.documentElement.classList.toggle('dark', targetDark)
  localStorage.setItem('theme', targetDark ? 'dark' : 'light')
  currentTheme.value = targetDark ? 'dark' : 'light'

  gsap.to(overlay, {
    opacity: 0,
    duration: 0.35,
    ease: 'power2.inOut',
    onComplete: () => overlay.remove(),
  })
}

let initialized = false

export function useTheme() {
  if (!initialized) {
    initialized = true

    isDark.value = document.documentElement.classList.contains('dark')
    const stored = localStorage.getItem('theme') as Theme | null
    currentTheme.value = stored ?? 'system'

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (currentTheme.value === 'system') {
        applyTheme('system')
      }
    })
  }

  function toggleTheme() {
    toggleWithAnimation()
  }

  function setTheme(t: Theme) {
    applyTheme(t)
  }

  return { isDark, theme: currentTheme, setTheme, toggleTheme }
}
