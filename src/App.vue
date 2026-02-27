<template>
  <div class="min-h-screen flex flex-col bg bg-transparent">
    <header
      class="sticky top-0 z-30 border-b border-slate-100 bg-white/80 backdrop-blur-xl shadow-sm"
    >
      <nav
        class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-0 lg:py-4"
      >
        <div class="flex items-center gap-2">
          <div
            class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl text-white shadow-soft"
          >
            <img
              :src="logo"
              alt="Cordova Water System Inc. logo"
              class="h-10 w-10 object-contain"
            />
          </div>
          <div class="leading-tight">
            <p class="text-sm font-semibold tracking-tight text-slate-900">
              Cordova Water System Inc.
            </p>
            <p class="text-xs text-slate-500">A Subsidiary of Abejo Waters Corp.</p>
          </div>
        </div>

        <button
          class="inline-flex items-center rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 shadow-sm transition-all hover:border-primary-200 hover:bg-primary-50/80 hover:text-primary-800 lg:hidden"
          @click="isMobileNavOpen = !isMobileNavOpen"
        >
          <span class="mr-2">Menu</span>
          <svg
            v-if="!isMobileNavOpen"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-4 w-4"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.7"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-4 w-4"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.7"
              d="M6 6l12 12M6 18L18 6"
            />
          </svg>
        </button>

        <div
          class="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex"
        >
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="relative transition-colors hover:text-primary-700"
            :class="{ 'text-primary-700': isActive(item.to) }"
          >
            {{ item.label }}
            <span
              v-if="isActive(item.to)"
              class="absolute inset-x-0 -bottom-2 h-0.5 rounded-full bg-primary-500"
            />
          </RouterLink>
        </div>

        <div class="hidden items-center gap-2 lg:flex">
          <RouterLink
            to="/request-service"
            class="rounded-xl border border-primary-100 bg-primary-50 px-3 py-2 text-xs font-semibold text-primary-700 shadow-sm transition hover:bg-primary-100"
          >
            Request Service
          </RouterLink>
        </div>
      </nav>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isMobileNavOpen"
          class="border-t border-slate-100 bg-white/95 px-4 pb-4 pt-2 shadow-lg lg:hidden"
        >
          <div class="flex flex-col gap-1 text-sm font-medium text-slate-700">
            <RouterLink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="rounded-lg px-3 py-2 transition hover:bg-primary-50 hover:text-primary-800"
              :class="{ 'bg-primary-50 text-primary-800': isActive(item.to) }"
              @click="isMobileNavOpen = false"
            >
              {{ item.label }}
            </RouterLink>
            <RouterLink
              to="/request-service"
              class="mt-2 rounded-lg border border-primary-100 bg-primary-50 px-3 py-2 text-center text-xs font-semibold text-primary-700 shadow-sm"
              @click="isMobileNavOpen = false"
            >
              Request Service
            </RouterLink>
          </div>
        </div>
      </transition>
    </header>

    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <transition
          name="page"
          mode="out-in"
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </RouterView>
    </main>

    <footer class="border-t border-slate-100 bg-white/80 backdrop-blur">
      <div
        class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row lg:px-0"
      >
        <p>© {{ new Date().getFullYear() }} Cordova Water System Inc. All rights reserved.</p>
        <p class="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span>Clean. Safe. Reliable water for Cordova.</span>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import logo from './images/logo.png'

const route = useRoute()
const isMobileNavOpen = ref(false)

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Water Rates', to: '/payment' },
  { label: 'Contact', to: '/contact' },
  { label: 'Request Service', to: '/request-service' },
]

const isActive = (path: string) => (path === '/' ? route.path === '/' : route.path.startsWith(path))
</script>

