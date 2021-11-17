<template>
  <div
    class="border border-custom-lightgray col-span-12 md:col-span-6 hover:border-custom-lightblue md:transform hover:scale-105 transition duration-500 rounded hover:shadow-2xl"
  >
    <router-link to="/singlenewspage">
      <div class="md:text-xl px-5 py-9 md:py-14 ">
        <img
          class="inline w-11 h-11 rounded-full"
          :src="news.imgsrc"
          alt="userimage"
        />
        <p class="inline px-5 font-semibold ">{{ news.name }}</p>
        <p class="float-right mt-2 text-custom-lightgray">{{ news.date }}</p>
        <h1 class="text-2xl md:text-3xl py-7">
          {{ news.heading }}
        </h1>
        <p class="text-custom-lightblue  leading-relaxed">
          {{ news.info }}
        </p>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ["news"],
};
</script>
<style></style>
