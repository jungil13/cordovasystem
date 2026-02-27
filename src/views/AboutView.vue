<template>
    <div class="min-h-screen">
  <section class="mx-auto max-w-6xl space-y-10 px-4 py-10 lg:px-0">
    <div class="grid gap-10 lg:grid-cols-[3fr,2fr] lg:items-start">
      <div class="space-y-4">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
          A Subsidiary of Abejo Waters Corp.
        </p>
        <h2 class="text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          About Cordova Water System
        </h2>
        <p class="text-sm text-slate-600 sm:text-base">
          We provide high-quality water services with an emphasis on sustainability and innovation.
          Our mission is to ensure every household in Cordova has access to clean, safe, and
          affordable water.
        </p>

        <div
          class="mt-6 grid gap-4 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-100 sm:grid-cols-2"
        >
          <div>
            <h3 class="text-sm font-semibold text-slate-900">Our Mission</h3>
            <p class="mt-1 text-xs text-slate-600">
              Delivering reliable, clean water to every household in Cordova while maintaining the
              highest standards of service and sustainability.
            </p>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-slate-900">Our Vision</h3>
            <p class="mt-1 text-xs text-slate-600">
              To be the most trusted water service provider in Cordova, known for excellence,
              innovation, and unwavering dedication to community well-being.
            </p>
          </div>
        </div>
      </div>

      <div
        class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-sky-500 to-sky-700 p-1 shadow-soft"
      >
        <div class="space-y-4 rounded-[1.4rem] bg-slate-950/95 p-6 text-slate-50">
          <h3 class="text-sm font-semibold">Our Team</h3>
          <p class="text-xs text-slate-300">
            Dedicated professionals working behind the scenes to keep Cordova’s water flowing.
          </p>
          <div class="mt-4 grid grid-cols-2 gap-4 text-xs sm:grid-cols-4">
            <div
              v-for="member in team"
              :key="member.name"
              class="flex flex-col items-center gap-2 rounded-2xl bg-slate-900/70 p-4"
            >
              <div
                class="h-20 w-20 overflow-hidden rounded-full border-2 border-sky-400 bg-slate-800 shadow-soft"
              >
                <img
                  :src="member.photo"
                  :alt="member.name"
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="text-center leading-tight">
                <p class="text-[0.8rem] font-semibold text-slate-50">
                  {{ member.name }}
                </p>
                <p class="text-[0.7rem] text-sky-300">
                  {{ member.role }}
                </p>
                <p class="mt-0.5 text-[0.65rem] text-slate-400">
                  {{ member.label }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-sm font-semibold text-slate-900">What We Do</h3>
      <p class="mt-1 text-xs text-slate-600 sm:text-sm">
        From sourcing and purification to distribution and community support, CWSI manages the full
        lifecycle.
      </p>

      <!-- Icon-based summary cards (keep for quick scanning) -->
      <div class="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div
          v-for="item in gallery"
          :key="item.title"
          class="group relative overflow-hidden rounded-2xl bg-slate-900/90 p-3 text-slate-50 shadow-sm ring-1 ring-slate-800/70"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-sky-500/40 via-sky-400/10 to-transparent opacity-0 transition group-hover:opacity-100"
          />
          <div class="relative space-y-2">
            <div
              class="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/90 text-white"
            >
              <component :is="item.icon" class="h-4 w-4" />
            </div>
            <p class="text-[0.78rem] font-semibold">
              {{ item.title }}
            </p>
            <p class="text-[0.67rem] text-slate-200">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

      <h4 class="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        Operations in Pictures
      </h4>
      <div
        class="mt-3 overflow-hidden rounded-3xl bg-slate-950/95 p-4 text-slate-50 shadow-soft ring-1 ring-slate-900/70"
      >
        <div class="relative overflow-hidden rounded-2xl bg-slate-900">
          <div class="cwsi-marquee">
            <div class="cwsi-marquee__track">
              <button
                v-for="(img, index) in aboutImages"
                :key="img.key"
                type="button"
                class="group relative h-28 w-44 shrink-0 overflow-hidden rounded-xl bg-slate-800 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400 sm:h-32 sm:w-52"
                @click="openLightbox(index)"
              >
                <img :src="img.src" :alt="img.alt" class="h-full w-full object-cover" />
                <div
                  class="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/5 to-transparent opacity-80"
                ></div>
                <p
                  class="pointer-events-none absolute bottom-2 left-2 right-2 line-clamp-1 text-left text-[0.65rem] font-semibold text-white drop-shadow"
                >
                  {{ img.label }}
                </p>
              </button>

              <button
                v-for="(img, index) in aboutImages"
                :key="`dup-${img.key}`"
                type="button"
                class="group relative h-28 w-44 shrink-0 overflow-hidden rounded-xl bg-slate-800 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400 sm:h-32 sm:w-52"
                @click="openLightbox(index)"
              >
                <img :src="img.src" :alt="img.alt" class="h-full w-full object-cover" />
                <div
                  class="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/5 to-transparent opacity-80"
                ></div>
                <p
                  class="pointer-events-none absolute bottom-2 left-2 right-2 line-clamp-1 text-left text-[0.65rem] font-semibold text-white drop-shadow"
                >
                  {{ img.label }}
                </p>
              </button>
            </div>
          </div>

          <div
            class="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-slate-950/80 to-transparent"
          ></div>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-slate-950/80 to-transparent"
          ></div>
        </div>

        <div class="mt-3 flex items-center justify-between text-[0.72rem] text-slate-300">
          <p>Click any photo to view.</p>
          <p v-if="aboutImages.length">{{ aboutImages.length }} photos</p>
        </div>
      </div>
    </div>
  </section>

  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="lightboxOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
      @click.self="closeLightbox"
    >
      <div class="w-full max-w-5xl">
        <div class="relative overflow-hidden rounded-3xl bg-slate-900 shadow-2xl ring-1 ring-white/10">
          <img
            :src="currentImage?.src"
            :alt="currentImage?.alt"
            class="max-h-[75vh] w-full bg-slate-950 object-contain"
          />

          <div
            class="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent p-4"
          >
            <div class="min-w-0">
              <p class="truncate text-sm font-semibold text-white">
                {{ currentImage?.label }}
              </p>
              <p class="truncate text-xs text-slate-300">
                {{ currentIndex + 1 }} / {{ aboutImages.length }}
              </p>
            </div>

            <div class="flex items-center gap-2">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/15"
                @click="prevImage"
              >
                <ChevronLeftIcon class="h-4 w-4" />
              </button>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/15"
                @click="nextImage"
              >
                <ChevronRightIcon class="h-4 w-4" />
              </button>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/15"
                @click="closeLightbox"
              >
                <XMarkIcon class="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  BeakerIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  UsersIcon,
  MapIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

import staff1 from '../images/foraboutpage/1.jfif'
import staff2 from '../images/foraboutpage/2.jfif'
import staff3 from '../images/foraboutpage/3.jfif'
import staff4 from '../images/foraboutpage/4.jfif'

type AboutImage = { src: string; label: string; alt: string; key: string }

function loadAboutImages(): AboutImage[] {
  const sources = {
    ...import.meta.glob('../images/foraboutpage/*.{png,jpg,jpeg,webp,svg,jfif,PNG,JPG,JPEG,WEBP,SVG,JFIF}', {
      eager: true,
      import: 'default',
    }),
    ...import.meta.glob('../assets/foraboutpage/*.{png,jpg,jpeg,webp,svg,jfif,PNG,JPG,JPEG,WEBP,SVG,JFIF}', {
      eager: true,
      import: 'default',
    }),
  } as Record<string, string>

  return Object.entries(sources)
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(0, 6)
    .map(([key, src], i) => {
      const file = key.split('/').pop() ?? `image-${i + 1}`
      const label = file.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ')
      return {
        key,
        src,
        label: label.length ? label : `Photo ${i + 1}`,
        alt: `CWSI photo: ${label}`,
      }
    })
}

const aboutImages = loadAboutImages()

const lightboxOpen = ref(false)
const currentIndex = ref(0)

const currentImage = computed(() => aboutImages[currentIndex.value])

function openLightbox(index: number) {
  if (!aboutImages.length) return
  currentIndex.value = index
  lightboxOpen.value = true
}

function closeLightbox() {
  lightboxOpen.value = false
}

function nextImage() {
  if (!aboutImages.length) return
  currentIndex.value = (currentIndex.value + 1) % aboutImages.length
}

function prevImage() {
  if (!aboutImages.length) return
  currentIndex.value = (currentIndex.value - 1 + aboutImages.length) % aboutImages.length
}

let sliderTimer: number | null = null

function onKeyDown(e: KeyboardEvent) {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
  if (aboutImages.length > 1) {
    sliderTimer = window.setInterval(() => {
      nextImage()
    }, 6000)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeyDown)
  if (sliderTimer) {
    window.clearInterval(sliderTimer)
    sliderTimer = null
  }
})

const team = [
  { name: 'Admin Staff', role: 'Admin', label: 'Service coordination', photo: staff1 },
  { name: 'Billing Staff', role: 'Billing', label: 'Accounts & payments', photo: staff2 },
  { name: 'Maintenance Team', role: 'Maintenance', label: 'Field operations', photo: staff3 },
  { name: 'Operations Head', role: 'Manager', label: 'Systems oversight', photo: staff4 },
]

const gallery = [
  {
    title: 'Water Quality Testing',
    description: 'Routine sampling and lab analysis to ensure safe water.',
    icon: BeakerIcon,
  },
  {
    title: 'System Maintenance',
    description: 'Preventive and corrective work on pipelines and meters.',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: 'Safety & Compliance',
    description: 'Alignment with regulatory and health standards.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Customer Care',
    description: 'Responsive support for inquiries and concerns.',
    icon: UsersIcon,
  },
  {
    title: 'Network Planning',
    description: 'Long-term expansion to serve more of Cordova.',
    icon: MapIcon,
  },
]
</script>

<style scoped>
@keyframes cwsi-marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.cwsi-marquee {
  overflow: hidden;
  width: 100%;
}

.cwsi-marquee__track {
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem;
  width: fit-content;
  will-change: transform;
  animation: cwsi-marquee 28s linear infinite;
}

.cwsi-marquee:hover .cwsi-marquee__track {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .cwsi-marquee__track {
    animation: none;
    overflow-x: auto;
  }
}
</style>

