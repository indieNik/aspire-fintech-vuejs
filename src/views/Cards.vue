<template>
  <section class="hero bg-secondary md:bg-white text-white md:text-gray-900 flex items-end justify-between mb-12">
    <div class="balance">
      <h1 class="text-sm mb-2">Available balance</h1>
      <h2 class="text-4xl font-bold flex items-center space-x-4">
        <div class="currency px-2 py-2 bg-primary text-white text-sm rounded-md">S$</div>
        <span class="tracking-tight">3,000</span>
      </h2>
    </div>
    <button class="new-card md:bg-dark text-light md:text-white flex items-center p-2 space-x-2 rounded-md hover:bg-opacity-90">
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
      <span class="font-bold text-sm">New card</span>
    </button>
  </section>

  <section class="tabs text-white md:text-gray-900">
    <!-- TBD: Toggle Style on click -->
    <ul class="tab-header flex items-center space-x-6 text-sm mb-4 cursor-pointer">
      <li class="pb-2 border-b-2 border-dark">My debit cards</li>
      <li class="pb-2 text-gray-400 hover:text-gray-900">All company cards</li>
    </ul>
    <div class="tab-body md:bg-white md:p-10 md:border md:border-gray-100 rounded-lg shadow-lg mb-20">
      <div class="grid md:grid-cols-2 gap-8">
        <VisaCard name="Mark Henry" number="1234 1234 1234"/>
        <Collapsible />
      </div>
    </div>
  </section>
</template>

<script>

import VisaCard from '@/components/VisaCard.vue'
import Collapsible from '@/components/Collapsible.vue'

export default {
  name: 'Cards',
  components: { VisaCard, Collapsible },
}
</script>

<style>

</style>