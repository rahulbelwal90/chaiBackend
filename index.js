require('dotenv').config

const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World by Rahul')
})

app.get('/coder', (req,res) => {
    res.send('Hello Coder')
})

app.get('/login', (req,res) => {
    res.send('<h1>Hello, Please Login</h1>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listing on port ${port}`);  
})