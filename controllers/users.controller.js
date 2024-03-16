const { getAllU, getIdU, postColU,updateU,removeU,  } = require('../models/users.model')



async function getUsers(req,res){
    try {
        const movies = await getAllU()
        res.json({data: movies.rows})
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

async function getUsersId(req,res){
    const { id } = req.params
   
    try {
        const movie = await getIdU(id)
        if (!movie) {
            res.status(404).json({ message: 'users tidak ditemukan' });
            return;
          }
        res.json({data: movie})
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}


async function postUsers(req,res){
    const {title,genres, year} = req.body
    try {
        const movies = await postColU(email,gender, password,role)
        res.json(movies.rows)
    } catch (error) {
        throw error
    }
}


async function putUsers(req,res){
    const { id } = req.params
    const {email,gender, password,role} = req.body
   
    try {
        const movie = await updateU(id, email,gender, password,role)
        if (!movie){
            res.status(404).json({message: 'film tidak di temukan'})
            return
        }
        res.json({data: movie})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


async function deleteUsers(req,res){
    const { id } = req.params
    
    try {
        const movie = await removeU(id)
        if(!movie){
            res.status(400).json({message: 'film tidak di temukan'})
            return
        }
        res.json({message: 'film berhasil di hapus'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
    }


module.exports = {getUsers, getUsersId ,putUsers, postUsers,deleteUsers}