const pool = require('../config/db')

async function getAllU() {
    try {
        
      const result = await pool.query(
      `SELECT * FROM  users`
       )
       return result
    } catch (error) {
      throw error(`gagal mengambil data: ${error.message}`)
    }
    
  }

  async function getIdU(id) {
  
    try {
        const query = `SELECT * FROM users WHERE id = $1`
        const result = await pool.query(query, [id])
        console.log(result);
        return result.rows[0]
    } catch (error) {
      throw new Error(`Gagal mengambil data berdasarkan ID: ${error.message}`)
    }
    
  }

  async function postColU(email,gender, password,role){
    try {
      const query = `INSERT INTO users (email,gender,password, role) VALUES ($1, $2, $3, $4) RETURNING*`
      const values = [email,gender, password,role]
      const result = await pool.query( query,values)
      return result
    } catch (error) {
      throw error
    }
      }


      async function updateU(id, email,gender, password,role){
        try {
          const query = `UPDATE users SET email = $1, gender = $2, password = $3, role = $4 WHERE id = $5 RETURNING *`
          const  values = [email,gender, password,role,id]
          const result = await pool.query(query,values)
        } catch (error) {
          throw error
        }
      }


      async function removeU(id) {
        try {
          const query = `DELETE FROM users WHERE id = $1 RETURNING *`
          const result = await pool.query(query, [id])
          return result.rows[0]
        
        
        } catch (error) {
          throw error
        }
          }

  pool.connect((err,res)=>{
    console.log(err)
    console.log('connected')
})

module.exports = {getAllU, getIdU, postColU,updateU,removeU, }
  