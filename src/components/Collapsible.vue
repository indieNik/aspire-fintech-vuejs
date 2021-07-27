<template>
  <div class="collapsible-wrapper border shadow-lg rounded-xl overflow-hidden">
    <div @click="collapse" class="collapsible-header bg-light flex items-center justify-between p-6 cursor-pointer">  
      <div class="title flex items-center space-x-2">
        <img :src="require(`../assets/svg/${headerIcon}.svg`)" alt="Icon - Card Details">
        <span class="text-dark">{{ title }}</span>
      </div>
      <div v-bind:class="{ 'rotate-180': !isCollapsed }" class="toggle transition transform"><img src="../assets/svg/down-arrow.svg" alt="Collapse this element"></div>
    </div>
    <div v-if="!isCollapsed" class="collapsible-body bg-white text-secondary text-sm max-h-96 overflow-y-auto">
      <div v-for="item in dataItems" :key="item.id" class="transaction px-2 pt-6 pb-4 rounded-sm border-b-2 border-gray-100 hover:bg-gray-50">
        <div class="transaction-header grid grid-cols-5 gap-2">
          <div class="icon col-span-1 bg-blue-100 grid place-items-center m-auto p-4 rounded-full">
            <img src="../assets/svg/file-storage.svg" alt="aspire transaction">
          </div>
          <div class="details col-span-3 grid">
            <strong>{{ item.company.name }}</strong>
            <span class="text-gray-400">20 May 2020</span>
            <div class="flex items-center my-2">
              <span class="icon bg-dark inline-grid place-items-center p-1 rounded-full">
                <img src="../assets/svg/business-and-finance.svg" alt="aspire transaction">
              </span>
              <span class="text-xs text-dark ml-2">Refund on debit card</span>
            </div>
          </div>
          <div class="amountcol-span-1  text-primary inline-flex">
            <span class="flex-none">+S$ {{ Math.round(Math.abs(item.address.geo.lng)) }}</span>
            <svg class="w-5 h-5 text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isCollapsed" class="collapsible-footer bg-green-50 p-4 grid place-items-center">
      <router-link to="/payments" class="text-primary">
        View all card transactions
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collapsible',
  props: ['config'],
  data() {
    return {
      headerIcon: this.config.headerIcon,
      title: this.config.title,
      dataItems: this.config.dataItems,
      isCollapsed: this.config.isCollapsed,
    }
  },
  mounted() {
    // console.log('this.collapseByDefault on mount: ', this.collapseByDefault);
    // console.log('this.isCollapsed on mount: ', this.isCollapsed);
    console.log('this.dataItems on mount: ', this.dataItems);
  },
  methods: {
    collapse() {
      this.isCollapsed = !this.isCollapsed;
      console.log('this.isCollapsed: ', this.isCollapsed);
    }
  }
}
</script>

<style scoped lang="scss">

</style>
