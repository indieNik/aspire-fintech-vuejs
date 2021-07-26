<template>
  <div class="card-wrapper relative">
    <div class="flex items-center justify-end -mb-2 md:mb-0">
      <button @click="toggleCardNumberVisibility" class="bg-white p-2 flex items-center space-x-1 text-primary rounded-xl rounded-br-none text-opacity-75 hover:text-opacity-100">
        <svg v-if="!showNumber" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
        <svg v-if="showNumber" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"></path><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path></svg>
        <span class="text-xs font-bold">{{ showNumber ? 'Hide' : 'Show' }} card number</span>
      </button>
    </div>
    <div class="card bg-primary rounded-xl p-6 text-white">
      <div class="logo flex items-center justify-end mb-4">
        <img src="../assets/svg/Aspire-Logo-1.svg" alt="Logo of Aspire on VISA card">
      </div>
      <div class="name text-2xl font-bold mb-4">{{ name }}</div>
      <div class="card-number h-10 flex items-center font-bold mb-3 space-x-2">
        <span class="text-xl" v-if="showNumber">{{ number }}</span>
        <span class="text-4xl" v-if="!showNumber">•••• •••• ••••</span>
        <span class="text-xl">2020</span>
      </div>
      <div class="exp-cvv flex items-center space-x-6 text-sm font-extrabold mb-2">
        <div class="exp flex items-center space-x-2">
          <span class="">Thru:</span>
          <span>12/20</span>
        </div>
        <div class="cvv flex items-center space-x-2">
          <span class="">CVV:</span>
          <span>***</span>
        </div>
      </div>
      <div class="visa-img flex items-center justify-end">
        <img src="../assets/svg/Visa-Logo.svg" alt="VISA Logo">
      </div>
    </div>
    <div class="card-scroll my-4 mb-8">
      <div class="flex items-center justify-center space-x-1">
        <!-- TBD: Add Click & Swipe event handlers -->
        <button class="bg-primary px-2 py-1 rounded-full"></button>
        <button class="bg-primary px-1 py-1 rounded-full bg-opacity-25"></button>
        <button class="bg-primary px-1 py-1 rounded-full bg-opacity-25"></button>
      </div>
    </div>
    <CardActions />
  </div>
</template>

<script>

import CardActions from './CardActions.vue'

export default {
  name: 'VisaCard',
  props: ['name', 'number'],
  data() {
    return {
      showNumber: false,
    }
  },
  components: { CardActions },
  methods: {
    toggleCardNumberVisibility() {
      this.showNumber = !this.showNumber;
    }
  }
}
</script>

<style scoped lang="scss">

</style>
