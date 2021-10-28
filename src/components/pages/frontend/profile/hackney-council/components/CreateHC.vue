<template>
  <div>
    <UserProfileLayout>
      <!-- intro -->
      <div class="w-full relative 2xl:w-1100p mb-14">
        <router-link to="hackneycouncil">
          <span class="absolute right-0 md:right-auto md:-left-14 text-3xl"
            ><i class="ri-arrow-left-line p-3"></i
          ></span>
        </router-link>
        <h1 class="font-semibold text-4xl text-custom-darkblue">
          Create Hackney Council
        </h1>
      </div>
      <!--intro end  -->
      <form>
        <div
          class="grid grid-cols-12 text-custom-darkblue gap-x-4 md:gap-x-12 md:pb-10 2xl:w-1100p"
        >
          <div class="col-span-12 md:col-span-6 relative mb-5">
            <p class="font-semibold text-custom-lightblue">Category</p>
            <select
              name="status"
              class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8 appearance-none"
            >
              <option value="Bulky Waste Collection"
                >Bulky Waste Collection</option
              >
              <option value="Planning Duty Desk">Planning Duty Desk</option>
              <option value="Benefits">Benefits</option>
              <option value="Housing Advise">Housing Advise</option>
              <option value="Housing Repairs">Housing Repairs</option>
              <option value="Tenants and Leaseholders"
                >Tenants and Leaseholders</option
              >
              <option value="Council Tax">Council Tax</option>
              <option value="Parking Enquiries and payments"
                >Parking Enquiries and payments</option
              >
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
          <div class="col-span-12 md:col-span-6 mb-5">
            <p class="font-semibold text-custom-lightblue">Source</p>
            <input
              class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8"
              type="text"
              value="John Andrews"
            />
          </div>
          <div class="col-span-12 md:col-span-6 mb-5">
            <p class="font-semibold text-custom-lightblue">Enquiry Subject</p>
            <input
              class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8"
              type="text"
              placeholder="Write enquiry subject here"
            />
          </div>
          <div class="col-span-12 md:col-span-6 mb-5">
            <p class="font-semibold text-custom-lightblue">Date and Time</p>
            <input
              class="w-full border-custom-lightgray border h-14 my-4 font-semibold px-8"
              type="date"
              value="21 Dec 2020, 02:00 PM"
            />
          </div>
          <div class="col-span-12 md:col-span-6 mb-5">
            <p class="font-semibold text-custom-lightblue">
              Enquiry Description
            </p>
            <textarea
              class="w-full border-custom-lightgray border  my-4 font-semibold px-8 py-6"
              rows="6"
              placeholder="Write your complain here"
            >
            </textarea>
          </div>
          <div class="col-span-12 md:col-span-6 relative mb-5">
            <p class="font-semibold text-custom-lightblue">Location</p>
            <input
              class="w-full border-custom-lightgray border h-14 my-4 font-semibold pl-8  pr-16"
              type="text"
              value="Webb Community Hall"
            />
            <span class="absolute top-14 right-8">
              <svg
                id="location_icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_129"
                  data-name="Path 129"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <path
                  id="Path_130"
                  data-name="Path 130"
                  d="M12,2A7,7,0,0,0,5,9c0,5.25,7,13,7,13s7-7.75,7-13A7,7,0,0,0,12,2ZM7,9A5,5,0,0,1,17,9c0,2.88-2.88,7.19-5,9.88C9.92,16.21,7,11.85,7,9Z"
                  fill="#00033c"
                />
                <circle
                  id="Ellipse_44"
                  data-name="Ellipse 44"
                  cx="2.5"
                  cy="2.5"
                  r="2.5"
                  transform="translate(9.5 6.5)"
                  fill="#00033c"
                />
              </svg>
            </span>
          </div>
          <div class="col-span-12 md:col-span-6 mb-5">
            <button
              type="submit"
              class="bg-custom-purple hover:bg-custom-lightblue font-semibold text-white w-full h-14"
            >
              CONTINUE
            </button>
          </div>
        </div>
      </form>
    </UserProfileLayout>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
