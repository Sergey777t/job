let money,
    time, 
    startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.querySelectorAll('.expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    picOne = document.querySelector('.app');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,
};

startBtn.addEventListener('click', function () {
    money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (money === "" || isNaN(money) || money == null) {
    money = prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;

    budgetValue.textContent = appData.budget + " руб.";
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function () {
   
    let sum = 0;
     
    for (let i = 0; i < expensesItem.length; i++) {
            let a, b;
            a = expensesItem[i].value;
            b = expensesItem[++i].value;
            if ((isNaN(a)) && (a != null) && (b != null) && a != "" && b != '' && a.length < 25 && (!isNaN(b))) {
                appData.expenses[a] = b;
                sum += +b;
            } else {
                alert('Ввели  неправильное значение');
                expensesItem.length = 0;
                appData.expenses.length = 0;
                sum = 0;
                break;
            }    
    }
    expensesValue.textContent = sum.toFixed(2) + ' руб.';
});


optionalExpensesBtn.addEventListener('click', function () {

    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let a = optionalExpensesItem[i].value;
        if (a != null && (isNaN(a))) {

            appData.optionalExpenses[i] = a;
            optionalExpensesValue.textContent += a + " ,";
        } else {
           alert ('Вы ввели неправильное значение');
           appData.optionalExpenses = 0;
           optionalExpensesValue.textContent  = '';
           break
            
        }
    }
});

countBtn.addEventListener('click', function () {

    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        dayBudgetValue.textContent = appData.moneyPerDay + " руб.";
        if (appData.moneyPerDay < 1000) {
            levelValue.textContent = ('У вас низкий уровень достатка ')
                picOne.style.backgroundImage = "url('https://img.gta5-mods.com/q75/images/modern-yellow-jack-ymap-xml-fivem-ready/e5d687-20190716160339_1.jpg')"
                document.querySelector(".title").style.color ='white';
                document.querySelector('.data').style.color ='white';
                document.querySelector(".choose-expenses").style.color ='white';
                document.querySelector(".optionalexpenses").style.color ='white';
                document.querySelector(".count-budget").style.color ='white';
                document.querySelector(".choose-income-label").style.color ='white';
                document.querySelector (".time-data").style.color='white'
                ; 
        } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
            levelValue.textContent = ('У вас средний уровень достатка');
            picOne.style.backgroundImage = "url('https://vignette.wikia.nocookie.net/gta/images/f/f6/Los_Santos_City_Hall_GTAVe_Overview.jpg/revision/latest?cb=20160717160840&path-prefix=ru')"     ;
            document.querySelector(".title").style.color ='white';
            document.querySelector('.data').style.color ='white';
            document.querySelector(".choose-expenses").style.color ='white';
            document.querySelector(".optionalexpenses").style.color ='white';
            document.querySelector(".count-budget").style.color ='white';
            document.querySelector(".choose-income-label").style.color ='white';
            document.querySelector (".time-data").style.color='white'
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = ('У вас высокий уровень достатка');
            picOne.style.backgroundImage = "url('https://vk.vkfaces.com/824204/v824204778/9c9dd/PxBptlOlcKI.jpg')";   
            document.querySelector(".title").style.color ='white';
            document.querySelector('.data').style.color ='white';
            document.querySelector(".choose-expenses").style.color ='white';
            document.querySelector(".optionalexpenses").style.color ='white';
            document.querySelector(".count-budget").style.color ='white';
            document.querySelector(".choose-income-label").style.color ='white';
            document.querySelector (".time-data").style.color='white'
        } else {
            levelValue.textContent = ("Произошла ошибка");
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});


incomeItem.addEventListener('change', function () {
    let text = incomeItem.value;
    appData.income = text.split(', ');

    for (let i = 0; i < appData.income.length; i++) {
        if (isNaN(appData.income[i])) {
            incomeValue.textContent = appData.income;
        } else {
            appData.income = [];
            incomeValue.textContent = '';
            incomeValue.textContent = 'ERROR!!! Цифры и символы нельзя вводить';
        }
    }
})

checkSavings.addEventListener ('click', function() {
if (appData.savings==false) {
    appData.savings=true;}
else appData.savings =  false;});


 
sumValue.addEventListener ('input', function(){
if (appData.savings == true&&sumValue.value!=''&&sumValue.value!=null&&!isNaN(sumValue.value)
&&percentValue.value!=''&&percentValue.value!=null&&!isNaN(percentValue.value))

{   monthSavingsValue.textContent = (sumValue.value*percentValue.value/12/100).toFixed(2);
   yearSavingsValue.textContent = (sumValue.value*percentValue.value/100).toFixed(2);
}
else {
monthSavingsValue.textContent = 0 + ' руб.';
yearSavingsValue.textContent = 0 + " руб.";
}});
    
 percentValue.addEventListener ('input', function(){
    if (appData.savings == true&&sumValue.value!=''&&sumValue.value!=null&&!isNaN(sumValue.value)
    &&percentValue.value!=''&&percentValue.value!=null&&!isNaN(percentValue.value))
    {   monthSavingsValue.textContent = (sumValue.value*percentValue.value/12/100).toFixed(2);
       yearSavingsValue.textContent = (sumValue.value*percentValue.value/100).toFixed(2);
    }
    else {
    monthSavingsValue.textContent = 0 + ' руб.';
    yearSavingsValue.textContent = 0 + " руб.";
    }});
        
     


