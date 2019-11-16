'use strict';

var money = prompt('Ваш бюджет на месяц'),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    costs = prompt('Введите обязательную статью расходов в этом месяце'),
    cost = prompt('Во сколько обойдется?');

var appDate = {
    budget: money,
    tineData: time,
    expenses: {
        costs: cost
    },
    optuinalExpenses: '',
    income: [],
    saving: false
};

var budgetOnMouth = (appDate.budget - cost) / 30;

alert('Бюджет на день ' + budgetOnMouth);