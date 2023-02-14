const rl = require("readline").createInterface(process.stdin, process.stdout);
const fs = require('fs');


function gameStart() {
    const guessNumber = Math.round(Math.random() * 1000);
    console.log(`Новая игра!\nЯ загадал число: ${guessNumber}\n`);
    let counter = 1;
    
    gameLogic();
    
    function gameLogic() {
        // while (true) {
            rl.question(`Введите число от 0 до 999 или 'q' для выхода: `, (numFromUser) => {
                console.log(`Попытка №${counter}\nВы ввели: ${numFromUser}`);
                if (numFromUser == "q") {
                    console.log("До новых встречь!\n");
                    rl.close();
                    fs.appendFileSync("logs.txt", `Выход из игры. Количество попыток: `+counter);
                    return;
                } else {
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
                        rl.close();
                        fs.appendFileSync("logs.txt", `Вы победили! Количество попыток: `+counter);
                        return console.log("Вы победили!!!\n");
                    }
                    gameLogic();
                };
            });
        // };
    };     
};


gameStart()