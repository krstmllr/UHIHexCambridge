function getDetails(){
	var SYMB = 0;
	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol="+ SYMB +"&region=US",
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "fc0734c9f9msh31df8e2c2d944ccp100f9bjsn71384937e883",
			"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
		}
	};

	$.ajax(settings).done(function (response) {
		console.log(response.esgScores);
	});
};

var nameList1 = [];
var nameList2 = [];

function complete1(){
	if ($("fighter1").focus()){
			var searchTerm = document.getElementById("fighter1").value;
			console.log(searchTerm);
			const settings = {
				"async": true,
				"crossDomain": true,
				"url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q="+ searchTerm +	"&region=US",
				"method": "GET",
				"headers": {
					"x-rapidapi-key": "fc0734c9f9msh31df8e2c2d944ccp100f9bjsn71384937e883",
					"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
				},
				"success" : fillAutoComplete1
			};
			
			$.ajax(settings).done(function (response) {
			console.log(response);
			for (var i = 0; i < 6; i++) {
				nameList1.push(response.quotes[i].shortname + " (" + response.quotes[i].symbol + ")");
			}
	});
	};
};

function complete2(){
	if ($("fighter2").focus()){
		var searchTerm = document.getElementById("fighter2").value;
		console.log(searchTerm);
		const settings = {
			"async": true,
			"crossDomain": true,
			"url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q="+ searchTerm +	"&region=US",
			"method": "GET",
			"headers": {
				"x-rapidapi-key": "fc0734c9f9msh31df8e2c2d944ccp100f9bjsn71384937e883",
				"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
			},
			"success" : fillAutoComplete2
		};
			
		$.ajax(settings).done(function (response) {
			console.log(response);
			for (var i = 0; i < 6; i++) {
				nameList2.push(response.quotes[i].shortname + " (" + response.quotes[i].symbol + ")");
			}
		});
	};
};

function fillAutoComplete1(){
	$( "#fighter1" ).autocomplete({
		source: nameList1
	});
}

function fillAutoComplete2(){
	$( "#fighter2" ).autocomplete({
		source: nameList2
	});
}
