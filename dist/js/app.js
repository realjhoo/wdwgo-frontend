import { generateTemplate6th, generateTemplate7th, generateTemplate8th, } from "./constants-template.js";
import { grade6code, grade7code, grade8code } from "./html.js";
const schoolYear = "2023-2024";
let currentTab = 0; // set current tab to 0
// --------------------------------------------------------
function showTab(num) {
    // This function will display the specified tab of the form ...
    let tab = document.getElementsByClassName("tab");
    tab[num].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (num === 0) {
        document.getElementById("prevBtn").style.display = "none";
    }
    else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (num === tab.length - 1) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    }
    else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    // ... and run a function that displays the correct step indicator:
    setStepIndicator(num);
}
// --------------------------------------------------------
function nextPrev(num) {
    // This function will figure out which tab to display
    let tab = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (num === 1 && !validateForm())
        return false;
    // Hide the current tab
    tab[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab += num;
    // if you reach the end of the form
    if (currentTab >= tab.length) {
        getInputValue();
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}
// --------------------------------------------------------
function validateForm() {
    let valid = true;
    let tab = document.getElementsByClassName("tab");
    let inputElem = tab[currentTab].getElementsByTagName("input");
    // check all field are valid:
    for (let i = 0; i < inputElem.length; i++) {
        // If a field is empty it isnt valid
        if (inputElem[i].value === "") {
            inputElem[i].classList.add("invalid");
            inputElem[i].classList.add("error-shake");
            setTimeout(function () {
                inputElem[i].classList.remove("error-shake");
            }, 300);
            // and set the current valid status to false:
            valid = false;
        }
        // check for any invalids on form
        if (inputElem[i].classList.contains("invalid")) {
            inputElem[i].classList.add("error-shake");
            setTimeout(function () {
                inputElem[i].classList.remove("error-shake");
            }, 300);
            valid = false;
        }
    }
    // if data is valid, change the indicator and return true
    if (valid) {
        document.getElementsByClassName("step")[currentTab].classList.add("finish");
    }
    else {
        document
            .getElementsByClassName("step")[currentTab].classList.remove("finish");
    }
    return valid;
}
// --------------------------------------------------------
function validateInput(event) {
    // this const is called a type cast
    const target = event.target;
    let tab = document.getElementsByClassName("tab");
    let inputElem = tab[currentTab].getElementsByTagName("input");
    for (let i = 0; i < inputElem.length; i++) {
        // test that entry is formated hh:mm
        let isValid = /^([0-1]?[0-9]|2[0-4]).([0-5][0-9])(:[0-5][0-9])?$/.test(target.value);
        console.log(isValid);
        if (isValid) {
            // input entered is formatted properly
            target.classList.remove("invalid");
            target.classList.remove("error-shake");
            return true;
        }
        else {
            //input bad
            target.classList.add("invalid");
            target.classList.add("error-shake");
            setTimeout(() => {
                target.classList.remove("error-shake");
            }, 300);
            return false;
        }
    }
}
// --------------------------------------------------------
function setStepIndicator(num) {
    // remove the "active" class of all indicators
    let step = document.getElementsByClassName("step");
    for (let i = 0; i < step.length; i++) {
        step[i].classList.remove("active");
    }
    // add the "active" class to current indicator
    step[num].classList.add("active");
}
// --------------------------------------------------------
function getInputValue() {
    let input = document.getElementsByTagName("input");
    let inputValue = [];
    let minutes = [];
    // loop thru the inputs, skipping the slider ones
    for (let i = 0; i < input.length - 3; i++) {
        inputValue[i] = input[i + 3].value;
        minutes[i] = convertTime(inputValue[i]);
    }
    let gradeLevel = getGradeLevel();
    generateTemplate(minutes, gradeLevel);
}
// --------------------------------------------------------
function getGradeLevel() {
    let checked6 = document.getElementById("switch-sixth");
    let checked7 = document.getElementById("switch-seventh");
    let checked8 = document.getElementById("switch-eighth");
    let gradeLevel;
    if (checked6.checked) {
        gradeLevel = "6th";
    }
    else if (checked7.checked) {
        gradeLevel = "7th";
    }
    else if (checked8.checked) {
        gradeLevel = "8th";
    }
    else {
        gradeLevel = "???";
    }
    return gradeLevel;
}
// --------------------------------------------------------
function convertTime(time) {
    // pad time with leading zero
    let padTime = time.padStart(5, "0");
    // extract minutes
    let len = padTime.length;
    let min = padTime.substring(len - 2, len);
    // extract hour
    let hr = padTime.substring(0, 2);
    //convert hours to minutes
    let hours = parseInt(hr) * 60;
    // add them together
    let minutes = hours + parseInt(min);
    return minutes.toString();
}
// --------------------------------------------------------
function generateTemplate(timeInMinutes, gradeLevel) {
    let checked6 = document.getElementById("switch-sixth");
    let checked7 = document.getElementById("switch-seventh");
    let checked8 = document.getElementById("switch-eighth");
    let constants = "";
    if (checked6.checked) {
        constants = generateTemplate6th(timeInMinutes, gradeLevel, schoolYear);
    }
    else if (checked7.checked) {
        constants = generateTemplate7th(timeInMinutes, gradeLevel, schoolYear);
    }
    else if (checked8.checked) {
        constants = generateTemplate8th(timeInMinutes, gradeLevel, schoolYear);
    }
    else {
        alert("ERROR");
    }
    // * * * * WRITE IT TO A FILE * * * *
    createFile(constants);
}
// --------------------------------------------------------
function createFile(constants) {
    const file = new Blob([constants], { type: "text/plain" });
    const url = window.URL.createObjectURL(file);
    let gradeLevel = getGradeLevel();
    let filename = `constants${gradeLevel}.js`;
    saveFile(url, filename);
    window.URL.revokeObjectURL(url);
}
//---------------------------------------------------------
function saveFile(url, filename) {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || "file-name";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
// --------------------------------------------------------
function activateButtonListeners() {
    let nextBtn = document.getElementById("nextBtn");
    nextBtn?.addEventListener("click", () => {
        nextPrev(1);
    });
    let prevBtn = document.getElementById("prevBtn");
    prevBtn?.addEventListener("click", () => {
        nextPrev(-1);
    });
}
// --------------------------------------------------------
function activateSubmitButton() {
    let schedForm = document.getElementById("regForm");
    schedForm?.addEventListener("submit", (evnt) => {
        evnt.preventDefault();
        console.log("You hit submit");
    });
}
// --------------------------------------------------------
function activateSliderListener() {
    const slider = document.getElementsByClassName("switch");
    for (let i = 0; i < slider.length; i++) {
        slider[i].addEventListener("change", (event) => {
            const checked6 = document.getElementById("switch-sixth");
            const checked7 = document.getElementById("switch-seventh");
            const checked8 = document.getElementById("switch-eighth");
            let gradeLevel;
            console.log(grade6code);
            if (checked6.checked) {
                document.getElementById("insertHTML").innerHTML = grade6code;
                showTab(0);
            }
            else if (checked7.checked) {
                document.getElementById("insertHTML").innerHTML = grade7code;
                showTab(0);
            }
            else if (checked8.checked) {
                document.getElementById("insertHTML").innerHTML = grade8code;
                showTab(0);
            }
            else {
                gradeLevel = "???";
            }
            return gradeLevel;
        });
    }
}
// --------------------------------------------------------
function activateInputListener() {
    let inputElem = document.getElementsByTagName("input");
    for (let i = 0; i < inputElem.length; i++) {
        inputElem[i].addEventListener("blur", (event) => {
            validateInput(event);
        });
    }
}
// --------------------------------------------------------
function main() {
    let html = getGradeLevel();
    if (html === "6th") {
        document.getElementById("insertHTML").innerHTML = html;
    }
    else if (html === "7th") {
        document.getElementById("insertHTML").innerHTML = grade7code;
    }
    else if (html === "8th") {
        document.getElementById("insertHTML").innerHTML = html;
    }
    activateButtonListeners();
    activateSubmitButton();
    activateInputListener();
    activateSliderListener();
    showTab(currentTab); // Display the current tab
}
// --------------------------------------------------------
main();
// TODO
/*
Half Day order of classes for 6-7-8
add grade selector to wdwgo
hlfPDStart and End are undefined

FYI * * * * *
constants-template.ts is where the OUTPUT comes from
constantsX.js is OUTPUT
schedule.ts is generalized
html.ts is the layout of the page
*/
//# sourceMappingURL=app.js.map