function getDetails(){
	var SYMB = 0;
	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol="+ SYMB +"&region=US",
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "52cabcb3b8msh480d3436f09d800p1e2abdjsn8af63ba68756",
			"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
		}
	};

	$.ajax(settings).done(function (response) {
		console.log(response.esgScores);
	});
}

function autoComplete(){
	var searchTerm = 0;
	var nameList = [];
	var symbList = [];
	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=n"+ searchterm +"&region=US",
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "52cabcb3b8msh480d3436f09d800p1e2abdjsn8af63ba68756",
			"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
		}
	};

	$.ajax(settings).done(function (response) {
		console.log(response);
		for (var i = 0; i < 6; i++) {
			nameList.push(response.quotes[i].shortname);
			symbList.push(response.quotes[i].symbol);
		}
	});
	
	$( "#fighter" ).autocomplete({
      source: nameList
    });
}