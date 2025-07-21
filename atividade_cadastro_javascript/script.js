let nome = prompt("Digite seu nome completo:");
let email = prompt("Digite seu e-mail:");
let senha = prompt("Digite sua senha (MÍNIMO 6 CARACTERES):");

nome = nome.trim();
email = email.trim();
senha = senha.trim();

let nomeMaiusculo = nome.toUpperCase();
let emailValido = email.includes("@") && email.includes(".com");
let nomeComUnderline = nome.replace(/\s+/g, "_"); // <-- Aqui está a correção
let senhaValida = senha.length >= 6;

let mensagemErro = "";

if (!emailValido || !senhaValida) {
    mensagemErro = "Cadastro inválido. Verifique os seguintes campos:\n";
    if (!emailValido) {
        mensagemErro += " - E-mail deve conter '@' e '.com'\n";
    }
    if (!senhaValida) {
        mensagemErro += " - Senha deve ter no mínimo 6 caracteres\n";
    }
    alert(mensagemErro);
} else {
    alert(`Cadastro realizado com sucesso!\n\nNome: ${nomeMaiusculo} \nE-mail: ${email} \nSenha: ${senha}`);
  
    let mensagemFinal =
        "Cadastro realizado com sucesso!\n\n" +
        "Nome: " + nomeMaiusculo + "\n" +
        "Nome (com underline): " + nomeComUnderline + "\n" +
        "E-mail: " + email + "\n" +
        "Senha: " + senha + "\n\n" +
        "Obrigado por se cadastrar!";
    alert(mensagemFinal);
}



