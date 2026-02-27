<template>
  <section class="mx-auto max-w-6xl px-4 py-10 lg:px-0">
    <div class="grid gap-8 lg:grid-cols-[3fr,2fr] lg:items-start">
      <div>
        <h2 class="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Service Request
        </h2>
        <p class="mt-2 text-sm text-slate-600 sm:text-base">
          Fill out the form below. Our team will get back to you as soon as possible.
        </p>

        <form
          class="mt-6 space-y-4 rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-slate-100"
          @submit.prevent="handleSubmit"
        >
          <div>
            <label class="text-xs font-medium text-slate-700">
              Full Name
              <span class="text-rose-500">*</span>
            </label>
            <input
              v-model="form.fullName"
              type="text"
              required
              class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary-200 transition placeholder:text-slate-400 focus:bg-white focus:ring"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label class="text-xs font-medium text-slate-700">
              Service Address
              <span class="text-rose-500">*</span>
            </label>
            <input
              v-model="form.address"
              type="text"
              required
              class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary-200 transition placeholder:text-slate-400 focus:bg-white focus:ring"
              placeholder="Enter your complete address"
            />
          </div>

          <div>
            <label class="text-xs font-medium text-slate-700">
              Contact Number
              <span class="text-rose-500">*</span>
            </label>
            <input
              v-model="form.contact"
              type="tel"
              required
              class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary-200 transition placeholder:text-slate-400 focus:bg-white focus:ring"
              placeholder="e.g., 0912 345 6789"
            />
          </div>

          <div>
            <label class="text-xs font-medium text-slate-700">
              Type of Request
              <span class="text-rose-500">*</span>
            </label>
            <select
              v-model="form.type"
              required
              class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary-200 transition focus:bg-white focus:ring"
            >
              <option value="" disabled>-- Select Service --</option>
              <option>New Connection</option>
              <option>Leak Repair</option>
              <option>Meter Concern</option>
              <option>Billing Inquiry</option>
              <option>Water Quality Concern</option>
              <option>Others</option>
            </select>
          </div>

          <div>
            <label class="text-xs font-medium text-slate-700">Additional Details</label>
            <textarea
              v-model="form.details"
              rows="4"
              class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary-200 transition placeholder:text-slate-400 focus:bg-white focus:ring"
              placeholder="Mention any specific details here..."
            ></textarea>
          </div>

          <button
            type="submit"
            class="inline-flex items-center justify-center rounded-xl bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:bg-primary-300"
          >
            Submit Request
          </button>

          <p
            v-if="submitted"
            class="flex items-center gap-2 text-xs text-emerald-600"
          >
            <CheckCircleIcon class="h-4 w-4" />
            Your request has been recorded for demonstration. Connect this form to your backend or
            email service to receive submissions.
          </p>
        </form>
      </div>

      <aside
        class="space-y-4 rounded-2xl bg-gradient-to-br from-primary-600 via-sky-500 to-sky-700 p-1 shadow-soft"
      >
        <div class="space-y-3 rounded-[1.35rem] bg-slate-950/95 p-5 text-slate-50">
          <h3 class="text-sm font-semibold">Need urgent assistance?</h3>
          <p class="text-xs text-slate-300">
            For urgent issues such as major leaks or no water supply, please call our hotline
            directly for faster response.
          </p>
          <div class="mt-3 space-y-2 rounded-2xl bg-slate-900/80 p-3 text-xs">
            <p class="flex items-center justify-between">
              <span class="text-slate-300">24/7 Hotline</span>
              <span class="font-semibold text-sky-200">0991 702 3497</span>
            </p>
            <p class="flex items-center justify-between">
              <span class="text-slate-300">Office Landline</span>
              <span class="font-semibold text-sky-200">(032) 383 3520</span>
            </p>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { CheckCircleIcon } from '@heroicons/vue/24/outline'

const form = reactive({
  fullName: '',
  address: '',
  contact: '',
  type: '',
  details: '',
})

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
}
</script>

