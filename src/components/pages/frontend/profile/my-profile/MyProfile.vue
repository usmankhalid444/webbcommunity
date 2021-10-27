<template>
  <div>
    <UserProfileLayout>
      <div class="relative   2xl:w-1100p">
        <div class="">
          <img
            src="/assets/user.png"
            alt="userimage"
            class="h-32 w-32 rounded-full"
          />
        </div>

        <div class="absolute left-36 top-0">
          <p class="py-1 text-custom-lightblue">User ID UR01</p>
          <p class="pb-2 text-custom-darkblue text-34px ">John Doe</p>
          <p class="py-1 px-3 inline bg-gray-200 text-custom-lightblue">
            Non Resident
          </p>
        </div>
        <div class="absolute right-0 top-0 md:top-4">
          <router-link to="editprofile">
            <button
              class="bg-custom-purple hover:bg-custom-lightblue md:w-44 md:h-12 h-8 w-24 text-sm uppercase font-semibold text-white"
              :class="classes"
            >
              EDIT PROFILE
            </button>
          </router-link>
        </div>
      </div>
      <div
        class="border-t border-b grid grid-cols-12 mt-16 py-2 text-custom-darkblue 2xl:w-1100p"
      >
        <div class="col-span-12 md:col-span-5">
          <p class="text-custom-lightblue">Email</p>
          <p class="text-md xl:text-xl font-semibold py-3">
            john_doe@gmail.com
            <svg
              class="inline ml-3"
              id="verified_icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="Group_208" data-name="Group 208">
                <rect
                  id="Rectangle_316"
                  data-name="Rectangle 316"
                  width="24"
                  height="24"
                  fill="none"
                />
              </g>
              <g id="Group_210" data-name="Group 210">
                <g id="Group_209" data-name="Group 209">
                  <path
                    id="Path_186"
                    data-name="Path 186"
                    d="M23,11.99,20.56,9.2l.34-3.69-3.61-.82L15.4,1.5,12,2.96,8.6,1.5,6.71,4.69,3.1,5.5l.34,3.7L1,11.99l2.44,2.79-.34,3.7,3.61.82L8.6,22.5,12,21.03l3.4,1.46,1.89-3.19,3.61-.82-.34-3.69Zm-3.95,1.48-.56.65.08.85.18,1.95-1.9.43-.84.19-.44.74-.99,1.68-1.78-.77-.8-.34-.79.34-1.78.77-.99-1.67L8,17.55l-.84-.19-1.9-.43.18-1.96.08-.85-.56-.65L3.67,12l1.29-1.48.56-.65-.09-.86L5.25,7.07l1.9-.43.84-.19.44-.74.99-1.68,1.78.77.8.34.79-.34,1.78-.77.99,1.68.44.74.84.19,1.9.43-.18,1.95-.08.85.56.65,1.29,1.47Z"
                    fill="#00033c"
                  />
                  <path
                    id="Path_187"
                    data-name="Path 187"
                    d="M10.09,13.75,7.77,11.42,6.29,12.91l3.8,3.81,7.34-7.36L15.95,7.87Z"
                    fill="#00033c"
                  />
                </g>
              </g>
            </svg>
          </p>
        </div>
        <div class="col-span-12 md:col-span-4">
          <p class="text-custom-lightblue">Phone Number</p>
          <p class="text-md xl:text-xl font-semibold py-3">++44 7700 900077</p>
        </div>
        <div class="col-span-12 md:col-span-3 relative">
          <router-link to="numberverification">
            <p
              class="underline text-md  xl:text-xl absolute font-semibold py-3 right-0 bottom-2"
            >
              Verify Number
            </p>
          </router-link>
        </div>
      </div>
      <div class="text-custom-darkblue grid grid-cols-12 gap-5   2xl:w-1100p">
        <p class="text-custom-lightblue col-span-12 pt-8">
          Residential Documents
        </p>
        <UplodedPreview />
        <UplodedPreview />
        <UploadPreview />
      </div>
    </UserProfileLayout>
  </div>
</template>
<script setup>
import UplodedPreview from "./components/UplodedPreview";
import UploadPreview from "./components/UploadPreview";
// export default {
//   components: {
//     UplodedPreview,
//     UploadPreview,
//   },
// };
</script>
