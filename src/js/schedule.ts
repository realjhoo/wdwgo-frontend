// Generalized schedule.js
// dependent on constantsX.js

"use strict";
"7th";

import * as Constants from "./constants7th.js";

const schoolYear = "2023 - 2024";

// --------------------------------------------------------
export function getRegularDay(minutesNow: number) {
  let classEnds;
  const period = document.querySelector(".period");
  const upNext = document.querySelector(".up-next");
  document.querySelector(".schedule")!.innerHTML = "Regular Schedule";
  document.querySelector(".school-year")!.innerHTML = schoolYear;

  if (minutesNow < Constants.allEightAM) {
    period!.innerHTML = "Look at you, here so early!";
    return (classEnds = Constants.allOutsideOfHours);
  } else if (
    minutesNow >= Constants.allEightAM &&
    minutesNow < Constants.allStartDay
  ) {
    period!.innerHTML = "Working for free until 8:20...";
    return (classEnds = Constants.allStartDay);
  } else if (
    minutesNow >= Constants.allStartDay &&
    minutesNow < Constants.regFirstStart
  ) {
    period!.innerHTML = "1st Period starts in...";
    return (classEnds = Constants.regFirstStart);
  } else if (
    minutesNow >= Constants.regFirstStart &&
    minutesNow < Constants.regFirstEnd
  ) {
    period!.innerHTML = "1st Period";
    upNext!.innerHTML = "Next: 2nd Period";
    return (classEnds = Constants.regFirstEnd);
  } else if (
    minutesNow >= Constants.regFirstEnd &&
    minutesNow < Constants.regSecondStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.regSecondStart);
  } else if (
    minutesNow >= Constants.regSecondStart &&
    minutesNow < Constants.regSecondEnd
  ) {
    period!.innerHTML = "2nd Period";
    upNext!.innerHTML = "Next: 3rd Period";
    return (classEnds = Constants.regSecondEnd);
  } else if (
    minutesNow >= Constants.regSecondEnd &&
    minutesNow < Constants.regThirdStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.regThirdStart);
  } else if (
    minutesNow >= Constants.regThirdStart &&
    minutesNow < Constants.regThirdEnd
  ) {
    period!.innerHTML = "3rd Period";
    upNext!.innerHTML = "Next: Lunch";
    return (classEnds = Constants.regThirdEnd);
  } else if (
    minutesNow >= Constants.regThirdEnd &&
    minutesNow < Constants.regLunchStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.regLunchStart);
  } else if (
    minutesNow >= Constants.regLunchStart &&
    minutesNow < Constants.regLunchEnd
  ) {
    period!.innerHTML = "B Lunch";
    upNext!.innerHTML = "Next: 4th Period";
    return (classEnds = Constants.regLunchEnd);
  } else if (
    minutesNow >= Constants.regLunchEnd &&
    minutesNow < Constants.regFourthStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.regFourthStart);
  } else if (
    minutesNow >= Constants.regFourthStart &&
    minutesNow < Constants.regFourthEnd
  ) {
    period!.innerHTML = "4th Period";
    upNext!.innerHTML = "Next: 5th Period";
    return (classEnds = Constants.regFourthEnd);
  } else if (
    minutesNow >= Constants.regFourthEnd &&
    minutesNow < Constants.regFifthStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.regFifthStart);
  } else if (
    minutesNow >= Constants.regFifthStart &&
    minutesNow < Constants.regFifthEnd
  ) {
    period!.innerHTML = "5th Period";
    upNext!.innerHTML = "Next: 6th Period";
    return (classEnds = Constants.regFifthEnd);
  } else if (
    minutesNow >= Constants.regFifthEnd &&
    minutesNow < Constants.regSixthStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.regSixthStart);
  } else if (
    minutesNow >= Constants.regSixthStart &&
    minutesNow < Constants.regSixthEnd
  ) {
    period!.innerHTML = "6th Period";
    upNext!.innerHTML = "Next: 7th Period";
    return (classEnds = Constants.regSixthEnd);
  } else if (
    minutesNow >= Constants.regSixthEnd &&
    minutesNow < Constants.regSeventhStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.regSeventhStart);
  } else if (
    minutesNow >= Constants.regSeventhStart &&
    minutesNow < Constants.regSeventhEnd
  ) {
    period!.innerHTML = "7th Period";
    upNext!.innerHTML = "";
    return (classEnds = Constants.regSeventhStart);
  } else if (
    minutesNow >= Constants.regSeventhStart &&
    minutesNow < Constants.allEndDay
  ) {
    period!.innerHTML = "You can leave in...";
    return (classEnds = Constants.allEndDay);
  } else {
    period!.innerHTML = "No one is paying you to be here!";
    return (classEnds = Constants.allOutsideOfHours);
  }
}

// --------------------------------------------------------
export function getAdvisoryDay(minutesNow: number) {
  let classEnds;
  const period = document.querySelector(".period");
  const upNext = document.querySelector(".up-next");
  document.querySelector(".schedule")!.innerHTML = "Advisory Schedule";
  document.querySelector(".school-year")!.innerHTML = schoolYear;

  if (minutesNow < Constants.allEightAM) {
    period!.innerHTML = "Look at you, here so early!";
    return (classEnds = Constants.allOutsideOfHours);
  } else if (
    minutesNow >= Constants.allEightAM &&
    minutesNow < Constants.allStartDay
  ) {
    period!.innerHTML = "Working for free until 8:20...";
    return (classEnds = Constants.allStartDay);
  } else if (
    minutesNow >= Constants.allStartDay &&
    minutesNow < Constants.advFirstStart
  ) {
    period!.innerHTML = "1st Period starts in...";
    return (classEnds = Constants.advFirstStart);
  } else if (
    minutesNow >= Constants.regFirstStart &&
    minutesNow < Constants.advFirstEnd
  ) {
    period!.innerHTML = "1st Period";
    upNext!.innerHTML = "Next: 2nd Period";
    return (classEnds = Constants.advFirstEnd);
  } else if (
    minutesNow >= Constants.advFirstEnd &&
    minutesNow < Constants.advSecondStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.advSecondStart);
  } else if (
    minutesNow >= Constants.advSecondStart &&
    minutesNow < Constants.advSecondEnd
  ) {
    period!.innerHTML = "2nd Period";
    upNext!.innerHTML = "Next: Advisory";
    return (classEnds = Constants.advSecondEnd);
  } else if (
    minutesNow >= Constants.advSecondEnd &&
    minutesNow < Constants.advAdvisoryStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.advAdvisoryStart);
  } else if (
    minutesNow >= Constants.advAdvisoryStart &&
    minutesNow < Constants.advAdvisoryEnd
  ) {
    period!.innerHTML = "Advisory";
    upNext!.innerHTML = "Next: 3rd Period";
    return (classEnds = Constants.advAdvisoryEnd);
  } else if (
    minutesNow >= Constants.advAdvisoryEnd &&
    minutesNow < Constants.advThirdStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.advThirdStart);
  } else if (
    minutesNow >= Constants.advThirdStart &&
    minutesNow < Constants.advThirdEnd
  ) {
    period!.innerHTML = "3rd Period";
    upNext!.innerHTML = "Next: Lunch";
    return (classEnds = Constants.advThirdEnd);
  } else if (
    minutesNow >= Constants.advThirdEnd &&
    minutesNow < Constants.advLunchStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.advLunchStart);
  } else if (
    minutesNow >= Constants.advLunchStart &&
    minutesNow < Constants.advLunchEnd
  ) {
    period!.innerHTML = "B Lunch";
    upNext!.innerHTML = "Next: 4th Period";
    return (classEnds = Constants.advLunchEnd);
  } else if (
    minutesNow >= Constants.advLunchEnd &&
    minutesNow < Constants.advFourthStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.advFourthStart);
  } else if (
    minutesNow >= Constants.advFourthStart &&
    minutesNow < Constants.advFourthEnd
  ) {
    period!.innerHTML = "4th Period";
    upNext!.innerHTML = "Next: 5th Period";
    return (classEnds = Constants.advFourthEnd);
  } else if (
    minutesNow >= Constants.advFourthEnd &&
    minutesNow < Constants.advFifthStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.advFifthStart);
  } else if (
    minutesNow >= Constants.advFifthStart &&
    minutesNow < Constants.advFifthEnd
  ) {
    period!.innerHTML = "5th Period";
    upNext!.innerHTML = "Next: 6th Period";
    return (classEnds = Constants.advFifthEnd);
  } else if (
    minutesNow >= Constants.advFifthEnd &&
    minutesNow < Constants.advSixthStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.advSixthStart);
  } else if (
    minutesNow >= Constants.advSixthStart &&
    minutesNow < Constants.advSixthEnd
  ) {
    period!.innerHTML = "6th Period";
    upNext!.innerHTML = "Next: 7th Period";
    return (classEnds = Constants.advSixthEnd);
  } else if (
    minutesNow >= Constants.advSixthEnd &&
    minutesNow < Constants.advSeventhStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.advSeventhStart);
  } else if (
    minutesNow >= Constants.advSeventhStart &&
    minutesNow < Constants.advSeventhEnd
  ) {
    period!.innerHTML = "7th Period";
    upNext!.innerHTML = "";
    return (classEnds = Constants.advSeventhEnd);
  } else if (
    minutesNow >= Constants.advSeventhEnd &&
    minutesNow < Constants.allEndDay
  ) {
    period!.innerHTML = "You can leave in...";
    return (classEnds = Constants.allEndDay);
  } else {
    period!.innerHTML = "Go home!";
    return (classEnds = Constants.allOutsideOfHours);
  }
}
// --------------------------------------------------------
export function getActivityDay(minutesNow: number) {
  // same as advisory schedule, but with different labels
  let classEnds;
  const period = document.querySelector(".period");
  const upNext = document.querySelector(".up-next");
  document.querySelector(".schedule")!.innerHTML = "Activity Schedule";
  document.querySelector(".school-year")!.innerHTML = schoolYear;

  if (minutesNow < Constants.allEightAM) {
    // before 8am
    period!.innerHTML = "Look at you, here so early!";
    return (classEnds = Constants.allOutsideOfHours);
  } else if (
    minutesNow >= Constants.allEightAM &&
    minutesNow < Constants.allStartDay
  ) {
    period!.innerHTML = "Working for free until 8:20...";
    return (classEnds = Constants.allStartDay); //8:20
  } else if (
    minutesNow >= Constants.allStartDay &&
    minutesNow < Constants.actFirstStart
  ) {
    period!.innerHTML = "1st Period starts in...";
    return (classEnds = Constants.actFirstStart); // 8.20 - 8:55
  } else if (
    minutesNow >= Constants.actFirstStart &&
    minutesNow < Constants.actFirstEnd
  ) {
    period!.innerHTML = "1st Period";
    upNext!.innerHTML = "Next: 2nd Period";
    return (classEnds = Constants.actFirstEnd);
  } else if (
    minutesNow >= Constants.actFirstEnd &&
    minutesNow < Constants.actSecondStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.actSecondStart);
  } else if (
    minutesNow >= Constants.actSecondStart &&
    minutesNow < Constants.actSecondEnd
  ) {
    period!.innerHTML = "2nd Period";
    upNext!.innerHTML = "Next: 3rd Period";
    return (classEnds = Constants.actSecondEnd);
  } else if (
    minutesNow >= Constants.actSecondEnd &&
    minutesNow < Constants.actThirdStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.actThirdStart);
  } else if (
    minutesNow >= Constants.actThirdStart &&
    minutesNow < Constants.actThirdEnd
  ) {
    period!.innerHTML = "3rd Period";
    upNext!.innerHTML = "Next: 4th Period";
    return (classEnds = Constants.actThirdEnd);
  } else if (
    minutesNow >= Constants.actThirdEnd &&
    minutesNow < Constants.actFourthStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.actFourthStart);
  } else if (
    minutesNow >= Constants.actFourthStart &&
    minutesNow < Constants.actFourthEnd
  ) {
    period!.innerHTML = "4th Period";
    upNext!.innerHTML = "Next: Lunch";
    return (classEnds = Constants.actFourthEnd);
  } else if (
    minutesNow >= Constants.actFourthEnd &&
    minutesNow < Constants.actLunchStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.actLunchStart);
  } else if (
    minutesNow >= Constants.actLunchStart &&
    minutesNow < Constants.actLunchEnd
  ) {
    period!.innerHTML = "B Lunch";
    upNext!.innerHTML = "-Next: 5th Period";
    return (classEnds = Constants.actLunchEnd);
  } else if (
    minutesNow >= Constants.actLunchEnd &&
    minutesNow < Constants.actFifthStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.actFifthStart);
  } else if (
    minutesNow >= Constants.actFifthStart &&
    minutesNow < Constants.actFifthEnd
  ) {
    period!.innerHTML = "5th Period";
    upNext!.innerHTML = "Next: 6th Period";
    return (classEnds = Constants.actFifthEnd);
  } else if (
    minutesNow >= Constants.actFifthEnd &&
    minutesNow < Constants.actSixthStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.actSixthStart);
  } else if (
    minutesNow >= Constants.actSixthStart &&
    minutesNow < Constants.actSixthEnd
  ) {
    period!.innerHTML = "6th Period";
    upNext!.innerHTML = "Next: 7th Period";
    return (classEnds = Constants.actSixthEnd);
  } else if (
    minutesNow >= Constants.actSixthEnd &&
    minutesNow < Constants.actSeventhStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.actSeventhStart);
  } else if (
    minutesNow >= Constants.actSeventhStart &&
    minutesNow < Constants.actSeventhEnd
  ) {
    period!.innerHTML = "7th Period";
    upNext!.innerHTML = "Next: Activity Period";
    return (classEnds = Constants.actSeventhEnd);
  } else if (
    minutesNow >= Constants.actSeventhEnd &&
    minutesNow < Constants.actActivityStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.actActivityStart);
  } else if (
    minutesNow >= Constants.actActivityStart &&
    minutesNow < Constants.actActivityEnd
  ) {
    period!.innerHTML = "Activity";
    upNext!.innerHTML = "";
    return (classEnds = Constants.actActivityEnd);
  } else if (
    minutesNow >= Constants.actActivityEnd &&
    minutesNow < Constants.allEndDay
  ) {
    period!.innerHTML = "You can leave in...";
    return (classEnds = Constants.allEndDay);
  } else {
    period!.innerHTML = "Why are you still at work?";
    return (classEnds = Constants.allOutsideOfHours);
  }
}
// --------------------------------------------------------
export function getHalfDay(minutesNow: number) {
  let classEnds;
  const period = document.querySelector(".period");
  const upNext = document.querySelector(".up-next");
  document.querySelector(".schedule")!.innerHTML = "Half Day Schedule";
  document.querySelector(".school-year")!.innerHTML = schoolYear;
  if (minutesNow < Constants.allEightAM) {
    // before 8am
    period!.innerHTML = "Look at you, here so early!";
    return (classEnds = Constants.allOutsideOfHours);
  } else if (
    minutesNow >= Constants.allEightAM &&
    minutesNow < Constants.allStartDay
  ) {
    period!.innerHTML = "Working for free until 8:20...";
    return (classEnds = Constants.allStartDay); //8:20
  } else if (
    minutesNow >= Constants.allStartDay &&
    minutesNow < Constants.hlfFirstStart
  ) {
    period!.innerHTML = "1st Period starts in...";
    return (classEnds = Constants.hlfFirstStart); // 8.20 - 8:55
  } else if (
    minutesNow >= Constants.hlfFirstStart &&
    minutesNow < Constants.hlfFirstEnd
  ) {
    period!.innerHTML = "1st Period";
    upNext!.innerHTML = "Next: 2nd Period";
    return (classEnds = Constants.hlfFirstEnd);
  } else if (
    minutesNow >= Constants.hlfFirstEnd &&
    minutesNow < Constants.hlfSecondStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.hlfSecondStart);
  } else if (
    minutesNow >= Constants.hlfSecondStart &&
    minutesNow < Constants.hlfSecondEnd
  ) {
    period!.innerHTML = "2nd Period";
    upNext!.innerHTML = "Next: 3rd Period";
    return (classEnds = Constants.hlfSecondEnd);
  } else if (
    minutesNow >= Constants.hlfSecondEnd &&
    minutesNow < Constants.hlfThirdStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.hlfThirdStart);
  } else if (
    minutesNow >= Constants.hlfThirdStart &&
    minutesNow < Constants.hlfThirdEnd
  ) {
    period!.innerHTML = "3rd Period";
    upNext!.innerHTML = "Next: 4th Period";
    return (classEnds = Constants.hlfThirdEnd);
  } else if (
    minutesNow >= Constants.hlfThirdEnd &&
    minutesNow < Constants.hlfFourthStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.hlfFourthStart);
  } else if (
    minutesNow >= Constants.hlfFourthStart &&
    minutesNow < Constants.hlfFourthEnd
  ) {
    period!.innerHTML = "4th Period";
    upNext!.innerHTML = "Next: 5th Period";
    return (classEnds = Constants.hlfFourthEnd);
  } else if (
    minutesNow >= Constants.hlfFourthEnd &&
    minutesNow < Constants.hlfFifthStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.hlfFifthStart);
  } else if (
    minutesNow >= Constants.hlfFifthStart &&
    minutesNow < Constants.hlfFifthEnd
  ) {
    period!.innerHTML = "5th Period";
    upNext!.innerHTML = "Next: 6th Period";
    return (classEnds = Constants.hlfFifthEnd);
  } else if (
    minutesNow >= Constants.hlfFifthEnd &&
    minutesNow < Constants.hlfSixthStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.hlfSixthStart);
  } else if (
    minutesNow >= Constants.hlfSixthStart &&
    minutesNow < Constants.hlfSixthEnd
  ) {
    period!.innerHTML = "6th Period";
    upNext!.innerHTML = "Next: Lunch";
    return (classEnds = Constants.hlfSixthEnd);
  } else if (
    minutesNow >= Constants.hlfSixthEnd &&
    minutesNow < Constants.hlfLunchStart
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.hlfLunchStart);
  } else if (
    minutesNow >= Constants.hlfLunchStart &&
    minutesNow < Constants.hlfSeventhStart
  ) {
    period!.innerHTML = "Lunch";
    upNext!.innerHTML = "Next: 7th Period";
    return (classEnds = Constants.hlfSeventhStart);
  } else if (
    minutesNow >= Constants.hlfSeventhStart &&
    minutesNow < Constants.hlfSeventhEnd
  ) {
    period!.innerHTML = "Passing Period";
    return (classEnds = Constants.hlfSeventhEnd);
  } else if (
    minutesNow >= Constants.hlfSeventhEnd &&
    minutesNow < Constants.hlfPDStart
  ) {
    period!.innerHTML = "7th Period";
    upNext!.innerHTML = "";
    return (classEnds = Constants.hlfPDStart);
  } else if (
    minutesNow >= Constants.hlfPDStart &&
    minutesNow < Constants.hlfPDEnd
  ) {
    period!.innerHTML = "PD";
    upNext!.innerHTML = "";
    return (classEnds = Constants.hlfPDEnd);
  } else if (
    minutesNow >= Constants.hlfPDEnd &&
    minutesNow < Constants.allEndDay
  ) {
    period!.innerHTML = "You can leave in...";
    return (classEnds = Constants.allEndDay);
  } else {
    period!.innerHTML = "I appreciate you";
    return (classEnds = Constants.allOutsideOfHours);
  }
}
//# sourceMappingURL=schedule.js.map
