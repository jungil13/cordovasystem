<template>
  <section class="mx-auto max-w-6xl px-4 py-10 lg:px-0">
    <div class="grid gap-8 lg:grid-cols-[3fr,2fr] lg:items-start">
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Contact Us
        </h2>
        <p class="text-sm text-slate-600 sm:text-base">
          We're here to help. Reach out for inquiries, billing concerns, or water service
          requests.
        </p>

        <form
          class="mt-4 space-y-4 rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-slate-100"
        >
          <div>
            <label class="text-xs font-medium text-slate-700">Name</label>
            <input
              type="text"
              class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary-200 transition placeholder:text-slate-400 focus:bg-white focus:ring"
              placeholder="Enter your name"
            />
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label class="text-xs font-medium text-slate-700">Email</label>
              <input
                type="email"
                class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary-200 transition placeholder:text-slate-400 focus:bg-white focus:ring"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label class="text-xs font-medium text-slate-700">Contact Number</label>
              <input
                type="tel"
                class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary-200 transition placeholder:text-slate-400 focus:bg-white focus:ring"
                placeholder="e.g., 0912 345 6789"
              />
            </div>
          </div>
          <div>
            <label class="text-xs font-medium text-slate-700">Message</label>
            <textarea
              rows="4"
              class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary-200 transition placeholder:text-slate-400 focus:bg-white focus:ring"
              placeholder="Let us know how we can assist you..."
            ></textarea>
          </div>
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-xl bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-700"
          >
            Send Message
          </button>
        </form>
      </div>

      <aside class="space-y-4 rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-slate-100">
        <h3 class="text-sm font-semibold text-slate-900">Contact Details</h3>
        <dl class="space-y-3 text-sm text-slate-700">
          <div class="flex items-start gap-3">
            <PhoneIcon class="mt-0.5 h-4 w-4 text-primary-600" />
            <div>
              <dt class="text-xs font-semibold text-slate-500">Mobile</dt>
              <dd class="text-sm text-slate-800">0991 702 3497</dd>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <PhoneArrowDownLeftIcon class="mt-0.5 h-4 w-4 text-primary-600" />
            <div>
              <dt class="text-xs font-semibold text-slate-500">Telephone</dt>
              <dd class="text-sm text-slate-800">(032) 383 3520</dd>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <GlobeAltIcon class="mt-0.5 h-4 w-4 text-primary-600" />
            <div>
              <dt class="text-xs font-semibold text-slate-500">Facebook</dt>
              <dd class="text-sm text-slate-800">Cordova Water System Inc.</dd>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <EnvelopeIcon class="mt-0.5 h-4 w-4 text-primary-600" />
            <div>
              <dt class="text-xs font-semibold text-slate-500">Email</dt>
              <dd class="text-sm text-slate-800">cwsi@abejoph.com</dd>
            </div>
          </div>
        </dl>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  PhoneIcon,
  PhoneArrowDownLeftIcon,
  GlobeAltIcon,
  EnvelopeIcon,
} from '@heroicons/vue/24/outline'
</script>

