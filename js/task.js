'use strict';

function yourExpenses() {
    let expenses = prompt('Введите обязательную статью расходов?');
    return expenses;
}

function yourAmount() {
    let amount = +prompt('Во сколько это обойдётся?');
    return amount;
}

function yourIncomeLevel() {
    if (budgetDay >= 1200) {
        return 'У вас высокий уровень дохода';
    } else if (budgetDay < 1200 && budgetDay >= 600) {
        return 'У вас средний уровень дохода';
    } else if (budgetDay < 600 && budgetDay >= 0) {
        return 'К сожалению, у вас уровень дохода ниже среднего';
    } else {
        return 'Что-то пошло не так';
    }
}

let money = +prompt('Ваш месячный доход?'),
    income = 'фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 1000000,
    period = 12,
    expenses1 = yourExpenses(),
    amount1 = yourAmount(),
    expenses2 = yourExpenses(),
    amount2 = yourAmount(),
    budgetMonth = money - (amount1 + amount2),
    budgetDay = Math.floor(budgetMonth / 30),
    target = Math.ceil(mission / budgetMonth),
    incomeLevel = yourIncomeLevel();

console.log(`Тип переменной "money": ${typeof money}`);
console.log(`Тип переменной "income": ${typeof income}`);
console.log(`Тип переменной "deposit": ${typeof deposit}`);
console.log(`Количество символов в переменной "addExpenses": ${addExpenses.length}`);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей/долларов/гривен/юани`);
console.log(`Бюджет на день: ${budgetDay}`);
console.log(`Бюджет на месяц: ${budgetMonth}`);
console.log(`Цель будет достигнута за ${target} месяцев(-а)`);
console.log(`Статус дохода: ${incomeLevel}`);

addExpenses = addExpenses.toLowerCase().split(', ');
console.log(addExpenses);

/* alert('Вывести на экран в модальном окне (alert) сообщение с любым текстом');
console.log('Вывести в консоль сообщение с любым текстом'); */