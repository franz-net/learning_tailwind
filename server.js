const express = require('express')
//const pg = require('pg')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
})