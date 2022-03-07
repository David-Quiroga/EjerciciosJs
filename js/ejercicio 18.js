	var n = new Number();
	var mayorr = new Number();
	var x = new Number();
	x = 0;
	do {
		x = x+1;
		document.write("Ingresa el numero ",x,'<BR/>');
		n = Number(prompt());
		if (x==1) {
			mayorr = n;
		} else {
			if (n>mayorr) {
				mayorr = n;
			}
		}
	} while (x!==10);
	document.write("El numero mas grande es: ",mayorr,'<BR/>');


