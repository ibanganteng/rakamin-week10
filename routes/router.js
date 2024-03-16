const express = require('express')
const router = express.Router()
const movieRoute = require('../routes/movieRoute')
const userRoute = require('../routes/usersRoute')


router.use('/movies',movieRoute)
router.use('/users',userRoute)







module.exports = router