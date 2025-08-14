/*
Exercício 1.1
Faça um programa que exiba 3 números na tela.
Dica - exibindo (ou "imprimindo") números na tela:
*/
var numero1 = 2000000000000;
var numero2 = 3; 
var numeor3 = 5;
const nome = "Allan Brasil";
const idade= 33;
const profissao = "Entregador";

console.log(numero1, numero2, numeor3, nome, idade, profissao);
console.log('Nome: ', nome);
console.log('Idade: ', idade);
console.clear('Profissão: ', profissao);

if(idade >= 18){
    console.log('Você é maior de idade');}
else{
    console.error('Você é menor de idade');
}

idade >= 18 ? console.log('Você é maior de idade') : console.error('Você é menor de idade');//maneira  de fazer o mesmo if acima com operador ternário

const num1 = parseFloat(prompt('Digite o primeiro número:'));
const num2 = parseFloat(prompt('Digite o segundo número:'));
const num3 = parseFloat(prompt('Digite o terceiro número:'));
console.log(num1 + num2 + num3);
console.log('A soma dos números é: ', num1 + num2 + num3);