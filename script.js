var arraySplit = "";
var exitApplication = false;
var userInput = "";
var finalPassword = "";
var displayPassword = "";

var pCriteria = {
    lowercase: {
        indexNumber: 0, criteria: "abcdefghijklmnopqrstuvwxyz"
    },
    uppercase: {
        indexNumber: 1, criteria: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    },
    numeric: {
        indexNumber: 2, criteria: "0123456789"
    },
    symbols: {
        indexNumber: 3, criteria: "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"
    }
}

var generatePassword = function () {

    window.alert("The criteria for password generator are lowercase, uppercase, numeric, and/or special characters.");

    userInput = window.prompt("Select criteria for password (you can select more than one) (use space): 1=lowercase 2=uppercase 3=numeric 4=special characters.\n");

    debugger;
    if (!userInput) {
        window.alert("If you wish to close the application, please close this password generator tab.")
        generatePassword();
    } else {

        userInput = userInput.split(" ");

        arraySplit = userInput.slice(0, userInput.length);
    }

    window.alert("You have selected: " + arraySplit);

    for (var i = 0; i < userInput.length; i++) {

        var inputCriteria = userInput[i];

        var inputCriteriaInteger = parseInt(inputCriteria);

        switch (inputCriteriaInteger) {
            case 1:
            case 2:
            case 3:
            case 4:

                break;
            default:
                if (!inputCriteriaInteger) {
                    window.alert("Please select a criteria using numbers and only from 1-4 seprated by one space.\nRestarting application");
                    generatePassword();
                }
                else {
                    window.alert(" Please select a criteria using numbers and only from 1-4 seprated by space.\n\n" + "User input: " + inputCriteria + " is invalid");
                    generatePassword();
                }
        }
    }

    var duplicatePassState = true;

    var validateInput = [];
    var round1Shift = "";
    var round1Pop = "";
    var criteria3 = "";
    var criteria4 = "";
    var validateInputArray = []


    if (userInput.length == 1) {
        duplicatePassState = false;
    }

    while (duplicatePassState) {

        var tempVar = "";
        for (var i = 0; i < userInput.length; i++) {
            tempVar = userInput[i];
            validateInput.push(tempVar);
        }

        round1Shift = validateInput.shift();
        round1Pop = validateInput.pop();
        if (round1Shift === round1Pop) {
            window.alert("Duplication detected, please check criteria rules.");
            generatePassword();
        }

        else {

            debugger;
            var round2Shift = "";
            var round2Pop = "";
            round2Shift = validateInput.shift();
            round2Pop = validateInput.pop();


            if (!round2Shift || !round2Pop) {
                duplicatePassState = false;
                break;
            }

            if (round1Shift === round2Shift) {
                window.alert("Duplication detected, please check criteria rules.");
                generatePassword();
            } else if (round1Pop === round2Pop) {
                window.alert("Duplication detected, please check criteria rules.");
                generatePassword();
            } else if (round1Shift === round2Pop) {
                window.alert("Duplication detected, please check criteria rules.");
                generatePassword();
            } else if (round1Pop === round2Shift) {
                window.alert("Duplication detected, please check criteria rules.");
                generatePassword();
            } // Should not be needed but left in case as it was done on previou if statement.
            else if (round1Shift === round1Pop) {
                window.alert("Duplication detected, please check criteria rules.");
                generatePassword();
            } else if (round2Shift === round2Pop) {
                window.alert("Duplication detected, please check criteria rules.");
                generatePassword();
            }
            else {

                duplicatePassState = false;
            }
        }
    }


    var pLenght = passLenght();

    displayPassword = generatePasswordRandomness(userInput, pLenght);

    function generatePasswordRandomness(userInput, pLenght) {

        var valueRandom = 0;

        var counter = userInput.length
        var UserCounter = userInput.length
        var finalPassword = "";

        for (var i = 0; i < userInput.length; i++) {

            var guaranteedCriteria = userInput[i];

            if (guaranteedCriteria === "1") {

                valueRandom = Math.floor(Math.random() * 26);

                finalPassword += pCriteria.lowercase.criteria[valueRandom];

            } else if (guaranteedCriteria === "2") {

                valueRandom = Math.floor(Math.random() * 26);
                finalPassword += pCriteria.uppercase.criteria[valueRandom];

            } else if (guaranteedCriteria === "3") {

                valueRandom = Math.floor(Math.random() * 10);
                finalPassword += pCriteria.numeric.criteria[valueRandom];

            } else if (guaranteedCriteria === "4") {

                valueRandom = Math.floor(Math.random() * 31);
                finalPassword += pCriteria.symbols.criteria[valueRandom];
            }
        }

        while (counter < pLenght) {

            if (!userInput[(UserCounter - 1)]) {
                UserCounter -= Math.floor(((Math.random() * userInput.length) + 1));
                counter += 1;

            } else {
                UserCounter = Math.floor(((Math.random() * userInput.length) + 1));
                counter += 1;
            }

            var inputCriteria = userInput[(UserCounter - 1)];

            var inputCriteriaInteger = parseInt(inputCriteria);

            switch (inputCriteriaInteger) {
                case 1:
                    valueRandom = Math.floor(Math.random() * 26);
                    finalPassword += pCriteria.lowercase.criteria[valueRandom];
                    break;
                case 2:
                    valueRandom = Math.floor(Math.random() * 26);
                    finalPassword += pCriteria.uppercase.criteria[valueRandom];
                    break;
                case 3:
                    valueRandom = Math.floor(Math.random() * 10);
                    finalPassword += pCriteria.numeric.criteria[valueRandom];
                    break;
                case 4:
                    valueRandom = Math.floor(Math.random() * 31);
                    finalPassword += pCriteria.symbols.criteria[valueRandom];
                    break;
            }
        }

        return finalPassword;
    }

    function passLenght() {
        window.alert("How long do you want your password to be from 8-128 characters.\n E.g 20");
        var pLenght = parseInt(window.prompt("Please enter lenght")); // Convert to ingteger to check valid input.
        if (pLenght < 8 || pLenght > 128) {

            window.alert("Please enter a valid number between 8-128");
            passLenght();

        } else if (!pLenght) {
            window.alert("Please enter a valid number between 8-128")
            passLenght();
        } else {
            window.alert("You have entered a valid lenght of: " + pLenght + "\n Password will now be generated");
            return pLenght;
        }
    }
}

function writePassword() {

    arraySplit = "";
    exitApplication = false;
    userInput = "";
    finalPassword = "";
    displayPassword = "";
    window.alert(" Lets check our password criteria options");
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    document.getElementById("password").readOnly = false;
    document.getElementById("password").value = displayPassword;
    document.getElementById("password").readOnly = true;
}

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function exitApplicationForm() {
    if (exitApplication === true) {

    } else {
        writePassword();
    }
}