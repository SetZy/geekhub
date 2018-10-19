function summNumbers(){
	var inputForEnterData = document.getElementById('inputForEnterData').value;
	var result = document.getElementById('result');
	var arrNumbers = String(inputForEnterData).split('');
	var res = 1;

	if (!inputForEnterData.match(/^[0-9]+$/)){
		alert('Введите пожалуйста числовое значение');
		return false;
	} else {
		for (var i = 0; i < arrNumbers.length; i++){
		res = res * arrNumbers[i];
		}
	}
	
	res == 0 ? result.innerHTML = 'Произведение цифр равно 0' : 
	res % 2 == 0 ? result.innerHTML = 'Произведение цифр в строке парное' : result.innerHTML = 'Произведение цифр в строке НЕ парное';
	
}