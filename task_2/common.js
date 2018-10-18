function checkTheNumberOfNumbers(){
	var inputForEnterData = document.getElementById('inputForEnterData').value;
	var result = document.getElementById('result');
	var res = inputForEnterData.match(/\d/g).length;

	res%2 == 0 ? result.innerHTML = 'В строке парное количество цифр' : result.innerHTML = 'В строке НЕ парное количество цифр';	
}