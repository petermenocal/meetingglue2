<template>
  <div class="fl w-100">
    <h1>rfp wizard</h1>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click.native="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Reason for bidding</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>James Bond posted:</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Booked solid through december</v-list-tile-title>
              <v-list-tile-sub-title>Sorry! We have no availability for the dates you mentioned.</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>General</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Option</v-list-tile-title>
              <v-list-tile-sub-title>Lorem ipsum dolor sit amet consectetur adipisicing elit.</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Option</v-list-tile-title>
              <v-list-tile-sub-title>Lorem ipsum dolor sit amet consectetur adipisicing elit.</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="widgets"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Option</v-list-tile-title>
              <v-list-tile-sub-title>Lorem ipsum dolor sit amet consectetur adipisicing elit.</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <div class="w-50 center">
          <v-textarea name="input-7-1" label="Send a reply to James Bond" value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through." hint="Reps will receivve this comment in their profile inbox."></v-textarea>
          <v-btn @click="dialog = false">Send reply</v-btn>
        </div>
      </v-card>
    </v-dialog>
    <v-data-table :headers="headers" :items="desserts" class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.value }}</td>
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.address }}</td>
        <td class="text-xs-right">{{ props.item.sales_contact }}</td>
        <td class="text-xs-right">{{ props.item.sales_contact_email }}</td>
        <td class="text-xs-right">{{ props.item.sales_contact_phone }}</td>
        <td class="text-xs-right">{{ props.item.sales_contact_profile }}</td>
        <td class="text-xs-right">{{ props.item.bidding }}</td>
        <td class="text-xs-right">
          <v-btn @click="dialog = true">view</v-btn>
        </td>
        <td class="text-xs-right">{{ props.item.total_rooms }}</td>
        <td class="text-xs-right">{{ props.item.aaa_rating }}</td>
        <td class="text-xs-right">{{ props.item.forbes_rating }}</td>
        <td class="text-xs-right">{{ props.item.available_rates }}</td>
        <td class="text-xs-right">{{ props.item.preferred_dates }}</td>
        <td class="text-xs-right">{{ props.item.alternative_dates }}</td>
        <td class="text-xs-right">{{ props.item.comissionable }}</td>
        <td class="text-xs-right">{{ props.item.meeting_rooms_no }}</td>
        <td class="text-xs-right">{{ props.item.avg_breakfast }}</td>
        <td class="text-xs-right">{{ props.item.avg_lunch }}</td>
        <td class="text-xs-right">{{ props.item.avg_dinner }}</td>
        <td class="text-xs-right">{{ props.item.avg_buffet }}</td>
        <td class="text-xs-right">{{ props.item.avg_reception }}</td>
        <td class="text-xs-right">{{ props.item.avg_break }}</td>
        <td class="text-xs-right">{{ props.item.fb_min }}</td>
        <td class="text-xs-right">{{ props.item.meeting_room_fee }}</td>
        <td class="text-xs-right">{{ props.item.closest_airport_distance }}</td>
        <td class="text-xs-right">{{ props.item.airport_shuttle }}</td>
        <td class="text-xs-right">{{ props.item.airport_shuttle_cost }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>

  export default {
    
    data () {
      return {
        headers: [
          {
            text: 'Response',
            align: 'left',
            sortable: false,
            value: 'Response'
          },
          { text: 'Venue name', value: 'venue' },
          { text: 'Venue address', value: 'address' },
          { text: 'Sales contact', value: 'sales_contact' },
          { text: 'Contact email', value: 'sales_contact_email' },
          { text: 'Contact phone', value: 'sales_contact_phone' },
          { text: 'Contact profile', value: 'sales_contact_profile' },
          { text: 'Are you bidding?', value: 'bidding' },
          { text: 'Reason for not bidding', value: 'bidding_reason' },
          { text: 'Total rooms', value: 'total_rooms' },
          { text: 'AAA Rating', value: 'aaa_rating' },
          { text: 'Forbes Rating', value: 'forbes_rating' },
          { text: 'Preferred Dates', value: 'forbes_rating' },
          { text: 'Available Rates', value: 'forbes_rating' },
          { text: 'Alternatie Dates', value: 'forbes_rating' },
          { text: 'Commissionable to client', value: 'forbes_rating' },
          { text: 'Number of meeting rooms', value: 'forbes_rating' },
          { text: 'Avg. Breakfast', value: 'forbes_rating' },
          { text: 'Avg. Lunch', value: 'forbes_rating' },
          { text: 'Avg. Buffet', value: 'forbes_rating' },
          { text: 'Avg. Dinner', value: 'forbes_rating' },
          { text: 'Avg. Reception', value: 'forbes_rating' },
          { text: 'Avg. Break', value: 'forbes_rating' },
          { text: 'F&B Min', value: 'forbes_rating' },
          { text: 'Meeting Room Rental Fee', value: 'forbes_rating' },
          { text: 'Closest Airport Distance', value: 'forbes_rating' },
          { text: 'Airport shuttle', value: 'forbes_rating' },
          { text: 'Airport shuttle cost', value: 'forbes_rating' },
        ],
        dialog: false,
        desserts: [
          {
            value: false,
            name: 'Hotel Name',
            address: '123 Address',
            sales_contact: "James Bond",
            sales_contact_email: "j@j.com",
            sales_contact_phone: "702-555-5555",
            sales_contact_profile: "link",
            bidding: false,
            bidding_reason: "Reason",
            total_rooms: 10005,
            aaa_rating: 5,
            forbes_rating: 5,
            available_rates: "$30/night",
            preferred_dates: "link",
            alternative_dates: "link",
            comissionable: true,
            meeting_rooms_no: 5555,
            avg_breakfast: "$9",
            avg_lunch: "$20",
            avg_dinner: "$30",
            avg_buffet: "$20",
            avg_reception: "$50",
            avg_break: "$100",
            fb_min: "$1001",
            meeting_room_fee: "$192",
            closest_airport_distance: "4km",
            airport_shuttle: false,
            airport_shuttle_cost: "50"
          }
        ]
      }
    },
     created: function () {
      var self = this;
      var hotels = ['Hilton', 'Hard Rock', 'Luxor', 'MGM', 'Four Seasons']
      var names = ['Jim Bob', 'Jane Doe', 'Sarah Barbara', 'Nick Cole', 'Sylvia Joshlyn']
      setInterval(function () {
         self.$data.desserts.push({
            value: true,
            name: hotels[Math.floor(Math.random() * 4)],
            address: '123 Address',
            sales_contact: names[Math.floor(Math.random() * 4)],
            sales_contact_email: "j@j.com",
            sales_contact_phone: "702-555-5555",
            sales_contact_profile: "link",
            bidding: false,
            bidding_reason: "Reason",
            total_rooms: Math.floor(Math.random() * 101),
            aaa_rating: 5,
            forbes_rating: 5,
            available_rates: "$30/night",
            preferred_dates: "link",
            alternative_dates: "link",
            comissionable: true,
            meeting_rooms_no: 5555,
            avg_breakfast: "$9",
            avg_lunch: "$20",
            avg_dinner: "$30",
            avg_buffet: "$20",
            avg_reception: "$50",
            avg_break: "$100",
            fb_min: "$1001",
            meeting_room_fee: "$192",
            closest_airport_distance: "4km",
            airport_shuttle: false,
            airport_shuttle_cost: "50"
          })
      }, 7000)
    }, 
    
  }
</script>
