<template>
  <div class="bg-light flex items-center justify-between p-6 rounded-xl overflow-x-auto">
    <button class="flex flex-col justify-center items-center space-y-2">
      <img src="../assets/svg/Freeze-card.svg" alt="Freeze-card Icon" />
      <span class="text-xs text-dark w-16 h-10">Freeze card</span>
    </button>
    <button class="flex flex-col justify-center items-center space-y-2">
      <img src="../assets/svg/Set-spend-limit.svg" alt="Spend Icon" />
      <span class="text-xs text-dark w-16 h-10">Set spend limit</span>
    </button>
    <button class="flex flex-col justify-center items-center space-y-2">
      <img src="../assets/svg/GPay.svg" alt="Freeze-card Icon" />
      <span class="text-xs text-dark w-16 h-10">Add to GPay</span>
    </button>
    <button class="flex flex-col justify-center items-center space-y-2">
      <img src="../assets/svg/Replace-card.svg" alt="Replace Card Icon" />
      <span class="text-xs text-dark w-16 h-10">Replace Card</span>
    </button>
    <button class="flex flex-col justify-center items-center space-y-2">
      <img src="../assets/svg/Deactivate-card.svg" alt="Cancel Card Icon" />
      <span class="text-xs text-dark w-16 h-10">Cancel card</span>
    </button>
  </div>
</template>

<script>
export default {
    name: 'CardActions'
};
</script>

<style>
</style>