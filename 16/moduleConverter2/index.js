var Converter = require('./converter');
var baseCurrencyUs = 28;

var converter = new Converter(baseCurrencyUs);
console.log(converter.convertToUa(111));
console.log(converter.convertToUs(555));