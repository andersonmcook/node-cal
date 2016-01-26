"use strict";

var exports = module.exports = {};

exports.getDay = function (year, month, day) {
  if (month < 3) {
    month += 12; year -= 1;
  }
    const h = (day + parseInt(((month + 1) * 26) / 10)
              + year + parseInt(year / 4)
              + 6 * parseInt(year / 100)
              + parseInt(year / 400) - 1) % 7;
    return h;
}

exports.modifiedMonth = function (month) {
  return month < 3 ? month += 12 : month;
};

exports.modifiedYear = function (year, month) {
  return month < 3 ? year - 1 : year;
};
