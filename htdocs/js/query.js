function init() {
	document.getElementById("company1").addEventListener("keyup", autocomplete);
	document.getElementById("company2").addEventListener("keyup", autocomplete);
	document.getElementById("btnSubmit").addEventListener("click", compare);
}
const tblfields = [
	"ab","ae","g",
	"tp","at","fsl",
	"cw","sa","cv",
	"gmo","mc","p",
	"tc","po"
];
const jsonfields = [
	"alcoholic","adult","gambling",
	"tobacco","animalTesting","furLeather",
	"controversialWeapons","smallArms","catholic",
	"gmo","militaryContract","pesticides",
	"coal","palmOil"
];
function autocomplete() {}
function compare() {
	event.preventDefault();
	console.log("button pushed");
	let cp1 = document.getElementById("company1");
	let cp2 = document.getElementById("company2");
	yahooQuery(cp1.value, 'UK')
	.then(data => {
		console.log(data.esgScores);
		let lbl = document.getElementById("companyLabel1");
		lbl.textContent = data.quoteType.longName;
		fillTable(1,data.esgScores);
	});
	yahooQuery(cp2.value, 'UK')
	.then(data => {
		console.log(data);
		let lbl = document.getElementById("companyLabel2");
		lbl.textContent = data.quoteType.longName;
		fillTable(2,data.esgScores);
	});
}
function fillTable(column,data) {
	let tbl = [];
	for(let i in tblfields) {
		let field = document.getElementById(tblfields[i]+column);
		field.textContent = data[jsonfields[i]];
	}
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

