<template>
     <div class="w-80 center elevation-15 bg-white">
    <div class="w-100 flex  flex-row">
      <div class="flex flex-column items-center justify-center w-70 tc h5" id="hero">
        <h1 class="mb0">Welcome to RFP bliss.</h1>
        <p class="mb0">Built by meeting planners for meeting planners.</p>
      </div>
      <div class="fl w-80 pa3 near-black white pb5" style="background: rgb(63,64,108)">
      <h1 class="tc">Promotions</h1>
      <div class="fl w-100">
        <v-expansion-panel light popout>
          <v-expansion-panel-content v-for="(item,i) in 5" :key="i" >
            <div slot="header" class="b flex flex-row justify-between">
              <div>Miami, FL</div>
              <div class="green">Nobu Hotel</div>
              <div>Expires: 12/30/19</div>
              <div></div>
            </div>
            <v-card dark>
              <v-card-text>
                <div class="flex">
                  <div class="w-25">Sign by 10/30/2018</div>
                  <div class="w-25">Hold by 10/30/2018</div>
                  <div class="w-25">100 Rooms or more on peak</div>
                  <div class="w-25">
                    <p class="b">Receive:</p>
                    <ul>
                      <li>50% allowable attrition</li>
                      <li>One complimentary coffee break</li>
                      <li>Complimentary high-speed internet access in meeting space</li>
                    </ul>
                    <p class="green ttu tracked">promo code B18HZ9A</p>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
          
      </div>
    </div>
    
    </div>
    
    <div class="flex flex-row justify-center items-center w-100 bg-green">
        <div class="w-20">
          &nbsp;
        </div>
         <div class="pa3 w-50">
           <i class="fa fa-paper-plane fa-3x"></i>
           <h1 class="mb0">Let's grow our community</h1>
           <p class="mb0">Invite a fellow planner</p>
        </div>
        <div class="flex flex-column w-50">
          <input class="w-50 pa2 mt2" type="text" placeholder="Their email">
          <input class="w-50 pa2 mt2" type="text" placeholder="Their name">
          <input class="w-50 pa2 mt2 mb2" type="text" placeholder="Your name">
        </div>
    </div>

    <div class="fl w-100 bg-black near-white pb5 pt5 ph5">
      <div class="fl w-50">
        <h1>Industry News</h1>
        <h4 class="pv1"><i class="fa fa-link"></i> How to Attract Social Ringleaders to Your Faith-Based Events</h4>
        <h4 class="pv1"><i class="fa fa-link"></i> 10 Irresistible Pictures from IMEX Frankfurt</h4>
        <h4 class="pv1"><i class="fa fa-link"></i> Infographic: Fun with GDPR</h4>
        <h4 class="pv1"><i class="fa fa-link"></i> New DMC network launches at IMEX</h4>
        <h4 class="pv1"><i class="fa fa-link"></i> New DMC network launches at IMEX</h4>
        <h4 class="pv1"><i class="fa fa-link"></i> New DMC network launches at IMEX</h4>
      </div>
      <div class="fl w-50">
        <h1>Reviews</h1>
        <h3 class="b green">"Our high-level guest speaker (Joe Biden) had access to the ballroom from a secret stairwell from the back of the hotel! Secret Service was very familiar with the property. This place is built for VIPs!"</h3>
        <div class="fl w-100">
          <h3 class="gold mt3"><i class="fa fa-map-marker"></i> Hyatt Regency Washington</h3>
          <p class="mt0 mb0 f6">by JLC259 on November 2017</p>
          <p class="mt0 f6">Association: 600 attendees</p>
        </div>
      </div>
    </div>

    <div class="fl w-100 pa3 white" style="background: #181825 !important">
      <div class="fl w-30 gold">
        <h1><i class="fa fa-arrow-circle-up"></i> Most popular</h1>
        <v-card class="w-80 mb4">
          <v-card-media
            class="white white--text elevation-10"
            height="200px"
            src="/demo-placeholder-lasvegas.png"
          >
            <v-container fill-height fluid style="background: rgba(0, 0, 0, 0.25)">
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline fw4">Las Vegas</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
        </v-card>
        <v-card class="w-80 mb4">
          <v-card-media
            class="white white--text elevation-10"
            height="200px"
            src="/demo-placeholder-dc.png"
          >
            <v-container fill-height fluid style="background: rgba(0, 0, 0, 0.25)">
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline fw4">Washington DC</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
        </v-card>
        
      <v-card class="w-80 mb4">
          <v-card-media
            class="white white--text elevation-10"
            height="200px"
            src="/demo-placeholder-oakland.png"
          >
            <v-container fill-height fluid style="background: rgba(0, 0, 0, 0.25)">
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline fw4">Las Vegas</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
        </v-card>
      </div>

      <div class="fl w-40 green">
        <h1><i class="fa fa-fire"></i> Hot openings</h1>
        <v-card class="mb3">
        <v-card-media
          src="/demo-placeholder-hotel.png"
          height="175px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">Ace Hotel</div>
            <span class="grey--text">New Orleans, LA</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13828.34928904466!2d-90.072243!3d29.9481668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x526bd0fd39d09879!2sAce+Hotel+New+Orleans!5e0!3m2!1sen!2sus!4v1529529506576" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen v-show="show"></iframe>
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
        <v-card  class="mb3">
        <v-card-media
          src="/demo-placeholder-hotel.png"
          height="175px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">Ace Hotel</div>
            <span class="grey--text">New Orleans, LA</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13828.34928904466!2d-90.072243!3d29.9481668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x526bd0fd39d09879!2sAce+Hotel+New+Orleans!5e0!3m2!1sen!2sus!4v1529529506576" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen v-show="show"></iframe>
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
      </div>

      <div class="w-30 ph3 fl light-red">
        <h1><i class="fa fa-question-circle"></i> Polls</h1>
        <v-container fluid px-0 >
        <h3>What type of planner are you?</h3>
            <v-radio-group v-model="radioGroup">
              <v-radio
                dark
                v-for="n in 3"
                :key="n"
                :label="`Over ${n}00`"
                :value="n"
              ></v-radio>
            </v-radio-group>
             <v-btn color="warning" light>Submit</v-btn>
          </v-container>
        <v-container fluid px-0 >
        <h3>How many events do you book per year?</h3>
            <v-radio-group v-model="radioGroup">
              <v-radio
                dark
                v-for="n in 3"
                :key="n"
                :label="`Over ${n}00`"
                :value="n"
              ></v-radio>
            </v-radio-group>
             <v-btn color="warning" light>Submit</v-btn>
          </v-container> 
      </div>
    </div>



    <div class="fl w-100 pa3">
      <h1 class="black">Need Dates</h1>

      <div class="flex flex-row flex-wrap w-100 bg-black-10 bb b--black shadow-2">
        <div class="flex justify-between w-100 pa3 white" style="background: #484977">
          <span class="b">Miami, FL</span>
          <span class="b green">NOBU HOTEL</span>
        </div>
      </div>

      <div class="flex flex-row flex-wrap w-100 bg-black-10 bb b--black shadow-2">
        <div class="flex justify-between w-100 pa3 white" style="background: #484977">
          <span class="b">Miami, FL</span>
          <span class="b green">NOBU HOTEL</span>
        </div>
      </div>

      <div class="flex flex-row flex-wrap w-100 bg-black-10 bb b--black shadow-2">
        <div class="flex justify-between w-100 pa3 white" style="background: #484977">
          <span class="b">Miami, FL</span>
          <span class="b green">NOBU HOTEL</span>
        </div>
      </div>

      <div class="flex flex-row flex-wrap w-100 bg-black-10 bb b--black shadow-2">
        <div class="flex justify-between w-100 pa3 white" style="background: #484977">
          <span class="b">Miami, FL</span>
          <span class="b green">NOBU HOTEL</span>
        </div>
      </div>

          

    </div>
    
<div class="fl w-100 pa5 near-black">
      <div class="fr w-50">
        <h1>About us</h1>
        <p>We created Meeting Glue out of necessity.</p>
        <p class="measure">We are a planner only marketplace for the conference and event industry. Meeting Glue provides easy-to-access resources for the research and negotiation phases of planning an event. Our online community of planners actively provide insider tips from their experiences with suppliers. This creates a unique environment for group business research and engagement.</p>
        <p class="b mt3 mb4">Imagine an RFP distribution system that’s fun...</p>
      </div>
      <div class="fl w-50 bg-white pa4 br3">
        <div class="flex flex-row flex-wrap items-center bg-white h5 justify-center">
          <img src="/logo-hyatt.jpg" height="100" width="auto" alt="">
          <img src="/logo-mariott.jpg" height="100" width="auto" alt="">
          <img src="/logo-hilton.jpg" height="100" width="auto" alt="">
          <img src="/logo-ihg.jpg" height="100" width="auto" alt="">
          <img src="/logo-caesars.jpg" height="100" width="auto" alt="">
          <img src="/logo-mgm.jpg" height="100" width="auto" alt="">
        </div>
      </div>
    </div>
    
    <the-footer></the-footer>
  </div>
</template>

<script>
  import TheNavigationBar from '~/components/TheNavigationBar'
  import TheFooter from '~/components/TheFooter'

  export default {
     data() {
        return {
          activePanel: 1,
          checkbox: true,
          radioGroup: 1,
          switch1: true,
          show: false
        }
      },
    methods: {
      comingSoonMessage () {
        return this.$toast.show('We are adding more locations. Check back soon!')
      },
    },
    components: {
      TheNavigationBar, TheFooter
    } 
}
</script>


<style scoped>
  #hero {
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/demo-hero-index.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 500px;
  }
  input {
    background: black;
    font: white;
    font-weight: bold;
    text-align: center;
    border-radius: 20px;
    border: solid black 1px;
  }
</style>
