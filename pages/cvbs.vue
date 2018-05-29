<template>
  <div class="container w-100">
    <the-navigation-bar></the-navigation-bar>
    <div id="list-container" class="fl w-100">
      <div class="flex flex-column items-center justify-center w-100 tc h5" id="hero">
        <h1 class="mb0">Convention Visitors Bureaus</h1>
        <p>Filter by state: <span class="b i u bb">California</span> <i class="fa fa-chevron-down"></i> </p>
      </div>
      <nuxt-link to="/profileCVB/" style="background: rgb(94,92,162)" class="shadow-3 list-item flex white link flex-row w-100  h4 mb3 dim pointer" >
        <div class="flex">
          <img src="/demo-logo-cvb-oakland.png" height="128px" alt="">
        </div>
        <div class="w-50 ph2 relative flex items-center h4">
          <p class="b f4">Oakland, California</p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  import TheNavigationBar from '~/components/TheNavigationBar'
  import axios from 'axios'

  export default {
    components: {
      TheNavigationBar
    } 
}
</script>

<style scoped>
  #hero {
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/demo-hero-cvbs.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
