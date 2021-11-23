<template>
  <div>
    <!-- table start -->
    <div class="capitalize h-72 md:h-96 mt-10 overflow-auto w-full">
      <table
        class="w-full md:leading-extra-loose overflow-scroll text-sm md:text-base"
      >
        <thead class="border-2 text-custom-lightgray">
          <tr class="text-left">
            <th class="px-5">Sr.</th>
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
            v-for="(item, i) in non_redisent_users"
            :key="i"
            class="border hover:border-2  hover:border-custom-lightgray group hover:bg-white"
          >
            <td class="px-5">{{ item.id }}</td>
            <td>
              <img
                class="w-8 h-8 rounded-full inline mr-3"
                :src="item.avatar"
                alt="user-image"
              />{{ item.name }}
            </td>
            <td>{{ item.joined_date }}</td>
            <td>{{ item.status }}</td>
            <td>
              <p
                @click="showModal(item)"
                class="text-custom-purple group-hover:visible invisible cursor-pointer"
              >
                Verify Documents
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="w-full text-custom-darkblue font-semibold mt-10">
      <p class="inline">Total {{ non_redisent_users.length }}</p>
      <p class="float-right">
        Page <i class="ri-arrow-left-s-line align-middle text-xl"></i> 1 of 1
        <i class="ri-arrow-right-s-line align-middle text-xl"></i>
      </p>
    </div>
  </div>
  <ModalsContainer />
</template>
<script>
import UserDetailModal from "./UserDetailModal";
import { $vfm, ModalsContainer } from "vue-final-modal";
export default {
  components: { ModalsContainer },
  data() {
    return {
      showmodal: false,
      non_redisent_users: [
        {
          id: 1,
          name: "John Andrews",
          email: "johnandrews@gmail.com",
          contact_no: "+44 7700 988077",
          avatar: "/assets/user.png",
          joined_date: "Dec 15, 2020",
          status: "Non-Verified Resident",
          documents: [
            {
              title: "residentail_certificate",
              path: "www.google.com",
            },
            {
              title: "property_documents",
              path: "www.google.com",
            },
          ],
        },
        {
          id: 2,
          name: "Stephen Baker",
          email: "stephanbaker@gmail.com",
          contact_no: "+44 7700 900077",
          avatar: "/assets/user2.png",
          joined_date: "Dec 15, 2020",
          status: "Verified Resident",
          documents: [
            {
              title: "residentail_certificate",
              path: "www.google.com",
            },
            {
              title: "property_documents",
              path: "www.google.com",
            },
            {
              title: "residentail_certificate",
              path: "www.google.com",
            },
          ],
        },
        {
          id: 3,
          name: "Keith Birkett",
          email: "keithbirkett@gmail.com",
          contact_no: "+44 7700 900077",

          avatar: "/assets/user.png",
          joined_date: "Dec 15, 2020",
          status: "Non-Verified Resident",
          documents: [
            {
              title: "residentail_certificate",
              path: "www.google.com",
            },
            {
              title: "property_documents",
              path: "www.google.com",
            },
          ],
        },
        {
          id: 4,
          name: "John Andrews",
          email: "johnandrews@gmail.com",
          contact_no: "+44 7700 900077",
          avatar: "/assets/user.png",
          joined_date: "Dec 15, 2020",
          status: "Non-Verified Resident",
          documents: [
            {
              title: "residentail_certificate",
              path: "www.google.com",
            },
            {
              title: "property_documents",
              path: "www.google.com",
            },
          ],
        },
        {
          id: 5,
          name: "Stephen Baker",
          email: "stephanbaker@gmail.com",
          contact_no: "+44 7700 900077",
          avatar: "/assets/user2.png",
          joined_date: "Dec 15, 2020",
          status: "Verified Resident",
          documents: [
            {
              title: "residentail_certificate",
              path: "www.google.com",
            },
            {
              title: "property_documents",
              path: "www.google.com",
            },
          ],
        },
      ],
    };
  },
  methods: {
    showModal(user) {
      $vfm.show({
        component: UserDetailModal,
        bind: {
          userData: user,
        },
      });
    },
  },
};
</script>
