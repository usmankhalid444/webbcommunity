<template>
  <div class="bg-custom-lightgreen p-3 md:p-14 w-full md:w-auto md:ml-72">
    <!-- title and add new event section -->
    <div class="w-full relative">
      <h1 class="font-semibold text-xl md:text-4xl text-custom-darkblue inline">
        Community Events
      </h1>
      <Btnsm
        text="new event"
        classes="absolute right-0"
        icon="ri-add-fill px-1 align-middle"
      />
    </div>
    <!-- filter and search field -->
    <div class="w-full bg-white mt-14 p-5 relative">
      <ul>
        <li class="inline text-custom-lightgray"><a href="#">All</a></li>
        <li class="text-custom-darkblue   inline font-bold px-10">
          <a href="#">My Events</a>
        </li>
        <input
          class="absolute block border border-gray-400 p-2 right-5 top-3 w-80"
          type="text"
          placeholder=" Search"
        />
      </ul>
    </div>
    <!-- table start -->
    <div class="capitalize h-90vh mt-10 overflow-auto w-full">
      <!-- px-8 py-4 -->
      <table
        class="w-full md:leading-extra-loose overflow-scroll text-sm md:text-base"
      >
        <thead class="border-2">
          <tr class="text-left">
            <th class="px-5">sr.</th>
            <th>type</th>
            <th>date</th>
            <th>status</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="text-custom-darkblue font-semibold ">
          <tr class="border hover:border-2  hover:border-custom-lightgray">
            <td class="px-5">01</td>
            <td>general meeing</td>
            <td>dec 15, 2020</td>
            <td>under review</td>
            <td>
              <a href="#" class="text-custom-btnblue" @click="modal = !modal"
                >view</a
              >
            </td>
          </tr>
          <tr class="border hover:border-2  hover:border-custom-lightgray">
            <td class="px-5">02</td>
            <td>enterpreneurship conference</td>
            <td>dec 08, 2020</td>
            <td>approved</td>
            <td></td>
          </tr>
          <tr class="border hover:border-2  hover:border-custom-lightgray">
            <td class="px-5">03</td>
            <td>coders meetup</td>
            <td>dec 01, 2020</td>
            <td>approved</td>
            <td></td>
          </tr>
          <tr class="border hover:border-2  hover:border-custom-lightgray">
            <td class="px-5">04</td>
            <td>domestic problems debate</td>
            <td>nov 23,2020</td>
            <td>approved</td>
            <td></td>
          </tr>
          <tr class="border hover:border-2  hover:border-custom-lightgray">
            <td class="px-5">04</td>
            <td>domestic problems debate</td>
            <td>nov 23,2020</td>
            <td>approved</td>
            <td></td>
          </tr>
          <tr class="border hover:border-2  hover:border-custom-lightgray">
            <td class="px-5">04</td>
            <td>domestic problems debate</td>
            <td>nov 23,2020</td>
            <td>approved</td>
            <td></td>
          </tr>
          <tr class="border hover:border-2  hover:border-custom-lightgray">
            <td class="px-5">04</td>
            <td>domestic problems debate</td>
            <td>nov 23,2020</td>
            <td>approved</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="w-full text-custom-darkblue font-semibold mt-10">
      <p class="inline">Total 4</p>
      <p class="float-right">
        Page <i class="ri-arrow-left-s-line align-middle text-xl"></i> 1 of 1
        <i class="ri-arrow-right-s-line align-middle text-xl"></i>
      </p>
    </div>
  </div>
  <transition name="bounce">
    <Modal v-if="modal" />
  </transition>
</template>
<script>
import Btnsm from "../../../../global-components/BtnSm";
import Modal from "./Modal";
export default {
  components: {
    Btnsm,
    Modal,
  },
  data() {
    return {
      modal: false,
    };
  },
};
</script>
<style>
.bounce-enter-active {
  animation: bounce-in 0.5s ease-out both;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse ease-in both;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
