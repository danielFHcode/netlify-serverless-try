const express = require('express')
const app = express()
const serverless = require('serverless-http')
const router = express.Router()
router.get('/',function(req,res){
    res.send('hello you')
})
router.get('/hi',function(req,res){
    res.send('hello to you')
})
app.use('/.netlify/functions/index',router)

module.exports.handler = serverless(app)