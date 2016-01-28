#!/usr/bin/env node --harmony_destructuring
"use strict";

const _ = require('lodash');
const zellers = require('./zellers.js');
let year = {};

year.calendar = (year) => {
  let days = [" 1", " 2", " 3", " 4", " 5", " 6", " 7", " 8", " 9", 10,
             11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
             21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,];
  let months = ['December', 'January', 'February', 'March', 'April', 'May', 'June',
               'July', 'August', 'September', 'October', 'November', 'December'];
  let monthDays = [];
  const space = " ";
  let spaceCount = 0;
  for (let i = 0; i < months.length; i++) {
    monthDays[i] = new Date (2016, [i], 0).getDate();
    monthDays[i] = days.slice(0, monthDays[i]);
    spaceCount = zellers.getDay(year, [i + 1], 1) * 3;
    for(let x = 0; x < spaceCount; x++) {
      monthDays[i].unshift(space);
    }
    monthDays[i] = _.chunk(monthDays[i], 7);
     console.log([i], "month of days, chunked",monthDays[i]);
  }
  //console.log("monthDays", monthDays);

};
year.calendar(2016);
module.exports = year;
