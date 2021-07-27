<template>
  <section class="hero bg-secondary md:bg-white text-white md:text-gray-900 flex items-baseline justify-between mb-12">
    <div class="balance">
      <h1 class="aspire-h1 mb-2">Payments</h1>
      <h2 class="text-sm text-gray-400 mb-2">All your transactions at one place</h2>
    </div>
    <router-link to="/credit">
      <button class="new-card md:bg-dark text-blue-300 md:text-white flex items-center p-2 space-x-2 rounded-md hover:bg-opacity-90">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
        <span class="font-bold text-sm">Credit</span>
      </button>
    </router-link>
  </section>
  <div class="list">
    <Collapsible
      v-if="this.paymentHistory.length"
      :config="{
        headerIcon: 'transaction', //icon name in SVG folder of Assets
        title: 'Recent Payment History',
        dataItems: this.paymentHistory,
        isCollapsed: false
      }"
    />
  </div>
</template>

<script>
import axios from 'axios';
import Collapsible from '@/components/Collapsible.vue'

export default {
  name: 'Payments',
  components: { Collapsible },

  data() {
    return {
      paymentHistory: []
    }
  },

  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then( res => this.paymentHistory = res.data)
      .catch( err => console.error(err));
  }
}
</script>

<style>

</style>