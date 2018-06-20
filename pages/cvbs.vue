<template>
    <div class="w-80 center elevation-15">
      <div>
        <div class="flex flex-column items-center justify-center w-100 tc h5" id="hero">
          <h1 class="mb0">Convention Visitors Bureaus</h1>
           <v-menu offset-y open-on-hover="true" max-height="300px">
            <v-btn slot="activator" color="primary" dark>in {{selectedFilter}}</v-btn>
            <v-list>
              <v-list-tile v-for="(item, index) in states" :key="index" @click="selectedFilter = item">
                <v-list-tile-title>{{ item }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>
        <nuxt-link to="/profileCVB/" style="background: rgb(94,92,162)" class="list-item flex white link flex-row w-100 h4 dim pointer">
          <div class="fl w-20 bg-white tc">
            <img src="/demo-logo-cvb-oakland.png" height="100px" alt="" class="pv3">
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
   data: () => ({
      selectedFilter: 'California',
      states:  ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'] 
   }),
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
