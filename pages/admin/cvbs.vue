<template>
  <admin-nav-bar></admin-nav-bar>
</template>

<script>
import AdminNavBar from '~/components/AdminNavBar'

export default {
  name: 'admin-cvbs',
  data: function() {
    return {
      data: []
    }
  },
  components: {
    AdminNavBar
  }
}
</script>
