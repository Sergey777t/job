let money =+prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};


metka: for (let i = 0; i < 2; i++) {
    
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');

	if ((typeof (a) === "string") && (typeof (a) != 'object') && (typeof (b) != 'object') && a != "" && b != '' && a.length < 50) {
			appData.expenses[a] = b;
	}
	else {
		alert ('Ввели  неправильное значение');
		i--;

	}
}
appData.moneyPerDay = appData.budget / 30;

alert("Ваш  бюджет на день  " + appData.moneyPerDay + " ")

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


