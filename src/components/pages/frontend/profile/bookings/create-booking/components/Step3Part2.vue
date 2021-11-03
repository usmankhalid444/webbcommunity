<template>
  <div>
    <div class="w-full">
      <p class="font-semibold">How many guests are invited?</p>
      <input
        class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8"
        type="text"
        placeholder="No. of Adults"
      />
      <input
        class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8"
        type="text"
        placeholder="No. of Kids"
      />
    </div>
    <button
      @click="nextstep"
      class="bg-custom-purple hover:bg-custom-lightblue font-semibold text-white w-full h-16 my-5"
    >
      CONTINUE
    </button>
  </div>
</template>
<script>
export default {
  props: {
    nextstep: Function,
  },
};
</script>
