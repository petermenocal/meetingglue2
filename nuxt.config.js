import bodyParser from "body-parser"
import session from "express-session"

export default {
  head: {
    title: "Auth Routes",
    script: [{ src: "https://unpkg.com/vuetify/dist/vuetify.js" }],
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"
      },
      { hid: "description", content: "Auth Routes example" }
    ]
  },

  modules: ["@nuxtjs/toast", "nuxt-material-design-icons"],
  plugins: ["~/plugins/vuetify", "~/plugins/gmap"],
  toast: {
    position: "top-center",
    duration: "5000",
    action: {
      text: "OK",
      onClick: (e, toastObject) => {
        toastObject.goAway(0)
      }
    }
  },
  // options: {
  //   mode: 'spa'
  // },

  serverMiddleware: [
    bodyParser.json(),
    session({
      secret: "supercalifragilisticexpialidocious",
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 24 * 60 * 60 * 1000 } // Users are to login once every 24 hours.
    }),
    "~/api"
  ],
  build: {
    extend(config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.devtool = "eval-source-map"
      }
      if (!isClient) {
        // This instructs Webpack to include `vue2-google-maps`'s Vue files
        // for server-side rendering
        config.externals.splice(0, 0, function(context, request, callback) {
          if (/^vue2-google-maps($|\/)/.test(request)) {
            callback(null, false)
          } else {
            callback()
          }
        })
      }
    }
  },
  css: [
    "~/assets/css/main.css",
    "tachyons",
    "~/assets/css/font-awesome.min.css"
  ]
}
