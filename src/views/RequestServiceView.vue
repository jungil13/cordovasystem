<template>
  <section class="mx-auto max-w-6xl px-4 py-10 lg:px-0">
    <div class="grid gap-8 lg:grid-cols-[3fr,2fr] lg:items-start">
      <div>
        <h2 class="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Service Request
        </h2>
        <p class="mt-2 text-sm text-slate-600 sm:text-base">
          Fill out the form below. Your request details will open in your email app so you can send
          them directly to our team.
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
              v-model="form.contactNumber"
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
              v-model="form.serviceType"
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
            :disabled="loading"
          >
            {{ loading ? 'Submitting...' : 'Submit Request' }}
          </button>

          <p
            v-if="success"
            class="flex items-center gap-2 text-xs text-emerald-600"
          >
            <CheckCircleIcon class="h-4 w-4" />
            {{ success }}
          </p>
          <p
            v-if="error"
            class="flex items-center gap-2 text-xs text-rose-600"
          >
            {{ error }}
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
          <a
            :href="messengerLink"
            target="_blank"
            rel="noopener"
            class="mt-3 inline-flex items-center justify-center rounded-xl bg-sky-500 px-4 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-sky-400"
          >
            Message us on Facebook
          </a>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { CheckCircleIcon } from '@heroicons/vue/24/outline'

// Set in .env as VITE_REQUEST_EMAIL=your-cwsi@gmail.com to receive requests in Gmail
const REQUEST_EMAIL =
  import.meta.env.VITE_REQUEST_EMAIL || 'cwsi.billing@abejoph.comm'
const MESSENGER_PAGE = 'https://www.facebook.com/profile.php?id=61562900730330'

const form = reactive({
  fullName: '',
  address: '',
  contactNumber: '',
  serviceType: '',
  details: '',
})

const loading = ref(false)
const success = ref<string | null>(null)
const error = ref<string | null>(null)

const messengerLink = computed(() => MESSENGER_PAGE)

async function handleSubmit() {
  loading.value = true
  success.value = null
  error.value = null

  try {
    const subject = `Service Request - ${form.serviceType || 'General'}`
    const bodyLines = [
      `Full Name: ${form.fullName}`,
      `Address: ${form.address}`,
      `Contact Number: ${form.contactNumber}`,
      `Service Type: ${form.serviceType}`,
      '',
      'Additional Details:',
      form.details || '(none)',
    ]

    const body = bodyLines.join('\n')

    const mailtoUrl = `mailto:${encodeURIComponent(REQUEST_EMAIL)}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl

    success.value =
      'Your email app has been opened. Please review and send the message to complete your request.'
  } catch (err: any) {
    error.value = 'Failed to open your email client. Please try again or contact us directly.'
  } finally {
    loading.value = false
  }
}
</script>

