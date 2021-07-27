<template>
  <div class="grid md:grid-cols-4 antialiased transition ease-linear duration-200">
    <Menubar />
    <div class="content-view relative bg-secondary md:bg-white text-white md:text-secondary h-screen md:col-span-3 px-4 py-8 md:px-16 md:py-16 overflow-scroll">
      <div class="logo flex items-center justify-end sm:hidden">
        <img src="./assets/svg/Logo-Green-Mobile.svg" alt="Aspire Logo">
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>

import Menubar from "./components/Menubar.vue";

export default {
  components: {
    Menubar
  }
}
</script>


<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  // font-family: Avenir;
}
</style>
