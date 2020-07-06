let money, time

function start() {
    money = prompt("Ваш бюджет на месяц?", ''),
        time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (money === "" || isNaN(money) || money == null) {
        money = prompt("Ваш бюджет на месяц?", '')
    }
    money = +money;
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function () {

        for (let i = 0; i < 2; i++) {

            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');

            if ((typeof (a) === "string") && (a != null) && (b != null) && a != "" && b != '' && a.length < 50 && (!isNaN(b))) {
                appData.expenses[a] = b;
            } else {
                alert('Ввели  неправильное значение');
                i--;

            }
        }

    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(3)
        alert("Ваш  бюджет на день  " + appData.moneyPerDay + " ")
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('У вас низкий уровень достатка')
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('У вас средний уровень достатка')
        } else if (appData.moneyPerDay > 2000) {
            console.log('У вас высокий уровень достатка')
        } else {
            console.log("Произошла ошибка")
        }
    },
    checkSaving: function () {
        let save, percent
        if (appData.savings == true) {
            save = prompt('Сколько у Вас сбережений?', '');
            percent = prompt('Какой процент сбережений?', '');
        }
        while (isNaN(save) || save == '' || save == null || isNaN(percent) || percent == '' || percent == null) {
            save = prompt('Сколько у Вас сбережений?', '');
            percent = prompt('Какой процент сбережений?', '');
        }
        appData.monthIncome = save / 100 / 12 * percent;

        alert(`'Ваш дополнительный доход в месяц по депозиту: '  ${appData.monthIncome.toFixed(2)} `)


    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let a = prompt('Статья не обязательных расходов?', '');
            if (a != null && (isNaN(a))) {
                x = i + 1;
                optionalExpenses[x] = a;

            } else {
                i--;
            }
        }
    },


    chooseIncome: function () {

        for (let i = 0; i < 1; i++) {

            let items = prompt('Введите дополнительный доход через запятую', '');
            appData.income = items.split(', ');

            appData.income.push (prompt('Может вы что-то забыли ?', ));
            console.log(appData.income);

            for (let key of appData.income) {

                if ([key] == ''|| [key] == null|| !isNaN([key])) {
                    alert('Неправильные значения')
                    appData.income.length = 0;
                    i--;
                    console.log(appData.income);
                    break;
                }  
                           }
            
        }

      appData.income.forEach ((item, count  ) => {
         alert( `Способы доп. заработка: ${item}  порядковый номер ${count}`)

      })
      

    }
    


}