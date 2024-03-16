const router = require('express').Router()


const {getMovies, getMoviesId, postMovies,putMovies, uploadPhoto, deleteMovies} = require('../controllers/movies.controller')

const multer = require ('../middleware/multer')

router.put('/upload/:id',multer, uploadPhoto)
router.get('/', getMovies)
router.get('/:id',getMoviesId)
router.post('/post', postMovies)
router.put('/:id',putMovies )
router.delete('/:id',deleteMovies)



module.exports = router
