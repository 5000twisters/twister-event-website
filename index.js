const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('Server is listening on port ${port}');
});

app.get('/', (req, res) => {
    res.send('Hello, world!');
});
const script = require('./script.js');
// code to start the web server
