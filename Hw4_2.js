const rl = require("readline").createInterface(process.stdin, process.stdout);
const fs = require('fs');


function gameStart() {
    console.log("Новая игра!");
    fs.appendFileSync("logs.txt", "Новая игра!");
    const guessNumber = Math.round(Math.random() * 1000);
    console.log(`Я загадал число: ${guessNumber}\n`);
    fs.appendFileSync("logs.txt", `Я загадал число: ${guessNumber}\n`);
    let counter = 1;
    gameLogic()
    function gameLogic() {
        rl.question(`Попытка №${counter}\nВведите число от 0 до 999 или 'q' для выхода:`, (numFromUser) => {
            fs.appendFileSync("logs.txt", `Попытка №${counter}\nВведите число от 0 до 999 или 'q' для выхода:`);
            console.log(`\nВы ввели: ${numFromUser}`);
            fs.appendFileSync("logs.txt", `\nВы ввели: ${numFromUser}\n`);
            if (numFromUser == "q") {
                console.log("До новых встречь!\n");
                fs.appendFileSync("logs.txt", "До новых встречь!\n");
                rl.close();
                return;
            }
            else {
                counter++;
                if (numFromUser.length === 0 || numFromUser === null || numFromUser === undefined) {
                    console.log("Вы ничего не ввели\n");
                    fs.appendFileSync("logs.txt", "Вы ничего не ввели\n");
                    gameLogic();
                } else if (isNaN(numFromUser)) {
                    console.log("inputError\n");
                    fs.appendFileSync("logs.txt", "inputError\n");
                    gameLogic();
                } else if (guessNumber > numFromUser) {
                    console.log("Ваше число меньше\n");
                    fs.appendFileSync("logs.txt", "Ваше число меньше\n");
                    gameLogic();
                } else if (guessNumber < numFromUser) {
                    console.log("Ваше число больше\n");
                    fs.appendFileSync("logs.txt", "Ваше число больше\n");
                    gameLogic()
                } else {
                    rl.close()
                    fs.appendFileSync("logs.txt", "Вы победили!!!\n");
                    return console.log("Вы победили!!!\n");
                }
            }
        }); 
    }        
}


gameStart()