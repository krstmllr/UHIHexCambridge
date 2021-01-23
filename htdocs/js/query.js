function init() {
	document.getElementById("company1").addEventListener("keyup", autocomplete);
	document.getElementById("company2").addEventListener("keyup", autocomplete);
	document.getElementById("btnSubmit").addEventListener("click", compare);
	request('https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=TSLA&region=UK', {})
	.then(data => {
		console.log(data); // JSON data parsed by `data.json()` call
	});
}
function autocomplete() {}
function compare() {}


async function request(url = '', data = {}) {
	const response = await fetch(url, {
		method: 'GET', // *GET, POST, PUT, DELETE, etc.
		headers: {
			'Content-Type': 'application/json',
			'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
			'x-rapidapi-key': '763bf79547msh646e4e1e2336736p1dc444jsnd47ced1373ad'
		},
		redirect: 'follow'
		//referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		//body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
	return response.json(); // parses JSON response into native JavaScript objects
}

