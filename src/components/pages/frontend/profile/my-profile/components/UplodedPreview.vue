<template>
  <div class="col-span-6 md:col-span-3 border relative">
    <img src="/assets/pdficon.png" alt="pdficon" class="w-full object-cover" />
    <p class="p-2 text-center  text-sm underline">
      residential_certificate.pdf
    </p>
    <span
      class="absolute top-2 right-0 cursor-pointer"
      @click="editToggle = !editToggle"
    >
      <svg
        class="w-10 h-6 fill-current text-white"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
        />
      </svg>
    </span>
    <span
      v-if="editToggle"
      class="absolute top-9 right-3 bg-custom-lightgreen px-5 py-2 rounded font-semibold shadow border border-custom-lightgray"
      ><p class="py-1 cursor-pointer hover:text-custom-purple">Replace</p>
      <p class="py-1 cursor-pointer hover:text-custom-purple">Delete</p>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editToggle: false,
    };
  },
};
</script>
