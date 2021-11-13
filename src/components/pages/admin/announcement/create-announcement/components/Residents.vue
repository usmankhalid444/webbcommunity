<template>
  <div>
    <!-- table start -->
    <div class="capitalize md:h-2/5 mt-7 overflow-auto w-full">
      <table
        class="w-full  h-72 md:leading-extra-loose overflow-scroll text-sm md:text-base"
      >
        <thead class="border-2 text-custom-lightgray">
          <tr class="text-left">
            <th class="px-5">
              <input
                class="h-5 w-5 text-custom-darkblue focus:ring-0 focus:shadow-none cursor-pointer"
                type="checkbox"
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
            v-for="(item, i) in redisent_users"
            :key="i"
            class="border hover:border-2  hover:border-custom-lightgray group hover:bg-white"
          >
            <td class="px-5">
              <input
                class="h-5 w-5 text-custom-darkblue focus:ring-0 focus:shadow-none cursor-pointer"
                type="checkbox"
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
    <div class="w-full text-custom-darkblue font-semibold mt-10">
      <p class="inline">3 Selected (3 Residents, 0 Outsiders)</p>
      <p class="float-right">
        Page <i class="ri-arrow-left-s-line align-middle text-xl"></i> 1 of 1
        <i class="ri-arrow-right-s-line align-middle text-xl"></i>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      redisent_users: [
        {
          id: 1,
          name: "John Andrews",
          avatar: "/assets/user.png",
          joined_date: "Dec 15, 2020",
          status: "Non-Verified Resident",
        },
        {
          id: 2,
          name: "Stephen Baker",
          avatar: "/assets/user2.png",
          joined_date: "Dec 15, 2020",
          status: "Verified Resident",
        },
        {
          id: 3,
          name: "Keith Birkett",

          avatar: "/assets/user.png",
          joined_date: "Dec 15, 2020",
          status: "Non-Verified Resident",
        },
        {
          id: 4,
          name: "John Andrews",
          avatar: "/assets/user.png",
          joined_date: "Dec 15, 2020",
          status: "Non-Verified Resident",
        },
        {
          id: 5,
          name: "Stephen Baker",
          avatar: "/assets/user2.png",
          joined_date: "Dec 15, 2020",
          status: "Verified Resident",
        },
        {
          id: 6,
          name: "Keith Birkett",
          avatar: "/assets/user.png",
          joined_date: "Dec 15, 2020",
          status: "Non-Verified Resident",
        },
      ],
    };
  },
};
</script>
