	var acumulador, cont, i, j, k, m, num;
	document.write("Ingrese un numero",'<BR/>');
	num = prompt();
	if (num<3) {
		document.write("No se puede ejecutar con menores a 3",'<BR/>');
	} else {
		cont = num;
		acumulador = "";
		for (i=1;i<=3;i++) {
			acumulador = " ";
			for (j=1;j<=cont;j++) {
				acumulador = acumulador+" * ";
			}
			cont = cont-1;
			document.write(acumulador,'<BR/>');
		}
		cont = cont+1;
		for (k=1;k<=2;k++) {
			acumulador = " ";
			cont = cont+1;
			for (m=1;m<=cont;m++) {
				acumulador = acumulador+" * ";
			}
			document.write(acumulador,'<BR/>');
		}
	}


