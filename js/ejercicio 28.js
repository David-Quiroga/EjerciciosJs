
	var cen, uni;
	var num = new Number();
	alert("Ingrese un numero de tres cifras",'<BR/>');
	num = Number(prompt());
	uni = num%10;
	cen = Math.trunc(num/100);
	if (uni==cen) {
		document.write("el numero es palindromo ",'<BR/>');
	} else {
		document.write("el numero no es palindromo ",'<BR/>');
	}


