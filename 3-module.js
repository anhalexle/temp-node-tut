// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minium)

const names = require('./4-names');
// console.log(names);

const sayHi = require('./5-utils');
// console.log(typeof sayHi);

const data = require('./6-alternative-flavor.js');
// console.log(data);
// sayHi('Alex');
// sayHi(names.john)
// sayHi(names.peter)

require('./7-mind-grenade')