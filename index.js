const express = require('express')
const app = express()

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

app.get('/foo', function (req, res){
    res.send('Hello, Youtube!')
});