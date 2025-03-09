const titleProject = prompt('название проекта?')
console.log(titleProject, '(название проекта)');

const screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями')
console.log(screensValue, '(тип проекта)');

const responsive = prompt('нужен ли респонсивный сайт?')
console.log(responsive, '(респонсивный сайт)');

const service1 = prompt('Какой сервис нужен?')
console.log(service1, '(сервис 1)');

const servicePrice1 = prompt('Сколько это будет стоить?')
console.log(servicePrice1, '(стоимость сервис 1)');

const service2 = prompt('Какой еще сервис тебе нужен?')
console.log(service2, '(сервис 2)');

const servicePrice2 = prompt('Сколько будет стоить этот второй сервис?')
console.log(servicePrice2, '(стоимость сервис 2)');

const screenPrice = 20000;
let fullPrice = screenPrice + +servicePrice1 + +servicePrice2
console.log(fullPrice, '(общая стоимость)');

let percentage = 10
let servicePercentPrice = fullPrice - (fullPrice * percentage / 100)
console.log(Math.ceil(servicePercentPrice), '(стоимость с вычетом комиссии)');





let allServicePrices;
const getAllServicePrices = function () {
    return +servicePrice1 + +servicePrice2
}
allServicePrices = getAllServicePrices();
console.log(allServicePrices, '(функция, сумма сервисов)')


function getFullPrice() {
    return screenPrice + allServicePrices
}
fullPrice = getFullPrice();
console.log(fullPrice, '(функция, общая стоимость)')


let newTitle = '';
const getTitle = function () {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLocaleLowerCase()
}
newTitle = getTitle();
console.log(newTitle, '(функция, название проекта)')


const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * percentage / 100)
}
servicePercentPrice = getServicePercentPrices();
console.log(Math.ceil(servicePercentPrice), '(функция, стоимость с вычетом комиссии)');


const getRollbackMessage = function () {
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
}
getRollbackMessage();