let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    start = function () {
        do {
            money = prompt('Ваш месячный доход?');
        } while (!isNumber(money)) {
            money = +money;
        }
    };

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function () {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++) {
            let nameExpense = prompt('Введите обязательную статью расходов'),
                amount;
            do {
                amount = prompt('Во сколько это обойдётся?');
            } while (!isNumber(amount)) {
            }
            this.expenses[nameExpense] = +amount;
        };
    },
    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }
    },
    getBudget: function () {
        return appData.budgetMonth - appData.budgetDay;
    },
    getTargetMonth: function () {
        if (appData.mission / appData.getBudget() >= 0) {
            alert('Цель будет достигнута');
        } else {
            alert('Цель не будет достигнута');
        }
        return appData.mission / appData.getBudget();
    },
    getStatusIncome: function () {
        if (appData.budgetDay >= 1200) {
            return 'У вас высокий уровень дохода';
        } else if (appData.budgetDay < 1200 && appData.budgetDay >= 600) {
            return 'У вас средний уровень дохода';
        } else if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
            return 'К сожалению, у вас уровень дохода ниже среднего';
        } else {
            return 'Что-то пошло не так';
        }
    },
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

console.log(`Расход за месяц - ${appData.expensesMonth}`);
console.log(`За какой период будет достигнута цель (в месяцах) - ${appData.getTargetMonth()}`);
console.log(`Уровень дохода - ${appData.getStatusIncome()}`);

console.log('Наша программа включает в себя данные');
for (let key in appData) {
    console.log(key, appData[key]);
}