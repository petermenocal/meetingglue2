<template>
  <div class="container">
    <admin-nav-bar></admin-nav-bar> 
  </div>  
</template>

<script>

import AdminNavBar from '~/components/AdminNavBar'

export default {
  name: 'admin-dashboard',
  data: function() {

  },
  components: {
    AdminNavBar
  }
}
</script>
