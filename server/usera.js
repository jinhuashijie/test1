const express = require('express')
const router = express.Router()

router.get('/n', function (req, res) {
 res.send('hello,usera.js ' + req.params.name)
})

module.exports = router