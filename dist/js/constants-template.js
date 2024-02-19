// --------------------------------------------------------
export function generateTemplate6th(timeInMinutes, gradeLevel, schoolYear) {
    let constants6 = `"use strict"
"${gradeLevel}"
const schoolYear = "${schoolYear}";

let regularSchedule = 
  // Regular Schedule
  export const regFirstStart = ${timeInMinutes[0]};
  export const regFirstEnd = ${timeInMinutes[1]};
  export const regSecondStart = ${timeInMinutes[2]};
  export const regSecondEnd = ${timeInMinutes[3]};
  export const regThirdStart = ${timeInMinutes[4]};
  export const regThirdEnd = ${timeInMinutes[5]};
  export const regLunchStart = ${timeInMinutes[6]};
  export const regLunchEnd = ${timeInMinutes[7]};
  export const regFourthStart = ${timeInMinutes[8]};
  export const regFourthEnd = ${timeInMinutes[9]};
  export const regFifthStart = ${timeInMinutes[10]};
  export const regFifthEnd = ${timeInMinutes[11]};
  export const regSixthStart = ${timeInMinutes[12]};
  export const regSixthEnd = ${timeInMinutes[13]};
  export const regSeventhStart = ${timeInMinutes[14]} ;
  export const regSeventhEnd = ${timeInMinutes[15]};

let advisorySchedule = 
  // Advisory 
  export const advFirstStart = ${timeInMinutes[16]};
  export const advFirstEnd = ${timeInMinutes[17]};
  export const advSecondStart = ${timeInMinutes[18]};
  export const advSecondEnd = ${timeInMinutes[19]};
  export const advAdvisoryStart = ${timeInMinutes[20]};
  export const advAdvisoryEnd = ${timeInMinutes[21]};
  export const advThirdStart = ${timeInMinutes[22]};
  export const advThirdEnd = ${timeInMinutes[23]};
  export const advLunchStart = ${timeInMinutes[24]};
  export const advLunchEnd = ${timeInMinutes[25]};
  export const advFourthStart = ${timeInMinutes[26]};
  export const advFourthEnd = ${timeInMinutes[27]};
  export const advFifthStart = ${timeInMinutes[28]};
  export const advFifthEnd = ${timeInMinutes[29]};
  export const advSixthStart = ${timeInMinutes[30]};
  export const advSixthEnd = ${timeInMinutes[31]};
  export const advSeventhStart = ${timeInMinutes[32]} ;
  export const advSeventhEnd = ${timeInMinutes[33]};

let activitySchedule = 
  export const actFirstStart = ${timeInMinutes[34]};
  export const actFirstEnd = ${timeInMinutes[35]};
  export const actSecondStart = ${timeInMinutes[36]};
  export const actSecondEnd = ${timeInMinutes[37]};
  export const actThirdStart = ${timeInMinutes[38]};
  export const actThirdEnd = ${timeInMinutes[39]};
  export const actFourthStart = ${timeInMinutes[40]};
  export const actFourthEnd = ${timeInMinutes[41]};
  export const actLunchStart = ${timeInMinutes[42]};
  export const actLunchEnd = ${timeInMinutes[43]};
  export const actFifthStart = ${timeInMinutes[44]};
  export const actFifthEnd = ${timeInMinutes[45]};
  export const actSixthStart = ${timeInMinutes[46]};
  export const actSixthEnd = ${timeInMinutes[47]};
  export const actSeventhStart = ${timeInMinutes[48]} ;
  export const actSeventhEnd = ${timeInMinutes[49]};
  export const actActivityStart = ${timeInMinutes[50]};
  export const actActivityEnd = ${timeInMinutes[51]};

let halfDaySchedule = 
  export const hlfFirstStart = ${timeInMinutes[48]};
  export const hlfFirstEnd = ${timeInMinutes[49]};
  export const hlfSecondStart = ${timeInMinutes[50]};
  export const hlfSecondEnd = ${timeInMinutes[51]};
  export const hlfThirdStart = ${timeInMinutes[52]};
  export const hlfThirdEnd = ${timeInMinutes[53]};
  export const hlfFourthStart = ${timeInMinutes[56]};
  export const hlfFourthEnd = ${timeInMinutes[57]};
  export const hlfFifthStart = ${timeInMinutes[58]};
  export const hlfFifthEnd = ${timeInMinutes[59]};
  export const hlfSixthStart = ${timeInMinutes[60]};
  export const hlfSixthEnd = ${timeInMinutes[61]};
  export const hlfLunchStart = ${timeInMinutes[54]};
  export const hlfLunchEnd = ${timeInMinutes[55]};
  export const hlfSeventhStart = ${timeInMinutes[62]} ;
  export const hlfSeventhEnd = ${timeInMinutes[63]};
  `;
    return constants6;
}
// --------------------------------------------------------
export function generateTemplate7th(timeInMinutes, gradeLevel, schoolYear) {
    let constants7 = `
"use strict"
"${gradeLevel}"
const schoolYear = "${schoolYear}";

let regularSchedule = 
  // Regular Schedule
  export const regFirstStart = ${timeInMinutes[0]};
  export const regFirstEnd = ${timeInMinutes[1]};
  export const regSecondStart = ${timeInMinutes[2]};
  export const regSecondEnd = ${timeInMinutes[3]};
  export const regThirdStart = ${timeInMinutes[4]};
  export const regThirdEnd = ${timeInMinutes[5]};
  export const regLunchStart = ${timeInMinutes[6]};
  export const regLunchEnd = ${timeInMinutes[7]};
  export const regFourthStart = ${timeInMinutes[8]};
  export const regFourthEnd = ${timeInMinutes[9]};
  export const regFifthStart = ${timeInMinutes[10]};
  export const regFifthEnd = ${timeInMinutes[11]};
  export const regSixthStart = ${timeInMinutes[12]};
  export const regSixthEnd = ${timeInMinutes[13]};
  export const regSeventhStart = ${timeInMinutes[14]} ;
  export const regSeventhEnd = ${timeInMinutes[15]};

let advisorySchedule = 
  // Advisory 
  export const advFirstStart = ${timeInMinutes[16]};
  export const advFirstEnd = ${timeInMinutes[17]};
  export const advSecondStart = ${timeInMinutes[18]};
  export const advSecondEnd = ${timeInMinutes[19]};
  export const advAdvisoryStart = ${timeInMinutes[20]};
  export const advAdvisoryEnd = ${timeInMinutes[21]};
  export const advThirdStart = ${timeInMinutes[22]};
  export const advThirdEnd = ${timeInMinutes[23]};
  export const advLunchStart = ${timeInMinutes[24]};
  export const advLunchEnd = ${timeInMinutes[25]};
  export const advFourthStart = ${timeInMinutes[26]};
  export const advFourthEnd = ${timeInMinutes[27]};
  export const advFifthStart = ${timeInMinutes[28]};
  export const advFifthEnd = ${timeInMinutes[29]};
  export const advSixthStart = ${timeInMinutes[30]};
  export const advSixthEnd = ${timeInMinutes[31]};
  export const advSeventhStart = ${timeInMinutes[32]} ;
  export const advSeventhEnd = ${timeInMinutes[33]};

let activitySchedule = 
  export const actFirstStart = ${timeInMinutes[34]};
  export const actFirstEnd = ${timeInMinutes[35]};
  export const actSecondStart = ${timeInMinutes[36]};
  export const actSecondEnd = ${timeInMinutes[37]};
  export const actThirdStart = ${timeInMinutes[38]};
  export const actThirdEnd = ${timeInMinutes[39]};
  export const actFourthStart = ${timeInMinutes[40]};
  export const actFourthEnd = ${timeInMinutes[41]};
  export const actLunchStart = ${timeInMinutes[42]};
  export const actLunchEnd = ${timeInMinutes[43]};
  export const actFifthStart = ${timeInMinutes[44]};
  export const actFifthEnd = ${timeInMinutes[45]};
  export const actSixthStart = ${timeInMinutes[46]};
  export const actSixthEnd = ${timeInMinutes[47]};
  export const actSeventhStart = ${timeInMinutes[48]} ;
  export const actSeventhEnd = ${timeInMinutes[49]};
  export const actActivityStart = ${timeInMinutes[50]};
  export const actActivityEnd = ${timeInMinutes[51]};

let halfDaySchedule = 
  export const hlfFirstStart = ${timeInMinutes[48]};
  export const hlfFirstEnd = ${timeInMinutes[49]};
  export const hlfSecondStart = ${timeInMinutes[50]};
  export const hlfSecondEnd = ${timeInMinutes[51]};
  export const hlfThirdStart = ${timeInMinutes[52]};
  export const hlfThirdEnd = ${timeInMinutes[53]};
  export const hlfFourthStart = ${timeInMinutes[56]};
  export const hlfFourthEnd = ${timeInMinutes[57]};
  export const hlfFifthStart = ${timeInMinutes[58]};
  export const hlfFifthEnd = ${timeInMinutes[59]};
  export const hlfSixthStart = ${timeInMinutes[60]};
  export const hlfSixthEnd = ${timeInMinutes[61]};
  export const hlfLunchStart = ${timeInMinutes[54]};
  export const hlfLunchEnd = ${timeInMinutes[55]};
  export const hlfSeventhStart = ${timeInMinutes[62]} ;
  export const hlfSeventhEnd = ${timeInMinutes[63]};
  `;
    return constants7;
}
// --------------------------------------------------------
export function generateTemplate8th(timeInMinutes, gradeLevel, schoolYear) {
    let constants8 = `"use strict"
"${gradeLevel}"
const schoolYear = "${schoolYear}";

let regularSchedule = 
  // Regular Schedule
  export const regFirstStart = ${timeInMinutes[0]};
  export const regFirstEnd = ${timeInMinutes[1]};
  export const regSecondStart = ${timeInMinutes[2]};
  export const regSecondEnd = ${timeInMinutes[3]};
  export const regThirdStart = ${timeInMinutes[4]};
  export const regThirdEnd = ${timeInMinutes[5]};
  export const regLunchStart = ${timeInMinutes[6]};
  export const regLunchEnd = ${timeInMinutes[7]};
  export const regFourthStart = ${timeInMinutes[8]};
  export const regFourthEnd = ${timeInMinutes[9]};
  export const regFifthStart = ${timeInMinutes[10]};
  export const regFifthEnd = ${timeInMinutes[11]};
  export const regSixthStart = ${timeInMinutes[12]};
  export const regSixthEnd = ${timeInMinutes[13]};
  export const regSeventhStart = ${timeInMinutes[14]} ;
  export const regSeventhEnd = ${timeInMinutes[15]};

let advisorySchedule = 
  // Advisory 
  export const advFirstStart = ${timeInMinutes[16]};
  export const advFirstEnd = ${timeInMinutes[17]};
  export const advSecondStart = ${timeInMinutes[18]};
  export const advSecondEnd = ${timeInMinutes[19]};
  export const advAdvisoryStart = ${timeInMinutes[20]};
  export const advAdvisoryEnd = ${timeInMinutes[21]};
  export const advThirdStart = ${timeInMinutes[22]};
  export const advThirdEnd = ${timeInMinutes[23]};
  export const advLunchStart = ${timeInMinutes[24]};
  export const advLunchEnd = ${timeInMinutes[25]};
  export const advFourthStart = ${timeInMinutes[26]};
  export const advFourthEnd = ${timeInMinutes[27]};
  export const advFifthStart = ${timeInMinutes[28]};
  export const advFifthEnd = ${timeInMinutes[29]};
  export const advSixthStart = ${timeInMinutes[30]};
  export const advSixthEnd = ${timeInMinutes[31]};
  export const advSeventhStart = ${timeInMinutes[32]} ;
  export const advSeventhEnd = ${timeInMinutes[33]};

let activitySchedule = 
  export const actFirstStart = ${timeInMinutes[34]};
  export const actFirstEnd = ${timeInMinutes[35]};
  export const actSecondStart = ${timeInMinutes[36]};
  export const actSecondEnd = ${timeInMinutes[37]};
  export const actThirdStart = ${timeInMinutes[38]};
  export const actThirdEnd = ${timeInMinutes[39]};
  export const actFourthStart = ${timeInMinutes[40]};
  export const actFourthEnd = ${timeInMinutes[41]};
  export const actLunchStart = ${timeInMinutes[42]};
  export const actLunchEnd = ${timeInMinutes[43]};
  export const actFifthStart = ${timeInMinutes[44]};
  export const actFifthEnd = ${timeInMinutes[45]};
  export const actSixthStart = ${timeInMinutes[46]};
  export const actSixthEnd = ${timeInMinutes[47]};
  export const actSeventhStart = ${timeInMinutes[48]} ;
  export const actSeventhEnd = ${timeInMinutes[49]};
  export const actActivityStart = ${timeInMinutes[50]};
  export const actActivityEnd = ${timeInMinutes[51]};

let halfDaySchedule = 
  export const hlfFirstStart = ${timeInMinutes[48]};
  export const hlfFirstEnd = ${timeInMinutes[49]};
  export const hlfSecondStart = ${timeInMinutes[50]};
  export const hlfSecondEnd = ${timeInMinutes[51]};
  export const hlfThirdStart = ${timeInMinutes[52]};
  export const hlfThirdEnd = ${timeInMinutes[53]};
  export const hlfFourthStart = ${timeInMinutes[56]};
  export const hlfFourthEnd = ${timeInMinutes[57]};
  export const hlfFifthStart = ${timeInMinutes[58]};
  export const hlfFifthEnd = ${timeInMinutes[59]};
  export const hlfSixthStart = ${timeInMinutes[60]};
  export const hlfSixthEnd = ${timeInMinutes[61]};
  export const hlfLunchStart = ${timeInMinutes[54]};
  export const hlfLunchEnd = ${timeInMinutes[55]};
  export const hlfSeventhStart = ${timeInMinutes[62]} ;
  export const hlfSeventhEnd = ${timeInMinutes[63]};
  `;
    return constants8;
}
//# sourceMappingURL=constants-template.js.map