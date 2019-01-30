var baseCurrency = 28;

//helper
function roundTwoDecimal(amount) {
	return Math.round(amount * 100) / 100;
}

module.exports.convertToUa = function(currency) {
	return roundTwoDecimal(currency * baseCurrency);
}

module.exports.convertToUs = function(currency) {
	return roundTwoDecimal(currency / baseCurrency);
}