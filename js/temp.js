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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function () {
        if (confirm('Есть ли у вас дополнительный источник заработка?')) {
            let itemIncome,
                cashIncome;
            do {
                itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Таксую');
            } while (isNumber(itemIncome) || itemIncome.trim() == false) {
            };
            do {
                cashIncome = prompt('Сколько в месяц зарабатываете на этом?', 10000);
            } while (!isNumber(cashIncome)) {
                cashIncome = +cashIncome;
            }
            appData.income[itemIncome] = cashIncome;
        }
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(',').map(word => word.trim().charAt(0).toUpperCase() + word.slice(1));
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++) {
            let itemExpenses,
                cashExpenses;
            do {
                itemExpenses = prompt('Введите обязательную статью расходов')
            } while (isNumber(itemExpenses) || itemExpenses.trim() == false) {
            }
            do {
                cashExpenses = prompt('Во сколько это обойдётся?');
            } while (!isNumber(cashExpenses)) {
            }
            this.expenses[itemExpenses] = +cashExpenses;
        };
    },
    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }
    },
    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
        if (appData.mission / appData.budgetMonth >= 0) {
            alert('Цель будет достигнута');
        } else {
            alert('Цель не будет достигнута');
        }
        return Math.ceil(appData.mission / appData.budgetMonth);
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
    getInfoDeposit: function () {
        if (appData.deposit) {
            do {
                appData.percentDeposit = prompt('Какой годовой процент?', 10);
            } while (!isNumber(appData.percentDeposit)) {
                appData.percentDeposit = +appData.percentDeposit;
            }
            do {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            } while (!isNumber(appData.moneyDeposit)) {
                appData.moneyDeposit = +appData.moneyDeposit;
            }
        };
    },
    calcSaveMoney: function () {
        return appData.budgetMonth * appData.period;
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

/* console.log(`Расход за месяц - ${appData.expensesMonth}`);
console.log(`За какой период будет достигнута цель (в месяцах) - ${appData.getTargetMonth()}`);
console.log(`Уровень дохода - ${appData.getStatusIncome()}`);

console.log('Наша программа включает в себя данные');
for (let key in appData) {
    console.log(key, appData[key]);
}; */

console.log(appData.addExpenses.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(', '));