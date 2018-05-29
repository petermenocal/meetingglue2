<template>
  <div id="navigation-bar" class="flex flex-row items-center justify-between ph4 pv2">
    <img src="~/assets/img/logo.png" height="100px" width="auto"> 
    <p class="ttu tracked">administration</p>
    <div id="navigtion-items">
      <nuxt-link class="white b dim pointer link mr3" to="/admin">Dashboard</nuxt-link>
      <nuxt-link class="white b dim pointer link mr3" to="/admin/hotels">Hotels</nuxt-link>
      <nuxt-link class="white b dim pointer link mr3" to="/admin/cvbs">CVBs</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin-nav-bar',
  data: function() {
    return {

    }
  }
}
</script>

<style scoped>
  #navigation-bar {
    background: rgba(0, 0, 0, 1);
  }
</style>