const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var counter = 0;

// Utility function to reverse a string
const reverse = (data) => {
    var reversed = '';
    for ( i = data.length - 1; i >= 0; i--) {
        reversed += data[i];
    }
    return reversed;
}

app.use(bodyParser.text());
app.post('/reverse', (req, res) => {
    if (req.body) {
        const reversed = reverse(req.body);
        counter += 1;
        console.log(counter);
        res.send(reversed);
    };
});
app.listen(3000, () => console.log('AutoScaleTester now listening on port 3000!'))