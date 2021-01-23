function init() {
	document.getElementById("company1").addEventListener("keyup", autocomplete);
	document.getElementById("company2").addEventListener("keyup", autocomplete);
	document.getElementById("btnSubmit").addEventListener("click", compare);
	yahooQuery('TSLA', 'UK')
	.then(data => {
		console.log(data); // JSON data parsed by `data.json()` call
	});
}
function autocomplete() {}
function compare() {}


async function yahooQuery(symbol, region = "US") {
	let url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?';
	if(typeof symbol !== 'undefined') {
		url+="symbol="+symbol+"&";
	}
	url+="region="+symbol;

	const response = await fetch(url, {
		method: 'GET', // *GET, POST, PUT, DELETE, etc.
		headers: {
			'Content-Type': 'application/json',
			'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
			'x-rapidapi-key': '763bf79547msh646e4e1e2336736p1dc444jsnd47ced1373ad'
		},
		redirect: 'follow'
	});
	return response.json(); // parses JSON response into native JavaScript objects
}

