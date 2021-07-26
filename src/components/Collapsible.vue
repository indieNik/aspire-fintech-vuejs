<template>
  <div class="collapsible-wrapper border shadow-lg rounded-xl overflow-hidden">
    <div @click="collapse" class="collapsible-header bg-light flex items-center justify-between p-6">  
      <div class="title flex items-center space-x-2">
        <img src="../assets/svg/card-details.svg" alt="Icon - Card Details">
        <span class="text-dark">Card details</span>
      </div>
      <div class="toggle"><img src="../assets/svg/down-arrow.svg" alt="Collapse this element"></div>
    </div>
    <div v-if="isCollapsed" class="collapsible-body">
    </div>
    <div v-if="isCollapsed" class="collapsible-footer">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collapsible',
  data() {
    return {
      isCollapsed: true,
    }
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
