function func(){
	var input1 = document.getElementById('input1').value;
	var arr = input1.split('');
	var n = 0;
	var result = document.getElementById('result')

	for(var i = 0; i < arr.length; i++){
		var check = parseInt(arr[i])
		if (isNaN(check)) {
			n = n;
		} else {
			n++
		}


		if (n%2==0) {
			result.innerHTML = 'В строке парное количество цифр'
		} else {
			result.innerHTML = 'В строке НЕ парное количество цифр'
		}
	}

	
	
	
}