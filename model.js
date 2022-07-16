const posts = [
    {id: 23, title: 'Title 1', body: 'Body 1' },
    {id: 50, title: 'Title 2', body: 'Body 2' },
    {id: 57, title: 'Title 3', body: 'Body 3' },
    {id: 60, title: 'Title 4', body: 'Body 4' },
];

function getPosts(t) {
	if (t === undefined || t == "") {
		return posts;
	}
	return posts.filter((post) => {
		let str = new RegExp(t);
		console.log(t, post.title);
		return str.test(post.title);
	});
}


function getPost(id) {
	return posts.find((post)=> {
		return post.id == id;
	});
}


module.exports = { getPosts, getPost };