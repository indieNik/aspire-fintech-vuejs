<template>
  <!-- Desktop Menubar -->
  <aside class="bg-secondary col-span-1 h-screen overflow-scroll hidden md:block">
    <div class="grid text-white text-left gap-10">
      <div class="logo p-12">
        <img src="../assets/svg/Aspire-Logo.svg" alt="Logo of Aspire">
        <p class="text-gray-500 mt-5 w-64">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </p>
      </div>
      <router-link to="/" class="link flex items-center space-x-4 hover:bg-dark px-12 py-4">
        <img class="w-5 h-5 object-contain" src="../assets/svg/Home.svg" alt="Go to Home">
        <span class="text-lg">Home</span>
      </router-link>
      <router-link to="cards" class="link flex items-center space-x-4 hover:bg-dark px-12 py-4">
        <img class="w-5 h-5 object-contain" src="../assets/svg/Card.svg" alt="Go to Cards">
        <span class="text-lg">Cards</span>
      </router-link>
      <router-link to="payments" class="link flex items-center space-x-4 hover:bg-dark px-12 py-4">
        <img class="w-5 h-5 object-contain" src="../assets/svg/Payments.svg" alt="Go to Payments">
        <span class="text-lg">Payments</span>
      </router-link>
      <router-link to="credit" class="link flex items-center space-x-4 hover:bg-dark px-12 py-4">
        <img class="w-5 h-5 object-contain" src="../assets/svg/Credit.svg" alt="Go to Credit">
        <span class="text-lg">Credit</span>
      </router-link>
      <router-link to="settings" class="link flex items-center space-x-4 hover:bg-dark px-12 py-4">
        <img class="w-5 h-5 object-contain" src="../assets/svg/Account.svg" alt="Go to Settings">
        <span class="text-lg">Settings</span>
      </router-link>
    </div>
  </aside>
  <!-- Mobile Menubar -->
  <aside class="fixed bottom-0 left-0 bg-white w-screen py-4 shadow-inner md:hidden z-10">
    <div class="w-screen flex items-center justify-evenly">
      <router-link to="/" class="link flex flex-col items-center space-y-2">
        <img class="w-5 h-5 object-contain" src="../assets/svg/Logo-Mobile.svg" alt="Go to Home">
        <span class="text-xs">Home</span>
      </router-link>
      <router-link to="cards" class="link flex flex-col items-center space-y-2">
        <img class="w-5 h-5 object-contain" src="../assets/svg/Card.svg" alt="Go to Cards">
        <span class="text-xs">Cards</span>
      </router-link>
      <router-link to="payments" class="link flex flex-col items-center space-y-2">
        <img class="w-5 h-5 object-contain" src="../assets/svg/Payments-Mobile.svg" alt="Go to Payments">
        <span class="text-xs">Payments</span>
      </router-link>
      <router-link to="credit" class="link flex flex-col items-center space-y-2">
        <img class="w-5 h-5 object-contain" src="../assets/svg/Credit-Mobile.svg" alt="Go to Credit">
        <span class="text-xs">Credit</span>
      </router-link>
      <router-link to="settings" class="link flex flex-col items-center space-y-2">
        <img class="w-5 h-5 object-contain" src="../assets/svg/Account-Mobile.svg" alt="Go to Settings">
        <span class="text-xs">Settings</span>
      </router-link>
    </div>
  </aside>

  <!-- TBD: Change color of Nav Item on Click or Route Change -->

</template>

<script>
export default {
  name: 'Menubar',
}
</script>

<style scoped lang="scss">

</style>
