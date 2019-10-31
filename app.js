const express = require('express');

const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// middleware
app.use(express.static('./public'));

app.get('/', function(request, response){

    response.render('about.ejs');

});

app.get('/contact', function(request, response){

    response.render('contact.ejs');

});

app.get('/project', function(request, response){

    response.render('project.ejs');

});



//
app.listen(3000, function () {
        console.log('server is running on port 3000')
});