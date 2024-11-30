Algoritmo num_parres_impares
	Definir numero1 Como Entero;
	leer numero1;
	definir resto Como Real;
	resto <- numero1 % 2;
	
	si (resto = 0) entonces
		escribir numero1 ," Es par";
	SiNo
		escribir numero1 ," Es impar";
	FinSi
	
FinAlgoritmo
