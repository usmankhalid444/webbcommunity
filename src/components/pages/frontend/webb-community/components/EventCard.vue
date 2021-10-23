<template>
  <div
    class="border border-custom-lightgray col-span-12 md:col-span-6 hover:border-custom-lightblue transform hover:scale-105 transition duration-500 rounded hover:shadow-2xl"
  >
    <div class="text-xl px-5 py-9 md:py-14 ">
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
      <div class="text-base text-custom-lightblue my-3">
        <p class=" inline p-2 rounded-md mx-2 bg-custom-lightgreen">
          {{ duration }}
        </p>
        <p class="inline p-2 rounded-md mx-2 bg-custom-lightgreen">
          <i class="ri-map-pin-2-line pr-2"></i>{{ location }}
        </p>
      </div>
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
    duration: String,
    location: String,
  },
};
</script>
<style></style>
