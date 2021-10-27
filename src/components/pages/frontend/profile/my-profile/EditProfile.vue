<template>
  <div>
    <UserProfileLayout>
      <form action="#">
        <div class="w-full relative 2xl:w-1100p">
          <span class="absolute -left-14 text-3xl"
            ><i class="ri-arrow-left-line p-3"></i
          ></span>
          <h1 class="font-semibold text-4xl text-custom-darkblue">New Event</h1>
          <router-link to="myprofile">
            <button
              type="submit"
              value="submit"
              class="absolute right-0 top-0 bg-custom-green hover:bg-custom-lightblue md:w-44 md:h-12 h-8 w-36 text-sm uppercase font-semibold text-white"
              :class="classes"
            >
              SAVE CHANGES
            </button>
          </router-link>
          <img
            src="/assets/user.png"
            alt="userimage"
            class="h-32 w-32 rounded-full my-10"
          />
        </div>
        <div
          class="grid grid-cols-12 text-custom-darkblue gap-x-4 md:gap-x-12 border-b md:pb-10 2xl:w-1100p"
        >
          <div class="col-span-12 md:col-span-6">
            <p class="font-semibold">Name</p>
            <input
              class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8"
              type="text"
              value="John Doe"
            />
          </div>

          <div class="col-span-12 md:col-span-6 relative">
            <p class="font-semibold">Community Status</p>
            <select
              name="status"
              class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8 appearance-none"
            >
              <option value="Resident">Resident</option>
              <option value="Non Resident">Non Resident</option>
            </select>
            <span class="absolute top-14 right-5">
              <svg
                id="arrow_down_icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_117"
                  data-name="Path 117"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <path
                  id="Path_118"
                  data-name="Path 118"
                  d="M7.41,8.59,12,13.17l4.59-4.58L18,10l-6,6L6,10Z"
                  fill="#000539"
                />
              </svg>
            </span>
          </div>

          <div class="col-span-12 md:col-span-6 relative">
            <p class="font-semibold">Email</p>
            <input
              class="w-full border-custom-lightgray border h-14 my-4 font-semibold pl-8  pr-32"
              type="text"
              value="john_doe@gmail.com"
            />
            <span class="absolute top-14 right-3">
              <svg
                class="inline"
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
              <p class="inline px-2 ">Verified</p>
            </span>
          </div>

          <div class="col-span-12 md:col-span-6">
            <p class="font-semibold">Phone Number</p>
            <input
              class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8"
              type="text"
              value="+44 7700 900077"
            />
          </div>
        </div>
        <div
          class="grid grid-cols-12 text-custom-darkblue gap-x-4 md:gap-x-12  md:pb-10 my-12 2xl:w-1100p"
        >
          <div class="col-span-12 md:col-span-6">
            <p class="font-semibold">Old Password</p>
            <input
              class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8"
              type="password"
              value="123900077"
            />
            <p class="underline font-semibold pb-5">Forgot Password?</p>
          </div>
          <div class="col-span-12 md:col-span-6">
            <p class="font-semibold">New Password</p>
            <input
              class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8"
              type="password"
              value="123900077"
            />
          </div>
        </div>
      </form>
    </UserProfileLayout>
  </div>
</template>
<script>
export default {};
</script>
