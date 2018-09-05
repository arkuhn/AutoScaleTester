const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.text());

app.post('/reverse', (req, res) => {
    const reversed = req.body.split("").reverse().join("");
    res.send(reversed);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))