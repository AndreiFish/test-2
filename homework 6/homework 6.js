const screenPrice = 20000;
let percentage = 10;
let allServicePrices;
let newTitle = '';
let titleProject;
let screensValue;
let responsive;
let service1;
let service2;



const checkIsNumber = function (x) {
    return !isNaN(parseFloat(x)) && isFinite(x)
}

const asking = function () {
    titleProject = prompt('название проекта?');
    screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями');
    responsive = prompt('нужен ли респонсивный сайт?');
}

const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = promt('Какой сервис нужен?', 'Сервис 1')
        } else if (i === 1) {
            service2 = promt('Какой сервис нужен?', 'Сервис 2')
        }

        let textFromPromt = '';
        while (!checkIsNumber(textFromPromt) || textFromPromt.trim() === '' || textFromPromt === null) {
            textFromPromt = promt('Сколько это будет стоить?')
        }
        sum = sum + Number(textFromPromt)
    }
    return sum
}

function getFullPrice() {
    return screenPrice + allServicePrices
}

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * percentage / 100)
}

const getTitle = function () {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLocaleLowerCase()
}




if (fullPrice > 50000) {
    console.log('сделаем скидку в 10 %')
} else if (fullPrice > 20000 && fullPrice < 50000) {
    console.log('сделаем скидку 5%')
} else if (fullPrice < 20000 && fullPrice > 0) {
    console.log('скидка не предусмотрена')
} else if (fullPrice < 0) {
    console.log('Что то пошло не так')
} else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
    console.log('Сектор приз')
}




asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
newTitle = getTitle();

console.log(titleProject, '(название проекта)');
console.log(screensValue, '(тип проекта)');
console.log(responsive, '(респонсивный сайт)');
console.log(service1, '(сервис 1)');
console.log(servicePrice1, '(стоимость сервис 1)');
console.log(service2, '(сервис 2)');
console.log(servicePrice2, '(стоимость сервис 2)');
console.log(Math.ceil(servicePercentPrice), '(функция, стоимость с вычетом комиссии)')