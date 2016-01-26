'use strict';

const { expect } = require('chai');
const { execSync } = require('child_process');

describe('cal', () => {
  describe('CLI', () => {
    it('should handle the current month', () => {
      const goal = execSync('cal').toString();
      const output = execSync('./cal.js').toString();

      expect(output).to.equal(goal);
    });
  });

  describe("Zeller's congruence", () => {
     const zellers = require('../lib/zellers.js');

    describe('.modifiedMonth', () => {
      it('return 13 for January', () => {
        expect(zellers.modifiedMonth(1)).to.equal(13);
      });
      it('return 14 for February', () => {
        expect(zellers.modifiedMonth(2)).to.equal(14);
      });
      it('return 3 for March', () => {
        expect(zellers.modifiedMonth(3)).to.equal(3);
      });
      it('return 8 for August', () => {
        expect(zellers.modifiedMonth(8)).to.equal(8);
      });
    });

    describe('.modifiedYear', () => {
      it('returns 2014 for input of Jan 2015', () => {
        expect(zellers.modifiedYear(2015, 1)).to.equal(2014);
      });
      it('returns 2015 for input of February 2016', () => {
        expect(zellers.modifiedYear(2016, 2)).to.equal(2015);
      });
      it('returns 2017 for input of March 2017', () => {
        expect(zellers.modifiedYear(2017, 3)).to.equal(2017);
      });
      it('returns 2018 for input of December 2018', () => {
        expect(zellers.modifiedYear(2018, 12)).to.equal(2018);
      });
    });

    describe('.getDay', () => {
      it('returns 2 (Tuesday) for March 1, 2016', () => {
        expect(zellers.getDay(2016, 3, 1)).to.equal(2);
      });
      // 2000, 3, 1 === 3
      // 2100, 3, 1 === 1
      // 2200, 3, 2 === 0
      // 2300, 3, 1 === 4
    });
  });
});
