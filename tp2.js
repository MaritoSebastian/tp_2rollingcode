//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
/*  let Edad   
    
while (isNaN(Edad)||Edad=="") {
    Edad=prompt("ingresa tu edad")
    if (isNaN(Edad)) {
        alert("debes ingresar un valor numerico")

        
    }else if(Edad=="") {
      alert("debes ingresar un valor valido")

    }

    
}
if (Edad>18) {
    alert("felicidades ya puedes conducir")
    
} else { alert("no puedes conducir aun")
    
}  */
/* 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

Ejemplo:



Input: 5
Input: 50
Input: hola10 */
/* let Calificacion;
do {

  Calificacion = parseInt(prompt("ingresa la nota de tu examen"));
  if (isNaN(Calificacion)) {
    alert("debes ingresa una valor nmerico valido");
  } else if (Calificacion < 0 || Calificacion > 10) {
    alert("la nota debe estar entre los valores entre  0  y 10");

  }
} while (
  isNaN(Calificacion) ||
  Calificacion < 0 ||
  Calificacion > 10 

)
switch (true) {
  case Calificacion >= 0 && Calificacion <= 2:
    alert(`su calificacion ${Calificacion} es muy deficiente`);

    break;
  case Calificacion >= 3 && Calificacion <= 4:
    alert(`su calificacion ${Calificacion} es deficiente`);
    break;
  case Calificacion >= 5 && Calificacion <= 6:
    alert(`su calificacion ${Calificacion} suficiente`);

    break;
  case Calificacion === 7:
    alert(`su calificacion ${Calificacion} esta bien`);

    break;
  case Calificacion >= 8 && Calificacion <= 9:
    alert(`su calificacion ${Calificacion} esta Notable`);

    break;
  case Calificacion === 10:
    alert(`su calificcion ${Calificacion} es sobresaliente`);

    break;
}
alert("saliste del programa"); */
//-----------------------------------------------
/*   3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

/*     Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp */
/*let Confirmar = true;
let Frase_N = true;
let fraces = [];
do {
  Frase_N = prompt("ingresa la frase ").toLowerCase().trim();

  if (Frase_N === "") {
    alert("debes ingresa una frase");
  } else {
    fraces[fraces.length] = Frase_N;

    Confirmar = confirm("queres seguir ingresando fraces");
  }
} while (Confirmar);

alert(fraces.join("-")); */
//---------------------------------------
//otra forma usando push
/* let Confirmar = true;
let fraces = [];

do {
  let Frase_N = prompt("ingresa la frase ").toLowerCase().trim();

  if (Frase_N === "") {
    alert("Debes ingresar una frase");
  } else {
    fraces.push(Frase_N);
    Confirmar = confirm("queres seguir ingresando fraces");
  }
} while (Confirmar);

alert(fraces.join("-")); */
//-----------------------------------------------

//4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
/* let confirmar = true;
let Num;
let Numeros = [];
let Suma;
Suma = 0;

while (confirmar) {
  Num = parseInt(prompt("ingesa el numero "));
  if (isNaN(Num)) {
    alert(
      "el valor ingresado no es un numero debes ingresa valores numerico validos"
    );
  } else {
    Numeros[Numeros.length] = Num;
    confirmar = confirm("queres seguir ingresando numeros");
  }
}
for (let index = 0; index < Numeros.length; index++) {
  Suma += Numeros[index];
} 
alert(`la suma total del los numero ingresados es ${Suma}`);*/
//-----------------------------------------
/*  5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 



Input:  40773821 
Output: ‘L’
 */
/*  let confirmacion = true;
let Resto;
let letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];
let letra_dni;
while (confirmacion) {
  let Numero =prompt("ingresa un numero o presiona cancelar para");
  if (Numero===null) {
    confirmacion=false
    break;
  }
  parseInt(Numero)
  if (isNaN(Numero)  || Numero < 0 || Numero > 99999999 ) {
    alert("no es un valo vlido,ingresa un valor valido entr 0 y99999999 ");
  } else {
    Resto = Numero % 23;
    letra_dni = letras[Resto];
    alert(
      `la letra que corresponde al dni numero ${Numero} es la letra'${letra_dni}' `
    );
    
  }
}

alert("saliste del programa"); */
/* 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
……. */
/* let piramide=''
for (let index = 0; index <= 30; index++) {
  for (let j = 0; j <= index; j++) {
    piramide +=j+''
  
  }
  piramide +='\n'
  
}
console.log(piramide) */

/* 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1 */
/* let pirinvertida=''
let limite=parseInt(prompt('ingresa un unumor menor o igual a 50'))
if (isNaN(limite)||limite>50 ||limite<0) {
  alert('el numero o esta dentro del arango indicado')
  
} else {

for (let index = 30; index >= 0; index--) {
  for (let j = 0; j <= index; j++) {
  pirinvertida += j+ ''
  
    
  }
  pirinvertida +='\n'

  
}
  
}

  console.log(pirinvertida);
 */
/* 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

  1
  12
  123
  1234
  1234500
  123456
  …… */
/*  let Pir_numerada = "";
let ingresa_numero = parseInt(
  prompt("ingresa un numero mayor que 1 y menor o igual a 50")
);
if (
  isNaN(ingresa_numero) ||
  ingresa_numero == 1 ||
  ingresa_numero > 50 ||
  ingresa_numero <= 0
) {
  alert("el numeto debe estar dentro del rano inicado");
} else {
  for (let index = 0; index <= ingresa_numero; index++) {
    for (let j = 1; j < index; j++) {
      Pir_numerada += j  + "";
    }
    Pir_numerada += "\n";
  }
}
console.log(Pir_numerada); */

/* 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10 */
/* let limite = 500;
let multiplo;

for (let index = 1; index <= limite; index++) {
  document.write(index);
  if (index % 4 === 0) {
    document.write("(multiplo de 4)");
  }
  if (index % 9 === 0) {
    document.write("(multiplo de 9)");
  }
  document.write("<br>");

  //linea cada 5
  if (index % 5 === 0) {
    document.write("<hr>");
  }
} */

/* 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
 */
/* let filas = parseInt(prompt("ingresa las filas"));
let columnas = parseInt(prompt("ingresa las columnas"));

//hacemos las validaciones
if (isNaN(filas) || filas <= 0 || isNaN(columnas) || columnas <= 0) {
  alert("debes ingresa un valor vlido mayo que cero");
} else {
  //calcular el valor total inicicial
  let total = filas * columnas;

  document.write('<table border="1" style>');
  for (let i_filas = 0; i_filas < filas; i_filas++) {
    document.write("<tr>");
    for (let i_columnas = 0; i_columnas < columnas; i_columnas++) {
      document.write("<td>" + total + "</td>");
      total--;
    }
    document.write("</tr>");
  }

  document.write("</table>");
} */
//otra forma con innet.html
/* 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp */
/* let tope=3;

let Edades=[]
let Nombres=[]
let Maximo

for (let i = 0; i < tope; i++) {
  let Nombre=prompt(`ingresa el nombre ${i+1}:`).trim()
  Nombres.push(Nombre)
  let Edad=parseInt(prompt(`ingresa la edad de ${Nombre} :`))
  Edades.push(Edad)


}
Maximo=Math.max(...Edades);
let indice_mayor=Edades.indexOf(Maximo)
console.log(`la perosona con mayor edad es ${Nombres[indice_mayor]} con una edad de ${Maximo}`); */

/* 12- Realiza un script que genere un número aleatorio entre 1 y 99 */
/* let numeroAleatorio = Math.floor(Math.random() * 99) + 1; 
alert( `el numero aleatoria es ${numeroAleatorio}`) */
/* 13- Realiza un script que pida un texto y lo muestre en mayúsculas. */
/*  let texto=prompt("ingresa un texto").toUpperCase()
 alert(texto)
  */
/*  14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”./ */

/* let texto=prompt('ingresa e texto');
let texto_separado=texto.split("").join('-')
alert(texto_separado) */
/* 15- Realiza un script que cuente el número de vocales que tiene un texto. */
/*  let texto = prompt("ingresa una frase").trim();
let array_texto = texto.split("");
let vocales = ["a", "e", "i", "o", "u"];
let vocal=0;

for (let index = 0; index < array_texto.length; index++) {
  for (let j = 0; j < vocales.length; j++) {
    if (array_texto[index].toLowerCase() === vocales[j]) {
      vocal++;
    }
  }
}
alert(`el texto que incluiste tine${vocal}incluidas`)  */
//usando includes
/*  let texto = prompt("ingresa una frase").trim();
let array_texto = texto.split("");
let vocales = ["a", "e", "i", "o", "u"];
let vocal = 0;
for (let i = 0; i < array_texto.length; i++) {
  if (vocales.includes(array_texto[i].toLowerCase())) {
    vocal++;
  }
}
alert(`el texto que incluiste tine${vocal}incluidas`)  */
/* 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat */
/* let texto=prompt('ingrresa un texto').trim();
let texto_invertido=texto.reverse();
alert(`el texto invertido es ${texto_invertido}`) */
/* 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado */
/*  let vocales = ["a", "e", "i", "o", "u"];
let Texto_ing=prompt('ingresa el texto').trim()
let Primera_vocal=Texto_ing.split('')
for (let i = 0; i < Primera_vocal.length; i++) {
  for (let j = 0; j < vocales.length; j++) {
    if (Primera_vocal[i]===vocales[j]) {
      alert(`la primera vocal encontrada es la  ${vocales[j]} y esta en la posicion ${([i+1])}`)
      
    }
    
  }

  
}   */
