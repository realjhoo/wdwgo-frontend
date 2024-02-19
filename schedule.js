// @ts-nocheck

/* *****************************************************************
Replace each number of minutes with a const where:
the first three letters indicate type of schedule;
     reg, adv, act, hlf
followed by the period;
     First, Third, Seventh, etc
Lastly, either Start or End

Times that will not be adjustable by the frontend are prefixed "all"

Examples:
The beginning of second period on an advisory day would be:
     advSecondStart
The end of the Passing period after Third period on an activity day would be:
     actThirdPassEnd
The beginning of the day when contract hours start
     allStartDay

These constants will be stored in constants6.js, constants7.js or constants8.js
 */

/* *******************************************************************
NOTE:
Any divisions or indications that are before the start of 1st period
will need to be automatically included in constantsX.js, since these will
not have entries on the front end form

The same is true for anything after 4.10, EoC 7th period
these will preface with "all"

*/

//TODO add include constants.js to this file

// ALL VARIABLES FOR REG SCHED DONE
// NEED TO ADD Constant. to each
"7th";
"use strict";
import * as Constants from "./constants.js";
//  usage --> Constants.regFirstStart

const schoolYear = "2023 - 2024";

// --------------------------------------------------------
export function getRegularDay(minutesNow) {
  let classEnds;
  const period = document.querySelector(".period");
  const upNext = document.querySelector(".up-next");
  document.querySelector(".schedule").innerHTML = "Regular Schedule";
  document.querySelector(".school-year").innerHTML = schoolYear;

  if (minutesNow < allEightAM) {
    period.innerHTML = "Look at you, here so early!";
    return (classEnds = allOutsideOfHours);
  } else if (minutesNow >= allEightAM && minutesNow < allStartDay) {
    period.innerHTML = "Working for free until 8:20...";
    return (classEnds = allStartDay);
  } else if (minutesNow >= allStartDay && minutesNow < regFirstStart) {
    period.innerHTML = "1st Period starts in...";
    return (classEnds = regFirstStart);
  } else if (minutesNow >= regFirstStart && minutesNow < regFirstEnd) {
    period.innerHTML = "1st Period";
    upNext.innerHTML = "Next: 2nd Period";
    return (classEnds = regFirstEnd);
  } else if (minutesNow >= regFirstEnd && minutesNow < regSecondStart) {
    period.innerHTML = "Passing Period";
    return (classEnds = regSecondStart);
  } else if (minutesNow >= regSecondStart && minutesNow < regSecondEnd) {
    period.innerHTML = "2nd Period";
    upNext.innerHTML = "Next: 3rd Period";
    return (classEnds = regSecondEnd);
  } else if (minutesNow >= regSecondEnd && minutesNow < regThirdStart) {
    period.innerHTML = "Passing Period";
    return (classEnds = regThirdStart);
  } else if (minutesNow >= regThirdStart && minutesNow < regThirdEnd) {
    period.innerHTML = "3rd Period";
    upNext.innerHTML = "Next: Lunch";
    return (classEnds = regThirdEnd);
  } else if (minutesNow >= regThirdEnd && minutesNow < regLunchStart) {
    period.innerHTML = "Passing Period";
    return (classEnds = regLunchStart);
  } else if (minutesNow >= regLunchStart && minutesNow < regLunchEnd) {
    period.innerHTML = "B Lunch";
    upNext.innerHTML = "Next: 4th Period";
    return (classEnds = regLunchEnd);
  } else if (minutesNow >= regLunchEnd && minutesNow < regFourthStart) {
    period.innerHTML = "Passing Period";
    return (classEnds = regFourthStart);
  } else if (minutesNow >= regFourthStart && minutesNow < regFourthEnd) {
    period.innerHTML = "4th Period";
    upNext.innerHTML = "Next: 5th Period";
    return (classEnds = regFourthEnd);
  } else if (minutesNow >= regFourthEnd && minutesNow < regFifthStart) {
    period.innerHTML = "Passing Period";
    return (classEnds = regFifthStart);
  } else if (minutesNow >= regFifthStart && minutesNow < regFifthEnd) {
    period.innerHTML = "5th Period";
    upNext.innerHTML = "Next: 6th Period";
    return (classEnds = regFifthEnd);
  } else if (minutesNow >= regFifthEnd && minutesNow < regSixthStart) {
    period.innerHTML = "Passing Period";
    return (classEnds = regSixthStart);
  } else if (minutesNow >= regSixthStart && minutesNow < regSixthEnd) {
    period.innerHTML = "6th Period";
    upNext.innerHTML = "Next: 7th Period";
    return (classEnds = regSixthEnd);
  } else if (minutesNow >= regSixthEnd && minutesNow < regSeventhStart) {
    period.innerHTML = "Passing Period";
    return (classEnds = regSeventhStart);
  } else if (minutesNow >= regSeventhStart && minutesNow < regSeventhEnd) {
    period.innerHTML = "7th Period";
    upNext.innerHTML = "";
    return (classEnds = regSeventhStart);
  } else if (minutesNow >= regSeventhStart && minutesNow < allEndDay) {
    period.innerHTML = "You can leave in...";
    return (classEnds = allEndDay);
  } else {
    period.innerHTML = "No one is paying you to be here!";
    return (classEnds = allOutsideOfHours);
  }
}
// --------------------------------------------------------
export function getAdvisoryDay(minutesNow) {
  let classEnds;
  const period = document.querySelector(".period");
  const upNext = document.querySelector(".up-next");
  document.querySelector(".schedule").innerHTML = "Advisory Schedule";
  document.querySelector(".school-year").innerHTML = schoolYear;

  if (minutesNow < allEightAM) {
    // before 8am
    period.innerHTML = "Look at you, here so early!";
    return (classEnds = allOutsideOfHours);
  } else if (minutesNow >= allEightAM && minutesNow < allStartDay) {
    period.innerHTML = "Working for free until 8:20...";
    return (classEnds = allStartDay); //8:20
  } else if (minutesNow >= allStartDay && minutesNow < 535) {
    period.innerHTML = "1st Period starts in...";
    return (classEnds = 535); // 8.20 - 8:55
  } else if (minutesNow >= 535 && minutesNow < 585) {
    period.innerHTML = "1st Period";
    upNext.innerHTML = "Next: 2nd Period";
    return (classEnds = 585);
  } else if (minutesNow >= 585 && minutesNow < 590) {
    period.innerHTML = "Passing Period";
    return (classEnds = 590);
  } else if (minutesNow >= 590 && minutesNow < 635) {
    period.innerHTML = "2nd Period";
    upNext.innerHTML = "Next: Advisory";
    return (classEnds = 635);
  } else if (minutesNow >= 635 && minutesNow < 640) {
    period.innerHTML = "Passing Period";
    return (classEnds = 640);
  } else if (minutesNow >= 640 && minutesNow < 675) {
    period.innerHTML = "Advisory";
    upNext.innerHTML = "Next: 3rd Period";
    return (classEnds = 675);
  } else if (minutesNow >= 675 && minutesNow < 680) {
    period.innerHTML = "Passing Period";
    return (classEnds = 680);
  } else if (minutesNow >= 680 && minutesNow < 730) {
    period.innerHTML = "3rd Period";
    upNext.innerHTML = "Next: Lunch";
    return (classEnds = 730);
  } else if (minutesNow >= 730 && minutesNow < 735) {
    period.innerHTML = "Passing Period";
    return (classEnds = 735);
  } else if (minutesNow >= 735 && minutesNow < 765) {
    period.innerHTML = "B Lunch";
    upNext.innerHTML = "Next: 4th Period";
    return (classEnds = 765);
  } else if (minutesNow >= 765 && minutesNow < 770) {
    period.innerHTML = "Passing Period";
    return (classEnds = 770);
  } else if (minutesNow >= 770 && minutesNow < 820) {
    period.innerHTML = "4th Period";
    upNext.innerHTML = "Next: 5th Period";
    return (classEnds = 820);
  } else if (minutesNow >= 820 && minutesNow < 825) {
    period.innerHTML = "Passing Period";
    return (classEnds = 825);
  } else if (minutesNow >= 825 && minutesNow < 870) {
    period.innerHTML = "5th Period";
    upNext.innerHTML = "Next: 6th Period";
    return (classEnds = 870);
  } else if (minutesNow >= 870 && minutesNow < 875) {
    period.innerHTML = "Passing Period";
    return (classEnds = 875);
  } else if (minutesNow >= 875 && minutesNow < 920) {
    period.innerHTML = "6th Period";
    upNext.innerHTML = "Next: 7th Period";
    return (classEnds = 920);
  } else if (minutesNow >= 920 && minutesNow < 925) {
    period.innerHTML = "Passing Period";
    return (classEnds = 925);
  } else if (minutesNow >= 925 && minutesNow < 970) {
    period.innerHTML = "7th Period";
    upNext.innerHTML = "";
    return (classEnds = 970);
  } else if (minutesNow >= 970 && minutesNow < allEndDay) {
    period.innerHTML = "You can leave in...";
    return (classEnds = allEndDay);
  } else {
    period.innerHTML = "Go home!";
    return (classEnds = allOutsideOfHours);
  }
}
// --------------------------------------------------------
export function getActivityDay(minutesNow) {
  // same as advisory schedule, but with different labels
  let classEnds;
  const period = document.querySelector(".period");
  const upNext = document.querySelector(".up-next");
  document.querySelector(".schedule").innerHTML = "Activity Schedule";
  document.querySelector(".school-year").innerHTML = schoolYear;

  if (minutesNow < allEightAM) {
    // before 8am
    period.innerHTML = "Look at you, here so early!";
    return (classEnds = allOutsideOfHours);
  } else if (minutesNow >= allEightAM && minutesNow < allStartDay) {
    period.innerHTML = "Working for free until 8:20...";
    return (classEnds = allStartDay); //8:20
  } else if (minutesNow >= allStartDay && minutesNow < 535) {
    period.innerHTML = "1st Period starts in...";
    return (classEnds = 535); // 8.20 - 8:55
  } else if (minutesNow >= 535 && minutesNow < 585) {
    period.innerHTML = "1st Period";
    upNext.innerHTML = "Next: 2nd Period";
    return (classEnds = 585);
  } else if (minutesNow >= 585 && minutesNow < 590) {
    period.innerHTML = "Passing Period";
    return (classEnds = 590);
  } else if (minutesNow >= 590 && minutesNow < 635) {
    period.innerHTML = "2nd Period";
    upNext.innerHTML = "-Next: 3rd Period";
    return (classEnds = 635);
  } else if (minutesNow >= 635 && minutesNow < 640) {
    period.innerHTML = "Passing Period";
    return (classEnds = 640);
  } else if (minutesNow >= 640 && minutesNow < 685) {
    period.innerHTML = "3rd Period";
    upNext.innerHTML = "-Next: 4th Period";
    return (classEnds = 685);
  } else if (minutesNow >= 685 && minutesNow < 690) {
    period.innerHTML = "Passing Period";
    return (classEnds = 690);
  } else if (minutesNow >= 690 && minutesNow < 735) {
    period.innerHTML = "4th Period";
    upNext.innerHTML = "-Next: Lunch";
    return (classEnds = 735);
  } else if (minutesNow >= 735 && minutesNow < 740) {
    period.innerHTML = "Passing Period";
    return (classEnds = 740);
  } else if (minutesNow >= 740 && minutesNow < 770) {
    period.innerHTML = "B Lunch";
    upNext.innerHTML = "-Next: 5th Period";
    return (classEnds = 770);
  } else if (minutesNow >= 770 && minutesNow < 775) {
    period.innerHTML = "Passing Period";
    return (classEnds = 775);
  } else if (minutesNow >= 775 && minutesNow < 820) {
    period.innerHTML = "5th Period";
    upNext.innerHTML = "Next: 6th Period";
    return (classEnds = 820);
  } else if (minutesNow >= 820 && minutesNow < 825) {
    period.innerHTML = "Passing Period";
    return (classEnds = 825);
  } else if (minutesNow >= 825 && minutesNow < 870) {
    period.innerHTML = "6th Period";
    upNext.innerHTML = "Next: 7th Period";
    return (classEnds = 870);
  } else if (minutesNow >= 870 && minutesNow < 875) {
    period.innerHTML = "Passing Period";
    return (classEnds = 875);
  } else if (minutesNow >= 875 && minutesNow < 905) {
    period.innerHTML = "7th Period";
    upNext.innerHTML = "Next: Activity Period";
    return (classEnds = 905);
  } else if (minutesNow >= 905 && minutesNow < 910) {
    period.innerHTML = "Passing Period";
    return (classEnds = 910);
  } else if (minutesNow >= 910 && minutesNow < 970) {
    period.innerHTML = "Activity";
    upNext.innerHTML = "";
    return (classEnds = 970);
  } else if (minutesNow >= 970 && minutesNow < allEndDay) {
    period.innerHTML = "You can leave in...";
    return (classEnds = allEndDay);
  } else {
    period.innerHTML = "Why are you still at work?";
    return (classEnds = allOutsideOfHours);
  }
}
// --------------------------------------------------------
export function getHalfDay(minutesNow) {
  let classEnds;
  const period = document.querySelector(".period");
  const upNext = document.querySelector(".up-next");
  document.querySelector(".schedule").innerHTML = "Half Day Schedule";
  document.querySelector(".school-year").innerHTML = schoolYear;
  if (minutesNow < allEightAM) {
    // before 8am
    period.innerHTML = "Look at you, here so early!";
    return (classEnds = allOutsideOfHours);
  } else if (minutesNow >= allEightAM && minutesNow < allStartDay) {
    period.innerHTML = "Working for free until 8:20...";
    return (classEnds = allStartDay); //8:20
  } else if (minutesNow >= allStartDay && minutesNow < 535) {
    period.innerHTML = "1st Period starts in...";
    return (classEnds = 535); // 8.20 - 8:55
  } else if (minutesNow >= 535 && minutesNow < 565) {
    period.innerHTML = "1st Period";
    upNext.innerHTML = "Next: 2nd Period";
    return (classEnds = 565);
  } else if (minutesNow >= 565 && minutesNow < 570) {
    period.innerHTML = "Passing Period";
    return (classEnds = 570);
  } else if (minutesNow >= 570 && minutesNow < 595) {
    period.innerHTML = "2nd Period";
    upNext.innerHTML = "Next: 3rd Period";
    return (classEnds = 595);
  } else if (minutesNow >= 595 && minutesNow < 600) {
    period.innerHTML = "Passing Period";
    return (classEnds = 600);
  } else if (minutesNow >= 600 && minutesNow < 625) {
    period.innerHTML = "3rd Period";
    upNext.innerHTML = "Next: 4th Period";
    return (classEnds = 625);
  } else if (minutesNow >= 625 && minutesNow < 630) {
    period.innerHTML = "Passing Period";
    return (classEnds = 630);
  } else if (minutesNow >= 630 && minutesNow < 655) {
    period.innerHTML = "4th Period";
    upNext.innerHTML = "Next: 5th Period";
    return (classEnds = 655);
  } else if (minutesNow >= 655 && minutesNow < 660) {
    period.innerHTML = "Passing Period";
    return (classEnds = 660);
  } else if (minutesNow >= 660 && minutesNow < 695) {
    period.innerHTML = "5th Period";
    upNext.innerHTML = "Next: 6th Period";
    return (classEnds = 695);
  } else if (minutesNow >= 695 && minutesNow < 700) {
    period.innerHTML = "Passing Period";
    return (classEnds = 700);
  } else if (minutesNow >= 700 && minutesNow < 730) {
    period.innerHTML = "6th Period";
    upNext.innerHTML = "Next: Lunch";
    return (classEnds = 730);
  } else if (minutesNow >= 730 && minutesNow < 735) {
    period.innerHTML = "Passing Period";
    return (classEnds = 735);
  } else if (minutesNow >= 735 && minutesNow < 765) {
    period.innerHTML = "Lunch";
    upNext.innerHTML = "Next: 7th Period";
    return (classEnds = 765);
  } else if (minutesNow >= 765 && minutesNow < 770) {
    period.innerHTML = "Passing Period";
    return (classEnds = 770);
  } else if (minutesNow >= 770 && minutesNow < 805) {
    period.innerHTML = "7th Period";
    upNext.innerHTML = "";
    return (classEnds = 805);
  } else if (minutesNow >= 805 && minutesNow < 970) {
    period.innerHTML = "PD";
    upNext.innerHTML = "";
    return (classEnds = 970);
  } else if (minutesNow >= 970 && minutesNow < allEndDay) {
    period.innerHTML = "You can leave in...";
    return (classEnds = allEndDay);
  } else {
    period.innerHTML = "I appreciate you";
    return (classEnds = allOutsideOfHours);
  }
}
//# sourceMappingURL=schedule.js.map
