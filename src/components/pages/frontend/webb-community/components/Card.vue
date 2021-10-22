<template>
  <div class="border border-custom-lightgray col-span-12 md:col-span-6">
    <div class="text-xl px-5 py-9 md:py-14 hover:shadow-xl">
      <img
        class="inline w-11 h-11 rounded-full"
        :src="imgsrc"
        alt="userimage"
      />
      <p class="inline px-5 font-semibold ">{{ name }}</p>
      <p class="float-right mt-2 text-custom-lightgray">{{ date }}</p>
      <h1 class="text-3xl py-7">
        {{ heading }}
      </h1>
      <p class="text-custom-lightblue  leading-relaxed">
        {{ info }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgsrc: String,
    name: String,
    date: String,
    heading: String,
    info: String,
  },
};
</script>
<style></style>
