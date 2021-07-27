<template>
  <section class="hero bg-secondary md:bg-white text-white md:text-gray-900 flex items-end justify-between mb-12">
    <div class="balance">
      <p class="text-sm mb-2">Available balance</p>
      <h1 class="aspire-h1 flex items-center space-x-4">
        <div class="currency px-3 py-1 bg-primary text-white text-sm rounded-md">S$</div>
        <span class="tracking-tight">3,000</span>
      </h1>
    </div>
    <button class="aspire-btn">
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
      <span class="font-bold text-sm">New card</span>
    </button>
  </section>

  <section class="tabs text-white md:text-gray-900">
    <!-- TBD: Toggle Style on click -->
    <ul class="tab-header flex items-center space-x-6 text-sm mb-4">
      <li class="pb-2 border-b-2 border-dark cursor-pointer">My debit cards</li>
      <li class="pb-2 text-gray-400 hover:text-gray-900 cursor-pointer">All company cards</li>
    </ul>
    <div class="tab-body md:bg-white md:p-10 md:border md:border-gray-100 rounded-lg shadow-lg mb-20">
      <div class="grid md:grid-cols-2 items-start gap-8">
        <VisaCard name="Mark Henry" number="1234 1234 1234"/>
        <Collapsible
          :config="{
            headerIcon: 'card-details', //icon name in SVG folder of Assets
            title: 'Card Details',
            dataItems: [],
            isCollapsed: true
          }"
        />
        <Collapsible
          v-if="this.recentTransactions.length"
          :config="{
            headerIcon: 'transaction', //icon name in SVG folder of Assets
            title: 'Recent Transactions',
            dataItems: this.recentTransactions,
            isCollapsed: false
          }"
        />
      </div>
    </div>
  </section>
</template>

<script>

import VisaCard from '@/components/VisaCard.vue'
import Collapsible from '@/components/Collapsible.vue'
import axios from "axios";

export default {
  name: 'Cards',
  components: { VisaCard, Collapsible },
  data() {
    return {
      recentTransactions: [],
    }
  },
  mounted() {
    this.getRecentTransactions();
  },
  methods: {
    getRecentTransactions() {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then( res => { this.recentTransactions = res.data; console.log(res.data)})
        .catch( err => console.error(err));
    }
  }
}
</script>

<style>

</style>