const router = require('express').Router()

const {getUsers, getUsersId ,putUsers, postUsers,deleteUsers} = require('../controllers/users.controller')

router.get('/', getUsers)
router.get('/:id',getUsersId)
router.post('/post', postUsers)
router.put('/:id',putUsers )
router.delete('/:id',deleteUsers)

module.exports = router