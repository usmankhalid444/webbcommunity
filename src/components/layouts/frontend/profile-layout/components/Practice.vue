<template>
  <!-- <Pchild
    v-for="(data, i) in menu"
    :key="i"
    :title="data.title"
    :dropdown="data.dropdown.title"
  /> -->
  <ul class="mt-10 ">
    <li
      v-for="(item, i) in menu"
      :key="i"
      class="px-5 my-1 text-xl text-custom-darkblue hover:text-custom-lightblue"
    >
      <router-link v-if="item.dropdown.length === 0" :to="item.link"
        >{{ item.title }}
      </router-link>
      <button
        v-if="item.dropdown.length > 0"
        @click="showDropdown('dropdown-' + i)"
      >
        {{ item.title }}
        <i
          v-if="current_submenu !== 'dropdown-' + i"
          class="ri-arrow-down-s-line float-right"
        ></i>
        <i
          v-if="current_submenu === 'dropdown-' + i"
          class="ri-arrow-up-s-line float-right"
        ></i>
      </button>
      <ul
        class="dropdown-menu"
        v-if="item.dropdown.length > 0 && current_submenu === 'dropdown-' + i"
      >
        <li
          v-for="(child, j) in item.dropdown"
          :key="j"
          class="pl-10 my-1 text-xl text-custom-darkblue hover:text-custom-lightblue"
        >
          <router-link :to="child.link" class="">{{ child.title }}</router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
//import Pchild from "./Pchild.vue";
export default {
  components: {
    //Pchild,
  },
  data() {
    return {
      current_submenu: null,
      menu: [
        {
          title: "My Profile",
          link: "myprofile",
          dropdown: [],
        },
        {
          title: "Bookings",
          link: "abcd",
          dropdown: [
            {
              title: "Create New",
              link: "abcd",
            },
            {
              title: "Manage",
              link: "abcd",
            },
          ],
        },
        {
          title: "webb community",
          link: "abcd",
          dropdown: [
            {
              title: "Events",
              link: "events",
            },
            {
              title: "Hackney Council",
              link: "hackneycouncil",
            },
            {
              title: "Reports",
              link: "reports",
            },
          ],
        },
        {
          title: "Notifications",
          link: "abcd",
          dropdown: [],
        },
      ],
    };
  },
  methods: {
    showDropdown(submenu) {
      if (this.current_submenu === submenu) {
        this.current_submenu = null;
      } else {
        this.current_submenu = submenu;
      }
    },
  },
};
</script>
