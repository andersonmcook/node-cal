"use strict";

const zellers = require('./zellers.js');
let month = {};

month.generateMonth = (year, month) => {
  let months = [ , 'January', 'February', 'March', 'April', 'May', 'June',
               'July', 'August', 'September', 'October', 'November', 'December'];
  const calendarMonth = new Date(year, month).getMonth();
  const displayYear = new Date(year, month).getFullYear();
  const topLine = `${months[calendarMonth]} ${displayYear}`;
  const spaceCount = parseInt((20 - topLine.length) / 2);
  const space = " ";
  return `${space.repeat(spaceCount)}${topLine}`;
};

month.calendarBody = (year, month) => {
  const days = [" 1", " 2", " 3", " 4", " 5", " 6", " 7", " 8", " 9", 10,
               11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
               21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,];
  const getDay = zellers.getDay;
  const spaceCount = getDay(year, month, 1) * 3;
  const space = " ";
  const body = `${space.repeat(spaceCount)}${days.join(" ")}`;
  return body.match(new RegExp('.{1,'+21+'}', 'g')).join("\n");
};

const genMon = month.generateMonth;
const calBod = month.calendarBody;

month.wholeMonth = (year, month) => {
  return `${genMon(year, month)}
Su Mo Tu We Th Fr Sa
${calBod(year, month)}`;
};

module.exports = month;
