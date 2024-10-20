// create a function with name downloadMovie which has a url a argument. Create a promise if url is not mp4 -> reject else mp4 ->resolve .
function downloadMovie(url) {
	return new Promise((resolve, reject) => {
		if (url.endsWith('.mp4')) {
			resolve(`Downloading movie from: ${url}`);
		} else {
			reject(new Error('Invalid URL format. Only .mp4 files are supported.'));
		}
	});
}

downloadMovie('https://example.com/movie.mp4')
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.error(error.message);
	});

downloadMovie('https://example.com/movie.avi')
	.then((response) => {
		console.log(response);
	})
	.catch((error) => {
		console.error(error.message);
	});
