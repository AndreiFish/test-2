// let x = 5;

// if (x > 10) {
//     console.log('very nice');
// } else {
//     console.log('very bad')
// }

// let a = 7;
// let b = '50';
// res = a + +b;
// console.log(res);

// alert('hello dog');

// let age = +prompt('how often?')
// let t = 10
// res = age + t
// console.log(res)




const titleProject = prompt('Название проекта?')
console.log(titleProject);

const screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями')
console.log(screensValue);

const responsive = prompt('нужен ли респонсивный сайт?')
console.log(responsive);


const service1 = prompt('Какой сервис нужен?')
console.log(service1);

const servicePrice1 = prompt('Сколько это будет стоить?')
console.log(servicePrice1);

const service2 = prompt('Какой еще сервис тебе нужен?')
console.log(service2);

const servicePrice2 = prompt('Сколько будет стоить этот второй сервис?')
console.log(servicePrice2);

const screenPrice = 20000;
fullPrice = screenPrice + +servicePrice1 + +servicePrice2
console.log(fullPrice);

let x = 10
servicePercentPrice = fullPrice - (fullPrice * x / 100)
console.log(Math.ceil(servicePercentPrice));



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