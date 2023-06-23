const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const port = 8000

const app = express()
let mainfolder = path.join(__dirname,"../")

app.use(bodyparser.urlencoded(
    {
        extended:true
    }
))

app.use(express.json())

app.get('/',(req,res) =>
{
    res.send('home page')
    console.log(mainfolder)

})
app.get('/customDesign',(req,res)=>
{
    res.sendFile(mainfolder+"/index.html")
})
app.listen(port,()=> {
    console.log('listening on port ${port}')
})