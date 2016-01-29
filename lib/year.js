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
    //for (let z = 0; z < 6; z++) {
      //if (monthDays[i].length !== 6) {
        //monthDays[i].length = 6;
        //console.log(monthDays[i].length);
         //}
    //}
    if (monthDays[i].length < 6) {
      monthDays[i].length = 6;
      if (monthDays[i][4] === undefined) {
        monthDays[i][4] = " ".repeat(20);
      }
      if (monthDays[i][5] === undefined) {
        monthDays[i][5] = " ".repeat(20);
      }
    }

    if (monthDays[i][4].length < 20 && (i + 1) % 3 !== 0) {
      monthDays[i][4] += " ".repeat(20 - monthDays[i][4].length);
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
  const ApMaJu = "       April                  May                   June";
  const JuAuSe = "        July                 August              September";
  const OcNoDe = "      October               November              December";
  return `                             ${year}

${JaFeMa}
${weekDayLine}
${monthDays[0][0]}  ${monthDays[1][0]}  ${monthDays[2][0]}
${monthDays[0][1]}  ${monthDays[1][1]}  ${monthDays[2][1]}
${monthDays[0][2]}  ${monthDays[1][2]}  ${monthDays[2][2]}
${monthDays[0][3]}  ${monthDays[1][3]}  ${monthDays[2][3]}
${monthDays[0][4]}  ${monthDays[1][4]}  ${monthDays[2][4]}
${monthDays[0][5]}  ${monthDays[1][5]}  ${monthDays[2][5]}
${ApMaJu}
${weekDayLine}
${monthDays[3][0]}  ${monthDays[4][0]}  ${monthDays[5][0]}
${monthDays[3][1]}  ${monthDays[4][1]}  ${monthDays[5][1]}
${monthDays[3][2]}  ${monthDays[4][2]}  ${monthDays[5][2]}
${monthDays[3][3]}  ${monthDays[4][3]}  ${monthDays[5][3]}
${monthDays[3][4]}  ${monthDays[4][4]}  ${monthDays[5][4]}
${monthDays[3][5]}  ${monthDays[4][5]}  ${monthDays[5][5]}
${JuAuSe}
${weekDayLine}
${monthDays[6][0]}  ${monthDays[7][0]}  ${monthDays[8][0]}
${monthDays[6][1]}  ${monthDays[7][1]}  ${monthDays[8][1]}
${monthDays[6][2]}  ${monthDays[7][2]}  ${monthDays[8][2]}
${monthDays[6][3]}  ${monthDays[7][3]}  ${monthDays[8][3]}
${monthDays[6][4]}  ${monthDays[7][4]}  ${monthDays[8][4]}
${monthDays[6][5]}  ${monthDays[7][5]}  ${monthDays[8][5]}
${OcNoDe}
${weekDayLine}
${monthDays[9][0]}  ${monthDays[10][0]}  ${monthDays[11][0]}
${monthDays[9][1]}  ${monthDays[10][1]}  ${monthDays[11][1]}
${monthDays[9][2]}  ${monthDays[10][2]}  ${monthDays[11][2]}
${monthDays[9][3]}  ${monthDays[10][3]}  ${monthDays[11][3]}
${monthDays[9][4]}  ${monthDays[10][4]}  ${monthDays[11][4]}
${monthDays[9][5]}  ${monthDays[10][5]}  ${monthDays[11][5]}`;

//console.log(`error report
//${monthDays[9][5]}then the next month${monthDays[10][5]}andthenext${monthDays[11][5]}`);

};

module.exports = year;
