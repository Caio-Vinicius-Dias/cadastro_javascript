
let nome = prompt("Digite seu nome completo:");
let email = prompt("Digite seu e-mail:");
let senha = prompt("Digite sua senha (mínimo 6 caracteres):");

nome = nome.trim();
email = email.trim();
senha = senha.trim();


let nomeMaiusculo = nome.toUpperCase();


let emailValido = email.includes('@') && email.includes('.com');

let nomeFormatado = nome.replaceAll(' ', '_');

