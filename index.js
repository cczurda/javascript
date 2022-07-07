// Importing express module
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

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


const posts = [
    {title: 'Title 1', body: 'Body 1' },
    {title: 'Title 2', body: 'Body 2' },
    {title: 'Title 3', body: 'Body 3' },
    {title: 'Title 4', body: 'Body 4' },
];

const users = {
	"cczurda": {firstName: 'Clemens', lastName: 'Czurda', admin: true}, 
	"fabio": {firstName: 'Fabio', lastName: 'Vogler', admin: false}
}

//app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index', { title: "Startseite", session: req.session})
})

app.get('/articles', (req, res) => {
    res.render('pages/articles', { articles: posts, title: "Articles", session: req.session})
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
    //if(req.body.username == myusername && req.body.password == mypassword){
        session=req.session;
        session.userid=req.body.username;
		session.user = users[req.body.username];
        console.log(req.session)
        res.redirect('/');
    //}
    //else{
    //    res.send('Invalid username or password');
    //	}
})

app.use(express.static('public'));

// Server setup
app.listen(3000, () => {
	console.log("Server is Running")
})
