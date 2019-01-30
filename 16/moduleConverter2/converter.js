var Converter = function(baseCurrencyUs) {
	this.baseCurrencyUs = baseCurrencyUs
}

Converter.prototype.roundTwoDecimal = function(amount) {
	return Math.round(amount * 100) / 100;
}
Converter.prototype.convertToUa = function(currency) {
	return this.roundTwoDecimal(currency * this.baseCurrencyUs);
}
Converter.prototype.convertToUs = function(currency) {
	return this.roundTwoDecimal(currency / this.baseCurrencyUs);
}

module.exports = Converter;