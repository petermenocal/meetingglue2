<template>
  <div class="container w-100" >
    <the-navigation-bar></the-navigation-bar>
    <div class="fl w-100 bg-near-white black pa3">
      <h1>Courtyard Oakland: Downtown</h1>
      <div class="fl w-100 relative">
        <img src="/demo-hero-hotelProfile.png" alt="">
      </div>
      <div class="fl w-100">
        <div class="flex flex-row items-center justify-center h3 mt2">
          <div class="flex w-50 "><h4>123 Main Street. Oakland, California</h4></div>
          <div class="flex items-center justify-end w-50">
            <div class="mr3">
              <i class="fa fa-twitter"></i>
            </div>
            <div class="mr3">
              <i class="fa fa-facebook"></i>
            </div>
            <div class="mr3">5
              <i class="fa fa-google"></i>
            </div>
            <div class="mr3">
              <i class="fa fa-yelp"></i>
            </div>
           <v-btn color="info">Contact hotel</v-btn>
          </div>
        </div>
      </div>
    </div>

    <div class="fl tc w-100 bg-near-black white pa2">
      <h1 class="tc">Planner reviews</h1>
      <v-btn color="info"><i class="fa fa-edit mr4"></i> Edit your review</v-btn>
      <!-- planner card -->
      <div class="w-50 center ">
         <div class="span f5 mt2 fw5 b i">Liklihood you will return to this property<br><br></div>
        <div class="bg-black br-pill h2  overflow-y-hidden ">
          <div class="bg-green black b pa2 br-pill h2 shadow-1" @click=adjustPercentage v-bind:style="{ width: percentage1 +'%' }">{{percentage1}}%</div>
        </div>

        <div class="span f5 mt2 fw5">{{ reviewerAttitude }} <br><br></div>
        <div class="bg-moon-gray br-pill h1 overflow-y-hidden mt3 ">
          <div class="bg-blue br-pill h1 shadow-1 w-third" ></div>
        </div>
        <div class="span f5 mt2 fw5">Sales contact quality</div>
        <div class="bg-moon-gray br-pill h1 overflow-y-hidden mt3 ">
          <div class="bg-green br-pill h1 shadow-1 w-90" ></div>
        </div>
        <div class="span f5 mt2 fw5">Convention services contact quality</div>
        <div class="flex flex-row items-center">
          <span class="f6 fw1 mv3 w-50"><i class="fa fa-clock-o f6 fw1"></i> May 2018</span>
          <span class="f6 fw1 mv3 w-50 tr"><img src="/emma.jpg" height="60" style="border-radius: 50%" alt="" class="ba b--white-10 bw4"> <br>Emma S.</span>
        </div>
      </div>
    </div>

    <div class="fl w-100" id="event-calendar-wrapper">
        <h1 class="black tc">Venues near this hotel</h1>
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
    <div class="flex justify-between flex-row flex-wrap w-100 bg-white pa3">
      <div class="w-100 ml4 pa3 br3 black">
        <h1>Promotions and Programs</h1>
        <img src="~/assets/img/demo-promos.jpg">
        <h1>Book 25+ Total Rooms and Everyone Wins!</h1>
        <h4>#MeetInOakland and receive up to $3000 towards your program.</h4>
        <p class="measure">Lose the lanyard and go beyond the boardroom. Savor our trendy culinary scene, immerse yourself in our vibrant arts and nightlife, and soak up the proactive spirit The Town is known for. Explore the possibilities and envision your next meeting in the Sunny Side of the Bay!</p>
      </div>
      <div class="w-100 bg-light-gray near-black br3 pa3">
        <h1 class="tc"><span class="fw1">Posts by </span>Courtyard Oakland: Downtown</h1>
        <ul class="list tl">
          <li class="update mb3 bg-white pa4 bb b--black-10" style="z-index:0">
            <div class="fl w-50 dib">
              <img src="~/assets/img/demo-updates.jpg" alt=""  height="250px" width="100%">
            </div>
            <div class="fl w-50 pa4 near-black lh-copy">
              <v-container fluid fill-height>
                <v-layout align-center justify-center>
                  <v-flex md8>
                    <v-card  class="elevation-0">
                      <p class="mt0 gray f4 small">May 29, 2018</p>
                      <h2>This is an update.</h2>
                      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fuga ea quod dolor. Iure eum tempore voluptates itaque saepe animi, velit quo repellendus! Quas quasi non natus alias sit iste.</p>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </li>
          <li class="update mb3 bg-white pa4" style="z-index:0">
            <div class="fl w-50 dib">
              <img src="~/assets/img/demo-updates.jpg" alt=""  height="250px" width="100%">
            </div>
            <div class="fl w-50 pa4 near-black lh-copy">
              <v-container fluid fill-height>
                <v-layout align-center justify-center>
                  <v-flex md8>
                    <v-card  class="elevation-0">
                      <p class="mt0 gray f4 small">May 29, 2018</p>
                      <h2>This is an update.</h2>
                      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fuga ea quod dolor. Iure eum tempore voluptates itaque saepe animi, velit quo repellendus! Quas quasi non natus alias sit iste.</p>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </li>
        </ul>
      </div>
    </div>
      <div class="fl w-100 bg-white black">
        <div class="fl w-50" style="overflow: scroll; height: 740px;">
          <h1 class="tc">Twitter</h1>
          <Timeline :id="'courtyardhotels'" :sourceType="'profile'" :options="{  tweetLimit: '5' }"/>
        </div>
        <div class="fl w-50">
  <h1 class="tc">Virtual tour</h1>
    <div class="fl w-100 tc bg-black">
      <div class="fl w-100">
        <div class="panel" id="panel-1" style="overflow: hidden;object-fit:cover;" v-show="activePanel == 1">
          <iframe src="https://www.google.com/maps/embed?pb=!4v1526839272161!6m8!1m7!1sCAoSK0FGMVFpcE42Z0xvdlFUaFJCU2pjMnhEX2Z2bjJ2QXdjTGc0dVl2LUxLRVE.!2m2!1d37.74124394779506!2d-122.1942676326155!3f248.38267968093646!4f-24.68757772799968!5f0.7820865974627469" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        <div class="bg-black panel" id="panel-2" v-if="activePanel == 2">
          <iframe src="https://www.google.com/maps/embed?pb=!4v1526839352524!6m8!1m7!1sCAoSK0FGMVFpcFAxMVppSXpCZUpWam9FZ0o4cWYtUTZEcWZqYVlhWGZlNXFEVXc.!2m2!1d37.74085621214046!2d-122.194257848466!3f179.19500527220364!4f0!5f0.7820865974627469" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        <div class="bg-black panel" id="panel-3" v-if="activePanel == 3">
         <iframe src="https://www.google.com/maps/embed?pb=!4v1526839627576!6m8!1m7!1sCAoSK0FGMVFpcFBuYUJZc1hFQVVmWEdNM2NHZHVjM1VPNGVtckVJelhNMU1POGs.!2m2!1d37.74089059897356!2d-122.1941034475108!3f325.7155501799117!4f-2.277775412695604!5f0.7820865974627469" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        <div class="flex flex-row content-center justify-center h3 items-center bg-black white pa3">
           <div class="dim pointer bg-white-10 pa2 br4 w-third ma2 tc" v-on:click=swapActivePanelContent(3)>
            360°<br>
            <small>Lobby</small>
          </div>
          <div v-on:click=swapActivePanelContent(1) class=" w-third ma2 tcdim pointer bg-white-10 pa2 br4">
            360°<br>
            <small>Room interior</small>
          </div>
          <div class="dim pointer bg-white-10 pa2 br4 w-third ma2 tc" v-on:click=swapActivePanelContent(2)>
            360°<br>
            <small>Amenities</small>
          </div>
         
        </div>
      </div>
    </div>






        </div>
      </div>

    


    <div class="fl w-100 h3 bg-near-black white pa2">
      <div class="fl w-third">
        <img src="~/assets/img/logo.png" height="50px" width="auto">
      </div>
      <div class="fl w-third">
        <ul class="list flex items-center justify-center">
          <li>Home</li>
          <li>Hotels</li>
          <li>CVBs</li>
          <li>Events</li>
          <li>Register</li>
        </ul>
      </div>
      <div class="fl w-third flex items-center justify-center">
        <p>&copy; 2018 Meeting Glue. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import TheNavigationBar from '~/components/TheNavigationBar'
  import { Timeline, Moment, Tweet } from 'vue-tweet-embed'

  export default {
    name: "profile-cvb",
    data() {
      return {
        thisCVB: {
          friendlyName: "Oakland",
          locale: "Oakland, CA"
        },
        activePanel: 1,
        activeFact: 0,
        percentage1: 0,
        reviewerAttitude: 'I would NOT return to this property.',
        facts: [
          { id: 0, text: 'Now showing fact #1' },
          { id: 1, text: 'This is another fact or #2' },
          { id: 2, text: 'Oakland has 379482739 people ' },
          { id: 3, text: 'Oakland is the best' },
          { id: 4, text: 'More test facts' },
          { id: 5, text: 'Facts, Facts, Facts' },
        ],
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
      calculatePlannerReviewAttitude: function() {
        if(this.percentage1 > 50) {
         return this.reviewerAttitude =  'I really actually like this place!'
         } else {
          return this.reviewerAttitude = 'I kind of like this place'
         }
      },
      adjustPercentage: function() {
        percentage1 = 55
      },
      swapToPreviousActiveFact: function() {
        if(this.activeFact > 0) {
          this.activeFact--
        } else {
          this.activeFact = (this.facts.length - 1)
        }
      },
      contact: function () {
       return this.$toast.show('Messaging is coming soon!')
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
      TheNavigationBar, Timeline
    }
  };
</script>


<style scoped>
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
.br-pill {
  transition: all 0.5s ease-in;
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
  color: #42b983;
}
</style>
