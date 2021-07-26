<template>
  <div class="grid md:grid-cols-4 antialiased transition ease-linear duration-200">
    <Menubar />
    <div class="content-view bg-secondary md:bg-white h-screen md:col-span-3 p-8 md:p-16 overflow-scroll">
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
