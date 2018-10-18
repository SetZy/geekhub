function func(){
	var input1 = document.getElementById('input1').value;
	var result = document.getElementById('result');
	var res = input1.split(/\d/).length-1;
	if (res%2 == 0) {
		result.innerHTML = 'В строке парное количество цифр'
	} else {
		result.innerHTML = 'В строке НЕ парное количество цифр'
	}
	alert(res)
	
	
	/*var arr = input1.split('');
	var n = 0;
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
	}*/
	

	
	
	
}