"use strict";

const zellers = require('./zellers.js');
let month = {};

month.generateMonth = function (year, month) {
  let months = [ , 'January', 'February', 'March', 'April', 'May', 'June',
               'July', 'August', 'September', 'October', 'November', 'December'];
  const calendarMonth = new Date(year, month).getMonth();
  const displayYear = new Date(year, month).getFullYear();
  const topLine = `${months[calendarMonth]} ${displayYear}`;
  const spaceCount = parseInt((20 - topLine.length) / 2);
  const space = " ";
  return `${space.repeat(spaceCount)}${topLine}`;
};

module.exports = month;
