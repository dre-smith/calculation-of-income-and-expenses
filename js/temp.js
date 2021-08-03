let money = +prompt('Ваш месячный доход?', 50000),
    income = 'фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 1000000,
    period = 12,
    expenses1 = prompt('Введите обязательную статью расходов?', 'Расход № 1'),
    amount1 = +prompt('Во сколько это обойдётся?', 10000),
    expenses2 = prompt('Введите обязательную статью расходов?', 'Расход № 2'),
    amount2 = +prompt('Во сколько это обойдётся?', 20000),

    showTypeOf = function (data) {
        console.log(data, typeof data)
    },
    getStatusIncome = function () {
        if (budgetDay >= 1200) {
            return 'У вас высокий уровень дохода';
        } else if (budgetDay < 1200 && budgetDay >= 600) {
            return 'У вас средний уровень дохода';
        } else if (budgetDay < 600 && budgetDay >= 0) {
            return 'К сожалению, у вас уровень дохода ниже среднего';
        } else {
            return 'Что-то пошло не так';
        }
    },
    getExpensesMonth = function () {
        let sumExpenses = amount1 + amount2;
        return sumExpenses;
    },
    getAccumulatedMonth = function () {
        let saveMoney = money - (amount1 + amount2);
        return saveMoney;
    },
    getTargetMonth = function () {
        let timeMission = mission / accumulatedMonth;
        return timeMission;
    },

    accumulatedMonth = getAccumulatedMonth(),
    budgetDay = Math.floor(accumulatedMonth / 30);

addExpenses = addExpenses.toLowerCase().split(', ');

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
getExpensesMonth()
getTargetMonth();
getStatusIncome();

console.log(getExpensesMonth());
console.log(addExpenses);
console.log(budgetDay);
console.log(getTargetMonth());
console.log(getStatusIncome());