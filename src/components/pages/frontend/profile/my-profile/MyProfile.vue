<template>
  <div>
    <UserProfileLayout>
      <div class="relative">
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
        <div class="absolute right-0 top-4">
          <BtnSm text="Edit Profile" />
        </div>
      </div>
      <div
        class="border-t border-b grid grid-cols-12 mt-16 py-2 text-custom-darkblue"
      >
        <div class="col-span-12 md:col-span-5">
          <p class="text-custom-lightblue">Email</p>
          <p class="text-md md:text-xl font-semibold py-3">
            john_doe@gmail.com
            <i class="ri-check-double-line align-middle px-3 text-2xl"></i>
          </p>
        </div>
        <div class="col-span-12 md:col-span-4">
          <p class="text-custom-lightblue">Phone Number</p>
          <p class="text-md md:text-xl font-semibold py-3">++44 7700 900077</p>
        </div>
        <div class="col-span-12 md:col-span-3 relative">
          <router-link to="numberverification">
            <p
              class="underline text-md  md:text-xl absolute font-semibold py-3 right-0 bottom-2"
            >
              Verify Number
            </p>
          </router-link>
        </div>
      </div>
      <div class="text-custom-darkblue grid grid-cols-12 gap-x-5 ">
        <p class="text-custom-lightblue col-span-12 py-8">
          Residential Documents
        </p>
        <UplodedPreview />
        <UplodedPreview />
        <UploadPreview />
      </div>
    </UserProfileLayout>
  </div>
</template>
<script>
import BtnSm from "../../../../global-components/BtnSm";
import UplodedPreview from "./components/UplodedPreview";
import UploadPreview from "./components/UploadPreview";
export default {
  components: {
    BtnSm,
    UplodedPreview,
    UploadPreview,
  },
};
</script>
