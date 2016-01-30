'use strict';

const { expect } = require('chai');
const { execSync } = require('child_process');

describe('cal', () => {
  describe('CLI', () => {
    it('should handle the current month', () => {
      const goal = execSync('cal 1 2016').toString();
      const output = execSync('./cal.js 1 2016').toString();

      expect(output).to.equal(goal);
    });
  });

  describe('cal vs ./cal.js', () => {
    const {generateMonth, calendarBody, wholeMonth} = require('../lib/month.js');
    const goal = execSync('cal').toString();

    //
    const goalArray = execSync('cal 2016').toString().split("\n");
    const outputArray = execSync('./cal.js 2016').toString().split("\n");

    it('should match cal and cal.js', () => {
      expect(execSync('./cal.js 2016').toString()).to.equal(execSync('cal 2016').toString());
    });

    it('should match lines in full calendar', () => {
      expect(outputArray[0]).to.equal(goalArray[0]);
      expect(outputArray[1]).to.equal(goalArray[1]);
      expect(outputArray[2]).to.equal(goalArray[2]);
      expect(outputArray[3]).to.equal(goalArray[3]);
      expect(outputArray[4]).to.equal(goalArray[4]);
      expect(outputArray[5]).to.equal(goalArray[5]);
      expect(outputArray[6]).to.equal(goalArray[6]);
      expect(outputArray[7]).to.equal(goalArray[7]);
      expect(outputArray[8]).to.equal(goalArray[8]);
      expect(outputArray[9]).to.equal(goalArray[9]);
      expect(outputArray[10]).to.equal(goalArray[10]);
      expect(outputArray[11]).to.equal(goalArray[11]);
      expect(outputArray[12]).to.equal(goalArray[12]);
      expect(outputArray[13]).to.equal(goalArray[13]);
    });

    it('should return month and year with the right spaces', () => {
      expect(generateMonth(2016, 1)).to.equal("    January 2016");
      expect(generateMonth(2016, 2)).to.equal("   February 2016");
    });
/*
    it('CLI should show Feb 2012 has having 29 days starts on We', () => {
      expect(execSync('./cal.js 2 2012').toString()).to.equal(execSync('cal 2 2012').toString());
    });

    it('CLI should show Feb 2014 has having 28 days starts on Sa', () => {
      expect(execSync('./cal.js 2 2014').toString()).to.equal(execSync('cal 2 2014').toString());
    });

    it('CLI should show Jan 2016 as having 6 weeks starts on Fr', () => {
      expect(execSync('./cal.js 1 2016').toString()).to.equal(execSync('cal 1 2016').toString());
    });

    it('CLI should show Oct 2015 as having 5 weeks starts on Th', () => {
      expect(execSync('./cal.js 10 2015').toString()).to.equal(execSync('cal 10 2015').toString());
    });

    it('CLI should show Feb 2015 as having 4 weeks starts on Su', () => {
      expect(execSync('./cal.js 2 2015').toString()).to.equal(execSync('cal 2 2015').toString());
    });

    it('CLI should show Nov 2015 as having 30 days starts on Su', () => {
      expect(execSync('./cal.js 11 2015').toString()).to.equal(execSync('cal 11 2015').toString());
    });

    it('CLI should show Dec 2015 as having 31 days starts on Tu', () => {
      expect(execSync('./cal.js 12 2015').toString()).to.equal(execSync('cal 12 2015').toString());
    });

    //it('CLI should show cal: year 0 not in range 1753..9999 with input of a a', () => {
    //  expect(execSync('./cal.js a a').toString()).to.equal(execSync('cal a a').toString());
    //});

    it('CLI full calendar 2016', () => {
      expect(execSync('./lib/year.js').toString()).to.equal(execSync('cal 2016').toString());
    });*/



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
      it('returns 3 (Wednesday) for March 1, 2000', () => {
        expect(zellers.getDay(2000, 3, 1)).to.equal(3);
      });
      it('returns 1 (Monday) for March 1, 2100', () => {
        expect(zellers.getDay(2100, 3, 1)).to.equal(1);
      });
      it('returns 0 (Sunday) for March 2, 2200', () => {
        expect(zellers.getDay(2200, 3, 2)).to.equal(0);
      });
      it('returns 4 (Thursday) for March 1, 2300', () => {
        expect(zellers.getDay(2300, 3, 1)).to.equal(4);
      });
    });
  });
});
