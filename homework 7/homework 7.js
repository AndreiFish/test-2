const gameBotFunction = function () {
    const randomGenerate = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    let mysteryNumber = randomGenerate(1, 100);
    let tries = 5;

    const getResult = () => {
        if (tries === 0) {
            if (
                confirm("У вас закончились попытки. Хотите попробовать снова?")
            ) {
                tries = 5;
                mysteryNumber = randomGenerate(1, 100);
            } else {
                alert("Игра окончена!");
                return;
            }
        }

        let userInput = prompt("Угадайте число от 1 до 100");

        if (userInput === null) {
            alert("Игра окончена!");
            return;
        }

        userInput = userInput.trim();

        if (userInput === "" || isNaN(userInput)) {
            alert("Пожалуйста, введите корректное число!");
            getResult();
            return;
        }

        let answerNum = Number(userInput);

        if (answerNum > mysteryNumber) {
            tries--;
            alert(`Загаданное число меньше. Осталось попыток: ${tries}`);
        } else if (answerNum < mysteryNumber) {
            tries--;
            alert(`Загаданное число больше. Осталось попыток: ${tries}`);
        } else {
            if (
                confirm(
                    "Поздравляем! Вы угадали число! Хотите сыграть снова?"
                )
            ) {
                tries = 5;
                mysteryNumber = randomGenerate(1, 100);
            } else {
                alert("Игра окончена!");
                return;
            }
        }

        if (tries > 0) {
            getResult();
        } else {
            alert("У вас закончились попытки!");
            getResult();
        }
    };

    getResult();
};

gameBotFunction();  