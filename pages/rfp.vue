<template>
  <div id="app" class="container" style="font-family: arial !important">
    <the-navigation-bar></the-navigation-bar>
    <div class="fl w-75 tc" style="min-height: 1000px">
      <v-stepper v-model="e6" vertical non-linear>
        <v-stepper-step editable :complete="e6> 1" step="1"> Your information
        </v-stepper-step>
        <v-stepper-content step="1">
          <v-card flat color="grey lighten-1" class="mb-5" height="420px">
            <v-layout align-start justify-start column>
              <v-avatar title="Your name" size="100" color="grey lighten-4">
                <img src="/avatar.png" alt="avatar">
              </v-avatar>
              <v-form v-model="valid" style="width: 100%">
                <v-text-field v-model="name" :rules="nameRules" :counter="10" label="Name" required></v-text-field>
                <v-text-field v-model="email" label="E-mail" required></v-text-field>
                <v-text-field v-model="organization" label="Organization" required></v-text-field>
                <v-text-field v-model="phone" label="Phone Number" required></v-text-field>
              </v-form>
            </v-layout>
          </v-card>
          <v-btn color="primary" @click="e6=2">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step editable :complete="e6> 2" step="2">Location information</v-stepper-step>

        <v-stepper-content step="2">
          <v-layout>
            <v-flex class="w-50 black">
              <gmap-autocomplete @place_changed="setPlace" class="ba black b--black-10 h3 br2 pa2 w-100">
              </gmap-autocomplete>
            </v-flex>
            <v-flex class="w-50">
              <v-btn class="h3 ma0" color="success" @click="usePlace">
                <p class="mb2">Add location</p>
              </v-btn>
            </v-flex>
          </v-layout>
          <v-card flat color="grey lighten-1" class="mb-5" height="420px">

            <v-layout align-start justify-start column>
              <GmapMap :center="{lat:36.181271, lng:-115.134132} " :zoom=11 map-type-id="terrain" style="width: 100%; height:100%; ">
                <GmapMarker :key="index " v-for="(m, index) in markers " :position="m.position " :clickable="true " :draggable="true " @click="center=m.position" />
              </GmapMap>
            </v-layout>
          </v-card>
          <v-btn color="primary " @click="e6=3 ">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>

        </v-stepper-content>

        <v-stepper-step editable :complete="e6> 3" step="3">Date Requirements</v-stepper-step>

        <v-stepper-content step="3">
          <v-card flat color="grey lighten-1" class="mb-5 flex flex-column items-start justify-start" height="100%">
            <h1>When is your event?</h1>
            <v-btn class="success" @click="datePickers++">Add another date</v-btn>
            <span class="flex flex-row flex-wrap space-between">
              <span v-for="i in datePickers" class="w-third mb3">
                <v-date-picker v-model="datePicker" :landscape="landscape" :reactive="reactive" :min="min"></v-date-picker>
              </span>
            </span>
          </v-card>
          <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step editable step="4">Space requirements</v-stepper-step>
        <v-stepper-content step="4">
          <v-card flat color="grey lighten-1" class="mb-5" height="420px">
            <v-container fluid grid-list-lg>
              <v-layout row wrap>
                <v-flex>
                  <v-range-slider v-model="price" :max="600" :min="20" :step="10"></v-range-slider>
                </v-flex>
                <v-flex shrink style="width: 60px">
                  <v-text-field v-model="price[1]" class="mt-0" hide-details single-line type="number"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
          <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper>
    </div>
    <div class="fl w-25 ph3">
      <h1>Preview</h1>
      <v-expansion-panel>
        <v-expansion-panel-content>
          <div slot="header">Contact Information</div>
          <v-card>
            <v-card-text>
              <strong>Name: </strong> {{ name }} <br>
              <strong>Email: </strong> {{ email }} <br>
              <strong>Organization: </strong> {{ organization }} <br>
              <strong>Phone: </strong> {{ phone }} <br>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-content>
          <div slot="header">Location</div>
          <v-card>
            <v-card-text>
              <v-list two-line>
                <template v-for="(item, index) in places">
                  <v-list-tile>
                    <v-list-tile-avatar>
                      <img src="//placehold.it/500x500">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.name"></v-list-tile-title>
                      <v-list-tile-sub-title v-html="item.formatted_address"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-list>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-content>
          <div slot="header">Date requirements</div>
          <v-card>
            <v-card-text>
              <v-list two-line>
                <template v-for="(item, index) in places">
                  <v-list-tile>
                    <v-list-tile-avatar>
                      <img src="//placehold.it/500x500">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.name"></v-list-tile-title>
                      <v-list-tile-sub-title v-html="item.formatted_address"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-list>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
  </div>
</template>

<script>
  import TheNavigationBar from '~/components/TheNavigationBar'

 export default {
   components: { 
     TheNavigationBar
   },
  data () {
      return {
        price: [110, 440],
        e6: 4,
        datePickers: 1,
        picker: '',
        address: '',
        markers: [],
        email: '',
        name: "",
        organization: "",
        phone: "",
        emailRules: [],
        nameRules: [],
        place: null,
        valid: false,
        landscape: false,
        reactive: true,
        datePicker: "2018-07-01",
        places: [],
        min: "2018-07-01"
      }
    },
      methods: {
      setDescription(description) {
        this.description = description;
      },
      setPlace(place) {
        this.place = place
      },
      usePlace(place) {
        if (this.place) {
          this.places.push(this.place)
          this.markers.push({
            position: {
              lat: this.place.geometry.location.lat(),
              lng: this.place.geometry.location.lng(),
            }
          })
          this.place = null;
        }
      }
    }
  }
</script>
