let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    income = 'фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 1000000,
    period = 12,
    expenses = [],

    getStart = function () {
        do {
            money = prompt('Ваш месячный доход?');
        } while (!isNumber(money)) {
        }
    },
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
        let amount = 0,
            sum = 0;

        for (let i = 0; i < 2; i++) {
            expenses[i] = prompt('Введите обязательную статью расходов');
            do {
                amount = prompt('Во сколько это обойдётся?');
            } while (!isNumber(amount)) {
                sum += +amount;
            }
        };
        return sum;
    },
    getAccumulatedMonth = function () {
        return money - expensesAmount;
    },
    getTargetMonth = function () {
        if (mission / accumulatedMonth >= 0) {
            alert('Цель будет достигнута');
        } else {
            alert('Цель не будет достигнута');
        }
        return mission / accumulatedMonth;
    },

    start = getStart(),
    expensesAmount = getExpensesMonth(),
    accumulatedMonth = getAccumulatedMonth(),
    budgetDay = Math.floor(accumulatedMonth / 30);

addExpenses = addExpenses.toLowerCase().split(', ');

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
getTargetMonth();
getStatusIncome();

console.log(expensesAmount);
console.log(addExpenses);
console.log(budgetDay);
console.log(getStatusIncome());