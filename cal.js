#!/usr/bin/env node --harmony_destructuring

"use strict";
const {wholeMonth} = require('./lib/month.js');
const [ , , ...args] = process.argv;

if (args.length === 2) {
  const[month, year] = args;
  //console.log(month, year);
  console.log(`${wholeMonth(parseInt(year), parseInt(month))}`);
} else if (args.length === 1) {
  const[year] = args;
  console.log("oh no");
  //console.log(`generateYear(${year})`);
} else {
  console.log('nope');
  process.exit(64);
}
