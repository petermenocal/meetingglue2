<template>
  <div id="app" class="container">  
    <the-navigation-bar></the-navigation-bar>
    <div class="fl w-100 tc bg-white">
      <div class="fl w-50">
        <div class="panel" id="panel-1" style="overflow: hidden;object-fit:cover;" v-show="activePanel == 1">
          <img src="~/assets/img/map-oakland.png" />
        </div>
        <div class="bg-black panel" id="panel-2" v-if="activePanel == 2">
          <video src="//player.vimeo.com/external/262849025.hd.mp4?s=d9164c1978797cb8e3e6b47fc9ba6b198c506585&profile_id=174" autoplay
          width="100%"
          height="auto"></video>
        </div>
        <div class="flex flex-row content-center justify-center h3 items-center w-100">
          <div v-on:click=swapActivePanelContent(1) class="flex dim pointer bg-black-10 pa2 br4 mr5"><i class="fa fa-map mr2"></i><br><small>map</small></div>
          <div class="flex dim pointer bg-black-10 pa2 br4" v-on:click=swapActivePanelContent(2)><i class="fa fa-video-camera mr2"></i><br><small>video</small></div>
        </div>
      </div>
      <div class="fl w-50 tl pa3">
        <h1 class="purple">{{ $store.state.cvb.name }}</h1>
        <p class="measure">Oakland is located on the inner part of the bay area, right across the bridge from San Francisco. You will hear the locals refer to this side of the bay as "The East Bay".</p>
        <p class="small f6 fw6 b"><i class="fa fa-map-marker"></i> {{ $store.state.cvb.address }}. {{ $store.state.cvb.city }} {{ $store.state.cvb.postalCode }}</p>
        <p class="small f6 fw6 b"><i class="fa fa-phone"></i> {{ $store.state.cvb.phoneNumber }}</p>
    
        <div class="fl w-100 bg-light-gray br3 near-black">
          <div class="flex flex-row justify-between w-100 ph3">
            <p class="b ttu dim pointer" v-bind:class="{active: !activeSalesFactPanel}" @click=setActivePanel>Sales staff</p>
            <p class="b ttu dim pointer" v-bind:class="{active: activeSalesFactPanel}" @click=setActivePanel>Promos</p>
          </div>
          <div class="fl w-100 ph3 mt0">
              <div class="flex flex-column w-100" v-bind:class="{'active-shown': !activeSalesFactPanel}" v-show="!activeSalesFactPanel">
                <div class="flex flex-row flex-wrap w-100 mb2 bb b--black-20 pv3" v-for="sales in $store.state.cvb.salesStaff" v-bind:key="sales.index">
                  <span class="w-100 lh-copy f4 b purple"> {{ sales.name }}</span>
                  <span class="w-100 lh-copy f6 purple">{{ sales.title }}</span>
                  <a v-bind:href=sales.email class="w-100 black link lh-copy f6">{{ sales.email }}</a>
                  <a v-bind:href=sales.phone class="w-100 black link lh-copy f6">{{ sales.phone }}</a>
                </div>
              </div>
              <div class="flex flex-column w-100" v-bind:class="{'active-shown': activeSalesFactPanel}" v-show="activeSalesFactPanel">
                <div class="flex flex-column w-100 mb2 bb b--black-20 pv3" v-for="promos in $store.state.cvb.promotions" v-bind:key="promos.index">
                  <h1 class="f3 fw4">{{ promos.name }}</h1>
                  <a v-bind:href=promos.link class="link b purple dim pointer"><i class="fa fa-link mr2"></i>More info</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fl w-100" id="event-calendar-wrapper">
      <h1 class="white tc">Events in Oakland</h1>
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

      <div class="w-50 bg-light-gray br3 pa3" style="height: 690px; max-height: 690px; overflow-y: scroll;">
        <h1 class="tc">Updates</h1>
        <ul class="list tl">
          <li class="update mb3 bg-white pa4 ba b--black-20" style="z-index:0; margin-bottom: 30px;">
            <div class="fl w-50 dib">
              <img style="border-radius: 50%" src="~/assets/img/demo-updates.jpg" alt=""  height="150px" width="150px">
            </div>
            <h3 class="mb0">This is an update.</h3>
            <p class="f6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fuga ea quod dolor. Iure eum tempore voluptates itaque saepe animi, velit quo repellendus! Quas quasi non natus alias sit iste.</p>
          </li>
          <li class="update mb3 bg-white pa4 ba b--black-20" style="z-index:0">
            <div class="fl w-50 dib">
              <img style="border-radius: 50%" src="~/assets/img/demo-updates.jpg" alt=""  height="150px" width="150px">
            </div>
            <h3 class="mb0">This is an update.</h3>
            <p class="f6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fuga ea quod dolor. Iure eum tempore voluptates itaque saepe animi, velit quo repellendus! Quas quasi non natus alias sit iste.</p>
          </li>
        </ul>
      </div>
      <!-- <div class="w-50 ml4 pa3 br3">
        <h1>Promotions and Programs</h1>
        <hr>
        <h1 class="f3 purple fw4">{{ $store.state.cvb.promotions[0].name }}</h1>
        <p class="gray">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A pariatur ipsum placeat accusamus, suscipit illum eos sunt eum quae iste accusantium qui, saepe sit quam ex voluptas architecto harum rerum.</p>
        <a class="link dim pointer b" :href=$store.state.cvb.promotions[0].link target="_blank" rel="noopener"><i class="fa fa-link"></i> Visit website</a>
     </div> -->
      <div class="w-50 ml4 pa3 br3">
       <Timeline class="timeline" :id="'visitoakland'" :sourceType="'profile'" :options="{  tweetLimit: '10' }"/>
    </div>
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
        thisCVB: {
          friendlyName: "Oakland",
          locale: "Oakland, CA"
        },
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
