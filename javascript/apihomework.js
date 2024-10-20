let url = 'https://swapi.dev/api/people/7';

let container = document.querySelector('.container');

async function getAPIdata() {
	// asyn function is used when we want function to work only when the data is available
	try {
		let data = await fetch(url); // only get triggered when data is available (await used )
		// json = javascript object node .
		let resultData = await data.json(); //the dta revcieved is in json and we convert it to human readable form using data.jason()
		showData(resultData);
	} catch (error) {
		console.error('Error fetching data: ', error);
	}
}

function showData(data) {
	container.innerHTML = `
    <p class ="name">Name: ${data.name}</p>
    <p class="gender">Gender: ${data.gender}</p>
	<p class="height">Height: ${data.height}</p>
    <p> Mass: ${data.mass}</p>
    <p> Skin COlor:${data.skin_color} </p>
    `;
}
getAPIdata(); // called the function which made to do th process
