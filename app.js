// 1

let anumber = prompt("Вкажіть число");
let bnumber = anumber ** 2;
alert(`Число в квадраті буде ${bnumber}`);

// 2

let Name = prompt("Ваше ім'я?", "Олександр");
let Sum = prompt("Сума депозиту?", "10000");
let DataDepozity = prompt("Термін дії депозиту міс.?", "12");
let Profit;
Profit = ((Sum * 20) / 100 / 12) * DataDepozity;

alert(`Шановний ${Name}, 
Ви внесли ${Sum} грн., під 20% річних, 
на трермін ${DataDepozity} місяців. 
За цей період часу Ви заробите ${Profit} грн.`);

// 3

let a = +prompt("Ваше число a?", 8);
let b = +prompt("Ваше число b", 3);

let sumab = a + b;
let differenceab = a - b;
let multiplicationab = a * b;
let divisionab = a / b;

alert(`Сумма чисел: ${sumab}
Різниця чисел: ${differenceab}
Множення чисел: ${multiplicationab}
Ділення чисел: ${divisionab}`);
