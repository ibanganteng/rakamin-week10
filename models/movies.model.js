
const pool = require('../config/db')


async function getAll() {
  try {
      
    const result = await pool.query(
    `SELECT * FROM  movies`
     )
     return result
  } catch (error) {
    throw error(`gagal mengambil data: ${error.message}`)
  }
  
}

async function getId(id) {
  
    try {
        const query = `SELECT * FROM movies WHERE id = $1`
        const result = await pool.query(query, [id])
        console.log(result);
        return result.rows[0]
    } catch (error) {
      throw new Error(`Gagal mengambil data berdasarkan ID: ${error.message}`)
    }
    
  }

  async function postCol(title,genres, year){
try {
  const query = `INSERT INTO movies (title,genres,year) VALUES ($1, $2, $3) RETURNING*`
  const values = [title,genres, year]
  const result = await pool.query( query,values)
  return result
} catch (error) {
  throw error
}
  }

  async function update(id, title,genres,year){
    try {
      const query = `UPDATE movies SET title = $1, genres = $2, year = $3 WHERE id = $4 RETURNING *`
      const  values = [title,genres,year,id]
      const result = await pool.query(query,values)
    } catch (error) {
      throw error
    }
  }

  async function remove(id) {
try {
  const query = `DELETE FROM movies WHERE id = $1 RETURNING *`
  const result = await pool.query(query, [id])
  return result.rows[0]


} catch (error) {
  throw error
}
  }


  async function upload(id,file){
    console.log(file);
    try {
      const result = await pool.query(
        `UPDATE movies SET photo = $1 WHERE id = $2`,[file,id]
      )
      return result
    } catch (error) {
      throw error
    }
  }




pool.connect((err,res)=>{
    console.log(err)
    console.log('connected')
})

module.exports = {getAll, getId, postCol,update,remove, upload}


