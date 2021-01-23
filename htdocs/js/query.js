function init() {
	document.getElementById("company1").addEventListener("keyup", autocomplete);
	document.getElementById("company2").addEventListener("keyup", autocomplete);
	document.getElementById("btnSubmit").addEventListener("click", compare);
}
let company1Info;
let company2Info;
function autocomplete() {}
function compare() {
	event.preventDefault();
	console.log("button pushed");
	let cp1 = document.getElementById("company1");
	let cp2 = document.getElementById("company2");
	yahooQuery(cp1.value, 'UK')
	.then(data => {
		company1Info = data;
		console.log(data); // JSON data parsed by `data.json()` call
	});
	yahooQuery(cp2.value, 'UK')
	.then(data => {
		company2Info = data;
		console.log(data); // JSON data parsed by `data.json()` call
	});
}


async function yahooQuery(symbol, region = "US", other = {}) {
	let url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?';
	if(typeof symbol !== 'undefined') {
		url+="symbol="+symbol+"&";
	}
	url+="region="+region;

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

