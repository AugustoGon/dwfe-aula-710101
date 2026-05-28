import { usuario } from "./bd.js";

const email = usuario.email;
const senha = usuario.senha;

function verificarCredenciais() {
    const emailInformado = document.getElementById("email").value;
    const senhaInformada = document.getElementById("senha").value;

    if (emailInformado === email && senhaInformada === senha) {
        alert("Email correto!");
        if (senhaInformada === senha) {
            alert("Senha correta!");
            window.location = "home.html";
        } else {
            alert("Senha incorreta!");
        }
    } else {
        alert("Email incorreto!");
    }

}

document.addEventListener("DOMContentLoaded", () => {
    const botao = document.querySelector("button");
    botao.addEventListener("click", (e) => {
        e.preventDefault();
        verificarCredenciais();
    });
});