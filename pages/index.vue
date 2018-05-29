<template>
  <div class="container w-100">
    <the-navigation-bar></the-navigation-bar>
    <div id="list-container" class="fl w-100">
      <div class="flex flex-column items-center justify-center w-100 tc h5" id="hero">
        <h1 class="mb0">Welcome to RFP bliss.</h1>
        <p class="mb0">Built by meeting planners for meeting planners.</p>
      </div>
    </div>
    <div class="fl w-100 bg-white pa3 near-black">
      <h1>Promotions</h1>
      <div class="fl w-100">
          <div class="flex flex-row flex-wrap w-100 bg-black-10 bb b--black shadow-2" @click="activePanel = 1">
            <div class="flex justify-between w-100 pa3 white" style="background: #484977">
              <span class="b">Miami, FL</span>
              <span class="b green">NOBU HOTEL</span>
              <span class="b">Expires: <i class="fa fa-clock-o"></i> 12/30/18</span>
            </div>
            <div class="flex flex-row flex-wrap w-100 pa3" v-show="activePanel == 1">
              <div class="flex flex-row flex-wrap w-50">
                <div class="flex"><p class="mr4">Sign by: 10/30/2018</p></div>
                <div class="flex"><p class="mr4">Hold by: 10/30/2018</p></div>
                <div class="flex flex-column">
                 <p class="b">(100 Rooms or more on peak)</p>
                  <p class="b green">
                    <small>Promo code</small>
                    <i class="fa fa-tag"></i> B18HZ9A</p>
                </div>
              </div>
              <div class="flex flex-column bg-black white br4 pa3 w-50">
                <p>Recieve</p>
                <h4>50% allowable attrition
                  One complimentary coffee break
                  Complimentary high-speed internet access in meeting space
                </h4>
              </div>
            </div>
          </div>

          <div class="flex flex-row flex-wrap w-100 bg-black-10 bb b--black shadow-2"  @click="activePanel = 2">
            <div class="flex justify-between w-100 pa3 white" style="background: #484977">
              <span class="b">Miami, FL</span>
              <span class="b green">NOBU HOTEL</span>
              <span class="b">Expires: <i class="fa fa-clock-o"></i> 12/30/18</span>
            </div>
            <div class="flex flex-row flex-wrap w-100 pa3" v-show="activePanel == 2">
              <div class="flex flex-row flex-wrap w-50">
                <div class="flex"><p class="mr4">Sign by: 10/30/2018</p></div>
                <div class="flex"><p class="mr4">Hold by: 10/30/2018</p></div>
                <div class="flex flex-column">
                 <p class="b">(100 Rooms or more on peak)</p>
                  <p class="b green">
                    <small>Promo code</small>
                    <i class="fa fa-tag"></i> B18HZ9A</p>
                </div>
              </div>
              <div class="flex flex-column bg-black white br4 pa3 w-50">
                <p>Recieve</p>
                <h4>50% allowable attrition
                  One complimentary coffee break
                  Complimentary high-speed internet access in meeting space
                </h4>
              </div>
            </div>
          </div>


          <div class="flex flex-row flex-wrap w-100 bg-black-10 bb b--black shadow-2"  @click="activePanel = 3">
            <div class="flex justify-between w-100 pa3 white" style="background: #484977">
              <span class="b">Miami, FL</span>
              <span class="b green">NOBU HOTEL</span>
              <span class="b">Expires: <i class="fa fa-clock-o"></i> 12/30/18</span>
            </div>
            <div class="flex flex-row flex-wrap w-100 pa3" v-show="activePanel == 3">
              <div class="flex flex-row flex-wrap w-50">
                <div class="flex"><p class="mr4">Sign by: 10/30/2018</p></div>
                <div class="flex"><p class="mr4">Hold by: 10/30/2018</p></div>
                <div class="flex flex-column">
                 <p class="b">(100 Rooms or more on peak)</p>
                  <p class="b green">
                    <small>Promo code</small>
                    <i class="fa fa-tag"></i> B18HZ9A</p>
                </div>
              </div>
              <div class="flex flex-column bg-black white br4 pa3 w-50">
                <p>Recieve</p>
                <h4>50% allowable attrition
                  One complimentary coffee break
                  Complimentary high-speed internet access in meeting space
                </h4>
              </div>
            </div>
          </div>


          <div class="flex flex-row flex-wrap w-100 bg-black-10 bb b--black shadow-2"  @click="activePanel = 4">
            <div class="flex justify-between w-100 pa3 white" style="background: #484977">
              <span class="b">Miami, FL</span>
              <span class="b green">NOBU HOTEL</span>
              <span class="b">Expires: <i class="fa fa-clock-o"></i> 12/30/18</span>
            </div>
            <div class="flex flex-row flex-wrap w-100 pa3" v-show="activePanel == 4">
              <div class="flex flex-row flex-wrap w-50">
                <div class="flex"><p class="mr4">Sign by: 10/30/2018</p></div>
                <div class="flex"><p class="mr4">Hold by: 10/30/2018</p></div>
                <div class="flex flex-column">
                 <p class="b">(100 Rooms or more on peak)</p>
                  <p class="b green">
                    <small>Promo code</small>
                    <i class="fa fa-tag"></i> B18HZ9A</p>
                </div>
              </div>
              <div class="flex flex-column bg-black white br4 pa3 w-50">
                <p>Recieve</p>
                <h4>50% allowable attrition
                  One complimentary coffee break
                  Complimentary high-speed internet access in meeting space
                </h4>
              </div>
            </div>
          </div>


          <div class="flex flex-row flex-wrap w-100 bg-black-10 bb b--black shadow-2" @click="activePanel = 5">
            <div class="flex justify-between w-100 pa3 white" style="background: #484977">
              <span class="b">Miami, FL</span>
              <span class="b green">NOBU HOTEL</span>
              <span class="b">Expires: <i class="fa fa-clock-o"></i> 12/30/18</span>
            </div>
            <div class="flex flex-row flex-wrap w-100 pa3" v-show="activePanel == 5">
              <div class="flex flex-row flex-wrap w-50">
                <div class="flex"><p class="mr4">Sign by: 10/30/2018</p></div>
                <div class="flex"><p class="mr4">Hold by: 10/30/2018</p></div>
                <div class="flex flex-column">
                 <p class="b">(100 Rooms or more on peak)</p>
                  <p class="b green">
                    <small>Promo code</small>
                    <i class="fa fa-tag"></i> B18HZ9A</p>
                </div>
              </div>
              <div class="flex flex-column bg-black white br4 pa3 w-50">
                <p>Recieve</p>
                <h4>50% allowable attrition
                  One complimentary coffee break
                  Complimentary high-speed internet access in meeting space
                </h4>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="fl w-100 pa3">
      <div class="fl w-50">
        <h1>About us</h1>
        <p>We created Meeting Glue out of necessity.</p>
        <p class="measure">We are a planner only marketplace for the conference and event industry. Meeting Glue provides easy-to-access resources for the research and negotiation phases of planning an event. Our online community of planners actively provide insider tips from their experiences with suppliers. This creates a unique environment for group business research and engagement.</p>
        <p class="b">Imagine an RFP distribution system that’s fun...</p>
      </div>
      <div class="fl w-50 pt3 pb3">
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
    <div class="flex flex-row justify-center items-center w-100 bg-green ">
      <div class="flex w-100 flex-row flex-wrap pa3">
        <div class="w-20 h-100 items-center justify-center flex content-center pt4"><i class="fa fa-paper-plane fa-3x"></i></div>
        <div><h1 class="mb0">Let's grow our community</h1><p class="mb0">Invite a fellow planner</p></div>
      </div>
      <div class="flex flex-row flex-wrap w-100 pa3">
        <input class="w-50 pa2" type="text" placeholder="Their email">
        <input class="w-50 pa2" type="text" placeholder="Their name">
        <input class="w-100  pa2 mt2" type="text" placeholder="Your name">
      </div>
    </div>

    <div class="fl w-100 bg-black near-white pa3">
      <div class="fl w-50">
        <h1>Industry News</h1>
        <h5><i class="fa fa-link"></i> How to Attract Social Ringleaders to Your Faith-Based Events</h5>
        <h5><i class="fa fa-link"></i> 10 Irresistible Pictures from IMEX Frankfurt</h5>
        <h5><i class="fa fa-link"></i> Infographic: Fun with GDPR</h5>
        <h5><i class="fa fa-link"></i> New DMC network launches at IMEX</h5>
        <h5><i class="fa fa-link"></i> New DMC network launches at IMEX</h5>
        <h5><i class="fa fa-link"></i> New DMC network launches at IMEX</h5>
      </div>
      <div class="fl w-50">
        <h1>Reviews</h1>
        <h3 class="b green">"Our high-level guest speaker (Joe Biden) had access to the ballroom from a secret stairwell from the back of the hotel! Secret Service was very familiar with the property. This place is built for VIPs!"</h3>
        <div class="fl w-100">
          <h3 class="gold"><i class="fa fa-map-marker"></i> Hyatt Regency Washington</h3>
          <p class="mt0 mb0 f6">by JLC259 on November 2017</p>
          <p class="mt0 f6">Association: 600 attendees</p>
        </div>
      </div>
    </div>

    <div class="fl w-100 pa3">
      <h1>Need Dates</h1>

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
    

    <div class="fl w-100 pa3 white" style="background: #181825 !important">
      <div class="fl w-third gold">
        <h1><i class="fa fa-arrow-circle-up"></i> Most popular</h1>
        <img src="/demo-placeholder-dc.png" height="100" width="auto" alt="">
        <h4 class="mt0 mb4"><i class="fa fa-map-marker"></i> Washington DC</h4>
        <img src="/demo-placeholder-oakland.png" height="100" width="auto" alt="">
        <h4 class="mt0 mb4"><i class="fa fa-map-marker"></i> Oakland</h4>
        <img src="/demo-placeholder-lasvegas.png" height="100" width="auto" alt="">
        <h4 class="mt0 mb4"><i class="fa fa-map-marker"></i> Las Vegas</h4>
      </div>


      <div class="fl w-third green">
        <h1><i class="fa fa-fire"></i> Hot openings</h1>
        <img src="/demo-placeholder-hotel.png" height="100" width="auto" alt="">
        <h4 class="mt0 mb4"><i class="fa fa-map-marker"></i> Ace Hotel &middot; New Orleans</h4>
        <img src="/demo-placeholder-hotel.png" height="100" width="auto" alt="">
        <h4 class="mt0 mb4"><i class="fa fa-map-marker"></i> Ace Hotel &middot; New Orleans</h4>
        <img src="/demo-placeholder-hotel.png" height="100" width="auto" alt="">
        <h4 class="mt0 mb4"><i class="fa fa-map-marker"></i> Ace Hotel &middot; New Orleans</h4>
      </div>

      <div class="fl w-third light-red">
        <h1><i class="fa fa-question-circle"></i> Poll</h1>
        <h3>What type of planner are you?</h3>
        <form class="mb5">
          <input class="b mt3" type="radio" name="plannerType" value="corporate" checked> Corporate<br>
          <input class="b mt3" type="radio" name="plannerType" value="freelance"> Freelance<br>
          <input class="b mt3" type="radio" name="plannerType" value="other"> Other  <br>
          <button class="mt3 bg-green pa2 w-100 ba b--green white br4">Submit</button>
        </form> 
        <h3>How many events do you book per year?</h3>
        <form>
          <input class="b mt3" type="radio" name="frequency" value="over100" checked> Over 100<br>
          <input class="b mt3" type="radio" name="frequency" value="50-100"> 50-100<br>
          <input class="b mt3" type="radio" name="frequency" value="0-50"> 0-50    <br>
          <button class="mt3 bg-green pa2 w-100 ba b--green white br4">Submit</button>
        </form> 
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
          activePanel: 1
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
