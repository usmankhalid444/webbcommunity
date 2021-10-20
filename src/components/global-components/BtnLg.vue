<template>
  <button
    class="bg-custom-btnblue hover:bg-custom-lightblue w-72 md:w-96 h-14 uppercase font-semibold text-white"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "BtnLg",
  props: {
    text: String,
  },
};
</script>
