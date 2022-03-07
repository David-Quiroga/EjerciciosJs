var descuento, subtotal, total;
	var nombreproducto = new String();
	var costounitario = new Number();
	var unidadespedidas = new Number();
	alert("Nombre del producto",'<BR/>');
	nombreproducto = prompt();
	alert("Costo unitario",'<BR/>');
	costounitario = Number(prompt());
	alert("Unidades pedidas",'<BR/>');
	unidadespedidas = Number(prompt());
	subtotal = costounitario*unidadespedidas;
	document.write("",'<BR/>');
	document.write("El subtotal es de ",subtotal,'<BR/>');
	descuento = subtotal*0.1;
	document.write("Su descuento es de ",descuento,'<BR/>');
	total = subtotal-descuento;
	document.write("",'<BR/>');
	document.write("_______________________________",'<BR/>');
	document.write("El total de su factura es de: ",total,'<BR/>');
	document.write("_______________________________",'<BR/>');


