// Importing express module
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const model = require("./model.js");
const auth = require("./auth.js");
var router = require('./router.js');
const session = require("express-session");
const path = require('path');

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/mdb-ui-kit/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/mdb-ui-kit/js')));

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTML-Renderings
app.set('view engine', 'ejs');

// Routing
app.get('/', (req, res) => {
    res.render('pages/index', { title: "Startseite", session: req.session})
})

app.get('/articles', auth.loggedIn, (req, res) => {
	console.log("Title=" + req.query.title);
    res.render('pages/articles', { articles: model.getPosts(req.query.title), title: "Articles", session: req.session})
})

app.get('/article/:id', auth.loggedIn, (req, res) => {
	console.log("Title=" + req.params.id);
    res.render('pages/article', { post: model.getPost(req.params.id), title: "Article", session: req.session})
})

app.get('/about', (req, res) => {
    res.render('pages/about', { title: "About", session: req.session})
})

app.get('/login', (req, res) => {
    res.render('login', { session: req.session})
})


app.post('/login',(req,res) => {
	let session=req.session;
	if(auth.validate(req.body.username, req.body.password)){
        session.userid=req.body.username;
		session.user = auth.getUser(req.body.username);
        console.log(req.session)
        res.redirect('/');
    } else{
		session.message = "Login falsch";
		console.log(req.session)
        res.redirect('/login');
    }
})

app.get('/logout', (req, res) => {
	req.session.destroy();
    res.redirect('/');
})

app.use(express.static('public'));

app.use('/router', router);

// Server setup
app.listen(3000, () => {
	console.log("Server is Running")
})
