function CheckTheNumberOfNumbers(){
	var InputForEnterData = document.getElementById('InputForEnterData').value;
	var result = document.getElementById('result');
	var res = InputForEnterData.match(/\d/g).length;
	
	res%2 == 0 ? result.innerHTML = 'В строке парное количество цифр' : result.innerHTML = 'В строке НЕ парное количество цифр';	
}