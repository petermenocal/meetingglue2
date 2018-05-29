<template>
  <div class="container w-100">
    <the-navigation-bar></the-navigation-bar> 
    <!-- <h1>Please login to see the secret content</h1>
    <form v-if="!$store.state.authUser" @submit.prevent="login">
      <p class="error" v-if="formError">{{ formError }}</p>
      <p><i>To login, use <b>demo</b> as username and <b>demo</b> as password.</i></p>
      <p>Username: <input type="text" v-model="formUsername" name="username" /></p>
      <p>Password: <input type="password" v-model="formPassword" name="password" /></p>
      <button type="submit">Login</button>
    </form>
    <div v-else>
      Hello {{ $store.state.authUser.username }}!
      <pre>I am the secret content, I am shown only when the use is connected.</pre>
      <p><i>You can also refresh this page, you'll still be connected!</i></p>
      <button @click="logout">Logout</button>
    </div>
    <p><nuxt-link to="/secret">Super secret page</nuxt-link></p> -->
    <div class="flex flex-column center mw6" v-if="formModeLogin">
      <form v-if="!$store.state.authUser" @submit.prevent="login" class="mt2">
        <p class="error" v-if="formError">{{ formError }}</p>
        <h2><i>Login to your account</i></h2>
        <label class="db mb3">
          Username
          <input class="w-100 f4 w-100 pa2 bg-black white b--dark-gray ba br4 bw1 h3 tc b mb2" type="text" v-model="formUsername" name="username" />
        </label>
        <label class="db mb3">
          Password
          <input class="w-100 f4 w-100 pa2 bg-black white b--dark-gray ba br4 bw1 h3 tc b mb2" type="password" v-model="formPassword" name="password" />
        </label>
          <button class="dim pointer white b bg-blue ma1 b--dark-gray ba br4 bw1 pa3 f6 w-100" type="submit">Login</button>
      </form>
      <div class="mt4 fl w-100 tc">
        <p class="white dim pointer link" @click="formModeChange">Create an account</p>
      </div>
    </div>
  
    <div class="flex flex-column center mw6" v-if="!formModeLogin">
      <form v-if="!$store.state.authUser" @submit.prevent="register" class="mt2">
        <p class="error" v-if="formError">{{ formError }}</p>
        <h2><i>Create a new account</i></h2>
        <label class="db mb3">
          Username
          <input class="w-100 f4 w-100 pa2 bg-black white b--dark-gray ba br4 bw1 h3 tc b mb2" type="text" v-model="formUsername" name="username" />
        </label>
        <label class="db mb3">
          Password
          <input class="w-100 f4 w-100 pa2 bg-black white b--dark-gray ba br4 bw1 h3 tc b mb2" type="password" v-model="formPassword" name="password" />
        </label>
        <label class="db mb3">
          Password (repeat)
          <input class="w-100 f4 w-100 pa2 bg-black white b--dark-gray ba br4 bw1 h3 tc b mb2" type="password" v-model="formPasswordRepeat" name="passwordRepeat" />
        </label>
          <button class="dim pointer white b bg-blue ma1 b--dark-gray ba br4 bw1 pa3 f6 w-100" type="submit">Register</button>
      </form>
      <div class="mt4 fl w-100 tc">
        <p class="white dim pointer link" @click="formModeChange">Already have an account? Log in.</p>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavigationBar from '~/components/TheNavigationBar'

export default {
  fetch ({ store, redirect }) {
    if (store.state.authUser) {
      return redirect('/dashboard')
    }
  },
  data() {
    return {
      formError: null,
      formUsername: '',
      formPassword: '',
      formPasswordRepeat: '',
      formModeLogin: false
    }
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
        this.$nuxt.$router.replace({ path: '/dashboard' })
      } catch (e) {
        this.formError = e.message
      }
    },
    async register() {
      this.formError = null
      if(!this.formUsername || this.formUsername.length < 1) {
        this.formError = 'Please enter a username.'
        throw this.formError
      }
      if(this.formPassword.length < 5 || this.formPasswordRepeat.length < 5) {
        this.formError = 'Password must be at least 5 characters long'
        throw this.formError
      }
      if(this.formPasswordRepeat !== this.formPassword) {
        this.formError = 'Passwords must match.'
        throw this.formError
      }
      try {
        await this.$store.dispatch('register', {
          username: this.formUsername,
          password: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
        this.$nuxt.$router.replace({ path: '/dashboard' })
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout')
        this.$nuxt.$router.replace({ path: '/' })
      } catch (e) {
        this.formError = e.message
      }
    },
    formModeChange () {
      this.formError = null
      return this.formModeLogin = !this.formModeLogin
    }
  },
  components: {
    TheNavigationBar
  }
}
</script>