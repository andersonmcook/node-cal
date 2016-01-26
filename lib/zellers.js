"use strict";

var exports = module.exports = {};

function zellers (year, month, day) {
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
  if (month < 3) {
    month += 12;
    return month;
  } else {
    return month;
  }
};

exports.modifiedYear = function (year, month) {
  if (month < 3) {
    return year - 1;
  } else {
    return year;
  }
};
