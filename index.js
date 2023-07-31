const express = require('express')
const app = express()
const port = 2000

app.get('/:id',(req,res)=>{
    const id = req.params.id
    res.send(`สวัสดี ${id}`)
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})