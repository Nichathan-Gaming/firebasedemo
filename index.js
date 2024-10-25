const express = require('express')
const cors = require('cors')
const path = require('path')
const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json({limit:'50mb'}));

app.get('/', (req, res)=>{
    res.send('Hello World')
})

const http = require('http');

const server = http.createServer(app);

server.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}.`);
});