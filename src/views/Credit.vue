<template>
  <section class="hero bg-secondary md:bg-white text-white md:text-gray-900 flex items-baseline justify-between mb-12">
    <div class="balance">
      <h1 class="aspire-h1 mb-2">Credit</h1>
      <h1 class="text-sm mb-2">Get instant credit with weekly repayments</h1>
    </div>
  </section>
  <section class="new-credit grid md:grid-cols-2 gap-8">
    <div class="form aspire-card">
      <h2 class="text-2xl font-bold text-dark my-4">
        Request new credit
      </h2>
      <div class="form-field flex flex-col space-y-2 my-4">
        <label class="text-xs text-gray-400" for="term">Loan term (months)</label>
        <input class="aspire-input" :value="newCredit.tem" id="term" type="number" placeholder="1">
      </div>
      <div class="form-field flex flex-col space-y-2 my-4">
        <label class="text-xs text-gray-400" for="amount">Credit required</label>
        <input class="aspire-input" :value="newCredit.amount" id="amount" type="number" placeholder="S$ 500">
      </div>
      <button class="aspire-btn bg-dark text-white px-6 mx-auto my-8 mb-4" @click="requestNewCredit">Request</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Credit',
  components: {},

  data() {
    return {
      newCredit: {
        amount: 0,
        term: 1
      },
      creditHistory: []
    }
  },

  mounted() {},

  methods: {
    requestNewCredit() {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => this.creditHistory = res.data)
      .catch(err => console.error(err));
    }
  }
}
</script>

<style>

</style>