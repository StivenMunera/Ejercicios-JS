/* Para pedir un dato al usuario se puede usar prompt(mensaje) 

prompt('Introduzca su nombre')

/* Para imprimir un dato se puede usar console.log(dato) 
console.log(dato);
*/


/*1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings*/

function nombredad() {
  let nombre = prompt('Introduzca su nombre');
  let edad = prompt('Cuantos años tienes?');
  let texto = document.getElementById("mtitulo");
  let t3 = document.createElement("h3");
  let t4 = document.createElement("h3");
  t3.innerHTML = nombre;
  t4.innerHTML = edad;
  
  t3.className = "caja2";
  t4.className = "caja2";
  let mensaje = `Hola ${nombre} tienes ${edad} años. El año que viene tendrás ${Number(edad) + 1} años.`;
  console.log(mensaje);
  let mensajeElement = document.createElement("p");
  mensajeElement.innerHTML = mensaje;
  texto.appendChild(mensajeElement);
}


/*boton1.addEventListener ("click",function(){

let edad = prompt('Cuantos años tienes?');
let mensaje = `Hola ${nombre} tienes ${edad} años. El año que viene tendrás ${Number (edad) + 1} años.`;
alert(mensaje);
});*/


/*2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)*/

    function figura() {
      let pregunta = prompt('De qué figura quieres calcular el área? Digita "triangulo", "rectangulo" o "circulo"');
      let texto = document.getElementById("mfigura"); /*Se obtiene el elemento HTML que tiene el ID "mfigura" y se guarda en la variable "texto".*/
      let t5 = document.createElement("h3"); /*Se crea un nuevo elemento HTML "h3",*/ 
      t5.innerHTML = pregunta;/*se le asigna el valor de la variable "pregunta" como su contenido */
      t5.className = "caja2";/*y se le asigna la clase del css "caja2".*/
    
      if (pregunta == 'triangulo') {
        let base = prompt('¿Cuánto mide la base?');
        let altura = prompt('¿Cuánto mide la altura?');
        let triangulo = (Number(base) * Number(altura)) / 2;
        let mensaje = `El área del triangulo es ${triangulo}`;
        let p = document.createElement("p");/*se crea un nuevo elemento HTML "p" con el mensaje correspondiente*/
        p.innerHTML = mensaje;/*Al establecer mensaje como el valor de la propiedad innerHTML del elemento p, se muestra el resultado del cálculo en la página web*/
        p.className = "caja2";
        texto.appendChild(p);/*se agrega como hijo del elemento con ID "mtitulo".*/
      }
      if (pregunta == 'rectangulo') {
        let base = prompt('¿Cuánto mide la base?');
        let altura = prompt('¿Cuánto mide la altura?');
        let rectangulo = Number(base) * Number(altura);
        let mensaje = `El área del rectangulo es ${rectangulo}`;
        let p = document.createElement("p");
        p.innerHTML = mensaje;
        p.className = "caja2";
        texto.appendChild(p);
      }
      if (pregunta == 'circulo') {
        let radio = prompt('¿Cuánto mide el radio?');
        let circulo = 3.1416 * Number(radio);
        let mensaje = `El área del circulo es ${circulo}`;
        let p = document.createElement("p");
        p.innerHTML = mensaje;
        p.className = "caja2";
        texto.appendChild(p);
      }
    }
    



/*3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"
    si el número es 5 el resultado será:
        1 - es impar
        2 - es par
        3 - es impar
        4 - es par
        5 - es impar*/

        function numero() {
          let pre = Number(prompt('Digita un numero'));
          let texto = document.getElementById("miBoton3");;
          let mensaje = "";
          let t6 = document.createElement("h3");
          t6.innerHTML = pre;
          t6.className = "caja2";
          texto.appendChild(t6);
        
          let p = document.createElement("p");
          p.className = "caja2";
          texto.appendChild(p);
        
          for (let i = 1; i <= pre; i++) {
            if (i % 2 == 0) {
              mensaje += i + " - es par,\n";
            } else {
              mensaje += i + " - es impar,\n";
            }
          }
        
          p.innerHTML = mensaje;
        };
        


    /*4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
    Un número primo es aquel que solo es divisible por sí mismo y la unidad*/

    function primo(){
      let numero = Number(prompt('Digita un número entero mayor que 1'));
      let primo = true;
      let texto = document.getElementById("miBoton4");
      let mensaje = " ";
      let t7 = document.createElement("h3");
      t7.innerHTML = numero;
      t7,className = "caja2";
      texto.appendChild(t7);


      let p = document.createElement("p");
      p.className = "caja2";
      texto.appendChild(p);
    
      
    
      if (numero <= 1) {
        mensaje =('El número debe ser mayor que 1');
        alert(mensaje);
        return;
        
      }

      
    
      for (let i = 2; i <= numero / 2; i++) {
        if (numero % i === 0) {
          primo = false;
          mensaje = primo;
          break;
        }
      }
      p.innerHTML = mensaje;

    
      if (primo == true) {
        mensaje = ('es un número primo');
      } else {
        mensaje = (' no es un número primo');
      }
      p.innerHTML = mensaje;
    };


/*Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

!5 = 5*4*3*2*1 = 120*/
function factorial() {
  let fact = Number(prompt('Digita un número entero mayor que 1'));
  let texto = document.getElementById("miBoton5");
  let mensaje = " ";
  let t8 = document.createElement("h3");
  t8.innerHTML = fact;
  t8.className = "caja2";
  texto.appendChild(t8);

  let p = document.createElement("p");
  p.className = "caja2";
  texto.appendChild(p);

  if (fact <= 1) {
    mensaje = "¡¡ATENCIÓN!! Digita un numero mayor a 1";
    p.innerHTML = mensaje;
  } else {
    function calcularFactorial(fact) {
      let result = 1;
      while (fact > 1) {
        result *= fact;
        fact--;
      }
      return result;
    }
    let resultado = calcularFactorial(fact);
    let mensajeResultado = `El factorial de ${fact} es ${resultado}`;
    p.innerHTML = mensajeResultado;
  }
}




/*6 - Escribe un programa que permita ir introduciendo una serie indeterminada de números mientras
 su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos
números se han introducido*/

let boton6 = document.getElementById("miBoton6");
boton6.addEventListener("click", function() {
  let numeros = prompt('Digita varios numeros separados por una coma');
  numeros = numeros.split(/[,]+/);
  let suma = 0;
  let contador = 0;
 
  
  
  while(suma < 50 && contador < numeros.length){
      suma += Number (numeros [contador] );
      contador++;
    }
    if (suma >= 50){
      alert("La suma de los números es: " + suma + "\nSe han introducido " + contador + " números.");
    }
    else{
      alert("No has superado el total de 50")
    }

});


7 /* Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola:
    -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    -el array de pares e impares*/

    let boton7 = document.getElementById("miBoton7");
    boton7.addEventListener("click", function() {
      let numeros = [2, 4, 8, 6, 7];
      let pares = [];
      let impares = [];
    
      for (let i = 0; i < numeros.length; i++) {
        let aleatorio = Math.floor(Math.random() * 10) + 1;
        let resultado = numeros[i] * aleatorio;
        alert(numeros[i] + " x " + aleatorio + " = " + resultado);
    
        if (resultado % 2 === 0) {
          pares.push(resultado);
        } else {
          impares.push(resultado);
        }
      }
    
      alert("Pares: " + pares);
      alert("Impares: " + impares);
    });

    /*8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];*/
    

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let boton8 = document.getElementById("miBoton8");
boton8.addEventListener("click", function() {
  let numeroDni = prompt('Digita un numero DNI');

  if (numeroDni.length > 8 || numeroDni < 0) {
    alert("El número de DNI no es válido");
  } else {
    let letra = letras[numeroDni % 23];
    let resi = numeroDni % 23;
    alert ("El residuo es " + resi);
    alert("La letra que corresponde al número " + numeroDni + " es " + letra);
  }
});


/*9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.*/






/*10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.*/

const colors = ["azul", "amarillo", "rojo", "verde", "rosa"];

let boton10 = document.getElementById("miBoton10");
boton10.addEventListener("click", function() {
let color = prompt('Digita un color');

if (colors.includes(color)){
  alert(color + " !!SI!! Se encuentra almacenado en la variable")
}
else{
  alert(color + " !!NO!! Se encuentra almacenado en la variable")
}
});











