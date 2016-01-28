#!/usr/bin/env node --harmony_destructuring

"use strict";
const {wholeMonth} = require('./lib/month.js');
const [ , , ...args] = process.argv;

if (args.length === 2) {
  let[month, year] = args;
  month > 12 || month < 1 ? (console.log(`${month} is neither a month number (1..12) nor a name`), process.exit(64)) : month;
  year < 1753 || year > 9999 ? (console.log(`year ${year} not in range 1753..9999`), process.exit(64)) : year;
  typeof month !== 'number' ? month = 1 : month;
  console.log(`${wholeMonth(parseInt(year), parseInt(month))}`);
} else if (args.length === 1) {
  const[year] = args;
  console.log("just the year was inputted");
} else {
  console.log('nope');
  process.exit(64);
}
