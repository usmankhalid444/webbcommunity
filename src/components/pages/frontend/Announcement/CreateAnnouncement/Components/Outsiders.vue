<template>
  <div>
    <!-- table start -->
    <div class="capitalize md:h-2/5 mt-7 overflow-auto w-full">
        <dataset
          :ds-data="none_resident_users"
          :ds-search-in="['name']"
        >
          <dataset-search ds-search-placeholder="Search..." />

            <table class="w-full  h-72 md:leading-extra-loose text-sm md:text-base">
              <thead class="border text-custom-lightgray">
                <tr class="text-left">
                  <th class="px-5">
                    <input
                      @click="addAll"
                      class="h-5 w-5 text-custom-darkblue focus:ring-0 focus:shadow-none cursor-pointer"
                      type="checkbox"
                      v-model="addAllCheck"
                      :checked="
                        selectedNoneResidents == none_resident_users ? true : false
                      "
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
              <dataset-item tag="tbody" class="text-custom-darkblue font-semibold ">
                <template #default="{ row }">
                <tr
                  class="border hover:outline-blue group hover:bg-white"
                >
                  <td class="px-5">
                    <input
                      @click="addResident(row)"
                      class="h-5 w-5 text-custom-darkblue focus:ring-0 focus:shadow-none cursor-pointer"
                      type="checkbox"
                      :checked="selectedNoneResidents.includes(row) ? true : false"
                    />
                  </td>
                  <td>
                    <img
                      class="w-8 h-8 rounded-full inline mr-3"
                      :src="row.profile_photo_path ? profile_photo_path : '/assets/user.png'"
                      alt="user-image"
                    />{{ row.name }}
                  </td>
                  <td>{{ $moment(row.created_at).format("MMM D, Y")  }}</td>
                  <td>{{ row.status == 1 ? "Verified" : "Non-Verified" }} Outsider</td>
                </tr>
                </template>
              </dataset-item>
            </table>
        </dataset>

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
import { 
  Dataset,
  DatasetItem,
  DatasetInfo,
  DatasetPager,
  DatasetSearch,
  DatasetShow
} from 'vue-dataset'

export default {
  props: ["none_resident_users", "selected_none_residents"],
  data() {
    return {
      selectedNoneResidents: this.selected_none_residents,
      addAllCheck: false
    };
  },
  components:{
    Dataset,
    DatasetItem,
    DatasetInfo,
    DatasetPager,
    DatasetSearch,
    DatasetShow
  },
  methods: {
    addResident(item) {
      // if(this.addAllCheck == true) {
      //         this.selectedNoneResidents = [];
      // }
      alert(this.addAllCheck);
      if (!this.selectedNoneResidents.includes(item)) {
        this.selectedNoneResidents.push(item);
      } else {
        let itemIndex = this.selectedNoneResidents.indexOf(item);
        this.selectedNoneResidents.splice(itemIndex, 1);
      }
      this.emmitSelectedNoneResidents();
    },
    addAll() {
      console.log(this.none_resident_users);
      if (this.selectedNoneResidents == this.none_resident_users) {
        this.selectedNoneResidents = [];
      } else {
        this.selectedNoneResidents = this.none_resident_users;
      }
      this.emmitSelectedNoneResidents();
    },
    emmitSelectedNoneResidents() {
      this.$emit("on_selected_none_residents", this.selectedNoneResidents);
    },
  },
};
</script>
