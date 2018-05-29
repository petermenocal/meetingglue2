<template>
  <div class="container w-100">
    <the-navigation-bar></the-navigation-bar>
    <div id="list-container" class="fl w-100">
      <div class="flex flex-column items-center justify-center w-100 tc h5" id="hero">
        <h1 class="mb0">Hotels</h1>
        <p @click="comingSoonMessage">Filter by state: <span class="b i u bb">California</span> <i class="fa fa-chevron-down"></i> </p>
      </div>
      <nuxt-link to="/profileHotel" style="background: rgb(94,92,162)" class="shadow-3 list-item flex white link flex-row w-100  h4 mb3 dim pointer" v-for="h in hotels" v-bind:key="h.id">
        <div class="flex">
          <img :src="randomNumber()" alt="">
        </div>
        <div class="w-50 ph2 relative">
          <p class="b f5">{{ h.name }}</p>
          <p class="f6 absolute bottom-0"><i class="fa fa-map-marker"></i> {{ h.city }}</p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  import TheNavigationBar from '~/components/TheNavigationBar'
  import axios from 'axios'

  export default {
    async asyncData ({ params }) {
      let { data } = await axios.post('/api/hotels')
      return { hotels: data }
    },
    methods: {
      randomNumber () {
        let ran = Math.floor(Math.random() * 5) + 1
        return '/demo-thumb-hotel-' + ran + '.png'
      },
      comingSoonMessage () {
        return this.$toast.show('We are adding more locations. Check back soon!')
      }
    },
    components: {
      TheNavigationBar
    } 
}
</script>


<style scoped>
  #hero {
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/demo-hero-hotels.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
