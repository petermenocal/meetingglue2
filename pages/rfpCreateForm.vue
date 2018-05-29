<template>
  <div class="container w-100">
    <the-navigation-bar></the-navigation-bar> 
    <div class="flex flex-column items-center justify-center w-100 bg-title white tc pa4">
      <i class="fa fa-magic fa-3x"></i>
      <span class="f3 fw6 mb0">Tell us what you need</span>
      <p class="measure center lh-copy">Let us know a few particulars about your event. We'll automatically setup your RFP with some default data to get you started.</p>
    </div>

    <div class="fl w-100 pa3">
      <div class="fl w-50-ns w-100 ph2">
        <div class="f4 fw6 mb3"><i class="fa fa-clock-o"></i> Date requirements</div>
        <h4>I have...</h4>
        <div class="flex pointer dim items-center b ph3 w-100 h2 br2 shadow-3 space-picker mb3" @click="adjustDateRequirementPanel('dateSpecific')" v-bind:class="{ 'space-picker-selected': rfp.dateRequirements.dateSpecific }">
          <span><span class="underline i">specific dates</span> for my program.</span>
        </div>
        <div class="flex pointer dim items-center b ph3 w-100 h2 br2 shadow-3 space-picker mb3" @click="adjustDateRequirementPanel('dateRange')" v-bind:class="{ 'space-picker-selected': rfp.dateRequirements.dateRange }">
          <span>a <span class="underline i">date range</span> for my program.</span>
        </div>
        <div class="flex pointer dim items-center b ph3 w-100 h2 br2 shadow-3 space-picker mb3" @click="adjustDateRequirementPanel('datePattern')" v-bind:class="{ 'space-picker-selected': rfp.dateRequirements.datePattern }">
          <span>a <span class="underline i">preferred pattern with a date range</span> for my program.</span>
        </div>
        <div class="flex pointer dim items-center b ph3 w-100 h2 br2 shadow-3 space-picker mb3" @click="adjustDateRequirementPanel('dateManualEntry')" v-bind:class="{ 'space-picker-selected': rfp.dateRequirements.dateManualEntry }">
          <span>a <span class="underline i">typed out </span> date needs for my program.</span>
        </div>
      </div>
      
      <div class="fl w-50-ns w-100 ph2">
        <div class="f4 fw6 mb3"><i class="fa fa-bed"></i> Accomodations &amp; Space</div>
        <h4>My attendees require...</h4>
        <div class="flex pointer dim items-center b ph3 w-100 h2 br2 shadow-3 space-picker mb3" @click="adjustSpaceRequirementPanel('both')" v-bind:class="{ 'space-picker-selected': rfp.spaceRequirements.both }">
          <span>sleeping rooms <span class="underline i">and</span> meeting space</span>
        </div>
        <div class="flex pointer dim items-center b ph3 w-100 h2 br2 shadow-3 space-picker mb3" @click="adjustSpaceRequirementPanel('sleepingRooms')" v-bind:class="{ 'space-picker-selected': rfp.spaceRequirements.sleepingRoomsOnly }">
          <span>sleeping rooms <span class="underline i">only</span></span>
        </div>
        <div class="flex pointer dim items-center b ph3 w-100 h2 br2 shadow-3 space-picker mb3"  @click="adjustSpaceRequirementPanel('meetingRooms')" v-bind:class="{ 'space-picker-selected': rfp.spaceRequirements.meetingRoomsOnly }">
          <span>meeting space <span class="underline i">only</span></span>
        </div>  
      </div>
      
      <div class="fl mt3 w-100 ph2">
        <div class="f4 fw6 mb3"><i class="fa fa-bed"></i> Starter templates</div>
        <span class="fw6 b f6"><i class="fa fa-lightbulb-o"></i> Choose a pre-configured template or one of your own custom configured templates.</span>
        <div class="mw6 bg-white-10 pa3 br3 mt3">No starter templates defined yet.</div>
      </div>

      <div class="fr mt3 bg-gold purple br3 flex pa3 items-center flex-row h2 shadow-2 dim pointer">
        <div class="f4 fw6"><i class="fa fa-star"></i> Launch RFP Editor</div>
      </div>

      
      
     
    </div>
  </div>
</template>

<script>
import TheNavigationBar from '~/components/TheNavigationBar'

export default {
  fetch ({ store, redirect }) {
    if (store.state.authUser) {
    }
  },
  data() {
    return {
      showRFPTextEditor: false,
      rfp: {
        dateRequirements: {
          dateSpecific: false,
          dateRate: false,
          datePattern: false
        },
        spaceRequirements: {
          sleepingRoomsOnly: false,
          meetingRoomsOnly: false,
          both: false
        }
      }
    }
  },
  methods: {
    adjustSpaceRequirementPanel: function(selection) {
      if(selection == 'both') {
        this.rfp.spaceRequirements.both = true
        this.rfp.spaceRequirements.sleepingRoomsOnly = false
        this.rfp.spaceRequirements.meetingRoomsOnly = false
      }
      if(selection == 'sleepingRooms') {
        this.rfp.spaceRequirements.sleepingRoomsOnly = true
        this.rfp.spaceRequirements.meetingRoomsOnly = false
        this.rfp.spaceRequirements.both = false
      }
      if(selection == 'meetingRooms') {
        this.rfp.spaceRequirements.sleepingRoomsOnly = false
        this.rfp.spaceRequirements.both = false
        this.rfp.spaceRequirements.meetingRoomsOnly = true
      }
    },
    adjustDateRequirementPanel: function(selection) {
      if(selection == 'dateSpecific') {
        this.rfp.dateRequirements.dateSpecific = true 
        this.rfp.dateRequirements.dateRange = false 
        this.rfp.dateRequirements.datePattern = false 
        this.rfp.dateRequirements.dateManualEntry = false
      }
      if(selection == 'dateRange') {
        this.rfp.dateRequirements.dateSpecific = false 
        this.rfp.dateRequirements.dateRange = true 
        this.rfp.dateRequirements.datePattern = false 
        this.rfp.dateRequirements.dateManualEntry = false
      }
      if(selection == 'datePattern') {
        this.rfp.dateRequirements.dateSpecific = false 
        this.rfp.dateRequirements.dateRange = false 
        this.rfp.dateRequirements.datePattern = true
        this.rfp.dateRequirements.dateManualEntry = false
      }
      if (selection == 'dateManualEntry') {
        this.rfp.dateRequirements.dateManualEntry = true 
        this.rfp.dateRequirements.dateSpecific = false 
        this.rfp.dateRequirements.dateRange = false 
        this.rfp.dateRequirements.datePattern = false
      }
    },
  },
  components: {
    TheNavigationBar
  }
}
</script>
<style scoped>
.space-picker { 
  background: rgb(43,106,246);
  transition: all 0.25s ease-out;
}
.space-picker-selected { 
  background: rgb(41,155,95) !important;
  transition: all 0.25s ease-in;
}

</style>