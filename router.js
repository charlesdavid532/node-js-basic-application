function route(handle,pathname) {
	console.log("routing request to::"+pathname)
	if (typeof handle[pathname] === 'function') {
		handle[pathname]();
	} else {
		console.log('No such file found');
	}
	
}

exports.route = route;