
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

function loggedIn(req, res, next) {
	let session=req.session;
	if (session.userid != undefined && session.userid != "") {
		next();
	} else {
		session.message = "Nicht angemeldet";
		res.redirect('/login');
	}
}

module.exports = { getUser, validate, loggedIn };