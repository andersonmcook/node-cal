#!/usr/bin/env node --harmony_destructuring
"use strict";

const zellers = require('./zellers.js');
let month = {};

month.generateMonth = (year, month) => {
  let months = ['December', 'January', 'February', 'March', 'April', 'May', 'June',
               'July', 'August', 'September', 'October', 'November', 'December'];
  /*const calendarMonth = new Date(year, month).getMonth();
  const displayYear = new Date(year, month).getFullYear();*/
  const calendarMonth = new Date(year, month).getMonth();
  let displayYear = new Date(year, month).getFullYear();
  calendarMonth === 0 ? displayYear = displayYear - 1 : displayYear;
  const topLine = `${months[calendarMonth]} ${displayYear}`;
  const spaceCount = parseInt((20 - topLine.length) / 2);
  const space = " ";
  return `${space.repeat(spaceCount)}${topLine}`;
};

month.calendarBody = (year, month) => {
  let days = [" 1", " 2", " 3", " 4", " 5", " 6", " 7", " 8", " 9", 10,
               11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
               21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,];
  const dayCount = new Date(year, month, 0).getDate();
  days = days.splice(0, dayCount);
  const getDay = zellers.getDay;
  const spaceCount = getDay(year, month, 1) * 3;
  const space = " ";
  let body = `${space.repeat(spaceCount)}${days.join(" ")}`;
  body = body.split("");
  for (var i = 20; i < body.length; i += 21) {
        body[i] = "\n";
  };
  //console.log("year", year, "month", month, "lastindex", body.lastIndexOf("\n"));
  const lastIndex = body.lastIndexOf("\n");
  /*lastIndex === 104 ? body : (lastIndex === 83) ? body.push("\n") : (lastIndex === 62) ? body.push("\n\n") : body;*/
  lastIndex === 62 ? body.push("\n\n") : body;
  lastIndex === 83 ? body.push("\n") : body;
  //body.push("\n");
  return body.join("");
};

const genMon = month.generateMonth;
const calBod = month.calendarBody;

month.wholeMonth = (year, month) => {
  return `${genMon(year, month)}
Su Mo Tu We Th Fr Sa
${calBod(year, month)}`;
};

//console.log(month.wholeMonth(2016, 1));

module.exports = month;
