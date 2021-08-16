var start = document.getElementById('start'),
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

class AppData {
    constructor() {
        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.income = {};
        this.incomeMonth = 0;
        this.addIncome = [];
        this.expenses = {};
        this.expensesMonth = 0;
        this.addExpenses = [];
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
    };
    start() {
        if (salaryAmount.value === '') {
            alert('Ошибка! Поле "Месячный доход" должно быть заполнено!');
            return;
        };
        this.budget = +salaryAmount.value;
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getIncomeMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();
        this.blocked();
        this.eventsToRunCode();
        this.showResult();
    };
    cancel() {
        const inputClear = document.querySelectorAll('input[type=text]');
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
        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.income = {};
        this.incomeMonth = 0;
        this.addIncome = [];
        this.expenses = {};
        this.expensesMonth = 0;
        this.addExpenses = [];
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        depositСheck.checked = false;
        start.style.display = 'block';
        cancel.style.display = 'none';
    };
    showResult() {
        const _this = this;
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = +this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();
        periodSelect.addEventListener('mousemove', function () {
            incomePeriodValue.value = _this.calcPeriod();
        });
    };
    blocked() {
        document.querySelectorAll('input[type=text]').forEach(function (item) {
            item.disabled = true;
        });
        start.style.display = 'none';
        cancel.style.display = 'block';
    };
    addExpensesBlock() {
        var cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        };
    };
    addIncomeBlock() {
        var cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        };
    };
    getExpenses() {
        const _this = this;
        expensesItems.forEach(function (item) {
            var itemExpenses = item.querySelector('.expenses-title').value,
                cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                _this.expenses[itemExpenses] = +cashExpenses;
            };
        });
    };
    getIncome() {
        const _this = this;
        incomeItems.forEach(function (item) {
            var itemIncome = item.querySelector('.income-title').value,
                cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                _this.income[itemIncome] = +cashIncome;
            };
        });
    };
    getAddExpenses() {
        const _this = this;
        var addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function (item) {
            item = item.trim();
            if (item !== '') {
                _this.addExpenses.push(item);
            };
        });
    };
    getAddIncome() {
        const _this = this;
        additionalIncomeItem.forEach(function (item) {
            var itemValue = item.value.trim();
            if (itemValue !== '') {
                _this.addIncome.push(itemValue);
            };
        });
    };
    getExpensesMonth() {
        for (var key in this.expenses) {
            this.expensesMonth += +this.expenses[key];
        };
    };
    getIncomeMonth() {
        for (var key in this.income) {
            this.incomeMonth += +this.income[key];
        };
    };
    getBudget() {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    };
    getTargetMonth() {
        return targetAmount.value / this.budgetMonth;
    };
    getStatusIncome() {
        if (this.budgetDay >= 1200) {
            return 'У вас высокий уровень дохода';
        } else if (this.budgetDay < 1200 && this.budgetDay >= 600) {
            return 'У вас средний уровень дохода';
        } else if (this.budgetDay < 600 && this.budgetDay >= 0) {
            return 'К сожалению, у вас уровень дохода ниже среднего';
        } else {
            return 'Что-то пошло не так';
        };
    };
    getInfoDeposit() {
        const isNumber = function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };
        if (this.deposit) {
            do {
                this.percentDeposit = prompt('Какой годовой процент?', 10);
            } while (!isNumber(this.percentDeposit)) {
                this.percentDeposit = +this.percentDeposit;
            }
            do {
                this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            } while (!isNumber(this.moneyDeposit)) {
                this.moneyDeposit = +this.moneyDeposit;
            }
        };
    };
    calcPeriod() {
        return this.budgetMonth * periodSelect.value;
    };
    eventsToRunCode() {
        if (depositСheck.checked) {
            this.deposit = 'true';
        } else {
            this.deposit = 'false';
        };
    };
    eventListener() {
        start.addEventListener('click', this.start.bind(this));
        cancel.addEventListener('click', this.cancel.bind(this));
        expensesPlus.addEventListener('click', this.addExpensesBlock);
        incomePlus.addEventListener('click', this.addIncomeBlock);
        periodSelect.oninput = function () {
            periodAmount.innerHTML = periodSelect.value;
        };
        depositСheck.addEventListener('click', this.eventsToRunCode.bind(this));
    };
};

const appData = new AppData();
appData.eventListener();