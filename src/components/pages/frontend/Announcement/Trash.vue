<template>
  <div>
      <!-- title section-->
      <div class="w-full relative">
        <h1
          class="font-semibold text-xl md:text-4xl text-custom-darkblue inline"
        >
          Announcements
        </h1>
        <Link href="/admin/announcements/create">
          <button
            class="bg-custom-purple hover:bg-custom-lightblue w-64 md:h-12 h-10 uppercase font-semibold text-white absolute right-0 -top-12 md:-top-0"
          >
            <i class="ri-add-fill px-1 align-middle"></i> MAKE ANNOUNCEMENT
          </button>
        </Link>
      </div>
      <!-- filter and search field -->
      <div class="w-full bg-white mt-10 p-5 relative">
        <ul>
          <li class="inline font-bold  ">
            <p
              class="inline cursor-pointer pr-5 py-5 text-custom-lightgray"
            >
            <Link href="/admin/announcements/all">
              All Announcements
            </Link>
            </p>
          </li>
          <li class="inline  font-bold">
            <p
              class="inline cursor-pointer px-5 py-5 text-custom-lightgray"
            >
            <Link href="/admin/announcements/draft">
              Draft
            </Link>
              
            </p>
          </li>
          <li
            class="inline font-bold text-custom-darkblue"
          >
            <p
              class="inline cursor-pointer px-5 py-5"
            >
            <Link href="/admin/announcements/trash">
              Trash
            </Link>
            </p>
          </li>
        </ul>
        <div class="lg:float-right relative">
          <input
            class="border border-gray-400 w-44  lg:w-80 h-10 lg:-mt-8 lg:float-right inline pr-4 pl-10 mt-5"
            type="text"
            placeholder=" Search"
          />
          <span class="absolute left-3 bottom-1.5"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="search_icon" transform="translate(-16281 -3203)">
                <path
                  id="Path_3350"
                  data-name="Path 3350"
                  d="M15.5,14h-.79l-.28-.27a6.51,6.51,0,1,0-.7.7l.27.28v.79l5,4.99L20.49,19Zm-6,0A4.5,4.5,0,1,1,14,9.5,4.494,4.494,0,0,1,9.5,14Z"
                  transform="translate(16281 3203)"
                  fill="#5f68a6"
                />
                <rect
                  id="Rectangle_2746"
                  data-name="Rectangle 2746"
                  width="24"
                  height="24"
                  transform="translate(16281 3203)"
                  fill="none"
                />
              </g>
            </svg>
          </span>
        </div>
      </div>

    <div class="capitalize h-72 md:h-96 mt-10 overflow-auto w-full">
      <table class="w-full md:leading-extra-loose text-sm md:text-base">
        <thead class="border text-custom-lightgray">
          <tr class="text-left">
            <th class="px-5">Sr.</th>
            <th>Subject</th>
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
              Date
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
              Shared with
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody class="text-custom-darkblue font-semibold ">
          <tr
            v-for="(announcement, i) in trashedAnnouncements.data"
            :key="i"
            class="border hover:outline-blue group hover:bg-white"
          >
            <td class="px-5">{{ i + 1 }}</td>
            <td>
              {{ announcement.subject }}
            </td>
            <td>{{ announcement.date }}</td>
            <td>{{ announcement.shared_with }}</td>
            <td>
              <p
                @click="showModal(announcement)"
                class="text-custom-purple group-hover:visible invisible cursor-pointer"
              >
                view
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="w-full text-custom-darkblue font-semibold mt-10">
        <Pagination :links="trashedAnnouncements.links" :count="trashedAnnouncements.total" :totalPages="trashedAnnouncements.last_page"/>
    </div>

  </div>
</template>
<script>
import  AdminProfileLayout  from "@la/ProfileLayout/AdminProfileLayout";
import Pagination from "@/GlobalComponents/Pagination";

export default {
  layout: AdminProfileLayout,
  props: [
    'trashedAnnouncements',
    'filters'
  ],
  components: { Pagination },
  data() {
    return {
      currentTab: "allAnnouncements",
    };
  },
};
</script>
