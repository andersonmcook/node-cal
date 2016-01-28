#!/usr/bin/env node --harmony_destructuring

"use strict";
const {wholeMonth} = require('./lib/month.js');
const [ , , ...args] = process.argv;

if (args.length === 2) {
  const[month, year] = args;
  month > 12 || month < 1 ? (console.log("nope"), process.exit(64)) : month;
  year < 1753 || year > 9999 ? (console.log("nope"), process.exit(64)) : year;
  console.log(`${wholeMonth(parseInt(year), parseInt(month))}`);
} else if (args.length === 1) {
  const[year] = args;
  console.log("oh no");
} else {
  console.log('nope');
  process.exit(64);
}
