function calcular()
{
	var numberEntered = document.getElementById("numberEntered").value;
	var resta = 21-parseFloat(numberEntered);
	var doble = (parseFloat (numberEntered)-21)*2;
	var salida = document.getElementById("salida");
	
	if(numberEntered == "" )
	{
		document.getElementById("salida").innerHTML = "<div class='alert'>Ingrese valores</div>";
	} 
	else if (numberEntered < 21 ) 
	{
		salida.innerHTML = resta;
	} 
	else 
	{ 
	   salida.innerHTML = doble;
    }

}
  