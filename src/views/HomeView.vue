<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0 -z-20 bg-black opacity-30" :style="heroBgStyle"></div>
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-b from-sky-900/35 via-sky-900/10 to-transparent"
    ></div>

    <div
      class="mx-auto max-w-6xl px-4 pb-16 pt-10 lg:flex lg:items-center lg:gap-12 lg:px-0"
    >
      <div class="w-full space-y-8 lg:w-3/5">
        <p
          class="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 ring-1 ring-primary-100"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
          Trusted by the Cordova Community
        </p>

        <div class="space-y-4">
          <h1
            class="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Cordova Water
            <span class="text-primary-600">System Inc.</span>
          </h1>
          <p class="max-w-xl text-sm text-slate-800 font-semibold drop-shadow sm:text-base">
            Ensuring clean water for a healthier tomorrow. We provide reliable water services to
            the Cordova community with a commitment to quality and sustainability.
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <RouterLink
            to="/request-service"
            class="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-700"
          >
            Request Service
          </RouterLink>
          <RouterLink
            to="/payment"
            class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-primary-200 hover:bg-primary-50/80 hover:text-primary-800"
          >
            View Water Rates
          </RouterLink>
          <RouterLink
            to="/contact"
            class="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary-700"
          >
            Contact Us
          </RouterLink>
        </div>

        <div
          v-if="canShowInstallBanner"
          class="mt-6 flex items-center gap-4 rounded-2xl bg-slate-900/90 p-4 text-slate-50 shadow-soft ring-1 ring-slate-800 max-w-md"
        >
          <div
            class="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-800 text-sky-300"
          >
            <PhoneIcon class="h-6 w-6" />
          </div>
          <div class="flex-1 space-y-1">
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              Mobile Mode Available
            </p>
            <p class="text-sm font-semibold">
              Install the CWSI app on your phone
            </p>
            <p class="text-[0.72rem] text-slate-300">
              Get a fast, app-like experience for payments, service requests, and updates.
            </p>
          </div>
          <button
            type="button"
            class="inline-flex items-center rounded-xl bg-sky-400 px-3 py-2 text-[0.7rem] font-semibold text-slate-950 shadow-soft transition hover:bg-sky-300"
            @click="handleInstallClick"
          >
            Download now
          </button>
        </div>

        <div
          class="grid gap-4 rounded-2xl bg-white/80 p-4 shadow-[0_18px_45px_rgba(15,118,255,0.08)] ring-1 ring-slate-100 sm:grid-cols-2"
        >
          <div v-for="feature in features" :key="feature.title" class="flex gap-3">
            <div
              class="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-primary-50 text-primary-700"
            >
              <component :is="feature.icon" class="h-5 w-5" />
            </div>
            <div>
              <h3 class="text-sm font-semibold text-slate-900">
                {{ feature.title }}
              </h3>
              <p class="mt-1 text-xs text-slate-500">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

    <div
      class="mt-10 w-full lg:mt-0 lg:w-2/5 lg:translate-y-2 lg:pt-4 xl:pl-4"
    >
      <div
        class="relative mx-auto max-w-md rounded-3xl bg-gradient-to-br from-sky-500 via-primary-600 to-sky-700 p-1 shadow-soft"
      >
        <div class="rounded-[1.35rem] bg-slate-950/95 p-5 text-slate-50">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
            Service Snapshot
          </p>
          <h2 class="mt-2 text-lg font-semibold">Reliable Water Services</h2>
          <p class="mt-1 text-xs text-slate-300">
            Committed to delivering clean, safe water with exceptional service standards.
          </p>

          <dl class="mt-5 grid grid-cols-2 gap-4 text-xs">
            <div class="space-y-1 rounded-2xl bg-slate-900/70 p-3">
              <dt class="text-[0.65rem] uppercase tracking-wide text-slate-400">
                Coverage
              </dt>
              <dd class="text-sm font-semibold text-sky-300">
                Cordova
              </dd>
              <dd class="text-[0.68rem] text-slate-400">
                Barangays & households
              </dd>
            </div>
            <div class="space-y-1 rounded-2xl bg-slate-900/70 p-3">
              <dt class="text-[0.65rem] uppercase tracking-wide text-slate-400">
                Support
              </dt>
              <dd class="text-sm font-semibold text-emerald-300">
                24/7 Hotline
              </dd>
              <dd class="text-[0.68rem] text-slate-400">
                For service & billing
              </dd>
            </div>
            <div class="space-y-1 rounded-2xl bg-slate-900/70 p-3">
              <dt class="text-[0.65rem] uppercase tracking-wide text-slate-400">
                Experience
              </dt>
              <dd class="text-sm font-semibold text-amber-300">
                Decades
              </dd>
              <dd class="text-[0.68rem] text-slate-400">
                Serving Cordova community
              </dd>
            </div>
            <div class="space-y-1 rounded-2xl bg-slate-900/70 p-3">
              <dt class="text-[0.65rem] uppercase tracking-wide text-slate-400">
                Payment
              </dt>
              <dd class="text-sm font-semibold text-sky-200">
                Easy Options
              </dd>
              <dd class="text-[0.68rem] text-slate-400">
                GCash, Palawan, Cash
              </dd>
            </div>
          </dl>

          <div class="mt-5 flex items-center justify-between text-[0.68rem] text-slate-400">
            <p class="flex items-center gap-1">
              <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Operations Status: Normal
            </p>
            <p>Updated in real-time</p>
          </div>
        </div>

        <div
          class="pointer-events-none absolute -right-6 -top-8 hidden h-20 w-20 rounded-3xl bg-white/10 ring-1 ring-white/40 backdrop-blur xl:block"
        ></div>
      </div>
    </div>
    </div>

    <section class="mx-auto mt-10 max-w-6xl px-4 pb-16 lg:px-0">
      <div
        class="overflow-hidden rounded-3xl bg-white/90 shadow-[0_18px_45px_rgba(15,23,42,0.12)] ring-1 ring-slate-100"
      >
        <div class="border-b border-slate-100 px-6 py-4">
          <h2 class="text-base font-semibold tracking-tight text-slate-900">
            Visit Cordova Water System Inc.
          </h2>
          <p class="mt-1 text-xs text-slate-500">
            Find our office easily on the map below.
          </p>
        </div>
        <div class="aspect-[4/3] w-full">
          <iframe
            class="h-full w-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1615.6269387274376!2d123.96285581934191!3d10.26501748658231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99a7203807cf7%3A0x93a9ec1809b4d51c!2sCORDOVA%20WATER%20SYSTEM%20INC!5e1!3m2!1sen!2sph!4v1772207465216!5m2!1sen!2sph"
            style="border: 0"
            :allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import {
  SparklesIcon,
  ShieldCheckIcon,
  PhoneIcon,
  CreditCardIcon,
} from '@heroicons/vue/24/outline'

import heroBg from '../images/background.jpg'

const heroBgStyle = {
  backgroundImage: `url(${heroBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
} as const

const features = [
  {
    title: 'Clean Water',
    description: 'Purified water meeting the highest safety standards.',
    icon: SparklesIcon,
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock assistance for your water needs.',
    icon: PhoneIcon,
  },
  {
    title: 'Trusted Service',
    description: 'Decades of experience serving the Cordova community.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Easy Payment',
    description: 'GCash, Palawan, and cash for your convenience.',
    icon: CreditCardIcon,
  },
]

const canShowInstallBanner = ref(import.meta.env.DEV)
const deferredPrompt = ref<Event | null>(null)

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
  if (checkStandalone()) {
    canShowInstallBanner.value = false
    return
  }

  window.addEventListener('beforeinstallprompt', beforeInstallHandler as any)
})

onBeforeUnmount(() => {
  window.removeEventListener('beforeinstallprompt', beforeInstallHandler as any)
})
</script>

