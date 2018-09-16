var express = require('express');  

const  rFact = (num) => {
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}
var app = express();

app.post('/spin', function (req, res) {
    rFact(10000000);
    res.send('done');
});

app.listen(8081);
console.log('App started and listening on port 8081');
