#!/usr/bin/env node --harmony_destructuring

"use strict";
const {wholeMonth} = require('./lib/month.js');
const [ , , ...args] = process.argv;

if (args.length === 2) {
  let[month, year] = args;
  //year = parseInt(year);
  isNaN(year) ? year = 0 : parseInt(year);
  month > 12 || month < 1 || isNaN(month) ? (console.log(`cal: ${month} is neither a month number (1..12) nor a name`), process.exit(64)) : month;
  year < 1753 || year > 9999 ? (console.log(`cal: year ${year} not in range 1753..9999`), process.exit(64)) : year;
  console.log(`${wholeMonth(parseInt(year), parseInt(month))}`);
} else if (args.length === 1) {
  const[year] = args;
  console.log("just the year was inputted");
} else {
  console.log('nope');
  process.exit(64);
}
