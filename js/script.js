let money = 100000,
    income = 'фриланс',
    addExpenses = 'интернет, такси, коммуналка',
    deposit = true,
    mission = 1000000,
    period = 12,
    budgetDay = money / 30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей/долларов/гривен/юани`);
console.log(budgetDay);

addExpenses = addExpenses.toLowerCase().split(', ');
console.log(addExpenses);

/* alert('Вывести на экран в модальном окне (alert) сообщение с любым текстом');
console.log('Вывести в консоль сообщение с любым текстом'); */