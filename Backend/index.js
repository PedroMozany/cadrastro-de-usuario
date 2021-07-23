const express = require('express');
const app = express();
const bodyParser = require('body-parser')

/* 
app.use(bodyParser.urlencoded({extended:true}))

app.post('/add', (req, res) => {
    res.send(req.body)
}) */


app.listen(3001, () => {
    console.log('Backend execuntando nodemon...')
})