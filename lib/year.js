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
  const space = "  ";
  let spaceCount = 0;
  for (let i = 0; i < months.length - 1; i++) {
    monthDays[i] = new Date (year, i + 1, 0).getDate();
    monthDays[i] = days.slice(0, monthDays[i]);
    spaceCount = zellers.getDay(year, i + 1, 1);
    for (let x = 0; x < spaceCount; x++) {
      monthDays[i].unshift(space);
    }
    //spaceCount = 0;
    console.log(monthDays[i].join(" "));
    monthDays[i] = monthDays[i].join(" ");
    monthDays[i] = monthDays[i].split("");
    for (let y = 20; y < monthDays[i].length; y += 21) {
      monthDays[i][y] = "##";
    }
    //console.log(monthDays[i]);
    monthDays[i] = monthDays[i].join("");
    console.log(monthDays[i]);
    monthDays[i] = monthDays[i].split("##");
    console.log(monthDays[i]);
    //monthDays[i] = _.chunk(monthDays[i], 7);
     //console.log([i], "month of days, chunked",monthDays[i]);
  }
  //console.log(`monthDays[0] ${monthDays[0]}`);
  //let body = monthDays.join(" ");
  //console.log(body);

};
year.calendar(2016);
module.exports = year;
