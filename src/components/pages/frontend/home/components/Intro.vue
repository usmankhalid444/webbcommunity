<template>
  <div class="md:text-center p-5 md:p-10  lg:py-24">
    <h1
      class="text-custom-darkblue text-3xl md:text-6xl font-semibold capitalize"
    >
      {{ heading }}
    </h1>
    <p class="text-custom-lightblue text-lg md:text-2xl mt-5 md:mt-10">
      {{ info }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    heading: String,
    info: String,
  },
};
</script>
<style></style>
