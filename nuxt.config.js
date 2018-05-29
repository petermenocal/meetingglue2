import bodyParser from 'body-parser'
import session from 'express-session'

export default {
  head: {
    title: 'Auth Routes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: 'Auth Routes example' }
    ]
  },

  modules: ['@nuxtjs/toast'],
  toast: {
    position: 'top-center',
    duration: '5000',
    action : {
      text : 'OK',
      onClick : (e, toastObject) => {
          toastObject.goAway(0);
      }
    },
  },
  // options: {
  //   mode: 'spa'
  // },
  
  serverMiddleware: [
    bodyParser.json(),
    session({
      secret: 'supercalifragilisticexpialidocious',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 24 * 60 * 60 * 1000 } // Users are to login once every 24 hours.
    }),
    '~/api'
  ],
  
  css: ['~/assets/css/main.css', 'tachyons', '~/assets/css/font-awesome.min.css'],
}
