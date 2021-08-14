let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    buttonPlus = document.getElementsByTagName('button'),
    incomePlus = buttonPlus[0],
    expensesPlus = buttonPlus[1],
    depositСheck = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-items .income-title'),
    incomeItems = document.querySelectorAll('.income-items'),
    expensesTitle = document.querySelector('.expenses-items .expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    main = document.querySelector('.main');

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    expensesMonth: 0,
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    start: function () {
        if (salaryAmount.value === '') {
            alert('Ошибка! Поле "Месячный доход" должно быть заполнено!');
            return;
        };
        appData.budget = +salaryAmount.value;
        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getIncomeMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.blocked();
        appData.showResult();

    },
    cancel: function () {
        let inputClear = document.querySelectorAll('input[type=text]');
        inputClear.forEach(function (item) {
            item.disabled = false;
            item.value = '';
        });
        periodAmount.innerHTML = 1;
        periodSelect.value = 1;
        expensesPlus.style.display = 'block';
        incomePlus.style.display = 'block';
        if (expensesItems.length === 2) {
            expensesItems[0].parentNode.removeChild(expensesItems[1]);
        } else if (expensesItems.length === 3) {
            expensesItems[0].parentNode.removeChild(expensesItems[1]);
            expensesItems[0].parentNode.removeChild(expensesItems[2]);
        };
        if (incomeItems.length === 2) {
            incomeItems[0].parentNode.removeChild(incomeItems[1]);
        } else if (incomeItems.length === 3) {
            incomeItems[0].parentNode.removeChild(incomeItems[1]);
            incomeItems[0].parentNode.removeChild(incomeItems[2]);
        };
        appData.income = {},
            appData.incomeMonth = 0,
            appData.addIncome = [],
            appData.expenses = {},
            appData.addExpenses = [],
            appData.deposit = false,
            appData.percentDeposit = 0,
            appData.moneyDeposit = 0,
            appData.budget = 0,
            appData.budgetDay = 0,
            appData.budgetMonth = 0,
            appData.expensesMonth = 0;
        start.style.display = 'block';
        cancel.style.display = 'none';
    },
    showResult: function () {
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = +this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();
        periodSelect.addEventListener('mousemove', function () {
            incomePeriodValue.value = appData.calcPeriod();
        });
    },
    blocked: function () {
        document.querySelectorAll('input[type=text]').forEach(function (item) {
            item.disabled = true;
        });
        start.style.display = 'none';
        cancel.style.display = 'block';
    },
    addExpensesBlock: function () {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        };
    },
    addIncomeBlock: function () {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        };
    },
    getExpenses: function () {
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value,
                cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = +cashExpenses;
            };
        });
    },
    getIncome: function () {
        incomeItems.forEach(function (item) {
            let itemIncome = item.querySelector('.income-title').value,
                cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                appData.income[itemIncome] = +cashIncome;
            };
        });
    },
    getAddExpenses: function () {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function (item) {
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            };
        });
    },
    getAddIncome: function () {
        additionalIncomeItem.forEach(function (item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            };
        });
    },
    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        };
    },
    getIncomeMonth: function () {
        for (let key in appData.income) {
            appData.incomeMonth += +appData.income[key];
        };
    },
    getBudget: function () {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
        return targetAmount.value / appData.budgetMonth;
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
        };
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
    calcPeriod: function () {
        return appData.budgetMonth * periodSelect.value;
    },
};

start.addEventListener('click', appData.start);
cancel.addEventListener('click', appData.cancel);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.oninput = function () {
    periodAmount.innerHTML = periodSelect.value;
};