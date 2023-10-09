/*
 * Aritmeticos 
 * + Adição / Concatenação
 * - Subtração 
 * / Divisão
 * % Resto da divisão
 * ** Potenciação
*/

/*
 * Precedencia (Ordem de execução) dos operadores 
 * () Parenteses
 * * Multiplicação
 * / % Divisão
 * + - Multiplicação e Subtração
*/

//Incremento

let contador = 1;
contador++; // 1 + 1 = 2
contador++; // 1 + 1 + 1 = 3
contador++; // 1 + 1 + 1 + 1 = 4
contador++; // 1 + 1 + 1 + 1 + 1 = 5
console.log(contador);

let contador2 = 1;
console.log(contador2++); // Primeiro ele incrementa
console.log(contador2); // Depois exibe o valor

//Decremento

let contador3 = 2;
contador3--; // 1 + 1 = 2
console.log(contador3);

//Incremento ou Decremento acima de 1

const passo = 2;
let contador4 = 0;
contador4 = contador4 + passo;
console.log(contador4) // Metodo completo

contador4 += 2; // Metodo atalho - contador4 = 0 + 2;
contador4 += 2;
contador4 += 2;
console.log(contador4); // 2 + 2 + 2 = 6

let contador5 = 2;
contador5 *= 2; // contador4 = 2 * 2 = 4
contador5 *= 2; // 2 * 2 * 2 = 8
contador5 *= 2; // 2 * 2 * 2 * 2 = 16
console.log(contador5);

const n1 = 10;
const n2 = 'Luan';
console.log(n1 * n2); // NaN -> Not a Number

const n3 = 10;
const n4 = '5';
console.log(n3 * n4); // O JS reconhece que dentro da String contem um numero e o converte automaticamente, mas isso não é um uso recomendado e não funciona para adição pois ele será concatenado.

const n5 = 10;
const n6 = Number('5'); // Comando para converter uma String manualmente em um Number
console.log(n1 * n2); 
console.log(typeof n6);

/*
 * Conversão dos valores de variaveis 
 * ParseInt -> Converte para um valor inteiro
 * ParseFloat -> Registra casas decimais
*/

