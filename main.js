
(function(){

    var formulario = document.getElementByName("formulario")[0]
        elementos = formulario.elements,
        boton = document.getElementById("btn");

    var validarMonkeyA = function(e){
        if (formulario.monkeyA.checked == true ){
        } else {
            alert ("Completa el campo Monkey");
            e.preventDefault();
        }
    };
        var validarMonkeyB = function(e){
        if (formulario.monkeyB.checked == true ){
        } else {
            alert ("Completa el campo Monkey");
            e.preventDefault();
        }
    };
    var validarSmile = function(e){
        if (formulario.smile[0].checked == true || formulario.smile[1].checked == false){
            img.innerHTML = '<img src="img/monkeyHappy.jpg">';
        } else {
            img.innerHTML = '<img src="img/monkeySad.jpg">';
            alert("Completa el campo Smile");
            e.preventDefault();
        }
    }


    var validar = function(e){
        validarMonkeyA(e);
        validarMonkeyB(e);
        validarSmile(e);
    };

    formulario.addEventListener("submit", validar);

}())
var numero1 = document.getElementById("numero1");
var diferencia = 0;

function calcular()
{
	var  numero1=numero1.value;
	var valorNumerico=parseFloat(numero1);
	
	if(numero1 == "" )
	{
		salida.innerHTML = "--";
		document.getElementById("").innerHTML
	}
	else if (val_num1 > 21 )
	{
		diferencia =(( parseFloat(numero1.value)-21)*2);
		var valorDiferencia= parseFloat(diferencia);
		salida.innerHTML = valorDiferencia.toFixed(2);
		document.getElementById("").innerHTML 
	
	}
	else 
	{
		diferencia =21- parseFloat(numero1.value);
		var valorDiferencia= parseFloat(diferencia);
		salida.innerHTML = valorDiferencia.toFixed(2);
		document.getElementById("").innerHTML
	}

}
  