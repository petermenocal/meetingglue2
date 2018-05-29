<template>
  <div class="container">
    <div v-if="error.statusCode === 404">
      <h1>
        <i class="fa fa-question-circle fa-4x fl w-100 mb3"></i>
        Page not found
      </h1>
      <div class="link white dim pointer flex justify-center items-center" @click="backToPreviousPage">
        <i class="fa fa-arrow-left mr2"></i>
        Go back
      </div>
    </div>
    <div v-if="error.statusCode === 403">
      <h1>
        <i class="fa fa-exclamation-circle fa-4x fl w-100 mb3"></i>
        You must login to do this.
      </h1>
      <nuxt-link to="/" class="link white dim pointer flex justify-center items-center">
        <i class="fa fa-arrow-left mr2"></i>
        Go to login page
      </nuxt-link>
    </div>
    <div class="logo">
      <a href="https://meetingglue.com" target="_blank" rel="noopener" class="link gray dim pointer">Meeting Glue</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  methods: {
    backToPreviousPage () {
      return this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.container {
  font-family: sans-serif;
  padding-top: 10%;
  text-align: center;
}
h1 {
  font-size: 20px;
}
.logo {
  position: fixed;
  left: 12px;
  bottom: 12px;
}
</style>