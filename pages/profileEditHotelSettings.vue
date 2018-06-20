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

            <v-container fill-height>
            <h1>Settings</h1>
            <v-form v-model="valid">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                :counter="10"
                label="Name"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
                    <v-flex xs6>
              <v-select
                :items="items"
                v-model="e2"
                label="Select"
                class="input-group--focused"
                item-value="text"
              ></v-select>
            </v-flex>
            </v-form>
           <div>
            <v-date-picker v-model="picker"></v-date-picker>
           </div>
          <v-time-picker v-model="picker2"></v-time-picker>
          <div> <v-slider v-model="value1" step="0"></v-slider>You picked: {{value1}}</div>
      </v-container>
      
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      drawer: null,
      dialog3: false,
        picker: null,
        landscape: false,
        reactive: false,
         value1: 0,
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
    }
  }
</script>