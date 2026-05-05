const email = "admin@gmail.com";
const senha = "123";

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