const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, resp)=>{
    resp.status(200).json({message: 'Hello world...Success...'});
});

app.listen(port, ()=>{
    console.log('Server started and running on port 3000');
});