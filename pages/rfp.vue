<template>
  <div id="app" class="container" style="font-family: arial !important">
    <the-navigation-bar></the-navigation-bar>

    <div class="fl w-100 tc" style="min-height: 1000px">
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
            <GmapMap :center="{lat:36.181271, lng:-115.134132}" :zoom=11 map-type-id="terrain" style="width: 100%; height:100%; ">
              <GmapMarker :key="index " v-for="(m, index) in markers " :position="m.position " :clickable="true " :draggable="true " @click="center=m.position" />
            </GmapMap>
          </v-card>
          <v-btn color="primary " @click="e6=3 ">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-step editable :complete="e6> 3" step="3">Date Requirements</v-stepper-step>
        <v-stepper-content step="3">
          <v-card flat color="grey lighten-1" class="mb-5 flex flex-column items-start justify-start" height="100%">
            <h1>When is your event?</h1>
            <div class="text-xs-center">
              <v-bottom-sheet v-model="sheet">
                <v-btn slot="activator" color="purple" dark>
                  Add another date
                </v-btn>
                <v-list>
                  <v-subheader>Which date style?</v-subheader>
                  <v-list-tile v-for="tile in tiles" :key="tile.title" @click="selectDateStyle(tile)">
                    <span class="w-10 b ttu">{{ tile.title }}</span>
                    <v-list-tile-title>
                      ({{ tile.description }})</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-bottom-sheet>
            </div>
            <span class="flex flex-row flex-wrap justify-between ">
              <span v-for="i in datePickers " class="w-50 mb3 ">
                <v-date-picker v-model="datePicker " :landscape="true " :reactive="reactive " :min="min "></v-date-picker>
              </span>
            </span>
          </v-card>
          <v-btn color="primary " @click="e6=4 ">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step editable step="4 ">Space requirements</v-stepper-step>
        <v-stepper-content step="4 ">
          <v-card flat color="grey lighten-1 " class="mb-5 " height="420px ">
            <v-card-title primary-title class="tl ">
              <h3 class="headline mb-0 fl w-100 ">Attendance requirements</h3>
              Adjust the sliders below to denote your projected attendees.
            </v-card-title>
            <v-container fluid grid-list-lg>
              <v-layout row wrap v-for="i in datePickers ">
                <div class="tc flex flex-row items-center justify-center w-100 ">
                  <v-icon class="mr2 ">calendar_today</v-icon>
                  <h3 class="fw4 ">{{datePicker}}</h3>
                </div>
                <v-flex shrink style="width: 60px ">
                  <v-text-field v-model="price[0] " class="mt-0 " hide-details single-line type="number "></v-text-field>
                </v-flex>
                <v-flex>
                  <v-range-slider v-model="price " :max="600 " :min="20 " :step="10 "></v-range-slider>
                </v-flex>
                <v-flex shrink style="width: 60px ">
                  <v-text-field v-model="price[1] " class="mt-0 " hide-details single-line type="number "></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
          <nuxt-link to="/rfp2">Complete your RFP</nuxt-link>
        </v-stepper-content>
      </v-stepper>
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
        e6: 1,
        sheet: false,
        datePickers: 1,
        picker: '',
        address: '',
        markers: [],
        email: 'e.stone@rfptester.com',
        name: "Emma Stone",
        organization: "RFP tester",
        phone: "702-555-5555",
        emailRules: [],
        nameRules: [],
        place: null,
        valid: false,
        landscape: false,
        reactive: true,
        datePicker: "2018-07-01",
        places: [],
        min: "2018-07-01",
        dateStyle:  { title: 'or', description: 'My event can land on either of the dates I select.'},
        tiles: [
          { title: 'or', description: 'My event can land on either of the dates I select.'},
          { title: 'and', description: 'My event must land on both of the dates I select.'},
          { title: 'through', description: 'My event takes place through the selected dates.'},
          { title: 'cherry pick', description: 'My event has a special pattern. All dates must be available individually.'},
        ]
      }
    },
      methods: {
        selectDateStyle(tile) {
          this.dateStyle = tile
          this.datePickers++
          this.sheet = false;
        },
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
