function init() {
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
	let cp1 = document.getElementById("fighter1");
	let cp2 = document.getElementById("fighter2");
	let c1sym = freeSymbol(cp1.value);
	let c2sym = freeSymbol(cp2.value);
	yahooQuery(c1sym, 'UK')
	.then(data => {
		console.log(data.esgScores);
		let lbl = document.getElementById("companyLabel1");
		lbl.textContent = data.quoteType.longName;
		fillTable(1,data.esgScores);
	});
	yahooQuery(c2sym, 'UK')
	.then(data => {
		console.log(data);
		let lbl = document.getElementById("companyLabel2");
		lbl.textContent = data.quoteType.longName;
		fillTable(2,data.esgScores);
	});
}
function freeSymbol(str){
	let arr = str.split(")");
	arr = arr[0].split("(")
	console.log(arr);
	return arr[1];
}
function fillTable(column,data) {
	let tbl = [];
	for(let i in tblfields) {
		let field = document.getElementById(tblfields[i]+column);
		field.textContent = data[jsonfields[i]];
		if(data[jsonfields[i]]){
			field.setAttribute("class", "fail");
		} else {
			field.setAttribute("class", "pass");
		}
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
			'x-rapidapi-key': 'kzEH72A7XdmshDjaWc6NW5cpHRZKp1Xe3pqjsnUBEmKb7vmH2l'
		},
		redirect: 'follow'
	});
	return response.json(); // parses JSON response into native JavaScript objects
}

