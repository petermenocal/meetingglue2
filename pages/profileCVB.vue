<template>
  <div id="app" class="container">  
    <the-navigation-bar></the-navigation-bar>
    <div class="fl w-100 tc bg-white" style="min-height: 1000px">
      <div class="fl w-50" >
        <div class="panel" id="panel-1" style="overflow: hidden;object-fit:cover; " v-show="activePanel == 1">
          <img src="~/assets/img/map-oakland.png" />
        </div>
        <div class="bg-black panel" id="panel-2" v-if="activePanel == 2">
          <video src="//player.vimeo.com/external/262849025.hd.mp4?s=d9164c1978797cb8e3e6b47fc9ba6b198c506585&profile_id=174" autoplay
          width="100%"
          height="auto"></video>
        </div>
          <v-btn v-on:click=swapActivePanelContent(1)><i class="fa fa-map mr2"></i>map</v-btn>
          <v-btn v-on:click=swapActivePanelContent(2)><i class="fa fa-video-camera mr2"></i>video</v-btn>
      </div>
      <div class="fl w-50 tl pa3">
        <h1 class="purple">{{ $store.state.cvb.name }}</h1>
        <p class="measure">Oakland is located on the inner part of the bay area, right across the bridge from San Francisco. You will hear the locals refer to this side of the bay as "The East Bay".</p>
        <p class="small f6 fw6 b mt4"><i class="fa fa-map-marker"></i> {{ $store.state.cvb.address }}. {{ $store.state.cvb.city }} {{ $store.state.cvb.postalCode }}</p>
        <p class="small f6 fw6 b"><i class="fa fa-phone"></i> {{ $store.state.cvb.phoneNumber }}</p>
        <p class="small f6 fw6 b"><i class="fa fa-link"></i> www.visitoakland.com</p>
        <div class="flex flex-row flex-wrap">
          <div class="w-50 lh-copy mt4">
            <p class="b">Total Hotel Inventory</p>
            <p><i class="fa fa-bed"></i> 4,000 Sleeping Rooms</p>
          </div>
          <div class="w-50 lh-copy mt4">
            <p class="b">Convention Center</p>
            <p><i class="fa fa-building"></i> Oakland Convention Center</p>
          </div>
          <div class="w-50 lh-copy mt4">
            <p class="b">Main Airport(s)</p>
            <p><i class="fa fa-plane"></i> OAK ≈ 10mi from downtown</p>
            <p><i class="fa fa-plane"></i> SFO ≈ 24mi from downtown</p>
          </div>
          <div class="w-50 lh-copy mt4">
            <p class="b">Transportation Cost</p>
            <p><i class="fa fa-bus"></i> Bay Area Rapid Transit ≈ $8.65 one way</p>
            <p><i class="fa fa-taxi"></i> Taxi ≈ $40 one way</p>
          </div>
        </div>

             <v-tabs
              v-model="active"
              color="purple"
              dark
              slider-color="purple"
              class="mt5"
            >
            <v-tab
              v-for="n in tabs"
              :key="n"
              ripple
            >
              {{ n.title }}
            </v-tab>
            <v-tab-item 
              v-for="n in 3"
              :key="n"
            >
        <v-card flat>
          <v-card-text v-show="n == 1">
            <div class="flex flex-column w-100" v-bind:class="{'active-shown': !activeSalesFactPanel}" v-show="!activeSalesFactPanel">
                <div class="flex flex-column w-100 mb2 bb b--black-20 pv3" v-for="promos in 4" v-bind:key="promos.index">
                  <h1 class="f3 fw4">Promo Name</h1>
                  <a v-bind:href=promos.link class="link b purple dim pointer"><i class="fa fa-link mr2"></i>More info</a>
                </div>
              </div>
          </v-card-text>
          <v-card-text v-show="n == 2">
            <div class="flex flex-column w-two-thirds mb2 bb b--black-20 pv3"  v-for="sales in $store.state.cvb.salesStaff" v-bind:key="sales.index">
                  <div class="flex flex-row">
                    <div class="flex w-70">
                      <img v-bind:src=sales.image style="height: 100px; width:100px;" class="mr2 br4" alt="">
                      <div class="flex flex-column">
                        <span class="w-100 lh-copy f4 b purple"> {{ sales.name }}</span>
                        <span class="w-100 lh-copy f6 purple">{{ sales.title }}</span>
                        <a v-bind:href=sales.email class="w-100 black link lh-copy f6">{{ sales.email }}</a>
                        <a v-bind:href=sales.phone class="w-100 black link lh-copy f6">{{ sales.phone }}</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="absolute w-30 right-0 top-0 mt3 pa3">
                  <span class="f4 purple fw6">Come Find Us</span>
                  <p class="f5 lh-copy fw6 gray">Connect Corporate <br><div class="fa fa-clock-o"></div> August 23-25, 2018, Salt Lake City</p>
                </div>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
      </div>
  </div>

    <div class="fl w-100" id="event-calendar-wrapper">
      <h1 class="white tc">What's Happening</h1>
      <div class="flex flex-row items-center justify-between" id="event-scroller">
        <div class="relative" style="min-width: 200px" v-bind:key="e.index" v-for="e in events">
          <div class="absolute top-0 pv2 ph4" style="background: rgba(0, 0, 0, 0.85); z-index: 1">
            <h4 class="white mb0">{{e.name}}</h4>
            <p class="mt0 f6 white">May 25, 2018</p>
          </div>
          <img class="dim pointer" style="z-index: 0" :src="e.imageSrc" alt="" >
        </div>
      </div>
    </div>

      
    <div class="flex justify-between w-100 bg-white pa4">

      <div class="w-third bg-light-gray br3 pa3" style="height: 690px; max-height: 690px; overflow-y: scroll;">
        <h1 class="tc">Updates</h1>
        <v-card v-for="n in 5" :key="n.index" class="mb4">
          <v-card-media
            class="white"
            height="200px"
            src="https://picsum.photos/600/200"
          >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Lorem Ipsum Dolor</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
      </div>
      <!-- <div class="w-50 ml4 pa3 br3">
        <h1>Promotions and Programs</h1>
        <hr>
        <h1 class="f3 purple fw4">{{ $store.state.cvb.promotions[0].name }}</h1>
        <p class="gray">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A pariatur ipsum placeat accusamus, suscipit illum eos sunt eum quae iste accusantium qui, saepe sit quam ex voluptas architecto harum rerum.</p>
        <a class="link dim pointer b" :href=$store.state.cvb.promotions[0].link target="_blank" rel="noopener"><i class="fa fa-link"></i> Visit website</a>
     </div> -->
      <div class="w-third pa3 br3" style="background: rgba(0, 0, 0, 0.08)">
      <h1 class="tc">Planner Pro-tips</h1>
        <v-carousel style="height: 450px" class="elevation-0">
          <v-carousel-item v-for="(item,i) in 4" :key="i" class="pv4 bg-black white ph5 mt4">
          <div class="fw6 f4 mb3 light-purple">Oakland Marriott City Center</div>
          <div class="yellow fw3 f6 mb2">lbcuxyo (username) | Corporate | April 2018</div>
          <p class="f6 white mb2"><i class="fa fa-circle"></i> Prime location in downtown Oakland. <br><br><i class="fa fa-circle"></i> Saved $30 on room rate alone compared to SFO.</p>
          <p class="f6 white mb2"><i class="fa fa-circle"></i> BART station is a 2 min walk from the hotel. <br><br><i class="fa fa-circle"></i> Took 12 minutes to meet a friend at Embarcadero!</p>
          </v-carousel-item>
        </v-carousel>

    </div>
            <Timeline class="timeline" :id="'visitoakland'" :sourceType="'profile'" :options="{  tweetLimit: '10' }"  style="max-height: 660px !important"/>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
  import TheNavigationBar from '~/components/TheNavigationBar'
  import TheFooter from '~/components/TheFooter'
  import { Timeline, Moment, Tweet } from 'vue-tweet-embed'
  import axios from 'axios'

  export default {

    name: "profile-cvb",
    fetch ({ store, params }) {
        return axios.post('/api/cvbProfileDetails')
        .then((res) => {
          store.commit('setCVB', res.data)
        })
      },
    data() {
      return {
         active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        thisCVB: {
          friendlyName: "Oakland",
          locale: "Oakland, CA"
        },
        tabs: [
          { title: 'PROMOS', text: '' },
          { title: 'SALES STAFF', text: '' }
        ],
        activePanel: 1,
        activeFact: 0,
        activeSalesFactPanel: false,
        events: [
          {
            name: "EVENT NAME",
            id: 0,
            imageSrc:
              "/demo-oakland-event-1.jpg"
          },
          {
            name: "EVENT NAME",
            id: 1,
            imageSrc:
              "/demo-oakland-event-2.jpg"
          },
          {
            name: "EVENT NAME",
            id: 2,
            imageSrc:
              "/demo-oakland-event-3.jpg"
          },
          {
            name: "EVENT NAME",
            id: 3,
            imageSrc:
              "/demo-oakland-event-4.jpg"
          },
          {
            name: "EVENT NAME",
            id: 4,
            imageSrc:
              "/demo-oakland-event-5.jpg"
          },
          {
            name: "EVENT NAME",
            id: 5,
            imageSrc: "/demo-oakland-event-6.jpg"
          },
          {
            name: "EVENT NAME",
            id: 6,
            imageSrc:
              "/demo-oakland-event-1.jpg"
          },
          {
            name: "EVENT NAME",
            id: 7,
            imageSrc:
              "/demo-oakland-event-2.jpg"
          },
          {
            name: "EVENT NAME",
            id: 8,
            imageSrc:
              "/demo-oakland-event-3.jpg"
          },
          {
            name: "EVENT NAME",
            id: 9,
            imageSrc:
              "/demo-oakland-event-4.jpg"
          },
          {
            name: "EVENT NAME",
            id: 10,
            imageSrc:
              "/demo-oakland-event-5.jpg"
          },
          {
            name: "EVENT NAME",
            id: 11,
            imageSrc: "/demo-oakland-event-6.jpg"
          }
        ],
        twitterPosts: [
          {
            name: "EVENT NAME",
            id: 0,
            imageSrc:
              "/demo-oakland-event-1.jpg"
          },
          {
            name: "EVENT NAME",
            id: 1,
            imageSrc:
              "/demo-oakland-event-2.jpg"
          },
          {
            name: "EVENT NAME",
            id: 2,
            imageSrc:
              "/demo-oakland-event-3.jpg"
          },
          {
            name: "EVENT NAME",
            id: 3,
            imageSrc:
              "/demo-oakland-event-4.jpg"
          },
          {
            name: "EVENT NAME",
            id: 4,
            imageSrc:
              "/demo-oakland-event-5.jpg"
          },
          {
            name: "EVENT NAME",
            id: 5,
            imageSrc: "/demo-oakland-event-6.jpg"
          }
        ],
      };
    },
    computed: {
      getImageSrc: function(srcString) {
        return '/assets/img/' + srcString
      }
    },
    methods: {
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0).toString()
      },
      setActivePanel: function() {
        this.activeSalesFactPanel = !this.activeSalesFactPanel;
      },
      swapToPreviousActiveFact: function() {
        if(this.activeFact > 0) {
          this.activeFact--
        } else {
          this.activeFact = (this.facts.length - 1)
        }
      },
      swapToNextActiveFact: function() {
        if(this.activeFact == (this.facts.length - 1)) {
          this.activeFact = 0
        } else {
          this.activeFact++
        }
      },
      swapActivePanelContent: function(newPanel) {
        this.activePanel = newPanel;
      }
    },
    components: {
      TheNavigationBar, Timeline, TheFooter
    }
  };
</script>


<style scoped>
.active {
  border-bottom: 3px solid purple;
}
.slide {
  transition: transform 0.5s;
}
.current {
    transform:  translateX(0%);
}

.moved-left {
    transform: translateX(-100%);
}

.moved-right {
    transform: translateX(100%);
}
.update-container {
  z-index: 99999;
  box-shadow:  
    inset 0px -22px 28px -10px #CCC; 
  }
#event-calendar-wrapper {
  overflow-x: hidden;
}
#event-scroller {
  overflow-y: scroll;
}
.panel {
  min-height: 595px;
  height: 595px;
}
#panel-2 {
  overflow: hidden;
  position: relative;
}
#panel-2 > video {
  margin-top: 100px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 100vw;
}


ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: black;
  font-style:italic;
}
.timeline {
  max-height: 700px;
  overflow: scroll;
}
</style>
