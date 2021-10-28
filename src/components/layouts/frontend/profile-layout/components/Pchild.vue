<template>
  <div class="text-center mt-20">
    <li>
      <p class="text-5xl font-bold">{{ title }}</p>
    </li>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    dropdown: String,
  },
};
</script>
