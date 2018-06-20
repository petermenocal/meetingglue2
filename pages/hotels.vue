<template>
    <div class="w-80 center elevation-15">
    <div id="list-container" class="fl w-100">
      <div class="flex flex-column items-center justify-center w-100 tc h5" id="hero">
        <h1 class="mb0">Hotels</h1>
        <v-menu offset-y open-on-hover="true" max-height="300px">
          <v-btn slot="activator" color="primary" dark>in {{selectedFilter}}</v-btn>
          <v-list>
            <v-list-tile v-for="(item, index) in states" :key="index" @click="selectedFilter = item">
              <v-list-tile-title>{{ item }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>
      <nuxt-link to="/profileHotel" style="background: rgb(94,92,162)" class="bb b--black-20 list-item flex white link flex-row w-100 h4 dim pointer" v-for="h in hotels" v-bind:key="h.id">
        <div class="flex">
          <img :src="randomNumber()" alt="">
        </div>
        <div class=" w-100 pa3 relative">
          <h1 class="b f3">{{ h.name }}</h1>
          <p class="f6"><i class="fa fa-map-marker"></i> {{ h.city }}</p>
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
      return { selectedFilter: 'California', hotels: data, states: ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'] }
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
