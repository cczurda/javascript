
const users = {
	"cczurda": {firstName: 'Clemens', lastName: 'Czurda', admin: true, password: "Hugo"}, 
	"fabio": {firstName: 'Fabio', lastName: 'Vogler', admin: false, password: "Hugo"}
}

function getUser(userid) {
	return users[userid];
}

function validate(userid, password) {
	return(password === users[userid].password);
}

module.exports = { getUser, validate };