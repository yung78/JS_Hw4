const rl = require("readline").createInterface(process.stdin, process.stdout);
const fs = require('fs');


function promiseRequest(request) {
    return new Promise((resolve, reject) => {
        rl.question(request, (numFromUser) => {
            resolve(numFromUser);
        });
    });
};

(async () => {
    const guessNumber = Math.round(Math.random() * 1000);
    console.log(`Новая игра!\nЯ загадал число: ${guessNumber}\n`);
    let counter = 1;
    
    while (true) {
        const numFromUser = await promiseRequest(`Попытка №${counter}\nВведите число от 0 до 999 или 'q' для выхода:`);
        console.log(`\nВы ввели: ${numFromUser}`);
        
        if (numFromUser == "q") {
            console.log("До новых встречь!\n");
            rl.close();
            fs.appendFileSync("logs.txt", `Выход из игры. Количество попыток: `+counter);
            break;
        }
        else {
            counter++;
            if (
            (numFromUser.length === 0)||
            (numFromUser === null)||
            (numFromUser === undefined)||
            (isNaN(numFromUser))
            ){
                console.log("Ошибка ввода\n");
            } else if (guessNumber > numFromUser) {
                console.log("Ваше число меньше\n");
            } else if (guessNumber < numFromUser) {
                console.log("Ваше число больше\n");
            } else {
                rl.close()
                fs.appendFileSync("logs.txt", `Вы победили! Количество попыток: `+counter);
                console.log("Вы победили!!!\n");
                rl.close()
                break;
            };
        };
    };      
}) ();
