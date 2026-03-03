<template>
  <section class="relative mx-auto max-w-6xl space-y-8 px-4 py-10 lg:px-0">
    <div
      class="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-64 bg-gradient-to-b from-sky-500/30 via-sky-500/10 to-transparent"
    ></div>
    <div
      class="pointer-events-none absolute -right-32 top-10 -z-10 h-40 w-40 rounded-full bg-sky-400/25 blur-3xl"
    ></div>
    <div
      class="pointer-events-none absolute -left-24 bottom-0 -z-10 h-40 w-40 rounded-full bg-primary-500/15 blur-3xl"
    ></div>

    <header class="space-y-2 text-center">
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
        Official Water Rates
      </p>
      <h2 class="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        Water consumption and fees
      </h2>
      <p class="mx-auto max-w-xl text-sm text-slate-600 sm:text-base">
        Current water consumption brackets and corresponding charges for Cordova Water System Inc.
        For clarifications or updates, please coordinate directly with the CWSI office.
      </p>
    </header>

    <div class="flex justify-center">
      <div
        class="w-full max-w-2xl overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 to-sky-700 p-[2px] shadow-[0_22px_55px_rgba(15,23,42,0.28)]"
      >
        <div class="overflow-hidden rounded-[1.3rem] bg-sky-600">
          <div
            class="bg-gradient-to-r from-sky-500 to-sky-400 px-6 py-4 text-center text-slate-50"
          >
            <p class="text-xs font-semibold uppercase tracking-[0.22em]">
              Water consumption and fees
            </p>
            <p class="mt-1 text-[0.8rem] text-sky-100">
              Residential / Commercial – Bag‑ong presyo kada kubiko
            </p>
          </div>

          <div class="bg-sky-600 px-4 pb-4 pt-3 text-[0.78rem] text-slate-50 sm:px-6">
            <div
              class="grid grid-cols-[1.3fr,1.5fr,1.1fr] items-center rounded-2xl bg-sky-700/60 px-3 py-2 font-semibold uppercase tracking-[0.12em]"
            >
              <div class="text-[0.7rem]">Konsumo (kubiko)</div>
              <div class="text-[0.7rem] text-center">Residential / Commercial</div>
              <div class="text-[0.7rem] text-right">Remarks</div>
            </div>

            <div class="mt-2 space-y-1.5 rounded-2xl bg-sky-700/30 p-2">
              <div
                class="grid grid-cols-[1.3fr,1.5fr,1.1fr] items-center rounded-xl bg-sky-700/60 px-3 py-2"
              >
                <div class="font-semibold">0 – 5 cu. m</div>
                <div class="text-center font-semibold">₱220</div>
                <div class="text-right text-[0.75rem]">Minimum charge</div>
              </div>
              <div
                class="grid grid-cols-[1.3fr,1.5fr,1.1fr] items-center rounded-xl bg-sky-700/40 px-3 py-2"
              >
                <div>6 – 10 cu. m</div>
                <div class="text-center">₱48</div>
                <div class="text-right text-[0.75rem]">Per cubic meter</div>
              </div>
              <div
                class="grid grid-cols-[1.3fr,1.5fr,1.1fr] items-center rounded-xl bg-sky-700/30 px-3 py-2"
              >
                <div>11 – 20 cu. m</div>
                <div class="text-center">₱54</div>
                <div class="text-right text-[0.75rem]">Per cubic meter</div>
              </div>
              <div
                class="grid grid-cols-[1.3fr,1.5fr,1.1fr] items-center rounded-xl bg-sky-700/20 px-3 py-2"
              >
                <div>21 – 30 cu. m</div>
                <div class="text-center">₱65</div>
                <div class="text-right text-[0.75rem]">Per cubic meter</div>
              </div>
              <div
                class="grid grid-cols-[1.3fr,1.5fr,1.1fr] items-center rounded-xl bg-sky-700/20 px-3 py-2"
              >
                <div>31+ cu. m</div>
                <div class="text-center">₱92</div>
                <div class="text-right text-[0.75rem]">Per cubic meter</div>
              </div>
            </div>

            <p class="mt-2 text-[0.68rem] text-sky-100">
              Note: Rates shown are for display purposes and should be validated against the latest
              official CWSI tariff and advisories.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

