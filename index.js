// Importing express module
const express = require("express")
const app = express()

const posts = [
    {title: 'Title 1', body: 'Body 1' },
    {title: 'Title 2', body: 'Body 2' },
    {title: 'Title 3', body: 'Body 3' },
    {title: 'Title 4', body: 'Body 4' },
];

const user = {
    firstName: 'Clemens',
    lastName: 'Czurda',
	admin: false
};

//app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index', { user: user, title: "Startseite"})
})

app.get('/articles', (req, res) => {
    res.render('pages/articles', { articles: posts, title: "Articles"})
})

app.get('/about', (req, res) => {
    res.render('pages/about', { articles: posts, title: "About"})
})

// Server setup
app.listen(3000, () => {
	console.log("Server is Running")
})
