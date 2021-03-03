const express = require('express')
const router = express.Router();

const storage = require('../helpers/firebase')

router.post('/', async (req,res)=>{
    console.log('req body', req.body)
    let text= "Good Morning"
    let storageData = await storage.addDetails(text);
})

module.exports = router;