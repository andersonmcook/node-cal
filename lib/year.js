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
    //console.log(monthDays[i].join(" "));
    monthDays[i] = monthDays[i].join(" ");
    monthDays[i] = monthDays[i].split("");
    for (let y = 20; y < monthDays[i].length; y += 21) {
      monthDays[i][y] = "##";
    }
    //console.log(monthDays[i]);
    monthDays[i] = monthDays[i].join("");
    //console.log(monthDays[i]);
    monthDays[i] = monthDays[i].split("##");
    //console.log(monthDays[i]);

    

    if (monthDays[i][monthDays[i].length - 1].length < 20) {
      //console.log("hey", monthDays[i][monthDays[i].length - 1]);
      monthDays[i][monthDays[i].length -1] += " ".repeat(20 - monthDays[i][monthDays[i].length - 1].length);
    }
    //console.log(monthDays[i]);
    //monthDays[i] = _.chunk(monthDays[i], 7);
     //console.log([i], "month of days, chunked",monthDays[i]);
  }
  //console.log(`monthDays[0] ${monthDays[0]}`);
  //let body = monthDays.join(" ");
  /*console.log(body);*/
  const weekDayLine = "Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa";
  const JaFeMa = "      January               February               March";
  const ApMaJu = "       April                  May                   June"
  console.log(`                             ${year}

${JaFeMa}
${weekDayLine}
${monthDays[0][0]}  ${monthDays[1][0]}  ${monthDays[2][0]}
${monthDays[0][1]}  ${monthDays[1][1]}  ${monthDays[2][1]}
${monthDays[0][2]}  ${monthDays[1][2]}  ${monthDays[2][2]}
${monthDays[0][3]}  ${monthDays[1][3]}  ${monthDays[2][3]}
${monthDays[0][4]}  ${monthDays[1][4]}  ${monthDays[2][4]}
${monthDays[0][5]}  ${monthDays[1][5]}  ${monthDays[2][5]}`);
};
year.calendar(2016);
module.exports = year;

