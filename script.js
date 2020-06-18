
let money,time

function start () {
    money =prompt("Ваш бюджет на месяц?", ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
     
	while (money===""||isNaN(money)||money==null)
	 {
        money =prompt("Ваш бюджет на месяц?", '')
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
};

function chooseExpenses ()  {
    
 for (let i = 0; i < 2; i++) {
    
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');

	if ((typeof (a) === "string") && (a != null) && (b != null) && a != "" && b != '' && a.length < 50&&(!isNaN(b))) {
			appData.expenses[a] = b;
	}
	else {
		alert ('Ввели  неправильное значение');
		i--;

	}
}

}

chooseExpenses () ;

function detectDayBudget () {
appData.moneyPerDay = (appData.budget / 30).toFixed(3)
alert("Ваш  бюджет на день  " + appData.moneyPerDay + " ")
}


detectDayBudget();


function  detectLevel()  {
if (appData.moneyPerDay<100) {
	console.log('У вас низкий уровень достатка')
}
else if (appData.moneyPerDay>100&&appData.moneyPerDay<2000) {
	console.log ('У вас средний уровень достатка')
}
else if (appData.moneyPerDay>2000) {
	console.log ('У вас высокий уровень достатка')
}
else {
	console.log ("Произошла ошибка")
}
}

 detectLevel();

function checkSaving ()  {
    let save, percent
    if (appData.savings==true) {
		 save = prompt ('Сколько у Вас сбережений?', '');
		 percent= prompt ('Какой процент сбережений?','');
    }
    while (isNaN(save)||save==''|| save==null||isNaN(percent)||percent==''|| percent==null) {
		save = prompt ('Сколько у Вас сбережений?', '');
		percent = prompt ('Какой процент сбережений?', '');
	}
	appData.monthIncome=save/100/12*percent;

	alert(`'Ваш дополнительный доход в месяц по депозиту: '  ${appData.monthIncome.toFixed(2)} `)

}
 checkSaving ();


optionalExpenses = {

};

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
     let a = prompt('Статья не обязательных расходов?', '');
     if (a != null && (isNaN(a))) {
     x=i+1;
	 optionalExpenses[x] = a;
	 
    }
    else {i--;}
    }
}

 
