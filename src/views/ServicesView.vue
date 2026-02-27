<template>
  <section class="mx-auto max-w-6xl space-y-8 px-4 py-10 lg:px-0">
    <header class="max-w-2xl space-y-3">
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
        Our Services
      </p>
      <h2 class="text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        Safe, reliable water for every household in Cordova.
      </h2>
      <p class="text-sm text-slate-600 sm:text-base">
        We offer water purification, delivery, and system maintenance. Our team ensures the highest
        standards of safety and quality at every step.
      </p>
    </header>

    <div class="grid gap-5 md:grid-cols-[3fr,2fr] md:items-start">
      <div class="space-y-4">
        <div
          class="group flex flex-col gap-4 rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-primary-100"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-50 text-primary-700"
              >
                <BeakerIcon class="h-5 w-5" />
              </div>
              <div>
                <h3 class="text-sm font-semibold text-slate-900">Water Purification</h3>
                <p class="text-xs text-slate-500">Clean, treated water meeting safety standards.</p>
              </div>
            </div>
          </div>
          <p class="text-xs text-slate-600">
            Our treatment processes follow strict quality control, ensuring every drop meets or
            exceeds regulatory water safety standards.
          </p>
        </div>

        <div
          class="group flex flex-col gap-4 rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-primary-100"
        >
          <div class="flex items-center gap-3">
            <div
              class="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-50 text-primary-700"
            >
              <TruckIcon class="h-5 w-5" />
            </div>
            <div>
              <h3 class="text-sm font-semibold text-slate-900">Water Distribution</h3>
              <p class="text-xs text-slate-500">Safe and efficient water delivery network.</p>
            </div>
          </div>
          <p class="text-xs text-slate-600">
            From main lines to household connections, we manage the infrastructure that keeps water
            flowing to your home.
          </p>
        </div>

        <div
          class="group flex flex-col gap-4 rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-primary-100"
        >
          <div class="flex items-center gap-3">
            <div
              class="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-50 text-primary-700"
            >
              <WrenchScrewdriverIcon class="h-5 w-5" />
            </div>
            <div>
              <h3 class="text-sm font-semibold text-slate-900">System Maintenance</h3>
              <p class="text-xs text-slate-500">Regular maintenance and repairs.</p>
            </div>
          </div>
          <p class="text-xs text-slate-600">
            Our maintenance crew responds to leaks, pressure issues, and other technical concerns to
            keep your service stable.
          </p>
        </div>
      </div>

      <aside
        class="space-y-4 rounded-2xl bg-gradient-to-br from-primary-600 via-sky-500 to-sky-700 p-1 shadow-soft"
      >
        <div class="space-y-4 rounded-[1.35rem] bg-slate-950/95 p-5 text-slate-50">
          <h3 class="text-sm font-semibold">Request & Rates</h3>
          <p class="text-xs text-slate-300">
            Quickly request new service, report concerns, or learn more about water rates.
          </p>

          <div class="space-y-3 text-xs">
            <div class="flex items-center justify-between rounded-2xl bg-slate-900/70 p-3">
              <div>
                <p class="font-semibold text-sky-200">Service Requests</p>
                <p class="text-[0.68rem] text-slate-400">New connection, repair, meter check</p>
              </div>
              <RouterLink
                to="/request-service"
                class="rounded-lg bg-sky-500 px-3 py-1.5 text-[0.7rem] font-semibold text-white shadow-sm hover:bg-sky-400"
              >
                Request
              </RouterLink>
            </div>
            <div class="flex items-center justify-between rounded-2xl bg-slate-900/70 p-3">
              <div>
                <p class="font-semibold text-emerald-200">Water Rates</p>
                <p class="text-[0.68rem] text-slate-400">Know your billing structure</p>
              </div>
              <RouterLink
                to="/payment"
                class="rounded-lg bg-emerald-500 px-3 py-1.5 text-[0.7rem] font-semibold text-white shadow-sm hover:bg-emerald-400"
              >
                View
              </RouterLink>
            </div>
          </div>

          <div class="mt-2 text-[0.7rem] text-slate-400">
            <p class="flex items-center gap-1">
              <ShieldCheckIcon class="h-3.5 w-3.5 text-emerald-400" />
              CWSI is committed to quality, safety, and transparent communication with the Cordova
              community.
            </p>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BeakerIcon, TruckIcon, WrenchScrewdriverIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline'
</script>

