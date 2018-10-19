function summNumbers(){
	var inputForEnterData = document.getElementById('inputForEnterData').value;
	var result = document.getElementById('result');
	var arrNumbers = inputForEnterData.split('');
	var res = 1;

	for (var i = 0; i < arrNumbers.length; i++){
		res = res * arrNumbers[i];
	}

	res % 2 == 0 ? result.innerHTML = 'Произведение цифр в строке парное' : result.innerHTML = 'Произведение цифр в строке НЕ парное';
}