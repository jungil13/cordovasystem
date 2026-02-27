<template>
  <section class="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 lg:flex-row lg:px-0">
    <div class="w-full space-y-4 lg:w-1/2">
      <h2 class="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        Account Access
      </h2>
      <p class="text-sm text-slate-600 sm:text-base">
        Log in to view account details and billing history, or register to create a new online
        profile.
      </p>
      <ul class="mt-4 space-y-2 text-xs text-slate-600">
        <li>• View and download your latest water bill.</li>
        <li>• Track payment history and request receipts.</li>
        <li>• Update contact information and service details.</li>
      </ul>
    </div>

    <div class="w-full space-y-5 lg:w-1/2">
      <div
        class="rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-slate-100"
      >
        <h3 class="text-sm font-semibold text-slate-900">Login</h3>
        <form class="mt-3 space-y-3 text-sm">
          <div>
            <label class="text-xs font-medium text-slate-700">Email</label>
            <input
              type="email"
              class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary-200 transition placeholder:text-slate-400 focus:bg-white focus:ring"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label class="text-xs font-medium text-slate-700">Password</label>
            <input
              type="password"
              class="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-primary-200 transition placeholder:text-slate-400 focus:bg-white focus:ring"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="button"
            class="mt-1 inline-flex w-full items-center justify-center rounded-xl bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-700"
          >
            Log In
          </button>
        </form>
      </div>

      <div
        class="rounded-2xl bg-slate-900/95 p-5 text-slate-50 shadow-soft ring-1 ring-slate-800"
      >
        <h3 class="text-sm font-semibold">Register</h3>
        <p class="mt-1 text-xs text-slate-300">
          Don’t have an online account yet? Create one to manage your CWSI services more
          conveniently.
        </p>
        <form class="mt-3 space-y-3 text-sm">
          <div>
            <label class="text-xs font-medium text-slate-200">Full Name</label>
            <input
              type="text"
              class="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-primary-300 transition placeholder:text-slate-500 focus:bg-slate-950 focus:ring"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label class="text-xs font-medium text-slate-200">Email</label>
            <input
              type="email"
              class="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-primary-300 transition placeholder:text-slate-500 focus:bg-slate-950 focus:ring"
              placeholder="you@example.com"
            />
          </div>
          <div class="grid gap-3 sm:grid-cols-2">
            <div>
              <label class="text-xs font-medium text-slate-200">Password</label>
              <input
                type="password"
                class="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-primary-300 transition placeholder:text-slate-500 focus:bg-slate-950 focus:ring"
                placeholder="Create a password"
              />
            </div>
            <div>
              <label class="text-xs font-medium text-slate-200">Confirm Password</label>
              <input
                type="password"
                class="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-primary-300 transition placeholder:text-slate-500 focus:bg-slate-950 focus:ring"
                placeholder="Confirm password"
              />
            </div>
          </div>
          <button
            type="button"
            class="mt-1 inline-flex w-full items-center justify-center rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-sky-400"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

