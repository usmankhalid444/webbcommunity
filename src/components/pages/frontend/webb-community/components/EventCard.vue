<template>
  <div
    class="border border-custom-lightgray col-span-12 md:col-span-6 hover:border-custom-lightblue md:transform hover:scale-105 transition duration-500 rounded hover:shadow-2xl"
  >
    <div class="md:text-xl px-5 py-9 md:py-14 ">
      <img
        class="inline w-11 h-11 rounded-full"
        :src="event.imgsrc"
        alt="userimage"
      />
      <p class="inline px-5 font-semibold ">{{ event.name }}</p>
      <p class="float-right mt-2 text-custom-lightgray">{{ event.date }}</p>
      <h1 class="text-2xl md:text-3xl py-7">
        {{ event.heading }}
      </h1>
      <div class="text-base text-custom-lightblue my-3">
        <p class=" inline p-2 rounded-md mx-2 bg-custom-lightgreen">
          {{ event.duration }}
        </p>
        <p class="inline p-2 rounded-md mx-2 bg-custom-lightgreen">
          <i class="ri-map-pin-2-line pr-2"></i>{{ event.location }}
        </p>
      </div>
      <p class="text-custom-lightblue  leading-relaxed">
        {{ event.info }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["event"],
};
</script>
<style></style>
