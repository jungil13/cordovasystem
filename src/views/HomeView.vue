<template>
  <section class="relative min-h-[85vh] overflow-hidden">
    <!-- Professional background -->
    <div
      class="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
      :style="heroBgStyle"
    ></div>
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900/75 via-slate-800/60 to-primary-900/70"
    ></div>
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.12),transparent)]"
    ></div>

    <!-- Hero: prominent, centered -->
    <div
      class="mx-auto flex min-h-[85vh] max-w-5xl flex-col items-center justify-center px-6 py-20 text-center"
    >
      <p
        class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-sky-200 backdrop-blur-sm sm:text-sm"
      >
        <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
        Trusted by the Cordova Community
      </p>

      <h1
        class="text-balance text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl xl:text-7xl"
      >
        {{ typedTitle || 'Cordova Water System Inc.' }}
      </h1>
      <p class="mt-2 text-sm font-medium text-sky-200/90 sm:text-base">
        Brgy. Gabi, Cordova, Cebu, Philippines
      </p>

      <p class="mt-6 max-w-2xl text-base font-medium leading-relaxed text-slate-200 sm:text-lg lg:text-xl">
        Ensuring clean water for a healthier tomorrow. We provide reliable water services to
        the Cordova community with a commitment to quality and sustainability.
      </p>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <RouterLink
          to="/request-service"
          class="inline-flex items-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-xl transition hover:bg-slate-100 sm:text-lg"
        >
          Request Service
        </RouterLink>
        <RouterLink
          to="/payment"
          class="inline-flex items-center rounded-xl border-2 border-white/60 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/20 sm:text-lg"
        >
          View Water Rates
        </RouterLink>
      </div>

      <div
        v-if="canShowInstallBanner"
        class="mt-10 flex max-w-md items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
      >
        <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-800/80 text-sky-300">
          <PhoneIcon class="h-6 w-6" />
        </div>
        <div class="flex-1 text-left">
          <p class="text-xs font-semibold uppercase tracking-wider text-sky-300">Mobile Mode</p>
          <p class="text-sm font-medium text-slate-200">Install the CWSI app</p>
        </div>
        <button
          type="button"
          class="rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
          @click="handleInstallClick"
        >
          Download
        </button>
      </div>
    </div>

    <!-- Quick links -->
    <div class="border-t border-slate-200/50 bg-white/95 backdrop-blur-sm">
      <div class="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-6 px-6 py-6 sm:gap-10">
        <RouterLink to="/request-service" class="text-sm font-medium text-slate-600 transition hover:text-primary-600">
          Request Service
        </RouterLink>
        <RouterLink to="/payment" class="text-sm font-medium text-slate-600 transition hover:text-primary-600">
          Water Rates
        </RouterLink>
        <RouterLink to="/services" class="text-sm font-medium text-slate-600 transition hover:text-primary-600">
          Services
        </RouterLink>
        <RouterLink to="/contact" class="text-sm font-medium text-slate-600 transition hover:text-primary-600">
          Contact
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { PhoneIcon } from '@heroicons/vue/24/outline'

import heroBg from '../images/background2.png'

const heroBgStyle = {
  backgroundImage: `url(${heroBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
} as const

const canShowInstallBanner = ref(import.meta.env.DEV)
const deferredPrompt = ref<Event | null>(null)

const fullTitle = 'Cordova Water System Inc.'
const typedTitle = ref('')
let typingTimer: number | null = null

const startTyping = () => {
  if (typingTimer) {
    window.clearInterval(typingTimer)
  }

  typedTitle.value = ''
  let index = 0
  const speed = 90

  typingTimer = window.setInterval(() => {
    typedTitle.value = fullTitle.slice(0, index + 1)
    index += 1

    if (index >= fullTitle.length && typingTimer) {
      window.clearInterval(typingTimer)
      typingTimer = null
    }
  }, speed)
}

const checkStandalone = () =>
  window.matchMedia('(display-mode: standalone)').matches ||
  (window.navigator as any).standalone === true

const beforeInstallHandler = (e: Event) => {
  e.preventDefault()
  deferredPrompt.value = e
  if (!checkStandalone()) {
    canShowInstallBanner.value = true
  }
}

const handleInstallClick = async () => {
  const promptEvent = deferredPrompt.value as any
  if (!promptEvent) return

  await promptEvent.prompt()
  const { outcome } = await promptEvent.userChoice
  if (outcome === 'accepted') {
    canShowInstallBanner.value = false
    deferredPrompt.value = null
  }
}

onMounted(() => {
  startTyping()

  if (checkStandalone()) {
    canShowInstallBanner.value = false
    return
  }

  window.addEventListener('beforeinstallprompt', beforeInstallHandler as any)
})

onBeforeUnmount(() => {
  if (typingTimer) {
    window.clearInterval(typingTimer)
    typingTimer = null
  }

  window.removeEventListener('beforeinstallprompt', beforeInstallHandler as any)
})
</script>
