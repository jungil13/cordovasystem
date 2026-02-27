<template>
  <section class="mx-auto max-w-6xl space-y-8 px-4 py-10 lg:px-0">
    <header class="max-w-2xl space-y-3">
      <h2 class="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        Payment Guide
      </h2>
      <p class="text-sm text-slate-600 sm:text-base">
        A step-by-step guide to paying your water bill securely.
      </p>
    </header>

    <div class="grid gap-8 md:grid-cols-[3fr,2fr] md:items-start">
      <div class="space-y-4">
        <div
          class="rounded-2xl bg-white/90 p-5 text-sm text-slate-700 shadow-sm ring-1 ring-slate-100"
        >
          <ol class="space-y-3 text-xs sm:text-sm">
            <li><span class="font-semibold">1.</span> Prepare your latest water bill.</li>
            <li>
              <span class="font-semibold">2.</span> Choose your preferred payment channel below.
            </li>
            <li>
              <span class="font-semibold">3.</span> Provide your account name and service address.
            </li>
            <li>
              <span class="font-semibold">4.</span> Keep your transaction receipt or screenshot as
              proof of payment.
            </li>
          </ol>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div
            class="flex flex-col justify-between gap-3 rounded-2xl bg-gradient-to-br from-sky-500 via-sky-600 to-sky-700 p-4 text-slate-50 shadow-soft"
          >
            <div class="space-y-1">
              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                GCash
              </p>
              <h3 class="text-sm font-semibold">Fast & Mobile Friendly</h3>
              <p class="text-[0.7rem] text-sky-100">
                Pay your bills anytime, anywhere using the GCash app.
              </p>
            </div>
            <p class="text-[0.68rem] text-sky-100">
              Use the official CWSI payee details provided at the office or via official channels.
            </p>
          </div>

          <div
            class="flex flex-col justify-between gap-3 rounded-2xl bg-white/95 p-4 text-slate-900 shadow-sm ring-1 ring-slate-100"
          >
            <div class="space-y-1">
              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                Palawan Express
              </p>
              <h3 class="text-sm font-semibold">In-Store & Mobile App</h3>
              <p class="text-[0.7rem] text-slate-600">
                Visit any Palawan outlet or use the app to pay your water bill.
              </p>
            </div>
            <p class="text-[0.68rem] text-slate-500">
              Present your account details and confirm the beneficiary name as Cordova Water System
              Inc.
            </p>
          </div>
        </div>
      </div>

      <aside
        class="space-y-4 rounded-2xl bg-slate-900/95 p-5 text-slate-50 shadow-soft ring-1 ring-slate-800"
      >
        <h3 class="text-sm font-semibold">Payment Summary</h3>
        <p class="text-xs text-slate-300">
          This is a guide layout only. Connect it to your billing system to show live balances and
          due dates.
        </p>

        <div class="mt-3 space-y-3 rounded-2xl bg-slate-800/90 p-3 text-xs">
          <div class="flex items-center justify-between">
            <span class="text-slate-300">Account Name</span>
            <span class="font-semibold text-slate-50">Juan Dela Cruz</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-slate-300">Service Address</span>
            <span class="font-semibold text-slate-50">Cordova, Cebu</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-slate-300">Current Balance</span>
            <span class="font-semibold text-amber-300">₱ 0.00</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-slate-300">Due Date</span>
            <span class="font-semibold text-emerald-300">--</span>
          </div>
        </div>

        <p class="text-[0.7rem] text-slate-400">
          Tip: Always double-check account numbers and official channels before sending payment.
        </p>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

