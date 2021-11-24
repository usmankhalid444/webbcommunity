<template>
  <div>
    <!-- table start -->
    <div class="capitalize md:h-2/5 mt-7 overflow-auto w-full">
      <table class="w-full  h-72 md:leading-extra-loose text-sm md:text-base">
        <thead class="border text-custom-lightgray">
          <tr class="text-left">
            <th class="px-5">
              <input
                @click="addAll"
                class="h-5 w-5 text-custom-darkblue focus:ring-0 focus:shadow-none cursor-pointer"
                type="checkbox"
                :checked="selectedResidents == resident_users ? true : false"
              />
            </th>
            <th>User</th>
            <th>
              <span
                ><svg
                  class="inline"
                  id="sort_icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="Path_182"
                    data-name="Path 182"
                    d="M0,0H24V24H0Z"
                    fill="none"
                  />
                  <path
                    id="Path_183"
                    data-name="Path 183"
                    d="M3,18H9V16H3ZM3,6V8H21V6Zm0,7H15V11H3Z"
                    fill="#9ea4c9"
                  />
                </svg>
              </span>
              Joined Date
            </th>
            <th>
              <span
                ><svg
                  class="inline"
                  id="sort_icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="Path_182"
                    data-name="Path 182"
                    d="M0,0H24V24H0Z"
                    fill="none"
                  />
                  <path
                    id="Path_183"
                    data-name="Path 183"
                    d="M3,18H9V16H3ZM3,6V8H21V6Zm0,7H15V11H3Z"
                    fill="#9ea4c9"
                  />
                </svg>
              </span>
              Status
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody class="text-custom-darkblue font-semibold ">
          <tr
            v-for="(item, i) in resident_users"
            :key="i"
            class="border hover:outline-blue group hover:bg-white"
          >
            <td class="px-5">
              <input
                @click="addResident(item)"
                class="h-5 w-5 text-custom-darkblue focus:ring-0 focus:shadow-none cursor-pointer"
                type="checkbox"
                :checked="selectedResidents.includes(item) ? true : false"
              />
            </td>
            <td>
              <img
                class="w-8 h-8 rounded-full inline mr-3"
                :src="item.avatar"
                alt="user-image"
              />{{ item.name }}
            </td>
            <td>{{ item.joined_date }}</td>
            <td>{{ item.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-custom-darkblue font-semibold mt-10">
      <p class="float-right">
        Page <i class="ri-arrow-left-s-line align-middle text-xl"></i> 1 of 1
        <i class="ri-arrow-right-s-line align-middle text-xl"></i>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["resident_users", "selected_residents"],
  data() {
    return {
      selectedResidents: this.selected_residents,
    };
  },
  methods: {
    addResident(item) {
      if (!this.selectedResidents.includes(item)) {
        this.selectedResidents.push(item);
      } else {
        let itemIndex = this.selectedResidents.indexOf(item);
        this.selectedResidents.splice(itemIndex, 1);
      }
      this.emmitSelectedResidents();
    },
    addAll() {
      if (this.selectedResidents == this.resident_users) {
        this.selectedResidents = [];
      } else {
        this.selectedResidents = this.resident_users;
      }
      this.emmitSelectedResidents();
    },
    emmitSelectedResidents() {
      this.$emit("on_selected_residents", this.selectedResidents);
    },
  },
};
</script>
