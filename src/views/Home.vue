<template>
  <div class="home mb-20">
    <section class="welcome">
      <h1 class="aspire-h1 mb-2">Welcome, Mark.</h1>
      <p class="text-sm tracking-widest">What would you like to get done today?</p>
    </section>
    <div class="grid md:grid-cols-2 md:gap-8">
      <div class="credit-limits my-10">
        <div class="flex items-center justify-between">
          <h2 class="text-lg md:text-xl font-bold">
            Your credit limits
          </h2>
          <router-link class="text-primary" to="/cards">View all</router-link>
        </div>
        <p class="text-sm text-gray-400 tracking-wider">Go to the cards tab to view details</p>
        <div class="collapsible-wrapper border border-gray-50 shadow-xl rounded-xl overflow-hidden h-64 mt-4">
        </div>
      </div>
      <div class="credit-limits my-10">
        <div class="flex items-center justify-between">
          <h2 class="text-lg md:text-xl font-bold">
            Spend Breakdown
          </h2>
        </div>
        <p class="text-sm text-gray-400 tracking-wider">30-day card spend breakdown</p>
        <div class="collapsible-wrapper border border-gray-50 shadow-xl rounded-xl overflow-hidden h-64 mt-4">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: []
}
</script>
