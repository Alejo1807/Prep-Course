[33mcommit fc8cc9c57ef609c006ffa5fda87dbabbfa0f30b0[m[33m ([m[1;36mHEAD -> [m[1;32mmain[m[33m, [m[1;31morigin/main[m[33m, [m[1;31morigin/HEAD[m[33m)[m
Author: Alejandro153 <alejandro.mr153@gmail.com>
Date:   Tue Sep 20 20:39:47 2022 -0500

    Ejercicio1

[1mdiff --git a/02-JS-I/homework/homework.js b/02-JS-I/homework/homework.js[m
[1mindex 3c92ac9..dc5d268 100644[m
[1m--- a/02-JS-I/homework/homework.js[m
[1m+++ b/02-JS-I/homework/homework.js[m
[36m@@ -1,22 +1,22 @@[m
 // En estas primeras 6 preguntas, reemplaza `null` por la respuesta[m
 [m
 // Crea una variable "string", puede contener lo que quieras:[m
[31m-const nuevaString = null;[m
[32m+[m[32mconst nuevaString = "Hello";[m
 [m
 // Crea una variable numérica, puede ser cualquier número:[m
[31m-const nuevoNum = null;[m
[32m+[m[32mconst nuevoNum = 3;[m
 [m
 // Crea una variable booleana:[m
[31m-const nuevoBool = null;[m
[32m+[m[32mconst nuevoBool = true;[m
 [m
 // Resuelve el siguiente problema matemático:[m
[31m-const nuevaResta = 10 - null === 5;[m
[32m+[m[32mconst nuevaResta = 10 - 5 === 5;[m
 [m
 // Resuelve el siguiente problema matemático:[m
[31m-const nuevaMultiplicacion = 10 * null === 40 ;[m
[32m+[m[32mconst nuevaMultiplicacion = 10 * 4 === 40 ;[m
 [m
 // Resuelve el siguiente problema matemático:[m
[31m-const nuevoModulo = 21 % 5 === null;[m
[32m+[m[32mconst nuevoModulo = 21 % 5 === 1;[m
 [m
 [m
 // En los próximos 22 problemas, deberás completar la función.[m
[36m@@ -28,6 +28,8 @@[m [mconst nuevoModulo = 21 % 5 === null;[m
 function devolverString(str) {[m
   // "Return" la string provista: str[m
   // Tu código:[m
[32m+[m
[32m+[m[32m  return str[m
   [m
 }[m
 [m
[36m@@ -35,12 +37,19 @@[m [mfunction suma(x, y) {[m
   // "x" e "y" son números[m
   // Suma "x" e "y" juntos y devuelve el valor[m
   // Tu código:[m
[31m-  [m
[32m+[m[32m  a=x+y[m
[32m+[m
[32m+[m[32m  return a[m
[32m+[m
 }[m
 [m
 function resta(x, y) {[m
   // Resta "y" de "x" y devuelve el valor[m
   // Tu código:[m
[32m+[m
[32m+[m[32m  a=x-y[m
[32m+[m
[32m+[m[32m  return a[m
   [m
 }[m
 [m
[36m@@ -48,18 +57,30 @@[m [mfunction multiplica(x, y) {[m
   // Multiplica "x" por "y" y devuelve el valor[m
   // Tu código:[m
   [m
[32m+[m[32m  a=x*y[m
[32m+[m
[32m+[m[32m  return a[m
[32m+[m
 }[m
 [m
 function divide(x, y) {[m
   // Divide "x" entre "y" y devuelve el valor[m
   // Tu código:[m
   [m
[32m+[m[32m  a=x/y[m
[32m+[m
[32m+[m[32m  return a[m
[32m+[m
 }[m
 [m
 function sonIguales(x, y) {[m
   // Devuelve "true" si "x" e "y" son iguales[m
   // De lo contrario, devuelve "false"[m
   // Tu código:[m
[32m+[m
[32m+[m[32m  a=x==y[m
[32m+[m
[32m+[m[32m  return a[m
   [m
 }[m
 [m