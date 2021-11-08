<template>
  <div>
    <userProfileLayout>
      <div class="text-custom-darkblue">
        <!-- title -->
        <h1 class="text-34px font-semibold mb-4">Notifications</h1>
        <!-- notification slides -->
        <div class="xl:h-563px xl:overflow-auto">
          <div
            class="grid bg-white w-full grid-cols-12 py-3 px-4 mt-6 rounded-lg hover:shadow text-center "
            v-for="(item, i) in notifications"
            :key="i"
          >
            <div
              class="col-span-12 xl:col-span-1 justify-self-center xl:justify-self-auto  xl:py-0 py-2"
            >
              <img
                class="w-10 h-10 rounded-full"
                :src="item.imgsrc"
                alt="user-image"
              />
            </div>
            <div
              class="col-span-12 xl:col-span-3 font-semibold my-auto xl:py-0 py-2  xl:text-left"
            >
              <p>{{ item.title }}</p>
            </div>
            <div
              class="col-span-12 xl:col-span-6 text-custom-lightblue my-auto xl:py-0 py-2 xl:text-left"
            >
              <p>{{ item.info }}</p>
            </div>
            <div class="col-span-12 xl:col-span-2 my-auto xl:py-0 py-2">
              <p>{{ item.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </userProfileLayout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      notifications: [
        {
          imgsrc: "/assets/user.png",
          title: "Documents Verified",
          info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
          date: "6 Dec 20",
        },
        {
          imgsrc: "/assets/user2.png",
          title: "Number Verified",
          info: "Lorem ipsum dolor sit amet, consetetur dolor sit amet  elitr.",
          date: "6 Dec 20",
        },
        {
          imgsrc: "/assets/user.png",
          title: "Documents Verified",
          info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
          date: "6 Dec 20",
        },
        {
          imgsrc: "/assets/user2.png",
          title: "Admin",
          info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
          date: "6 Dec 20",
        },
        {
          imgsrc: "/assets/user.png",
          title: "Number Verified",
          info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
          date: "6 Dec 20",
        },
      ],
    };
  },
};
</script>
