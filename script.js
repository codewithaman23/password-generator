const password = document.getElementById("password");
const length = document.getElementById("lenght");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");


const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}";


function generatePassword() {

    let characters = "";

    if (uppercase.checked && lowercase.checked && numbers.checked && symbols.checked) {
        characters = upperChars + lowerChars + numberChars + symbolChars;
    }

    else if (uppercase.checked && lowercase.checked && numbers.checked) {
        characters = upperChars + lowerChars + numberChars;
    }

    else if (uppercase.checked && lowercase.checked) {
        characters = upperChars + lowerChars;
    }

    else if (uppercase.checked) {
        characters = upperChars;
    }

    else if (lowercase.checked) {
        characters = lowerChars;
    }

    else if (numbers.checked) {
        characters = numberChars;
    }

    else if (symbols.checked) {
        characters = symbolChars;
    }


    let generatedPassword = "";

    for (let i = 0; i < length.value; i++) {

        const randomIndex = Math.floor(
            Math.random() * characters.length
        );

        generatedPassword = generatedPassword + characters[randomIndex];
    }

    password.value = generatedPassword;
}


generateBtn.addEventListener("click", generatePassword);
