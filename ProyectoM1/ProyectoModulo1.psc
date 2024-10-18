Proceso ProyectoM1
	Definir nombreproducto Como Caracter;
	definir preciounitario Como Real;
	definir cantidad Como Entero;
	
	escribir 'Introduce el nombre del producto';
	leer nombreproducto;
	
	Escribir 'Introduce el precio del producto';
	leer preciounitario;
	
	Escribir 'introduce la cantidad de productos';
	leer cantidad;
	
	definir subtotal Como Real;
	subtotal <- (preciounitario * cantidad);
	
	Escribir 'El subtotal de su compra es:' , subtotal , ' pesos';  
	//////////////// Bucle para definir camino de descuentos//////////////
	definir respuesta Como caracter;
	respuesta <- " ";
	Repetir
		escribir 'Tiene usted algun cupón de descuento? si / no';
		leer respuesta;
	Hasta Que  respuesta = 'si' o respuesta = 'no';
	
///////////////// Arreglo unidimensional descuentos ////////////////
    definir valoresDescuento Como Real;
    Dimension valoresDescuento[4];
	valoresDescuento[0] <- 0.1;
	valoresDescuento[1] <- 0.2;
	valoresDescuento[2] <- 0.3;
	valoresDescuento[3] <- 0.4;
	definir respuestaCupon Como Caracter;
	definir dsct10 Como Caracter;
	DEFINIR dsct20 Como Caracter;
	definir dsct30 Como Caracter;
	dsct10 <- " ";
	dsct20 <- " ";
	dsct30 <- " ";
	
	///////////////////////////////// Camino descuento cupon + cantidad ///////////////////////////////// 
	definir descuentoCupon Como Real;
	Definir descuentoCantidad Como Real;
	descuentoCupon <- 0;
	si (respuesta = 'si') Entonces
		descuentoCupon <- 0;
		Escribir 'Porfavor ingrese el codigo de descuento: dsct10, dsct20, dsct30';
		leer respuestaCupon;
		/////////////// Descuento 10% //////////////
		si (respuestaCupon = "dsct10") Entonces
			descuentoCupon <- subtotal * valoresDescuento[0];
			si (cantidad < 5 ) Entonces
				Escribir 'Usted no tiene descuentos por cantidad';
				Escribir 'Su precio sin impuestos de : ' , (subtotal - descuentoCupon);
				descuentoCantidad<- 0;
			SiNo
				si (cantidad >= 5 y cantidad < 10) Entonces
					descuentoCantidad <- subtotal * valoresDescuento[0];
					Escribir "Por la compra de mas de 5 unidades tiene un 10% de descuento";
				FinSi
				
				Si (cantidad >= 10 y cantidad < 21 ) entonces
					descuentoCantidad <- subtotal  * valoresDescuento[1];
					Escribir "Por la compra entre 10 y 20  unidades tiene un 20% de descuento";
				FinSi
				si (cantidad >= 21) Entonces
					descuentoCantidad <- subtotal  * valoresDescuento[3];
					Escribir "Por la compra de mas de 21 unidades tiene un 40% de descuento";
				FinSi
				Escribir 'Su precio sin impuestos de : ' , (subtotal - descuentoCupon - descuentoCantidad);
				
			FinSi
		FinSi
		/////// Descuento 20% ///////////
		si (respuestaCupon = "dsct20") Entonces
			descuentoCupon <- subtotal * valoresDescuento[1];
			si (cantidad < 5 ) Entonces
				Escribir 'Usted no tiene descuentos por cantidad';
				Escribir 'Su precio sin impuestos de : ' , (subtotal - descuentoCupon);
				descuentoCantidad<- 0;
			SiNo
				si (cantidad >= 5 y cantidad < 10) Entonces
					descuentoCantidad <- subtotal * valoresDescuento[0];
					Escribir "Por la compra de mas de 5 unidades tiene un 10% de descuento";
				FinSi
				
				Si (cantidad >= 10 y cantidad < 21 ) entonces
					descuentoCantidad <- subtotal * valoresDescuento[1];
					Escribir "Por la compra entre 10 y 20  unidades tiene un 20% de descuento";
				FinSi
				si (cantidad >= 21) Entonces
					descuentoCantidad <- subtotal * valoresDescuento[3];
					Escribir "Por la compra de mas de 21 unidades tiene un 40% de descuento";
				FinSi
				Escribir 'Su precio sin impuestos de : ' , (subtotal - descuentoCupon - descuentoCantidad);
			FinSi
		FinSi
		//////// Descuento 30% ////////////
		si (respuestaCupon = "dsct30") Entonces
			descuentoCupon<- subtotal * valoresDescuento[2];
			si (cantidad < 5 ) Entonces
				Escribir 'Usted no tiene descuentos por cantidad';
				Escribir 'Su precio sin impuestos de : ' , subtotal;
				descuentoCantidad<- 0;
			finsi
		FinSi
	FinSi
	
	/////// Camino descuento solo cantidad //////
	Si (respuesta = 'no') Entonces
		si (cantidad < 5 ) Entonces
			Escribir 'Usted no tiene descuentos por cantidad';
			Escribir 'Su precio sin impuestos de : ' , (subtotal - descuentoCupon);
			descuentoCantidad<- 0;
		FinSi
		
		si (cantidad >= 5 y cantidad < 10) Entonces
			descuentoCantidad <- subtotal * valoresDescuento[0];
			Escribir "Por la compra de mas de 5 unidades tiene un 10% de descuento";
			
		FinSi
		
		Si (cantidad >= 10 y cantidad < 21 ) entonces
			descuentoCantidad <- subtotal * valoresDescuento[1];
			Escribir "Por la compra entre 10 y 20  unidades tiene un 20% de descuento";
			
		FinSi
		si (cantidad >= 21) Entonces
			descuentoCantidad <- subtotal * valoresDescuento[3];
			Escribir "Por la compra de mas de 21 unidades tiene un 40% de descuento";
			
		FinSi
		Escribir 'Su precio sin impuestos de : ' , (subtotal - descuentoCupon - descuentoCantidad);
	FinSi
	
	
	
	////////////////////  IVA ////////////////////
	
	Definir  IVA Como Real;
	Definir IVA_CORREGIDO Como Real;
	
	IVA <- 1.19;
	IVA_CORREGIDO <- 0.19;
	Escribir "El valor total de producto con IVA es de :" , ((subtotal - descuentoCupon - descuentoCantidad) * IVA);
	
	//////////////// ENVIO//////////////////
	
	Definir  envio Como Real;
	definir costo_envio Como Real;
	Definir valor_kilo Como Real;
	Definir kilos Como Real;
	costo_envio <- 100;
	valor_kilo <- 50;
	kilos <- 0;
	
	Escribir  "Ingrese el peso en kilos de o los productos';
	leer kilos;
	
	envio <- costo_envio + (valor_kilo * kilos);
	
	//////////////////////// TOTALES ///////////////////
	
	Escribir 'Ud tiene ', descuentoCupon , ' pesos por descuento de cupon';
	Escribir 'Ud tiene ', descuentoCantidad , ' pesos por descuento por cantidad';
	Escribir 'Ud esta pagando ' , ((subtotal - descuentoCupon - descuentoCantidad) * IVA_CORREGIDO) , ' pesos de impuesto';
	Escribir 'El costo de envio es de: ',  envio , ' pesos';
	
	Escribir 'El total a pagar es de : ' , (((subtotal - descuentoCupon - descuentoCantidad) * IVA) + envio);
	
	
FinProceso

	