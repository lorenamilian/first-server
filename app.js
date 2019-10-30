const express = require('express');

const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function(request, response){

    response.render('about.ejs');

});

//
app.listen(3000, function () {
        console.log('server is running on port 3000')
});