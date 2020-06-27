function getNumber(num){
	var result = document.getElementById("result");
	result.value += num;
}

function clearResult(){
	var result = document.getElementById("result");
	result.value = "";
}

function getResult(){
	var result = document.getElementById("result");
	result.value = eval(result.value);
}

function square(){
	var result = document.getElementById("result");
	result.value = Math.pow(result.value, 2);
}

function squareRoot(){
	var result = document.getElementById("result");
	result.value = Math.sqrt(result.value);
} 