"use strict";

let zellers = {};

zellers.getDay = function (year, month, day) {
  month < 3 ? (month += 12, year -=1) : (month, year);
  const h = (day + parseInt(((month + 1) * 26) / 10)
            + year + parseInt(year / 4)
            + 6 * parseInt(year / 100)
            + parseInt(year / 400) - 1) % 7;
  return h;
}

zellers.modifiedMonth = function (month) {
  return month < 3 ? month += 12 : month;
};

zellers.modifiedYear = function (year, month) {
  return month < 3 ? year - 1 : year;
};

module.exports = zellers;
