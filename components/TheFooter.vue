<template>
  <div id="footer">
    <div class="flex flex-row flex-wrap w-100 h3 white">
      <div class="w-40 pl1">
        <img src="~/assets/img/logo.png" height="50px" width="auto">
      </div>
        <div class="list flex justify-between items-center w-50">
          <nuxt-link class="white b link dim pointer" to="/">Home</nuxt-link>
          <nuxt-link class="white b link dim pointer" to="/hotels">Hotels</nuxt-link>
          <nuxt-link class="white b link dim pointer" to="/cvbs">CVBs</nuxt-link>
          <nuxt-link class="white b link dim pointer" to="/events">Events</nuxt-link>
          <nuxt-link class="white b link dim pointer" to="/register">Register</nuxt-link>
          <nuxt-link class="white b link dim pointer" to="/login">Login</nuxt-link>
        </div>
      <div class="w-100 flex items-center justify-center bg-near-black">
        <p>&copy; 2018 Meeting Glue. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'the-footer'
}
</script>

<style scoped>
  #footer {
     background: rgb(34,35,63)
  }
</style>
