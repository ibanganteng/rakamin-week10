

const { getAll, getId, postCol,update,remove, upload  } = require('../models/movies.model')








async function getMovies(req,res){
    try {
        const movies = await getAll()
        res.json({data: movies.rows})
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

async function getMoviesId(req,res){
    const { id } = req.params
   
    try {
        const movie = await getId(id)
        if (!movie) {
            res.status(404).json({ message: 'Film tidak ditemukan' });
            return;
          }
        res.json({data: movie})
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}
async function postMovies(req,res){
    const {title,genres, year} = req.body
    try {
        const movies = await postCol(title,genres,year)
        res.json(movies.rows)
    } catch (error) {
        throw error
    }
}

async function putMovies(req,res){
    const { id } = req.params
    const {title,genres,year} = req.body

    try {
        const movie = await update(id,title,genres,year)
        if (!movie){
            res.status(404).json({message: 'film tidak di temukan'})
            return
        }
        res.json({data: movie})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

async function deleteMovies(req,res){
const { id } = req.params

try {
    const movie = await remove(id)
    if(!movie){
        res.status(400).json({message: 'film tidak di temukan'})
        return
    }
    res.json({message: 'film berhasil di hapus'})
} catch (error) {
    res.status(500).json({message: error.message})
}

}

async function uploadPhoto(req,res){
    const file = req.file
    const id = req.params.id
    try {
        const image = await upload(id,file.filename)
        res.status(200).json({data:image,name:file.filename})
    } catch (error) {
        res.status(400).send({
            status: false,
    
            data: 'no file selected'
    })
    }
}



module.exports = {getMovies, getMoviesId ,putMovies, postMovies,deleteMovies, uploadPhoto}


