window.addEventListener('load', () => {
    generatePassword()
})
const passwordElement = document.querySelector("#password");
const passwordLength = document.querySelector("#password-slider");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const checkBoxes = document.querySelectorAll('input[type="checkbox"]')
const resetButton = document.querySelector('#reset')


const lowerChars = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z"];

const allSymbols = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/"];

const allDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

passwordLength.addEventListener('mouseup', () => {
    generatePassword()
})

resetButton.addEventListener('click', () => {
    generatePassword()
})



checkBoxes.forEach(checkBox => {
    checkBox.addEventListener('input', () => {
        generatePassword();
    })
})

function generatePassword() {
    const password = generateRandomString(passwordLength.value, uppercase.checked, lowercase.checked, numbers.checked, symbols.checked)

    passwordElement.value = password;
}



function generateRandomString(length, uppercase, lowercase, numbers, symbols) {
    const availableCharacters = stringBuilder(uppercase, lowercase, numbers, symbols)
    let password = ""
    if (!uppercase && !lowercase && !numbers && !symbols) {
        return null
    } else {
        for (let i = 0; i < length; i++) {
            password += availableCharacters[getRandomInt(availableCharacters.length)]
        }
    }

    return password;
}

function stringBuilder(uppercase, lowercase, numbers, symbols) {
    let availableCharacters = [];

    if (uppercase) {
        let upperChars = [].concat(...(lowerChars.map(char => char.toUpperCase().split(''))));
        availableCharacters.push(...upperChars);
    }
    if (lowercase) {
        availableCharacters.push(...lowerChars);
    }
    if (numbers) {
        availableCharacters.push(...allDigits);
    }
    if (symbols) {
        availableCharacters.push(...allSymbols);
    }
    return availableCharacters;
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}