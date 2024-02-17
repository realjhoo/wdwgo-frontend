// @ts-nocheck

/*
 Replace each number with a literal ${RegFirstPassingEnd} 
 or ${AdvFithStart}
 wrap the whole thing with ``

 This is in JS not TS, so it would need to go to the dest folder
 But also the src folder to prevent compiling overwrite issues
 or requiring a recompile.

 Consider: 
 Replacing numbers with variables, then write a file out with just constants
 This would be simpler and perhaps easier to maintain?
 */

"7th";
"use strict";
const schoolYear = "2023 - 2024";
/*
8am = 480
8:20 = 500 (indicates the time in minutes)
8:55 = 535
*/
// testing value follows
const allOutsideOfHours = 999;
const allEightAM = 480; // <-- this would be in constant.js
const allStartDay = 500;
// --------------------------------------------------------
export function getRegularDay(minutesNow) {
  let classEnds;
  const period = document.querySelector(".period");
  const upNext = document.querySelector(".up-next");
  document.querySelector(".schedule").innerHTML = "Regular Schedule";
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
  } else if (minutesNow >= 535 && minutesNow < 590) {
    period.innerHTML = "1st Period"; //8:55
    upNext.innerHTML = "Next: 2nd Period";
    return (classEnds = 590);
  } else if (minutesNow >= 590 && minutesNow < 595) {
    period.innerHTML = "Passing Period";
    return (classEnds = 595);
  } else if (minutesNow >= 595 && minutesNow < 645) {
    period.innerHTML = "2nd Period";
    upNext.innerHTML = "Next: 3rd Period";
    return (classEnds = 645);
  } else if (minutesNow >= 645 && minutesNow < 650) {
    period.innerHTML = "Passing Period";
    return (classEnds = 650);
  } else if (minutesNow >= 650 && minutesNow < 705) {
    period.innerHTML = "3rd Period";
    upNext.innerHTML = "Next: Lunch";
    return (classEnds = 705);
  } else if (minutesNow >= 705 && minutesNow < 710) {
    period.innerHTML = "Passing Period";
    return (classEnds = 710);
  } else if (minutesNow >= 710 && minutesNow < 745) {
    period.innerHTML = "B Lunch";
    upNext.innerHTML = "Next: 4th Period";
    return (classEnds = 745);
  } else if (minutesNow >= 745 && minutesNow < 750) {
    period.innerHTML = "Passing Period";
    return (classEnds = 750);
  } else if (minutesNow >= 750 && minutesNow < 805) {
    period.innerHTML = "4th Period";
    upNext.innerHTML = "Next: 5th Period";
    return (classEnds = 805);
  } else if (minutesNow >= 805 && minutesNow < 810) {
    period.innerHTML = "Passing Period";
    return (classEnds = 810);
  } else if (minutesNow >= 810 && minutesNow < 860) {
    period.innerHTML = "5th Period";
    upNext.innerHTML = "Next: 6th Period";
    return (classEnds = 860);
  } else if (minutesNow >= 860 && minutesNow < 865) {
    period.innerHTML = "Passing Period";
    return (classEnds = 865);
  } else if (minutesNow >= 865 && minutesNow < 915) {
    period.innerHTML = "6th Period";
    upNext.innerHTML = "Next: 7th Period";
    return (classEnds = 915);
  } else if (minutesNow >= 915 && minutesNow < 920) {
    period.innerHTML = "Passing Period";
    return (classEnds = 920);
  } else if (minutesNow >= 920 && minutesNow < 970) {
    period.innerHTML = "7th Period";
    upNext.innerHTML = "";
    return (classEnds = 970);
  } else if (minutesNow >= 970 && minutesNow < 980) {
    period.innerHTML = "You can leave in...";
    return (classEnds = 980);
  } else {
    period.innerHTML = "No one is paying you to be here!";
    return (classEnds = 999);
  }
}
// --------------------------------------------------------
export function getAdvisoryDay(minutesNow) {
  let classEnds;
  const period = document.querySelector(".period");
  const upNext = document.querySelector(".up-next");
  document.querySelector(".schedule").innerHTML = "Advisory Schedule";
  document.querySelector(".school-year").innerHTML = schoolYear;

  if (minutesNow < 480) {
    // before 8am
    period.innerHTML = "Look at you, here so early!";
    return (classEnds = 999);
  } else if (minutesNow >= 480 && minutesNow < 500) {
    period.innerHTML = "Working for free until 8:20...";
    return (classEnds = 500); //8:20
  } else if (minutesNow >= 500 && minutesNow < 535) {
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
  } else if (minutesNow >= 970 && minutesNow < 980) {
    period.innerHTML = "You can leave in...";
    return (classEnds = 980);
  } else {
    period.innerHTML = "Go home!";
    return (classEnds = 999);
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

  if (minutesNow < 480) {
    // before 8am
    period.innerHTML = "Look at you, here so early!";
    return (classEnds = 999);
  } else if (minutesNow >= 480 && minutesNow < 500) {
    period.innerHTML = "Working for free until 8:20...";
    return (classEnds = 500); //8:20
  } else if (minutesNow >= 500 && minutesNow < 535) {
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
  } else if (minutesNow >= 970 && minutesNow < 980) {
    period.innerHTML = "You can leave in...";
    return (classEnds = 980);
  } else {
    period.innerHTML = "Why are you still at work?";
    return (classEnds = 999);
  }
}
// --------------------------------------------------------
export function getHalfDay(minutesNow) {
  let classEnds;
  const period = document.querySelector(".period");
  const upNext = document.querySelector(".up-next");
  document.querySelector(".schedule").innerHTML = "Half Day Schedule";
  document.querySelector(".school-year").innerHTML = schoolYear;
  if (minutesNow < 480) {
    // before 8am
    period.innerHTML = "Look at you, here so early!";
    return (classEnds = 999);
  } else if (minutesNow >= 480 && minutesNow < 500) {
    period.innerHTML = "Working for free until 8:20...";
    return (classEnds = 500); //8:20
  } else if (minutesNow >= 500 && minutesNow < 535) {
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
  } else if (minutesNow >= 970 && minutesNow < 980) {
    period.innerHTML = "You can leave in...";
    return (classEnds = 980);
  } else {
    period.innerHTML = "I appreciate you";
    return (classEnds = 999);
  }
}
//# sourceMappingURL=schedule.js.map
