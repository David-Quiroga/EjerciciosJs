	var  cont, impares, pares;
    impares=0;
    pares=0;
	alert("Ingresar 10  Numeros Enteros.",'<BR/>');
	for (cont=1;cont<=10;cont++) {
        num = Number(prompt("Ingrse 10 numeros"));
		if (((num%2)==0)) {
			pares = pares+1;
		} 
		else {
			impares = impares+1;
		}

	}
document.write("Pares Ingresados: ",pares,'<BR/>');
document.write("Impares Ingresados: ",impares,'<BR/>');

