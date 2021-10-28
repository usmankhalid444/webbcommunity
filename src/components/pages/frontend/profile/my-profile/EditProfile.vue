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
            >
              SAVE CHANGES
            </button>
          </router-link>
        </div>
        <div class="relative group w-32">
          <img
            src="/assets/user.png"
            alt="userimage"
            class="h-32 w-32 rounded-full my-10 "
          />
          <span
            class="absolute top-10 left-6  bg-custom-lightblue rounded-full bg-opacity-50 hover:bg-opacity-90 cursor-pointer hidden group-hover:block"
            ><svg
              class="fill-current text-white p-2"
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 1280.000000 984.000000"
            >
              <g
                transform="translate(0.000000,984.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path
                  d="M4790 9830 c-238 -42 -424 -193 -600 -490 -37 -63 -220 -420 -406
-792 l-339 -677 -1085 -3 c-1079 -3 -1085 -3 -1183 -25 -306 -70 -526 -190
-743 -407 -216 -216 -339 -443 -406 -749 l-23 -102 0 -2640 c0 -2505 1 -2645
18 -2735 60 -313 218 -600 449 -815 205 -190 463 -319 743 -371 97 -18 260
-19 5185 -19 4925 0 5088 1 5185 19 303 56 562 193 780 411 216 216 354 477
412 777 17 88 18 235 18 2733 l0 2640 -23 102 c-67 305 -191 533 -406 749
-217 217 -437 337 -743 407 -98 22 -104 22 -1183 25 l-1085 3 -339 677 c-186
372 -363 720 -394 772 -160 275 -312 418 -519 488 l-78 27 -1595 1 c-877 1
-1615 -2 -1640 -6z m-3224 -2951 c87 -16 176 -63 248 -129 203 -190 207 -500
10 -698 -111 -111 -269 -165 -416 -142 -244 37 -419 239 -419 483 -1 95 11
148 51 227 56 110 156 197 275 238 95 34 155 39 251 21z m5199 -14 c865 -110
1617 -579 2101 -1307 321 -482 484 -1030 484 -1623 0 -362 -55 -678 -176
-1013 -278 -767 -895 -1408 -1653 -1717 -369 -150 -714 -217 -1121 -217 -553
0 -1044 134 -1518 416 -268 159 -558 409 -765 659 -355 427 -585 971 -652
1543 -20 168 -19 491 0 659 79 677 374 1286 855 1765 506 504 1169 802 1900
854 106 7 426 -4 545 -19z"
                />
                <path
                  d="M6230 5404 c-158 -19 -348 -78 -495 -151 -535 -269 -859 -847 -806
-1436 61 -675 536 -1200 1206 -1333 125 -25 405 -25 530 0 467 93 847 378
1055 793 121 243 174 517 150 778 -59 656 -507 1170 -1150 1321 -85 21 -138
26 -280 29 -96 2 -191 1 -210 -1z"
                />
              </g>
            </svg>
          </span>
          <span
            class="absolute top-10 left-16 bg-custom-lightblue rounded-full bg-opacity-50 hover:bg-opacity-90 cursor-pointer hidden group-hover:block"
            ><svg
              class="fill-current text-white p-2"
              id="delete_icon"
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
            >
              <path
                id="Path_3347"
                data-name="Path 3347"
                d="M0,0H24V24H0Z"
                fill="none"
              />
              <path
                id="Path_3348"
                data-name="Path 3348"
                d="M6,19a2.006,2.006,0,0,0,2,2h8a2.006,2.006,0,0,0,2-2V7H6ZM8,9h8V19H8Zm7.5-5-1-1h-5l-1,1H5V6H19V4Z"
              />
            </svg>
          </span>
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
