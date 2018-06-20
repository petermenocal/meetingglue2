<template>
<v-app>
  <v-toolbar dark fixed app>
      <v-spacer></v-spacer> 
      <v-toolbar-title><img src="~/assets/img/logo.png" height="50px" width="auto"> </v-toolbar-title>
      <v-spacer></v-spacer>
     <div class="flex flex-row items-center justify-between ph4 pv2">
        <div id="navigtion-items">
          <nuxt-link class="white b dim pointer link mr3" to="/">Home</nuxt-link>
          <nuxt-link class="white b dim pointer link mr3" to="/hotels">Hotels</nuxt-link>
          <nuxt-link class="white b dim pointer link mr3" to="/cvbs">CVBs</nuxt-link>
          <nuxt-link class="white b dim pointer link mr3" to="/events">Events</nuxt-link>
          <nuxt-link class="white b dim pointer link mr3" to="/register">Register</nuxt-link>
          <nuxt-link class="white b dim pointer link mr3" to="/login">Login</nuxt-link>
        </div>
    </div>
  </v-toolbar>
        
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-start justify-center>
        <v-flex md10>
          <nuxt></nuxt>
        </v-flex>
        </v-layout>
      </v-container>
  </v-content>
  <v-footer dark fixed app>
      <v-spacer></v-spacer>
        <p class="mr3">Meeting Glue</p>
        <nuxt-link class="white b link dim pointer mr3" to="/">Home</nuxt-link>
        <nuxt-link class="white b link dim pointer mr3" to="/hotels">Hotels</nuxt-link>
        <nuxt-link class="white b link dim pointer mr3" to="/cvbs">CVBs</nuxt-link>
        <nuxt-link class="white b link dim pointer mr3" to="/events">Events</nuxt-link>
        <nuxt-link class="white b link dim pointer mr3" to="/register">Register</nuxt-link>
        <nuxt-link class="white b link dim pointer mr3" to="/login">Login</nuxt-link>
    <v-spacer></v-spacer>
    <p>&copy; 2018 Meeting Glue. All rights reserved.</p>
  </v-footer>
</v-app>
</template>