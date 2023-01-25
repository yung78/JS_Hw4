function getPasswordChecker(password) {
    return function checkPass(inputUserPass) {
            let boolean = (inputUserPass === password);
            return boolean
        
    }
}

const check = getPasswordChecker('qwerty12345')

console.log(check('12345qwerty'))
console.log(check('йцукен12345'))
console.log(check('qwerty12345'))