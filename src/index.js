var moment = require('moment');

console.log("Hello, World!");
console.log(`The time is: ${moment().format('MMMM  Do YYYY, h:mm:ss a')}`)
console.log("Eighth, Message");

import { functionOne as renamed } from './functionOne';
renamed();

import myName from './myName';

console.log(myName('Mateen'));