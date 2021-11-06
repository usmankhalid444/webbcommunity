<template>
  <div class="text-custom-darkblue">
    <p class="font-semibold w-full mt-5">Select Months</p>
    <div class="w-full font-semibold mt-3">
      <button
        v-for="(item, i) in months"
        :key="i"
        @click="selectDay(item.name)"
        class="inline-block mx-2 my-2 w-16 h-16 font-semibold hover:bg-custom-darkblue hover:text-white transition hover:border-custom-darkblue  border border-custom-lightgray bg-white"
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
      months: [
        { symbol: "Jan", name: "January" },
        { symbol: "Feb", name: "February" },
        { symbol: "Mar", name: "March" },
        { symbol: "Apr", name: "April" },
        { symbol: "May", name: "May" },
        { symbol: "Jun", name: "June" },
        { symbol: "Jul", name: "July" },
        { symbol: "Aug", name: "August" },
        { symbol: "Sep", name: "September" },
        { symbol: "Oct", name: "October" },
        { symbol: "Nov", name: "November" },
        { symbol: "Dec", name: "December" },
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
