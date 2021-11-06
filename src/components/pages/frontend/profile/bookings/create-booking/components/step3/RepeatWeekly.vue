<template>
  <div class="text-custom-darkblue">
    <p class="font-semibold w-full mt-5">Choose Days</p>
    <div class="w-full font-semibold mt-3">
      <button
        v-for="(item, i) in days"
        :key="i"
        @click="selectDay(item.name)"
        class="inline-block mx-2 my-1 w-16 h-16 font-semibold hover:bg-custom-darkblue hover:text-white transition hover:border-custom-darkblue  border border-custom-lightgray bg-white"
        :class="
          selectedDays.includes(item.name)
            ? 'bg-custom-darkblue text-white'
            : ''
        "
      >
        {{ item.symbol }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      days: [
        { symbol: "M", name: "Monday" },
        { symbol: "T", name: "Tuesday" },
        { symbol: "W", name: "Wednesday" },
        { symbol: "T", name: "Thursday" },
        { symbol: "F", name: "Friday" },
        { symbol: "S", name: "Saturday" },
        { symbol: "S", name: "Sunday" },
      ],
      //   selected days data is available in this array
      selectedDays: [],
    };
  },
  methods: {
    selectDay(item) {
      if (!this.selectedDays.includes(item)) {
        this.selectedDays.push(item);
      } else {
        let itemIndex = this.selectedDays.indexOf(item);
        this.selectedDays.splice(itemIndex, 1);
      }
    },
  },
};
</script>
