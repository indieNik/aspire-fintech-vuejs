<template>
  <section class="hero bg-secondary md:bg-white text-white md:text-gray-900 flex items-baseline justify-between mb-8">
    <div class="balance">
      <h1 class="aspire-h1 mb-2">Credit</h1>
      <h1 class="text-sm mb-2">Get instant credit with <strong>weekly</strong> repayments</h1>
    </div>
  </section>

  <div v-if="!creditSuccess" class="grid md:grid-cols-2 gap-20">
    <section class="new-credit">
      <h2 class="text-2xl font-bold text-white md:text-gray-700 mb-4">
        Request new credit
      </h2>
      <form @submit.prevent="requestNewCredit" class="form aspire-card">
        <div class="form-field flex flex-col space-y-2 my-4">
          <label class="text-xs text-gray-400" for="term">Loan term (months)</label>
          <input class="aspire-input" v-model="newCredit.term" id="term" type="number" placeholder="1">
        </div>
        <div class="form-field flex flex-col space-y-2 my-4">
          <label class="text-xs text-gray-400" for="amount">Credit required</label>
          <input class="aspire-input" v-model="newCredit.amount" id="amount" type="number" placeholder="S$ 500">
        </div>
        <div v-if="errorMessage" class="text-red-500 text-xs text-center">
          {{ errorMessage }}
        </div>
        <button
          @click="requestNewCredit"
          class="aspire-btn bg-dark text-white px-6 mx-auto my-8 mb-4"
          :class="{ 'opacity-50' : requestInProgress }"
          :disabled="requestInProgress"
          type="submit"
        >
          {{ requestInProgress ? 'Please wait' : 'Request'}}
        </button>
      </form>
    </section>
    <section v-if="localCreditHistory.length" class="credit-history mb-20">
      <h2 class="text-2xl font-bold mb-4">Credit History</h2>
      <div class="bg-white flex flex-col-reverse text-secondary text-sm max-h-96 overflow-y-auto shadow-xl rounded-3xl">
        <div v-for="item in localCreditHistory" :key="item.id" class="transaction px-2 pt-6 pb-4 rounded-sm border-b-2 border-gray-100 hover:bg-gray-50">
          <div class="transaction-header grid grid-cols-4 gap-2">
            <div class="icon col-span-1 bg-blue-100 grid place-items-center m-auto p-4 rounded-full">
              <img src="../assets/svg/file-storage.svg" alt="aspire transaction">
            </div>
            <div class="details col-span-3 grid">
              <strong>S$ {{ item.amount }}</strong>
              <span class="text-gray-400">{{ Math.round(Math.random() * 20) }} May 2020</span>
              <div class="flex items-center my-2">
                <span class="icon bg-dark inline-grid place-items-center p-1 rounded-full">
                  <img src="../assets/svg/business-and-finance.svg" alt="aspire transaction">
                </span>
                <span class="text-xs text-dark ml-2">{{ item.term }} months</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <section v-if="creditSuccess" class="credit-success">
    <div class="form aspire-card p-12">
      <div class="grid place-items-center gap-8 text-green-600">
        <svg class="w-20 h-20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        <div class="text-xl font-bold text-center">
          Credit Requested Successfully!
        </div>
        <button @click="creditSuccess = false;" class="aspire-btn bg-green-600 text-white px-8">
          Check Credit History
        </button>
      </div>
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
        amount: '',
        term: ''
      },
      postCreditRequest: [],
      requestInProgress: false,
      creditSuccess: false,
      errorMessage: '',
      localCreditHistory: [],
    }
  },

  mounted() {
    this.initFakeCreditDB();
  },

  methods: {
    requestNewCredit() {
      if (this.validateForm()) {
        this.requestInProgress = true
        axios.post('https://jsonplaceholder.typicode.com/users', this.newCredit)
        .then(res => {
          this.requestInProgress = false;
          this.postCreditRequest = res;
          this.creditSuccess = res;
          this.fakeSaveUsingLS();
          this.clearForm();
          console.log('this.postCreditRequest: ', this.postCreditRequest);
        })
        .catch(err => {
        console.error(err);
        this.creditSuccess = false;
        this.requestInProgress = false;
      });
      } else {
        this.errorMessage = "Please furnish correct details!"
      }
    },

    initFakeCreditDB() {
      if(!JSON.parse(localStorage.getItem('creditHistory'))) {
        localStorage.setItem('creditHistory', JSON.stringify([]));
      } else {
        this.localCreditHistory = JSON.parse(localStorage.getItem('creditHistory'));
      }
      console.log('localCreditHistory: ', this.localCreditHistory);
    },

    fakeSaveUsingLS() {
      let creditHistory = JSON.parse(localStorage.getItem('creditHistory'));
      if(!creditHistory) {
        creditHistory = [];
      } else {
        creditHistory = JSON.parse(localStorage.getItem('creditHistory'));
        creditHistory.push({...this.newCredit});
      }
      localStorage.setItem('creditHistory', JSON.stringify(creditHistory));
      this.localCreditHistory = creditHistory;
    },

    validateForm() {
      if (this.newCredit.amount && this.newCredit.term) {
        this.errorMessage = '';
        return true;
      } else {
        return false;
      }
    },

    clearForm() {
      this.newCredit.term = 0;
      this.newCredit.amount = 0;
    }
  }
}
</script>

<style>

</style>