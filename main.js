function calcular()
{
	var  numberEntered = document.getElementById('numberEntered').value;
	var numberValue=parseFloat(numberEntered);
	
	if(numberEntered == "" )
	{
		salida.innerHTML = "--";
		document.getElementById("salida").innerHTML
	}
	else if (numberValue < 21 )
	{
		diff = 21- parseFloat(numberEntered.value);
        var valueDiff = parseFloat(diferencia);
        salida.innerHTML = valueDiff.toFixed(2);
        document.getElementById("salida").innerHTML
	
	}
	else 
	{ 
	   diff = ((parseFloat(numberEntered.value)-21)*2);
        var valueDiff = parseFloat(diferencia);
        salida.innerHTML = valueDiff.toFixed(2);
        document.getElementById("salida").innerHTML
    }

}
  