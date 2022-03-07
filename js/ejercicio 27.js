	var acum, i, n, nota, prom;
	alert("ingrese el numero de notas",'<BR/>');
	n = Number(prompt());
	acum = 0;
	for (i=1;i<=n;i++) {
		alert("Ingrese la nota:",i,":",'<BR/>');
		nota = Number(prompt());
		acum = acum+nota;
	}
	prom = acum/n;
	document.write("El promedio es: ",prom,'<BR/>');


