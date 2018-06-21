<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
      temporary
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text">
            <nuxt-link :to="{ path: item.src }" class="flex flex-row link gray">
              <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
            </nuxt-link>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

        <v-dialog v-model="dialog3" max-width="500px">
        <v-card>
          <v-card-title>
            <h1>Messages coming soon</h1>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-actions>
            <v-btn color="primary" flat @click.stop="dialog3=false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Meeting Glue</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        prepend-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
       <v-menu bottom offset-y>
      <v-btn icon slot="activator">
        <v-icon>notifications</v-icon>
      </v-btn>
        <v-list>
          <v-list-tile v-for="(item, i) in 10" :key="i" @click="dialog3 = !dialog3">
            <v-list-tile-title><v-icon>message</v-icon> New message from jimbo</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
      <v-content>
    <v-container fluid>
      <v-layout row wrap style="width: 80vw !important;">
         <div class="fl w-100">
  
    <v-stepper v-model="e1">
      <v-stepper-header>
        <template v-for="n in steps">
          <v-stepper-step
            :key="`${n}-step`"
            :step="n"
            :complete="e1 > n"
            editable
          >
            Step {{ n }}
          </v-stepper-step>
          <v-divider v-if="n !== steps" :key="n"></v-divider>
        </template>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content
          v-for="n in steps"
          :step="n"
          :key="`${n}-content`"
        >
          <v-card color="grey lighten-1" class="mb-5" height="500px">
            <h3>Tell us what you need.</h3>
            <p class="mb3">Let us know a few particulars about your event and we'll set automatically setup your RFP with some default data.</p>
            <v-tabs
              v-model="active"
              color="cyan"
              dark
              slider-color="yellow"
            >
              <v-tab
                v-show="e1 == 1"
                v-for="n in step1"
                :key="n"
                ripple
              >
                {{ n.label }}
              </v-tab>
              
              <v-tab
                v-show="e1 == 2"
                v-for="n in step2"
                :key="n"
                ripple
              >
                {{ n.label }}
              </v-tab>
              
              <v-tab-item
                v-for="n in 3"
                :key="n"
              >
                <v-card flat>
                  <v-card-text v-if="e1 == 1">
                       
                    <div><v-date-picker v-model="picker"></v-date-picker></div>
                  </v-card-text>
                  <v-card-text v-if="e1 == 2">
                    <h3>I require rooms for: {{value1}} <span v-show="value1 > 1"> people.</span> <span v-show="value1 == 0"> people.</span>
                    <span v-show="value1 == 1"> person.</span></h3>
                    <v-slider v-model="value1" step="1"></v-slider>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
  
          </v-card>
          <v-btn color="primary" @click="nextStep(n)">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
      </v-layout>
    </v-container>
    </v-content>
  </v-app>
</template>

<script>

  export default {
    data: () => ({
      picker: null,
      picker2: null,
      dialog: false,
      drawer: null,
      dialog3: false,
      value1: 0,
      e1: 1,
      steps: 5,
      selectItems: [
        'and', 'or', 'through'
      ],
      selectedItem: null,
      step1: [
        { label: "Specific dates"},
        { label: "Date range"},
        { label: "Date range pattern"},
        { label: "Manual input"}
      ],
    step2: [  
        { label: "Sleeping rooms & space"},
        { label: "Sleeping rooms only"},
        { label: "Meeting space only"},
      ],
      items: [
        { icon: 'dashboard', text: 'Dashboard', src: '/profileEditHotelDashboard' },
        { icon: 'history', text: 'RFP History', src: '/profileEditHotelHistory' },
        { icon: 'content_copy', text: 'RFP Wizard', src: '/profileEditHotelWizard' },
        { icon: 'settings', text: 'Settings', src: '/profileEditHotelSettings' },
        { icon: 'chat_bubble', text: 'Chat', src: '/profileEditHotelChat' },
        { icon: 'help', text: 'Help', src: '/profileEditHotelHelp' },
      ]
    }),
    props: {
      source: String
    },
    methods: {
      onInput (val) {
        this.steps = parseInt(val)
      },
      nextStep (n) {
        if (n === this.steps) {
          this.e1 = 1
        } else {
          this.e1 = n + 1
        }
      }
  }
  }
</script>