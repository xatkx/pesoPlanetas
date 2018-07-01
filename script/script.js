
//gaveda en distintos planetas----

var peso = document.getElementById("caja");
var test = document.getElementById("test")
var option = document.getElementById("option")
var result = document.getElementById("resul")
var button = document.getElementById("enter")


//persona ====================>


button.addEventListener("click", algo);


function algo () {
   
 

	var g_tierra = 9.8;
	var mercurio = 2.78;
	var venus = 8.87;
	var luna = 1.62;
	var marte = 3.72;
	var jupiter = 22.88;
	var saturno = 9.05;
	var urano = 7.77; 
	var neptuno = 11;
	var pluton = 0.4;


	var personaPeso = parseInt(peso.value);
	console.log(personaPeso);
	var pesoFinal;

//------------------------------------------
	switch (option.value) {
	case "marte":
		pesoFinal = (personaPeso * marte) / g_tierra;
		pesoFinal = parseInt(pesoFinal);
		result.value = pesoFinal+" kilos";
		break;
	case "jupyter":
		pesoFinal = (personaPeso * jupiter) / g_tierra;
		pesoFinal = parseInt(pesoFinal);
		result.value = pesoFinal+" kilos";
	case "mercurio":
		pesoFinal = (personaPeso * mercurio) / g_tierra;
		pesoFinal = parseInt(pesoFinal);
		result.value = pesoFinal+" kilos";
		break;
	case "venus":
		pesoFinal = (personaPeso * venus) / g_tierra;
		pesoFinal = parseInt(pesoFinal);
		result.value = pesoFinal+" kilos";
	case "luna":
		pesoFinal = (personaPeso * luna) / g_tierra;
		pesoFinal = parseInt(pesoFinal);
		result.value = pesoFinal+" kilos";
		break;
	case "saturno":
		pesoFinal = (personaPeso * saturno) / g_tierra;
		pesoFinal = parseInt(pesoFinal);
		result.value = pesoFinal+" kilos";
	case "urano":
		pesoFinal = (personaPeso * urano) / g_tierra;
		pesoFinal = parseInt(pesoFinal);
		result.value = pesoFinal+" kilos";
		break;
	case "neptuno":
		pesoFinal = (personaPeso * neptuno) / g_tierra;
		pesoFinal = parseInt(pesoFinal);
		result.value = pesoFinal+" kilos";
	case "pluton":
		pesoFinal = (personaPeso * pluton) / g_tierra;
		pesoFinal = parseInt(pesoFinal);
		result.value = pesoFinal+" kilos";
		break;

	default:
		// statements_def
		result.value = "paso 2 please";
		break;
}




}









