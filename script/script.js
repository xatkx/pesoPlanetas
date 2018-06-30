
//gaveda en distintos planetas----

var peso = document.getElementById("caja");
var test = document.getElementById("test")
var option = document.getElementById("option")
var result = document.getElementById("resul")
var button = document.getElementById("enter")


//persona ====================>


button.addEventListener("click", algo);


function algo () {


	var g_marte = 3.7;
	var g_tierra = 9.8;
	var g_jupyter = 24.8;

	var personaPeso = parseInt(peso.value);
	var pesoFinal;

if (option.value == "marte") {
	
	pesoFinal = (personaPeso * g_marte) / g_tierra;	
	pesoFinal = parseInt(pesoFinal);

	result.value = pesoFinal+" kilos";
}else if(option.value == "jupyter") {
	
	pesoFinal = (personaPeso * g_jupyter) / g_tierra;
	pesoFinal = parseInt(pesoFinal);

	result.value = pesoFinal+" kilos";
		
}
else {
	result.value = "paso 2 please";
}


}










