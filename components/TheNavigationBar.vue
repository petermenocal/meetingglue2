<template>
  <div id="navigation-bar" class="flex flex-row items-center justify-between ph4 pv2">
    <img src="~/assets/img/logo.png" height="100px" width="auto"> 
    <div id="navigtion-items">
      <nuxt-link class="white b dim pointer link mr3" to="/">Home</nuxt-link>
      <nuxt-link class="white b dim pointer link mr3" to="/hotels">Hotels</nuxt-link>
      <nuxt-link class="white b dim pointer link mr3" to="/cvbs">CVBs</nuxt-link>
      <nuxt-link class="white b dim pointer link mr3" to="/events">Events</nuxt-link>
      <nuxt-link class="white b dim pointer link mr3" to="/register">Register</nuxt-link>
      <nuxt-link class="white b dim pointer link mr3" to="/login">Login</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'the-navigation-bar',
  data: function() {
    return {

    }
  }
}
</script>

<style scoped>
  #navigation-bar {
    background: rgba(0, 0, 0, 0.5);
  }
</style>