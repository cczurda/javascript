// Importing express module
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const model = require("./model.js")  

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

app.get('/articles', (req, res) => {
    res.render('pages/articles', { articles: model.getPosts(), title: "Articles", session: req.session})
})

app.get('/about', (req, res) => {
    res.render('pages/about', { title: "About", session: req.session})
})

app.get('/login', (req, res) => {
    res.render('login', { title: "Login", session: req.session})
})

app.get('/logout', (req, res) => {
	req.session.destroy();
    res.redirect('/');
})

app.post('/user',(req,res) => {
    if(model.validate(req.body.username, req.body.password)){
        session=req.session;
        session.userid=req.body.username;
		session.user = model.getUser(req.body.username);
        console.log(req.session)
        res.redirect('/');
    } else{
        res.redirect('/login');
    }
})

app.use(express.static('public'));

// Server setup
app.listen(3000, () => {
	console.log("Server is Running")
})
