<template>
  <div class="home">
    <section class="welcome">
      <h1 class="text-2xl md:text-4xl font-bold mb-2">Welcome, Mark.</h1>
      <p class="text-sm tracking-widest">What would you like to get done today?</p>
    </section>
    <div class="limits my-10">
      <div class="flex items-center justify-between">
        <h2 class="text-lg md:text-xl font-bold">
          Your credit limits
        </h2>
        <router-link class="text-primary" to="/cards">View all</router-link>
      </div>
      <p class="text-sm text-gray-400 tracking-wider">Go to the cards tab to view details</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>
