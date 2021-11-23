<template>
  <router-view />
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
select {
  background-image: none !important;
}
.dp__input {
  border: 1px solid #9ea4c9 !important;
}
/* custom scrollbar style */
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f6f8fb;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #9ea4c9;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #bbc1e4;
}
</style>
