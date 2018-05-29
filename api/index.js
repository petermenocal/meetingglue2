import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import phone from 'phone'
import randomstring from 'randomstring'
import twilio from 'twilio'

// Data schemas and models
const userSchema = mongoose.Schema({
  username: String,
  password: String,
  created: Date
})
const hotelSchema = mongoose.Schema({
 
})
const cvbSchema = mongoose.Schema({
 
})

let User = mongoose.model('User', userSchema)
let Hotels = mongoose.model('Hotel', hotelSchema)
let Cvbs = mongoose.model('Cvb', cvbSchema)

const smsVerificationSchema = mongoose.Schema({
  username: String,
  smsCode: Number,
  created: Date
})

let SMSVerification = mongoose.model('SMSVerification', smsVerificationSchema)

// Express Router
const router = express.Router()
var app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// Twilio
const accountSid = 'AC73ab3e54f543da87f693f2616728e58b'; // Your Account SID from www.twilio.com/console
const authToken = 'ec552696e0fcd6ed3e3a06084801fb25';   // Your Auth Token from www.twilio.com/console
const client = new twilio(accountSid, authToken);

const sendSMSCode = (recipientPhoneNumber, smsCode) => {
  let recipientPhoneNumberSanitized = telephone(recipientPhoneNumber, 'USA')
  if(!recipientPhoneNumberSanitized) {
    throw new Error('Invalid phone number.')
  }
  client.messages.create({
      body: 'Your Exhale Affiliates verification code is: ' + smsCode,
      to: recipientPhoneNumberSanitized,  // Text this number
      from: '+17027654166' // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
}

// API Endpoints
router.post('/register', (req, res) => {
  mongoose.connect('mongodb://localhost/affiliates', (err) => {
    if (err) throw err
    const { username, password } = req.body
    User.findOne({ 'username': username }, (err, person) => {
      if(err) throw err
      if (person) {
        res.status(409).json({ message: 'Username in use by another account.' })
      } else {
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) throw err
          let newAffiliateUser = new User({
            username: username,
            password: hash,
            created: new Date()
          })
          newAffiliateUser.save((err) => {
            if (err) throw err
          })
          req.session.authUser = { username: username }
          return res.json({ username: username })
        })
      }
    })
  })
})

router.post('/login', (req, res) => {
  mongoose.connect('mongodb://localhost/affiliates', function (err) {
    if (err) { throw err } 
    const { username, password } = req.body 
    User.findOne({ 'username': username }, (err, person) => {
      if (err) { throw err }
      if (person) {
        bcrypt.compare(password, person.password, (err, match) => {
          if (err) { throw err }
          if (match) {
            req.session.authUser = { username: person.username }
            return res.json({ username: person.username })
          } else {
            res.status(401).json({ message: 'Bad credentials' })
          }
        })
      } else {
        res.status(401).json({ message: 'No account found' })
      }
    })
  })
})

router.post('/logout', (req, res) => {
  delete req.session.authUser
  res.json({ ok: true })
})

router.post('/request-sms-verification', (req, res) => {
  const { username, telephone } = req.body 
  let xxx = phone(telephone, 'USA')
  if (xxx) { 
    let smsCode = 
    randomstring.generate({
      length: 5,
      charset: 'numeric'
    })
    mongoose.connect('mongodb://localhost/sms-verification-codes', (err) => {
      if (err) { throw err }
      let newSMSVerificationCode = new SMSVerification({
        username: username,
        smsCode: smsCode,
        created: new Date()
      })
      newSMSVerificationCode.save((err) => {
        const { telephone } = req.body 
        if (err) { throw err }
        sendSMSCode(telephone, smsCode)
        res.status(200).json({ message: smsCode }) 
      })
    })
   } else {
    res.status(400).json({ message: 'Invalid US telephone number.' })
  }
})

router.post('/sms-verification', (req, res) => {
  mongoose.connect('mongodb://localhost/sms-verification-codes', (err) => {
    if (err) { throw err }
    const { username, smsCode } = req.body 
    if (!username || !smsCode) {
      return res.status(400).json({ message: 'Missing required parameters.' })  
    }
    SMSVerification.findOne({ 'username': username }, (err, person) => {
      const { smsCode } = req.body 
      if (!smsCode) { 
        return res.status(400).json({ message: 'No sms code was supplied in request.' }) 
      }
      if (!person) { 
        return res.status(400).json({ message: 'No record found to verify against' }) 
      }
      if (smsCode == person.smsCode) { 
        res.status(200).json({ message: 'SMS code verified' }) 
      } else {
        res.status(400).json({ message: 'SMS code NOT verified' }) 
      }
    })
  })
})

router.post('/hotels', (req, res) => {
  mongoose.connect('mongodb://localhost/hotels', function (err) {
    if (err) { throw err } 
    Hotels.find({}, (err, hotels) => {
      if (err) { throw err }
      if (hotels) {
        res.status(200).json(hotels)
      } else {
        res.status(401).json({ message: 'No hotels found' })
      }
    })
  })
})



router.post('/cvbProfileDetails/', (req, res) => {
  mongoose.connect('mongodb://localhost/cvbs', function (err) {
    if (err) { throw err } 
    Cvbs.findOne({ _id: "5b07194bf67e050fd41228d5"}, (err, result) => {
      if (err) { throw err }
      if (result) {
        res.status(200).json(result)
      } else {
        res.status(401).json({ message: 'No results found' })
      }
    })
  })
})


export default {
  path: '/api',
  handler: router
}