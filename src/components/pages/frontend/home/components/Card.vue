<template>
  <div class="col-span-12 md:col-span-4 text-center shadow-lg rounded ">
    <img class="justify-self-center w-full" :src="imgsrc" alt="card1" />
    <p class="text-custom-darkblue px-2 py-6 text-2xl ">
      {{ title }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    imgsrc: String,
    title: String,
  },
};
</script>
<style></style>
