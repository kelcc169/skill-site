const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(layouts);

var contact = {
	name: "Kelsey Cox",
	email: "music@gmail.com",
	phone: "425-555-6596",
	fax: "Hahahahaha no",
};

var skills = [
	"JavaScript",
	"HTML 5",
	"CSS 3",
	"Node JS",
	"Express JS",
	"Knitting"
];

//GET /
app.get('/', function (req, res) {
    res.render('index')
});

//GET /contact
app.get('/contact', function (req, res) {
	res.render('contact', {contact});
});

//GET /skills
app.get('/skills', function (req, res) {
	res.render('skills', {skills});
});

app.listen(3000, function () {
    console.log('all set on port 3000')
});