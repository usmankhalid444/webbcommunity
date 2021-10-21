<template>
  <button
    class="bg-custom-btnblue hover:bg-custom-lightblue md:w-44 md:h-12 h-10 w-40 uppercase font-semibold text-white"
    :class="classes"
  >
    <i :class="icon"></i> {{ text }}
  </button>
</template>
<script>
export default {
  name: "BtnLg",
  props: {
    text: String,
    classes: String,
    icon: String,
  },
};
</script>
