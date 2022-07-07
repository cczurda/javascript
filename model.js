const posts = [
    {title: 'Title 1', body: 'Body 1' },
    {title: 'Title 2', body: 'Body 2' },
    {title: 'Title 3', body: 'Body 3' },
    {title: 'Title 4', body: 'Body 4' },
];

const users = {
	"cczurda": {firstName: 'Clemens', lastName: 'Czurda', admin: true, password: "Hugo"}, 
	"fabio": {firstName: 'Fabio', lastName: 'Vogler', admin: false, password: "Hugo"}
}

function getPosts() {
	return posts;
}

function getUser(userid) {
	return users[userid];
}

function validate(userid, password) {
	return(password === users[userid].password);
}

module.exports = { getPosts, getUser, validate };