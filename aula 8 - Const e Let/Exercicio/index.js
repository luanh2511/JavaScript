/* NOME SOBRENOME tem IDADE anos, pesa PESO kg,
tem ALTURA de altura e seu IMC é de IMC
NOME nasceu em ANONASCIMENTO */

const nome = 'Luan';
const sobrenome = 'Dantas';
const idade = 20;
const peso = 96;
const altura = 1.82;
let imc;
imc = peso / (altura * altura);
let anoNascimento;
anoNascimento = 2001;

console.log(nome,sobrenome,'tem',idade,'anos, pesa',peso,'kg,'); // Modo padrão de junção de textos com variaveis ou constantes
console.log("tem " + altura + " de altura e seu IMC é de " + imc + "."); // Modo alternativo
console.log(`${nome} nasceu em ${anoNascimento}.`); // Modo com Crase
