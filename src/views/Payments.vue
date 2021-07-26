<template>
  Repayment history
  <div class="list">
    <div v-for="payment in paymentHistory" :key="payment.id" class="payment-card">
      <div class="price">
        S$ {{ Math.abs(payment.address.geo.lng) }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Payments',

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