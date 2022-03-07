	var notas = new Number();
	var n = new Number();
	var prom = new Number();
	var suma = new Number();
	var acum = new Number();
	acum = 1;
	suma = 0;
	alert("Ingrese cantidad de notas a promediar",'<BR/>');
	notas = Number(prompt());
	while (acum<=notas) {
		alert("Ingrese la nota numero ",acum,'<BR/>');
		n = Number(prompt());
		suma = suma+n;
		acum = acum+1;
	}
	prom = suma/notas;
	document.write("Su promedio es ",prom,'<BR/>');


