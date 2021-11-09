<template>
  <div
    class="capitalize w-full z-50 absolute md:w-2/3 h-screen top-0 left-0 md:left-60 p-5 md:p-12 shadow-2xl bg-white lg:max-w-4xl overflow-auto"
    v-if="show"
  ></div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>
