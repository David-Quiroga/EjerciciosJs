var cont, suma;
	var n = new Number();
	alert("Ingrese un numero",'<BR/>');
	n = Number(prompt());
	cont = 0;
	suma = 0;
	while (cont<n) {
		cont = cont+1;
		suma = suma+cont;
	}
	document.write("La suma es: ",suma,'<BR/>');


