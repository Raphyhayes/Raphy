var options = [10, 25, 35];

function recursiveFunction (theShit) {
	var results = [];
	for(var i = 0; i < options.length; i++) {
		var quotient = theShit.efficiency/options[i];
		var path = theShit.path.slice(0)
		path.push(options[i]);
		var result = {efficiency: quotient, path: path};
		
		if(quotient > 1) {
			result = recursiveFunction(result);
		}
		results[i] = result; 
	}
	return getBestOption(results)
}

function getBestOption (results) {
	var bestOption = {efficiency: 0, path:[]};
	for (var i = 0; i < results.length; i++) {
		if(results[i].efficiency > bestOption.efficiency) {
			bestOption = results[i]
		}
	}
	return bestOption;
}

$('#licensePlateProblem').submit(function() {
	var value = $(this).find('#desiredNumberOfPlates').val();
	return false;
});