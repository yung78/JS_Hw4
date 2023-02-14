function getPasswordChecker(password) {
    return function checkPass(inputUserPass) {
            return inputUserPass === password;
        
    }
}

const check = getPasswordChecker('qwerty12345')

console.log(check('12345qwerty'))
console.log(check('йцукен12345'))
console.log(check('qwerty12345'))